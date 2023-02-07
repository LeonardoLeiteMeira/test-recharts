import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import chartProps from '../../../constants/chart_interface';
import './line_chart.css'
import '../base_chart.css'


export default function LinearChart(props: chartProps) {
  let { data, chartWidth, chartHeight, title, x_axisName, y_axisName }= props;

  return <>
    <div className='lineChart_container chart'>
      <h2 className='line_chart_title'>{title}</h2>
      <LineChart width={chartWidth} height={chartHeight} data={data}> 
        <Line type="monotone" dataKey={y_axisName??"uv"} stroke="#53B5AA" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey={x_axisName??"name"} minTickGap={15}/>
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  </>
}

