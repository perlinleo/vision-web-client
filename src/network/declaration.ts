import { apiUrl } from "./urls";
import {
  AskRoleForm,
  AskPassForm,
  AskTimeForm,
  DeclarationToReact,
} from "@/models/declaration";
import { headers } from "./signup-querry";

export const roleRequest = (formData: AskRoleForm): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/askrole`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const passRequest = (formData: AskPassForm): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/askpass`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const timeRequest = (formData: AskTimeForm): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/asktime`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const declarationsRequest = (): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};

export const passagesRequest = (): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/passages`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};

export const acceptDeclarationsRequest = (
  formData: DeclarationToReact
): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations/accept`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const denyDeclarationsRequest = (
  formData: DeclarationToReact
): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations/deny`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const roleDeclarationRequest = (innerID: number): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations/role/${innerID}`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};

export const passDeclarationRequest = (innerID: number): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations/pass/${innerID}`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};

export const timeDeclarationRequest = (innerID: number): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations/time/${innerID}`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};
