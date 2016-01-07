import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const SparkLineChart = (props) => {
    return (
      <Sparklines height={120} width={180} data={props.data} >
        <SparklinesLine color={props.color} />
      </Sparklines>
    )
}

export default SparkLineChart;
