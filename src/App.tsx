import { useProSidebar } from "react-pro-sidebar";
import Dashboard from "./features/dashboard/Dashboard";
import "./index.css"
import Router from "./infra/routes/router";
import SideBarMenu from "./patterns/side_bar_menu/Side_bar_menu";

export default function App(){

    return <>
        <div className="app">
            <div>
                <SideBarMenu/>
            </div>

            <div>
                <Router/>
            </div>
        </div>
    </>
}
// const { collapseSidebar } = useProSidebar()
{/* <button onClick={() => collapseSidebar()}>Collapse</button> */}