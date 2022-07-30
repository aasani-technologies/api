import { S3 } from "aws-sdk";
import { s3Config } from "../config";
import { UploadedFile, File } from "../interfaces/file";



const client: S3 = new S3({
    region: s3Config.defaultRegion,
});;

const bucketName = s3Config.bucketName;



const generateFileKey = (file: File, timestamp: number): string => {
    return `${file.name}-${timestamp}.${file.extension}`;
}

const uploadFile = async (file: File): Promise<string> => {
    const timestamp = Date.now();
    const fileKey = generateFileKey(file, timestamp);
    await client
        .putObject({
            Bucket: bucketName,
            Key: fileKey,
            ContentType: file.type,
            Body: file.content,
            ACL: s3Config.defaultFilesACL,
        })
        .promise();

    return `${bucketName}/${fileKey}`;
}

export const uploadInS3 = async (
    files: File | File[]
): Promise<UploadedFile | UploadedFile[] | undefined> => {
    try {
        if (Array.isArray(files)) {
            const paths = await Promise.all(
                files.map(async (file) => uploadFile(file))
            );
            return paths.map((path) => ({ path }));
        }

        const path = await uploadFile(files);
        return {
            path,
        };
    } catch {
        return undefined;
    }
}
