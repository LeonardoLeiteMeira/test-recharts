import { useContext } from "react"
import StopReasonContext from "../../state/stop_reason_context/stop_reason_context"

export default function Profile(){
    const {reasons} = useContext(StopReasonContext)
    return <div className="profile_container">
        <h1 className="profile_title">Profile Page</h1>
        <ul className="profile_list">
            <li>Profile name</li>
            <li>Profile email</li>
            <li>Profile address</li>
            <li>Profile company</li>
            <li>Profile role</li>
            <li>exist button</li>
            <li>{reasons.length}</li>
        </ul>
    </div>
}