import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'AVERAGE PURCHASE VALUE',
      backgroundColor: '#37B04C',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ],
}

export default function Chart() {
    return (
      <div className='chart-bar' style={{border: '1px solid #CDCDCD'}}>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Purchase Value',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <button>lastmonth</button>
      </div>
    );
}