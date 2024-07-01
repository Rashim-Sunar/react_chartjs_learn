import React from 'react'
import {Bar} from 'react-chartjs-2' //Importing Bar component from react-chart
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartData}) {
  return <Bar data={chartData}/>
}

export default BarChart
