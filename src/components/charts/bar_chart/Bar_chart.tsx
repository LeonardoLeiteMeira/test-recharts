import { XAxis, YAxis, BarChart, Bar, Tooltip, Cell, Label } from 'recharts';
import chartProps from '../../../constants/chart_interface';
import './bar_chart.css'
import '../base_chart.css'
import { barColors } from '../../../constants/colors';

export default function ChartBar(props: chartProps){
  let { data, chartWidth, chartHeight, title, x_axisName,
    y_axisName }= props;

  return  <>
    <div className='barChart_container chart'>
        <h2 className='barChart_title'>{title}</h2>
        <BarChart width={chartWidth} height={chartHeight} data={data}> 
          <Tooltip/>
          <Bar dataKey={y_axisName??"uv"} barSize={30} fill="#8884d8" label={{ position: "top",color:"black" }} >
            {
              data.map((_: any, index: number) => {
                return (
                  <>
                    <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]}/>
                    <Label position={"top"} color={"black"}/>
                  </>
                )})
              }
          </Bar>

          <YAxis />
          <XAxis dataKey={x_axisName??"name"} fontSize={12} fontSizeAdjust={100}/>
        </BarChart>
    </div>
  </>
  
}
