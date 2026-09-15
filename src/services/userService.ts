import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// register interface
interface registerParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Register function
export const register = async ({
  email,
  password,
  firstName,
  lastName,
}: registerParams) => {
  const findUser = await userModel.findOne({ email });
  if (findUser) {
    return { data: "User is exist!", statusCode: 400 };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  await newUser.save();
  return { data: generatJWT({ email, firstName, lastName }), statusCode: 201 };
};

// login interface
interface loginParams {
  email: string;
  password: string;
}

// login function
export const login = async ({ email, password }: loginParams) => {
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    return { data: "user or password not correct!", statusCode: 400 };
  }
  const passwordMatch = await bcrypt.compare(password, findUser.password);

  if (passwordMatch) {
    return {
      data: generatJWT({
        email,
        firsName: findUser.firstName,
        lastName: findUser.lastName,
      }),
      statusCode: 200,
    };
  }

  return {
    data: "user or password not correct!",
    statusCode: 400,
  };
};

const generatJWT = (data: any) => {
  jwt.sign(data, "secretkey_veryComplecated", { expiresIn: "1d" });
};
