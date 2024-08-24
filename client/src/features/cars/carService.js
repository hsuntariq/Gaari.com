import axios from "axios";

const base_url = "http://localhost:3001/api/cars";

export const addCars = async (frontendData) => {
  const response = await axios.post(
    `${base_url}/add-car/${frontendData.user_id}`,
    frontendData
  );
  return response.data;
};

export const getCars = async () => {
  const response = await axios.get(`${base_url}/get-cars`);
  return response.data;
};
