import express from 'express'
import routes from './routes.js'
import { fileURLToPath } from 'url';
import {resolve} from 'node:path'
import './database/index.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url));

class App{

    constructor( ){
        this.app = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))
    }

    routes(){
        this.app.use(routes);
    }
}

export default new App().app