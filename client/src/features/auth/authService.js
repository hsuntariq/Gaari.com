import axios from "axios";
const base_url = "http://localhost:3001/api/users";
export const loginUser = async (frontendData) => {
  const response = await axios.post(`${base_url}/login-user`, frontendData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const signUpUser = async (frontendData) => {
  const response = await axios.post(`${base_url}/register-user`, frontendData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
