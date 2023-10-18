import express from 'express'
import "express-async-errors";
import { config } from "dotenv";
import { errorMiddleware } from './shared/middlewares/AppError';
import { routes } from './shared/routes/routes';
config();


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(errorMiddleware);
app.use(routes)


app.listen(process.env.PORT, () => {
        console.log(`servidor rodando na porta ${process.env.PORT}`);
        
})