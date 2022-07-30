import {
  RESOURCE_CREATED,
  RESOURCE_DELETED,
  RESOURCE_SUCCESS,
  RESOURCE_UPDATED,
  respond
} from "@staart/messages";
import {
  ClassMiddleware,
  Controller,
  Delete,
  Get,
  Middleware,
  Patch,
  Post,
  Put,
  Request,
  Response
} from "@staart/server";
import { Joi, joiValidate } from "@staart/validate";
import { authHandler, validator } from "../../helpers/middleware";
import {
  localsToTokenOrKey,
  organizationUsernameToId
} from "../../helpers/utils";
import { upload } from "../../rest/file-upload";
import {
  createPdf2TableJobForUser,
  deletePdf2TableJobForUser,
  getOrganizationPdf2TableJobForUser,
  getOrganizationPdf2TableJobsForUser,
  updatePdf2TableJobForUser,
} from "../../rest/organization";
import {File} from '../../interfaces/file';

@Controller(":id/pdf2table")
@ClassMiddleware(authHandler)
export class OrganizationPdf2TableJobsController {
  @Get()
  async getUserPdf2TableJobs(req: Request, res: Response) {
    const id = await organizationUsernameToId(req.params.id);
    joiValidate({ id: Joi.string().required() }, { id });
    const pdf2tablejobParams = { ...req.query };
    joiValidate(
      {
        start: Joi.string(),
        itemsPerPage: Joi.number()
      },
      pdf2tablejobParams
    );
    return getOrganizationPdf2TableJobsForUser(
      localsToTokenOrKey(res),
      id,
      pdf2tablejobParams
    );
  }

  @Put()
  @Middleware(
    validator(
      {
        pdf2tablejob: Joi.string()
      },
      "body"
    )
  )
  async putUserPdf2TableJobs(req: Request, res: Response) {
    const id = await organizationUsernameToId(req.params.id);
    joiValidate({ id: Joi.string().required() }, { id });
    const { files } = req.body as { files: File[] };
    const filesPaths = await upload(files);
    const uploadedFiles = files.map((file, i) => ({name: file.name, url: filesPaths[i].path}));
    for(let uploadedFile of uploadedFiles) {
        await createPdf2TableJobForUser(
            localsToTokenOrKey(res),
            id,
            uploadedFile,
            res.locals
          );
    }
    
    return respond(RESOURCE_CREATED);
  }

  @Get(":pdf2tablejobId")
  async getUserPdf2TableJob(req: Request, res: Response) {
    const id = await organizationUsernameToId(req.params.id);
    const pdf2tablejobId = req.params.pdf2tablejobId;
    joiValidate(
      {
        id: Joi.string().required(),
        pdf2tablejobId: Joi.string().required()
      },
      { id, pdf2tablejobId }
    );
    return getOrganizationPdf2TableJobForUser(localsToTokenOrKey(res), id, pdf2tablejobId);
  }

  @Patch(":pdf2tablejobId")
  @Middleware(
    validator(
      {
        pdf2tablejob: Joi.string()
      },
      "body"
    )
  )
  async patchUserPdf2TableJob(req: Request, res: Response) {
    const id = await organizationUsernameToId(req.params.id);
    const pdf2tablejobId = req.params.pdf2tablejobId;
    joiValidate(
      {
        id: Joi.string().required(),
        pdf2tablejobId: Joi.string().required()
      },
      { id, pdf2tablejobId }
    );
    await updatePdf2TableJobForUser(
      localsToTokenOrKey(res),
      id,
      pdf2tablejobId,
      req.body,
      res.locals
    );
    return respond(RESOURCE_UPDATED);
  }

  @Delete(":pdf2tablejobId")
  async deleteUserPdf2TableJob(req: Request, res: Response) {
    const id = await organizationUsernameToId(req.params.id);
    const pdf2tablejobId = req.params.pdf2tablejobId;
    joiValidate(
      {
        id: Joi.string().required(),
        pdf2tablejobId: Joi.string().required()
      },
      { id, pdf2tablejobId }
    );
    await deletePdf2TableJobForUser(
      localsToTokenOrKey(res),
      id,
      pdf2tablejobId,
      res.locals
    );
    return respond(RESOURCE_DELETED);
  }

}
