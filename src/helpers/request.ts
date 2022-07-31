import {
    Request
} from "@staart/server";
import { File } from '../interfaces/file';
import { extname } from 'path';

export const getFiles = (req: Request): File[] => {
    if (!req.files) return [];
    const files = req.files?.files;
    if (Array.isArray(files)) return files.map(file => ({ ...file, extension: extname(file.name).slice(1) })) as File[];
    else return [{ ...files, extension: extname(files.name).slice(1) }] as File[];
};