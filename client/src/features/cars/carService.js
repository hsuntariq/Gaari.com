import axios from "axios";

const base_url = "http://localhost:3001/api/cars";

export const addCars = async (frontendData) => {
  const response = await axios.post(
    `${base_url}/addCars/${frontendData.user_id}`,
    frontendData
  );
  return response.data;
};
