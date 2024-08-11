import axios from "axios";

export const loginUser = async (frontendData) => {
  const response = await axios.post(
    "http://localhost:3001/api/users/login-user",
    frontendData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
