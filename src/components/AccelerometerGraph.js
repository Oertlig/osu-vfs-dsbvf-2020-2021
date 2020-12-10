import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styled from '@emotion/styled/macro';

import dataset from '../live-data/accelerometer.json';
const data = dataset.data;

const BackGround = styled.div`
  width: 700px;
  height: 350px;

	background-color: rgba(255, 252, 252, 0.8);
  padding: 20px;
  color: black;

`;

function AccelerometerGraph() {
  return (
    <BackGround>
      <LineChart width={700} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Legend />
        <Line type="monotone" dataKey="xAcceleration" stroke="#FF0000" />
        <Line type="monotone" dataKey="yAcceleration" stroke="#00FF00" />
        <Line type="monotone" dataKey="zAcceleration" stroke="#0000FF" />
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </BackGround>
  );
}

export default AccelerometerGraph;
