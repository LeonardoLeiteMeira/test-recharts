import React, { createContext, useState } from "react"

type ResultStopReason = {
    reason: string,
    duration_total: string,
    relative_duration: number,
}

type StopReason = {
  _id: string,
  file: string,
  result: ResultStopReason[],
}

type PropsStopReasonContext = {
    reasons:StopReason[]
    setReasons:React.Dispatch<React.SetStateAction<StopReason[]>>
}

const DEFAULT_VALUE:PropsStopReasonContext = {
    reasons:[],
    setReasons:()=>{}
}

const StopReasonContext = createContext<PropsStopReasonContext>(DEFAULT_VALUE)

const StopReasonContextProvider = ({children}) => {
    const [reasons, setReasons] = useState(DEFAULT_VALUE.reasons);

    return <StopReasonContext.Provider
        value={{
            reasons,
            setReasons
        }}
    >
        {children}
    </StopReasonContext.Provider>
}

export { StopReasonContextProvider }
export default StopReasonContext
export type { StopReason, ResultStopReason }

