import express from 'express';
import cors from 'cors';

import config from './config.js';
import productRoute from './src/routes/productRoute.js';
import userRoute from './src/routes/userRoute.js'

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api', productRoute, userRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
