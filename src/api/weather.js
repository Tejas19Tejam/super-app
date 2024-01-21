

const API_KEY = "7d1f37ae44364dd8be364801242101";
const BASE_URL =  "https://api.weatherapi.com/v1";

export async function getWeather(){
    const result = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=mumbai`);
    const data = await result.json();
    return data;
}

