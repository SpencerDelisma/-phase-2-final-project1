
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './TopButton';
import Inputs from './Inputs';
import TimeAndLocation from './TimeAndLocation';
import TemperatureAndDetails from './TemperatureAndDetails';


function App() {
  return (
    <div
    className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"
    style={{
      backgroundImage: "url(https://i.pinimg.com/originals/f4/6e/17/f46e178d7e111b63db9c60719896a8ba.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
  
    {/* Your content goes here */}
  
 
      <TopButtons />
      <Inputs/>
      <TimeAndLocation/>
      <TemperatureAndDetails/>
    </div>
  );
}

export default App;