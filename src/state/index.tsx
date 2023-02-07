import { UserContextProvider } from "./app_context/app_context"
import { IndustrialDataProvider } from "./industrial_context/industrial_context"
import { StopReasonContextProvider } from "./stop_reason_context/stop_reason_context"

const GlobalContext = ({children})=>{
    return <>
        <UserContextProvider>
            <StopReasonContextProvider>
                <IndustrialDataProvider>
                    {children}
                </IndustrialDataProvider>
            </StopReasonContextProvider>
        </UserContextProvider>
    </>
}

export default GlobalContext