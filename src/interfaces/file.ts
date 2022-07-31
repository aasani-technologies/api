export interface File {
    name: string;
    size: number;
    mimetype: string;
    data: Buffer;
    extension:string;
}

export interface UploadedFile {
    path: string;
}