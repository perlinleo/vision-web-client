import { SignUpUser, LoginUser, User } from "@/models/user";
import { apiUrl } from "./urls";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const signUpRequest = (data: SignUpUser) => {
  const body = JSON.stringify(data);

  return fetch(`${apiUrl}/api/v1/user/create`, {
    headers: headers,
    method: "POST",
    body: body,
  });
};

export const logoutRequest = () => {
  return fetch(`${apiUrl}/api/v1/auth`, {
    headers: headers,
    method: "DELETE",
  });
};

export const userRequest = (): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/user`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};

export const usersRequest = (nameQuery: string): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/users?name=${nameQuery}`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};

export const loginRequest = (data: LoginUser) => {
  const body = JSON.stringify(data);

  return fetch(`${apiUrl}/api/v1/auth`, {
    headers: headers,
    method: "POST",
    body: body,
  });
};

export const loginWithCookieRequest = () => {
  const userData: User = {
    firstName: "Леонид",
    lastName: "Перлин",
    userRoleID: 0,
  };

  return userData;
};
