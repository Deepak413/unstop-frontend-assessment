import React from 'react';
import "./Navbar.css";
import { Navbtn } from './Navbtn';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import CardTravelIcon from '@mui/icons-material/CardTravel';

import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const Navbar = () => {
    // let item = DashboardOutlinedIcon;
  return (
    <div className="navbar">
      <div className="nav-mobile-container">
        
      </div>
      <div className="nav-btn-container">
        <Navbtn icon={<DashboardOutlinedIcon/>} text={"Dashboard"} />
        <Navbtn icon={<CardTravelIcon/>} text={"Assessmet"}/>
        <Navbtn icon={<LibraryBooksOutlinedIcon/>} text={"My Library"}/>
      </div>
      <hr className="nav-divider" />
      <div className="nav-admin-container">
        <div className="admin-btn">
            <button>Admin</button>
        </div>
        <Navbtn icon={<InventoryOutlinedIcon/>} text={"Round Status"} />
      </div>
    </div>
  );
};

export default Navbar;