import React, { createContext, useState } from "react";

type IndustrialDataType = {
  _id: string;
  title: string;
  timestamp: number;
  pCut_Motor_Torque: number;
  pCut_CTRL_Position_controller_Lag_error: number;
  pCut_CTRL_Position_controller_Actual_position: number;
  pCut_CTRL_Position_controller_Actual_speed: number;
  pSvolFilm_CTRL_Position_controller_Actual_position: number;
  pSvolFilm_CTRL_Position_controller_Actual_speed: number;
  pSvolFilm_CTRL_Position_controller_Lag_error: number;
  pSpintor_VAX_speed: number;
}

type PropsIndustrialDataContext = {
    industrialData:IndustrialDataType[];
    setIndustrialData: React.Dispatch<React.SetStateAction<IndustrialDataType[]>>
}

const DEFAULT_VALUE:PropsIndustrialDataContext = {
    industrialData: [],
    setIndustrialData: () => {}
}

const IndustrialDataContext = createContext<PropsIndustrialDataContext>(DEFAULT_VALUE)

const IndustrialDataProvider = ({children}) => {
    const [industrialData, setIndustrialData] = useState(DEFAULT_VALUE.industrialData)

    return <IndustrialDataContext.Provider
        value={{
            industrialData,
            setIndustrialData
        }}
    >
        {children}
    </IndustrialDataContext.Provider>
}

export {IndustrialDataProvider}
export default IndustrialDataContext

