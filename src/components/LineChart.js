import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto"

function LineChart({lineData}) {
  return (
    <Line data={lineData}/>
  )
}

export default LineChart
