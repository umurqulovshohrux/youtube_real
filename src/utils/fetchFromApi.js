import axios from "axios";

// GOOGLE-NING RASMIY YOUTUBE MANZILI (XATOSIZ FORMAT!):
export const BASE_URL = "https://googleapis.com";

const options = {
  params: {
    maxResults: 50,
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const apiKey = "AIzaSyCp1RjKh4VYfTbpo_bY0mIY5-V_w1KZSWY";
    const separator = url.includes('?') ? '&' : '?';
    
    // To'liq va to'g'ri havolani quramiz
    let finalUrl = `${BASE_URL}/${url}${separator}key=${apiKey}`;
    
    if (url.includes('search')) {
      finalUrl += "&type=video&part=snippet";
    } else {
      finalUrl += "&part=snippet";
    }

    const response = await axios.get(finalUrl, options);
    return response.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
