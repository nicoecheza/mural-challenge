/*
** Middleware for validating network responses
*/
export default function checkStatus (response) {
  
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  let error = new Error(response.status);
  error.response = response;
  throw error;
}
