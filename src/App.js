import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './TopButton';
import Inputs from './Inputs';
import TimeAndLocation from './TimeAndLocation';
import TemperatureAndDetails from './TemperatureAndDetails';
import Forecast from './Forecast';
import getFormattedWeatherData from './Weather';
import {DateTime} from 'luxon'


function App() {
  const fetchWeather = async () =>{
    const data = await getFormattedWeatherData({ q: "New york"});
    console.log(data)
  };

  fetchWeather();
  return (
    <div
    className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"
    style={{
      backgroundImage: "url(https://th.bing.com/th/id/OIP.WVo-k0WQm3_TCcU3aJOG5gHaQD?rs=1&pid=ImgDetMain)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
  
    {/* Your content goes here */}
  
 
      <TopButtons />
      <Inputs/>
      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title="Hourly Forecast"/>
      <Forecast title="Daily Forecast"/>
    </div>
  );
}

export default App;