import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 55,
  },
  headers: {
    // BU YERGA YANGI ISHLAYDIGAN KALIT QO'YILDI:
    "X-RapidAPI-Key": "4c8f253761mshb5134760a92b020p1bcfccjsn0256ea4f90bf",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (err) {
    console.error("Error fetching data from API:", err);
    throw err; // Xatoni yuqoriga uzatamiz, shunda Home.jsx uni ushlay oladi
  }
};
