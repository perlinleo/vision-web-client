export interface SignUpUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
export const createLoginUser = (email: string, password: string): LoginUser => {
  return {
    email: email,
    password: password,
  };
};

export const createSignUpUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): SignUpUser => {
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
};
