import {
  Get,
  Controller,
  ClassMiddleware,
  Request,
  Response,
  ClassWrapper,
  jsonAsyncResponse
} from "@staart/server";
import { stripeWebhookAuthHandler } from "../../helpers/middleware";
import { StripeLocals } from "../../interfaces/general";

@Controller("v1/webhooks")
@ClassMiddleware(stripeWebhookAuthHandler)
@ClassWrapper(jsonAsyncResponse)
export class AdminController {
  @Get("stripe")
  async stripeWebhook(req: Request, res: Response) {
    const locals = res.locals as StripeLocals;
    console.log("Received Stripe event", locals.stripeEvent);
    return res.json({ hello: "world" });
  }
}
