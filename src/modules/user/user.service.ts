import { Prisma, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const insertUser = async (data: User): Promise<User> => {
	const result = prisma.user.create({
		data,
	});

	return result;
};

export const userService = {
	insertUser,
};
