import React from 'react'
import SideNavbar from './component/SideNavbar'
import UtilityBar from './component/UtilityBar'
import Programs from './Features/Programs'
import './Layout.css'

function Layout() {
    return (
        <div style={{display:"flex", backgroundColor:'var(--primary)'}} >
            <SideNavbar/>
                <div className="layout">
                    <header>
                        <div className="title">Semester</div>
                        <div style={{justifyContent:'flex-end'}} >
                            <button>Add +</button>
                            <select name="" id="filter">
                                <option value="">Filter</option>
                            </select>
                        </div>
                    </header>
                    <div className="main">
                        <Programs/>
                    </div>
                </div>
            <UtilityBar/>
        </div>
    )
}

export default Layout
