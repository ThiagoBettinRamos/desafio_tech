import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";



const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOneBy({id: Number(req.params.id)});

  if (!findUser) throw new AppError("User not found", 404);

  return next();
};

export default ensureUserExistsMiddleware;