import axios from "axios";

// RapidAPI kalitlarisiz, umrbod va tekin ishlaydigan ochiq YouTube ma'lumotlar bazasi:
export const BASE_URL = "https://githubusercontent.com";

export const fetchFromAPI = async (url) => {
  try {
    let endpoint = "search.json"; // Default holatda qidiruv ma'lumotlari

    if (url.includes("channels")) {
      endpoint = "channels.json";
    } else if (url.includes("videoDetail") || url.includes("videos")) {
      endpoint = "videos.json";
    }

    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    
    // Agar bu qidiruv bo'lsa va kategoriya bo'yicha saralash kerak bo'lsa, moslashtiramiz
    if (url.includes("q=")) {
      const query = url.split("q=")[1]?.toLowerCase() || "new";
      // Agar koddagi ma'lumotlar yetarli bo'lsa, filtrlash mumkin, bo'lmasa tayyor massiv qaytadi
      return response.data;
    }

    return response.data;
  } catch (err) {
    console.error("Error fetching data from Mock API:", err);
    throw err;
  }
};
