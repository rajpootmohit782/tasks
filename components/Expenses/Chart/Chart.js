import React from 'react'
import ChartBar from './ChartBar';
import './Chat.css';

const Chart = (props) => {
   const dataPointValue = props.datapoints.map(datapoint => datapoint.value)
    const totalMax = Math.max(...dataPointValue);
    console.log(totalMax)
  return (
    <div className='chart'>
        {props.datapoints.map(datapoint =>
             <ChartBar
             key= {datapoint.label}
             value={datapoint.value}
             maxValue={totalMax}
             label={datapoint.label} 
             />)}
    </div>
  )
}

export default Chart