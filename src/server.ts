import express, { request } from "express";
import { router } from "./routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerFile));
app.use(router);


app.listen(3333,()=> console.log('server is working...'));