import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2);
}

const SparkLineChart = ({data, color, units}) => {
    return (
      <div>
        <Sparklines height={120} width={180} data={data} >
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>Avgerage: {average(data)} {units}</div>
      </div>
    )
}

export default SparkLineChart;
