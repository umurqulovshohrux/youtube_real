import axios from "axios";

// Hech qanday kalit va obuna so'ramaydigan mutlaqo bepul ochiq API:
export const BASE_URL = "https://lemnoslife.com";

export const fetchFromAPI = async (url) => {
  try {
    // So'rovlarni to'g'ri formatga o'giramiz
    let targetUrl = `${BASE_URL}/search?q=New`;
    if(url.includes('search')) {
      const query = url.split('q=')[1] || 'New';
      targetUrl = `${BASE_URL}/search?q=${query}`;
    }
    
    const response = await axios.get(targetUrl);
    // Ma'lumotlar strukturasini sening kodingga moslashtiramiz
    return { items: response.data.items || [] };
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
