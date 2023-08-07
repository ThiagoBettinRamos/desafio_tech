import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updateUserService = async (newUserData: TUserUpdate, userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({ id: userId });

  const newUser: User = userRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await userRepository.save(newUser);

  const updatedUser: TUserResponse = userSchemaResponse.parse(newUser);

  return updatedUser;
};

export { updateUserService };