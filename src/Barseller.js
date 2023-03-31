import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3890,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3990,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 4200,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 4500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 5000,
    pv: 4300,
    amt: 2100,
  },
  
];

export default function Barseller() {


    return (
        <div className="barchart">
      <ResponsiveContainer width="30%" aspect={3}>
        <BarChart width={150} height={80} data={data}>
            <XAxis dataKey="name" fill=''/>
            <YAxis/>
            <Tooltip/>
          <Bar dataKey="uv" fill='#f3b5b5'/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  
}
