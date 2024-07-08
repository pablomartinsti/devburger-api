import multer from 'multer';
import { v4 } from 'uuid';
import { fileURLToPath } from 'url';
import { extname, resolve } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
    Storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request, file, callback) => callback(null, v4() + extname(file.originalname))
    })
};
