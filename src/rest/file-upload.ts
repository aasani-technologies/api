import { uploadInS3 } from "../helpers/aws-s3-uploader";
import { UploadedFile, File } from "../interfaces/file";

export class FileUploadError {

}

export const upload = async (files: File[]): Promise<UploadedFile[]> => {
    const uploadedFiles = await uploadInS3(files);

    if (!uploadedFiles) {
        throw new FileUploadError();
    }

    return uploadedFiles as UploadedFile[];
};