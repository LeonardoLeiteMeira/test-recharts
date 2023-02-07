import ".pie_chart.css"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import chartProps from "../../../constants/chart_interface";
import { barColors } from "../../../constants/colors"
import "../base_chart.css"

export default function CustomPieChart(props: chartProps){
    let { data, chartWidth, chartHeight, title, x_axisName,
    y_axisName }= props;
    
    return <div>
        <PieChart width={730} height={250}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={80} label dataKey={""}>
            {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index%barColors.length]}/>
                ))
            }
        </Pie>
        </PieChart>
    </div>
}