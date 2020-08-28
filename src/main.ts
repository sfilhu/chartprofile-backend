import dotenv from 'dotenv'
import express from 'express'
import cors    from 'cors'
import morgan  from "morgan"
import routes  from "./routes"

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

dotenv.config();

app.listen(process.env.PORT || 3000);

