import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import {UserData} from "./Data"
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map(data => data.userGain),
      backgroundColor: [
        "rgba(75, 192, 191, 1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],

      borderColor: "black",
      borderWidth: 2,
    }]
  });
  return (
    <div className="App">
       <div style={{width: '700px'}}>
         <BarChart chartData={userData}/>
       </div>
       <br/><br/>
       <div style={{width: '700px'}}>
         <LineChart lineData={userData}/>
       </div>


       <br/><br/>
       <div style={{width: '700px'}}>
         <PieChart chartData={userData}/>
       </div>
    </div>
  );
}

export default App;
 