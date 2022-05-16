export interface User {
  firstName: string;
  lastName: string;
  userRoleID: number;
}

export type UserAccountResponse = {
  name: string;
  RoleID: number;
  created: string;
};

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
