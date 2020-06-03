import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const App = express();

App.use(cors());
App.use(express.json());
App.use(routes);
App.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

App.listen(3333);
