import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
   return (
      <div className="topbar">
         <div className="topbarWrapper">
            <div className="topLeft">
               <span className="logo">lamadin</span>
            </div>
            <div className="topRight">
               <div className="topbarIconContainer">
                  <NotificationsNone />
                  <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
                  <Language />
                  <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
                  <Settings />
               </div>
               <img src="https://media.istockphoto.com/photos/lion-in-high-grass-picture-id494856046?k=6&m=494856046&s=612x612&w=0&h=Eb3uv75Vld5c_n22v8i5XktUPl60czynY4EVx7XMuV4=" alt="" className="topAvatar" />
            </div>
         </div>
      </div>
   )
}

export default Topbar
