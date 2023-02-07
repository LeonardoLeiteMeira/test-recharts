import { useContext, useEffect, useState } from "react";
import ChartBar from "../../components/charts/bar_chart/Bar_chart";
import Loading from "../../components/loading/Loading";
import { barColors } from "../../constants/colors";
import { getAllFiles } from "../../infra/api_access/process_data_service";
import StopReasonContext, { StopReason, ResultStopReason } from "../../state/stop_reason_context/stop_reason_context";
import "./stop_reason.css"

export default function StopReasonComponent(){
    const [loading, setloading] = useState<boolean>(true);
    const {reasons, setReasons} = useContext(StopReasonContext)

    const chartWidth = 700
    const chartHeight = 300

    function getProcessedFilesCallback (){
        if(reasons.length===0){
            setloading(true)
            getAllFiles().then((data)=>{
                setReasons(data)
                setloading(false)
            })
        }else{
            setloading(false)
        }
    }

    useEffect(()=>{
        getProcessedFilesCallback()
    },[])

    function formatResult(result: ResultStopReason[]): ResultStopReason[]{
        return result.map((item)=>{
            item.relative_duration = Number(item.relative_duration.toFixed(2));
            return item
        })
    }


    return <>
        {loading?Loading:
        <div className="stop_reason_page">
            {reasons?.map(graph => {
                let graphData = formatResult(graph.result)
                return <div key={graph._id} className="chart_container">
                    <div className="chart">
                        <ChartBar
                            data={graphData}
                            chartWidth={chartWidth}
                            chartHeight={chartHeight}
                            title={`File: ${graph.file}`}
                            x_axisName="reason"
                            y_axisName="relative_duration"
                        />
                    </div>
                    <div className="label">
                        <h2>Label</h2>
                        {graphData.map((item,index)=>(
                             <div key={index} className="label_description">
                                <div className="colors_label" style={{backgroundColor: barColors[index%barColors.length], display:"inline"}}>__</div>
                                {" "}{item.reason} - <strong>{item.relative_duration}%</strong>
                            </div>
                        ))}
                    </div>
                    
                </div>
            })}
        </div>}
    </>
}