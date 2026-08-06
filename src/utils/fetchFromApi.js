import axios from "axios";

// To'g'ri API manzili (Buni o'zgartirma jigar!):
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "73e9701077mshbc7b83f06fcfa05p1e2cfajsn91c06880da67",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com", // Bu ham to'g'rilandi!
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
