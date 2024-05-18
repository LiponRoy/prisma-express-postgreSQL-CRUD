// src/index.js
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { UserRoutes } from './modules/user/user.route';

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/user', UserRoutes);

export default app;
