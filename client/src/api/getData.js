import axios from "axios";

export const getData = async () => {
  try {
    const data = await axios.get("http://localhost:5000/api/data/");
    return data.data;
  } catch (error) {
    throw error;
  }
};
