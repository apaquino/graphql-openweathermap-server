import React, { PropTypes } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const propTypes =
  { data: PropTypes.array.isRequired
  , color: PropTypes.string
  , units: PropTypes.string
  , avgData: PropTypes.number
  };

const SparkLineChart = ({data, color, units, avgData}) => {
    return (
      <div>
        <Sparklines height={120} width={180} data={data} >
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>Avgerage: {avgData} {units}</div>
      </div>
    )
}

SparkLineChart.propTypes = propTypes;

export default SparkLineChart;
