import "./dashboard_header.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useEffect, useState } from "react";

interface DashboardHeaderProps{
    changeFileCallback:(fileName:string)=>void
}

export default function DashboardHeader(props:DashboardHeaderProps){

    const {changeFileCallback} = props

    const file_names = [
        '01-26T195109_081_mode3', '01-12T115721_053_mode5', '02-17T121536_131_mode5'
    ];
    const [selectdOption, setSelectdOption] = useState(file_names[0])

    function onSelect(selection:any){
        let newIndex = file_names.findIndex(element => element === selection.value)
        setSelectdOption(file_names[newIndex])
        changeFileCallback(file_names[newIndex])
    }
    
    useEffect(()=>{
        changeFileCallback(file_names[0])
    },[])
    
    
    return <div className="dashboard_container">
        <h1 className="dashboard_header_title">Dashboard Title</h1>
        <div className="dropdown_container">
            <p className="dropdown_container_title">Select a file to show data</p>
            <Dropdown options={file_names} onChange={onSelect} value={selectdOption} placeholder="Select an option" />
        </div>
    </div>
}