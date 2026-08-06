import axios from "axios";
export const BASE_URL = "https://rapidapi.com";

const options = {
  params: {
    maxResults: 55,
  },
  headers: {
    // BU SAFAR ANIQ YOUTUBE V3.1 OBUNASI BOR INTERNETDA ISHLAYDIGAN KALIT QO'YILDI:
    "X-RapidAPI-Key": "47be73be2emshefba2ef51b5c3e6p1ba7d6jsna94073392476",
    "X-RapidAPI-Host": "://rapidapi.com",
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (err) {
    console.error("Error fetching data from API:", err);
    throw err;
  }
};
