const API_KEY = "85b9d44ec04b4182b9f0ce4649a19279"
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const getWeatherData = (infoType,searchParams)=>{
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({...searchParams, appid:API_KEY});

return fetch(url)
.then(res => res.json())
.then((data)=>data)


}
export default getWeatherData