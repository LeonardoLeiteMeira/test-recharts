
import { useContext, useEffect, useState } from "react";
import LinearChart from "../../components/charts/line_chart/Line_chart";
import DashboardHeader from "../../patterns/dashboard_header/dashboard_header";
import Loading from "../../components/loading/Loading";
import { getRegisterByFileName } from "../../infra/api_access/register_services";
import "./dashboard.css";
import IndustrialDataContext from "../../state/industrial_context/industrial_context";


export default function Dashboard() {
  const [loading, setloading] = useState<boolean>(true);

  const {industrialData, setIndustrialData} = useContext(IndustrialDataContext);

  function searchFile_callback(fileName:string){
    if(industrialData.length===0){
      setloading(true)
      getRegisterByFileName(fileName).then((response)=>{
        setIndustrialData(response)
        setloading(false);
      })
    }else{
      setloading(false)
    }
  }

  // useEffect(()=>{
  //       searchFile_callback('01-26T195109_081_mode3')
  //   },[])


  const chartWidth = 400
  const chartHeight = 180

  const charts = <>
        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"Motor Torque"}
          x_axisName={"timestamp"}
          y_axisName={"pCut_Motor_Torque"}
        />
      
        {/* <ChartBar
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"Title 2"}
        /> */}
      
        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"pCut CTRL Position Controller Lag Error"}
          x_axisName={"timestamp"}
          y_axisName={"pCut_CTRL_Position_controller_Lag_error"}
        />

        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"pCut CTRL Position Controller Actual Position"}
          x_axisName={"timestamp"}
          y_axisName={"pCut_CTRL_Position_controller_Actual_position"}
        />

        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"pCut CTRL Position Controller Actual Speed"}
          x_axisName={"timestamp"}
          y_axisName={"pCut_CTRL_Position_controller_Actual_speed"}
        />

        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"pSvolFilm CTRL Position Controller Actual Position"}
          x_axisName={"timestamp"}
          y_axisName={"pSvolFilm_CTRL_Position_controller_Actual_position"}
        />

        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"pSvolFilm CTRL Position Controller Actual Speed"}
          x_axisName={"timestamp"}
          y_axisName={"pSvolFilm_CTRL_Position_controller_Actual_speed"}
        />

        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"pSvolFilm CTRL Position Controller Lag Error"}
          x_axisName={"timestamp"}
          y_axisName={"pSvolFilm_CTRL_Position_controller_Lag_error"}
        />
        <LinearChart
          data={industrialData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          title={"pSpintor VAX Speed"}
          x_axisName={"timestamp"}
          y_axisName={"pSpintor_VAX_speed"}
        />
  </>

  return (
    <div className="dashboard">
      <DashboardHeader changeFileCallback={searchFile_callback}/>
      <div className="dashboard_content">
        {loading?<Loading/>:<>{charts}</>}
      </div>
    </div>
  )
}