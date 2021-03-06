import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors    from 'cors'
import morgan  from "morgan"
import routes  from "./routes"
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Running Server..');
});

