import axios from "axios";

// Bu butun dunyo bo'yicha ishlaydigan eng barqaror YouTube API manzili
export const BASE_URL = "https://rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    // MANA SHU YANGI VA SINALGAN TEKIN KALITNI QO'YDIK:
    "X-RapidAPI-Key": "73e9701077mshbc7b83f06fcfa05p1e2cfajsn91c06880da67",
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
