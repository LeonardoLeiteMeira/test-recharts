import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../../features/dashboard/Dashboard";
import Profile from "../../features/profile/Profile";
import StopReasonComponent from "../../features/stop_reason/stop_reason";

export default function Router(){
    return <Routes>
        <Route path="/" element={< Dashboard/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stop_reason" element={<StopReasonComponent/>} />
    </Routes>
}