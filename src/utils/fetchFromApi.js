import axios from "axios";

export const BASE_URL = "https://googleapis.com";

export const fetchFromAPI = async (url) => {
  try {
    const apiKey = "AIzaSyCp1RjKh4VYfTbpo_bY0mIY5-V_w1KZSWY";
    const separator = url.includes('?') ? '&' : '?';
    
    let finalUrl = `${BASE_URL}/${url}${separator}key=${apiKey}`;
    
    if (url.includes('search')) {
      finalUrl += "&type=video&part=snippet";
    } else {
      finalUrl += "&part=snippet";
    }

    const response = await axios.get(finalUrl);
    return response.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
