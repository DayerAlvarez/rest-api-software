import express from 'express'
import softwaresRoutes from './routers/softwares.routes.js';

const app = express();

app.use(express.json()) //Server recibeel JSON 
app.use('/api/',softwaresRoutes);

export default app 