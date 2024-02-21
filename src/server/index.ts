import express, { Express, Request, Response } from 'express'
import { config } from './config';
import { template } from './render/template';

const app: Express = express();

app.get('*', (req: Request, res: Response) => {
    res.send(template(`Hola desde la ruta: ${req.url}`))
});

app.listen(config.PORT, () => {
    console.log(`listening in http://localhost:${config.PORT}`);

});