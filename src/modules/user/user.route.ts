import express from 'express';
const route = express.Router();

route.get('/me', (req, res) => {
	res.send('good quality');
});

export const UserRoutes = route;
