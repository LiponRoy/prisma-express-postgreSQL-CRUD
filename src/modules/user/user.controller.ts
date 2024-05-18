import { Request, Response } from 'express';
import { userService } from './user.service';

const insertUserData = async (req: Request, res: Response) => {
	try {
		const result = await userService.insertUser(req.body);
		res.send({
			success: true,
			message: 'User Created Successfully',
			data: result,
		});
	} catch (error) {
		console.log(error);
	}
};

export const userController = {
	insertUserData,
};
