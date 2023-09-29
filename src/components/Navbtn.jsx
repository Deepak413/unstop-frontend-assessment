import React from 'react';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

export const Navbtn = ( {icon, text} ) => {
    // const IconComponent = props.item;
    
  return (
    <div className='nav-btn'>
        <div className="nav-icon">
            {icon}
        </div>
        <div style={{fontWeight:"bold"}}>
            {text}
        </div>
    </div>
  )
}
