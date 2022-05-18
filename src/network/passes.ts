import { headers } from "./signup-querry";
import { apiUrl } from "./urls";

export const passesRequest = (): Promise<Response> => {
  return fetch(`${apiUrl}/api/v1/passes`, {
    headers: headers,
    method: "GET",
  }).then((result) => {
    return result.json();
  });
};
