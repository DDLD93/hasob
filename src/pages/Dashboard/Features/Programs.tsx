import React from 'react'
import './Programs.css'

export default function Programs() {
    return (
        <div className="content">
           <div className="header">
             <span>S/N</span>
             <span>Program code</span>
             <span>Program name</span>
             <span>Department</span>
             <span>Degree Name</span>
             <span>Actions</span>
            </div>
            <ProgramList/>
            <hr />
            <ProgramList/>
            <hr />
            <ProgramList/>
            <hr />
            <ProgramList/>
            <hr />
            <ProgramList/>
            <hr />
         </div>
    )
}

function ProgramList() {
    return(
        <div className='program-list'>
            <span>1</span>
             <span>EE01</span>
             <span>Electrical Engineering</span>
             <span>Electrical</span>
             <span>Undergraduate B.eng</span>
             <span><a href="#">View</a><a href="#">Edit</a></span>
        </div>
    )
}
