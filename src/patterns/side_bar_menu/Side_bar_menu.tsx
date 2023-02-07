import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import "./side_bar_menu.css" 

export default function SideBarMenu(){

  const navigateTo = useNavigate();
    

  return <div className='sidebarContainer'>
      <div className='sideBarMenu'>
      <Sidebar width='10vw'>
        <Menu>
          <MenuItem onClick={()=>navigateTo("/")} > Charts </MenuItem>
          <MenuItem onClick={()=>navigateTo("/profile")}> Profile </MenuItem>
          <MenuItem onClick={()=>navigateTo("/stop_reason")}> Stop Reason </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  </div>
}