import React, { PropTypes } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
  return (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2);
};

const propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string,
  units: PropTypes.string,
};

const SparkLineChart = ({data, color, units, avgData}) => {
    return (
      <div>
        <Sparklines height={120} width={180} data={data} avgData={avgData} >
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>Avgerage: {`${avgData} ${units}`}</div>
      </div>
    )
}

SparkLineChart.propTypes = propTypes;

export default SparkLineChart;
