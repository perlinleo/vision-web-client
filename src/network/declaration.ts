import { apiUrl } from "./urls";
import {
  AskRoleForm,
  AskPassForm,
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

export const declarationsRequest = (): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations`, {
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
  }).then((result) => {
    return result.json();
  });
};

export const denyDeclarationsRequest = (
  formData: DeclarationToReact
): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/declarations/deny`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(formData),
  }).then((result) => {
    return result.json();
  });
};
