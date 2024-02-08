import express, { Request, Response} from "express";
import { CatController } from "./catControllers";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
const app = express();
const catControllers = new CatController;

app.get("/test", (req: Request, res: Response) => {
    res.send("Cat API test");
});

app.get("/catfact", async (req: Request, res: Response) => {
    await catControllers.getCatFact(req, res);
});

app.get("/horsefact", async (req: Request, res: Response) => {
    await catControllers.getHorseFact(req, res);
});

app.get("/tenfact", async (req: Request, res: Response) => {
    await catControllers.getTenFacts(req, res);
});
const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;



app.listen(PORT, () => {
    console.log(`le serveur est en cours d'execution sur le port ${PORT}`);
});