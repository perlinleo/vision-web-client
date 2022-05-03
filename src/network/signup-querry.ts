import { SignUpUser, LoginUser, User } from "@/models/user";
import { apiUrl } from "./urls";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const signUpRequest = (data: SignUpUser) => {
  const body = JSON.stringify(data);

  fetch(`${apiUrl}/api/v1/user/create`, {
    headers: headers,
    method: "POST",
    body: body,
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

export const loginRequest = (data: LoginUser) => {
  const body = JSON.stringify(data);

  fetch(`${apiUrl}/api/v1/auth`, {
    headers: headers,
    method: "POST",
    body: body,
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

export const loginWithCookieRequest = () => {
  const userData: User = {
    firstName: "Леонид",
    lastName: "Перлин",
    userRoleID: 0,
  };

  return userData;
};
