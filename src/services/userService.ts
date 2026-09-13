import userModel from "../models/userModel.js";

// register interface
interface registerParams {
  email: String;
  password: String;
  firstName: String;
  lastName: String;
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
    return { error: { message: "User is exist" } };
  }
  const newUser = new userModel({ email, password, firstName, lastName });

  await newUser.save();
  return newUser;
};

// login interface
interface loginParams {
  email: String;
  password: String;
}

// login function
export const login = async ({ email, password }: loginParams) => {
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    return { error: { message: "user or password not correct!" } };
  }
  const passwordMatch = password === findUser.password;
  if (passwordMatch) {
    return findUser;
  }

  return {
    erorr: {
      message: "user or password not correct!",
    },
  };
};
