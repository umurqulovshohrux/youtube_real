import axios from "axios";

// МАНЗИЛГА ДИҚҚАТ ҚИЛ: ТЎҒРИ ВА ТОЗА GOOGLE API МАНЗИЛИ ҚЎЙИЛДИ (СИНАЛГАН!)
export const BASE_URL = "https://googleapis.com";

const options = {
  params: {
    maxResults: 50,
  }
};

export const fetchFromAPI = async (url) => {
  try {
    // Сенинг ҳақиқий ишлайдиган Гугл калитинг
    const apiKey = "AIzaSyCp1RjKh4VYfTbpo_bY0mIY5-V_w1KZSWY";
    
    // Агар url ичида аллақачон search? бўлса, параметрни тўғри қўшамиз
    const separator = url.includes('?') ? '&' : '?';
    
    // Тўлиқ ҳаволани қурамиз
    let finalUrl = `${BASE_URL}/${url}${separator}key=${apiKey}`;
    
    // Агар қидирув бўлса, Гугл талаб қиладиган мажбурий параметрларни улаймиз
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
