import axios from "axios";

// Google-ning rasmiy va bloklanmaydigan YouTube API manzili:
export const BASE_URL = "https://googleapis.com";

export const fetchFromAPI = async (url) => {
  try {
    // Sening shaxsiy, rasmiy oltin kaliting:
    const apiKey = "AIzaSyCp1RjKh4VYfTbpo_bY0mIY5-V_w1KZSWY";
    
    let separator = url.includes('?') ? '&' : '?';
    let finalUrl = `${BASE_URL}/${url}${separator}key=${apiKey}`;
    
    // Agar loyihangda search? deb so'rov ketayotgan bo'lsa, Google API formatiga moslaymiz:
    if (url.includes('search')) {
      finalUrl += "&type=video&part=snippet";
    } else {
      finalUrl += "&part=snippet";
    }

    const response = await axios.get(finalUrl);
    return response.data;
  } catch (err) {
    console.error("Google API Error:", err);
    throw err;
  }
};
