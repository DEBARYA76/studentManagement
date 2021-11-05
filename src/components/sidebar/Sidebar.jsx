import React from 'react'
import "./Sidebar.css"
import {LineStyle,Timeline,TrendingUp

,AttachMoney,Assessment,Equalizer,AddCircle,ArrowBack,Email,LocalPhone,Language,People

} from "@material-ui/icons"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem">
                           <LineStyle className="sidebarIcon"/>
                           Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                           <Timeline className="sidebarIcon"/>
                           Analytics
                        </li>
                        <li className="sidebarListItem">
                           <TrendingUp className="sidebarIcon"/>
                           Growth
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notice Board</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                           <People className="sidebarIcon"/>
                           Students
                        </li>
                        </Link>
                         <Link to="/" className="link">
                        <li className="sidebarListItem">
                           <AttachMoney className="sidebarIcon"/>
                           Payments
                        </li>
                        </Link>
                         <Link to="/" className="link">
                        <li className="sidebarListItem">
                           <Assessment
 className="sidebarIcon"/>
                           Assessment
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Results</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                           <Equalizer
 className="sidebarIcon"/>
                           This Year
                        </li>
                        <li className="sidebarListItem">
                           <AddCircle className="sidebarIcon"/>
                           Prev. Year
                        </li>
                        <li className="sidebarListItem">
                           <ArrowBack className="sidebarIcon"/>
                           Ex-Reular
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Contacts</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                           <Email className="sidebarIcon"/>
                           ssvm@gmail.com
                        </li>
                        <li className="sidebarListItem">
                           <LocalPhone className="sidebarIcon"/>
                           +92 8249082213
                        </li>
                        <li className="sidebarListItem">
                           <Language
 className="sidebarIcon"/>
                           www.ssvm.gov.in
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

