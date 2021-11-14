import React from 'react'
import Logo from '../../../assets/Logo.png'
import './UtilityBar.css'

function UtilityBar() {
    return (
        <div className="utility-bar">
            <div className="icons">
                <img width="15" height="15" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADOklEQVR4nO2awUtUQRzHP65rkYFtobWSRWkiEUGHCDrYH2BB0KE6dKhrdSuK6FgGdQw8FEVBiUSHLhaRJESX1C4WFBkEJUatqQVdSt3tMPOacV1td97szGLzgcHxvXm/33d+783P55sfBAKBQMA5K4BO4BUwDFyUx/4LlgFDQC6vDcpzS57TqEm/AAa030951OWMR4jJjgAJ2UbksYeuxSRcO0St9TEgK9uYPFbrWozLAFQD7UDTImOagD1y7JKhFbgOZJib9Pq0MX15574BN4A2p0otswG4BUwzP+O/BTq0sXvlsfxxM0A3sMmZakvsByZQE8kCvcAhIL3IdWngoBw7q13/AzhSRr3WqAIuIyYcib8PbDOw1Ya4+/oTcZMKzw9XUGIngMMWbHYAo5rdHiBpwa51zqFEfgK2WLTdiHhljuzftmjbCrsRCSsHfASay+AjhXhzjIJwrAw+jKgF3iFE/QJ2ltFXI/BZ+vqJ3afMmLOou3LGgb92VJLtduBvUZYjXmNzwHvcZege6XMW2O7IZ0GO4mdNtqByzlWHfufxQIrIADWOffdL3x8c+/1LEpiSIu568H8C9fRtNTUS57/BHYg/TQCPY9gxZUDrt5oaiROAjVr/dQw7poxp/fWmRuIEoEHrj8ewY8pXrd+w4Kh/ECcA9Vo/E8OOKVmtbzyPOAHQs/5MDDte8fFNsKIIAfAtwDchAL4F+CYEwLcA34QA+BbgmxAA3wJ8EwLgW4BvQgB8C/BNCIBvAb4x3WauQWxORFyzoCUOLQhN0y6cpShc6Oi7DaI+0xdNVakXAF3AcdmfBL4b2LBJClgj+13AyXI7jLann1AZlRpJhJYcQltJmCTBVfLnKJXxNXgGoQWgrtSLTe5gP7APsTNcD3wxsGGTNEIPwFMXDpsRa9930stvk8DmUidjkgRBlLR2ArsorsQ9idpLnJKtEKtlA1FoVcwS+43YKD3P3P3CiqIaVTg5ROHckwBeyjHjVHg9oAmXUI/rHeYmrDpEjUF0/oJzdQ5YidhG19dsr2x6ThnGQ9m8K9YBz1k4kT0D1roUZJoE45AADiAKp6PSljfAPUTNUXaB6wKBQCBgmz802gqwzQ/8lQAAAABJRU5ErkJggg=="/>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="15" height="15"
                viewBox="0 0 172 172"
                style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M82.41667,0c-1.98063,0 -3.58333,1.6027 -3.58333,3.58333v71.66667c0,1.98063 1.6027,3.58333 3.58333,3.58333h7.16667c1.98063,0 3.58333,-1.6027 3.58333,-3.58333v-71.66667c0,-1.98063 -1.6027,-3.58333 -3.58333,-3.58333zM61.15462,27.14095c-0.47803,0.00554 -0.95461,0.11706 -1.41374,0.33594c-24.02643,11.45368 -38.14857,37.17527 -33.90169,64.62597c4.14208,26.77333 26.51933,47.97164 53.45605,50.86654c36.58304,3.9316 67.62142,-24.75146 67.62142,-60.55274c0,-23.66781 -13.47904,-44.84485 -34.64355,-54.93978c-1.84018,-0.87771 -4.06352,0.07006 -4.8291,1.95964l-2.7015,6.64876c-0.71832,1.77293 0.13094,3.71925 1.84766,4.56315c15.1627,7.4536 25.04034,22.39035 25.92317,39.29069c1.33555,25.56666 -20.64629,48.91486 -46.2474,49.06087c-25.80875,0.14719 -46.84928,-20.80809 -46.84928,-46.58333c0,-17.90898 10.10526,-33.9538 26.00716,-41.76823c1.71411,-0.84234 2.55085,-2.79303 1.83366,-4.56315l-2.7015,-6.66276c-0.57299,-1.41422 -1.96729,-2.2982 -3.40137,-2.28158zM57.33333,157.66667c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,157.66667c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM114.66667,157.66667c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667z"></path></g></g></svg>
            </div>
            <div style={{width:'185px', height:'130px'}} className="contact-card">
                <div style={{display:'flex',padding:'5px',fontSize:'13px',lineHeight:'18px',marginBottom:'15px',color:'var(--white)'}} >
                    <img style={{marginRight:'3px'}} src={Logo} alt="" />
                    <p>Moshood Abiola <br />Polytechnic <br />Abeokuta(MAPOLY)</p>
                </div>
                <div className="contacts">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="15" height="15"
                    viewBox="0 0 172 172"
                    style={{ fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="#0b0b93"></path><g fill="#ffffff"><path d="M141.42969,34.63112h-110.85937c-7.41787,0.00833 -13.42917,6.01963 -13.4375,13.4375v75.86241c0.00833,7.41787 6.01963,13.42917 13.4375,13.4375h110.85938c7.41787,-0.00833 13.42917,-6.01963 13.4375,-13.4375v-75.86241c-0.00833,-7.41787 -6.01963,-13.42917 -13.4375,-13.4375zM30.57031,41.34987h110.85938c1.78595,-0.00105 3.49838,0.71113 4.75688,1.97834l-57.16615,37.31123c-2.26446,1.48657 -5.20104,1.4643 -7.4427,-0.05644l-55.58859,-37.42478c1.24183,-1.16296 2.87982,-1.80954 4.58118,-1.80835zM148.14844,123.93137c-0.00426,3.7089 -3.00985,6.71449 -6.71875,6.71875h-110.85937c-3.7089,-0.00426 -6.71449,-3.00985 -6.71875,-6.71875v-74.11184l53.9697,36.335c4.48115,3.03686 10.34913,3.0802 14.87464,0.10985l55.45253,-36.19357z"></path></g></g></svg>
                    <span>rector@mapoly.edu.ng</span>
                </div>
                <div className="contacts">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="15" height="15"
                    viewBox="0 0 172 172"
                    style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#0b0b93"></path><g fill="#ffffff"><path d="M40.72906,10.27969c-2.64719,-0.215 -5.59,0.55094 -8.30438,2.45906c-2.39187,1.66625 -7.55187,5.76469 -12.37594,10.40063c-2.40531,2.31125 -4.70312,4.71656 -6.47687,7.08156c-1.78719,2.365 -3.34594,4.52844 -3.25188,7.67281c0.09406,2.82188 0.37625,11.16656 6.38281,23.95906c6.00656,12.77906 17.65687,30.315 40.37969,53.05125c22.73625,22.73625 40.27219,34.38656 53.05125,40.39312c12.77906,6.00656 21.13719,6.28875 23.95906,6.38281c3.13094,0.09406 5.29437,-1.46469 7.65937,-3.25187c2.365,-1.78719 4.77031,-4.07156 7.08156,-6.47688c4.6225,-4.82406 8.72094,-9.98406 10.38719,-12.37594c3.80281,-5.41531 3.17125,-11.81156 -1.06156,-14.78125c-2.66063,-1.86781 -27.13031,-18.15406 -30.81219,-20.41156c-3.73562,-2.28437 -8.03562,-1.24969 -11.87875,0.77938c-3.02344,1.59906 -11.20687,6.28875 -13.545,7.6325c-1.76031,-1.11531 -8.43875,-5.56313 -22.80344,-19.92781c-14.37812,-14.36469 -18.8125,-21.04313 -19.92781,-22.80344c1.34375,-2.33813 6.02,-10.48125 7.6325,-13.55844c2.01563,-3.82969 3.14438,-8.17 0.73906,-11.9325c-1.00781,-1.59906 -5.59,-8.57312 -10.2125,-15.57406c-4.63594,-7.00094 -9.03,-13.63906 -10.17219,-15.22469v-0.01344c-1.49156,-2.05594 -3.81625,-3.26531 -6.45,-3.48031zM40.0975,17.3075c0.94063,0.12094 1.505,0.49719 1.505,0.49719c0.55094,0.76594 5.375,7.99531 9.9975,14.98281c4.6225,7.00094 9.33906,14.17656 10.15875,15.48c0.13438,0.20156 0.3225,2.48594 -1.02125,5.02563v0.01344c-1.51844,2.88906 -8.6,15.265 -8.6,15.265l-0.98094,1.73344l1.00781,1.72c0,0 5.28094,8.90906 22.07781,25.70594c16.81031,16.79688 25.71938,22.09125 25.71938,22.09125l1.72,1.00781l1.73344,-0.98094c0,0 12.34906,-7.06813 15.265,-8.6c2.53969,-1.33031 4.82406,-1.15563 5.09281,-0.99438c2.37844,1.46469 28.81,19.0275 30.43594,20.16969c0.05375,0.04031 1.49156,2.21719 -0.60469,5.20031h-0.01344c-1.26313,1.81406 -5.40188,7.06813 -9.71531,11.55625c-2.16344,2.24406 -4.38063,4.34031 -6.26188,5.75125c-1.88125,1.41094 -3.56094,1.85438 -3.29219,1.86781c-2.92937,-0.09406 -9.39281,-0.16125 -21.25812,-5.73781c-11.86531,-5.56312 -28.79656,-16.70281 -51.11625,-39.03594c-22.30625,-22.30625 -33.44594,-39.2375 -39.0225,-51.11625c-5.56313,-11.86531 -5.63031,-18.32875 -5.72438,-21.24469c0.01344,0.26875 0.45688,-1.42438 1.86781,-3.30563c1.41094,-1.88125 3.49375,-4.11187 5.73781,-6.27531c4.50156,-4.31344 9.74219,-8.45219 11.55625,-9.71531v0.01344c1.49156,-1.04812 2.795,-1.1825 3.73562,-1.075z"></path></g></g></svg>
                    <span>07063331234</span>
                </div>

                <div className="contacts">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="15" height="15"
                    viewBox="0 0 172 172"
                    style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#0b0b93"></path><g fill="#ffffff"><path d="M126.13333,11.46667c-9.19053,0 -17.82027,3.58226 -24.32188,10.07813l-11.46667,11.46667c-6.49586,6.5016 -10.07812,15.13134 -10.07812,24.32188c0,7.24848 2.25552,14.12678 6.38281,19.90989l-9.40625,9.40625c-5.78378,-4.12531 -12.6658,-6.38281 -19.90989,-6.38281c-9.19053,0 -17.82028,3.58226 -24.32187,10.07812l-11.46667,11.46667c-6.49587,6.50161 -10.07813,15.13134 -10.07813,24.32188c0,9.19053 3.58226,17.82027 10.07813,24.32188c6.49587,6.5016 15.13134,10.07812 24.32188,10.07812c9.19053,0 17.82028,-3.58226 24.32188,-10.07812l11.46667,-11.46667c6.49586,-6.5016 10.07812,-15.13134 10.07812,-24.32188c0,-3.15907 -0.45123,-6.24056 -1.26536,-9.20469l-10.31328,10.31328c-0.26373,5.49827 -2.42144,10.91493 -6.60677,15.10599l-11.46667,11.46667c-8.944,8.944 -23.4909,8.944 -32.42917,0c-8.93827,-8.944 -8.944,-23.4909 0,-32.42917l11.46667,-11.46667c4.472,-4.472 10.34911,-6.69636 16.22578,-6.69636c4.02345,0 8.00768,1.11943 11.57864,3.2138l-15.64349,15.64349c-1.49777,1.43802 -2.10111,3.5734 -1.57733,5.58259c0.52378,2.0092 2.09283,3.57825 4.10203,4.10203c2.0092,0.52378 4.14457,-0.07956 5.58259,-1.57733l57.33333,-57.33333c1.69569,-1.64828 2.20555,-4.16851 1.28389,-6.3463c-0.92166,-2.17779 -3.08575,-3.56638 -5.44951,-3.49667c-1.48951,0.04438 -2.90324,0.6669 -3.94167,1.73568l-15.64349,15.64349c-5.16686,-8.78987 -4.05495,-20.27176 3.48255,-27.80442l11.46667,-11.46667c4.472,-4.472 10.33792,-6.69635 16.21458,-6.69635c5.87667,0 11.74258,2.23009 16.21458,6.69635c8.944,8.944 8.944,23.4909 0,32.42917l-11.46667,11.46667c-4.18533,4.18533 -9.60773,6.34304 -15.10599,6.60677l-10.31328,10.31328c2.96413,0.81413 6.04562,1.26536 9.20469,1.26536c9.19053,0 17.82027,-3.58226 24.32188,-10.07812l11.46667,-11.46667c6.49586,-6.50161 10.07812,-15.13134 10.07812,-24.32188c0,-9.19053 -3.58226,-17.82027 -10.07812,-24.32187c-6.5016,-6.49587 -15.13134,-10.07813 -24.32188,-10.07813z"></path></g></g></svg>
                    <span>http://mapoly.edu.ng</span>
                </div>               
            </div >
            
            <div className="calender">
            
            </div>

            <div style={{width:'170px', height:'150px'}} className="quick-links">
                <h5>Quick Links</h5>
                <ul>
                    <li>Staff Room</li>
                    <li>Learning Resources</li>
                    <li>Time tables</li>
                </ul>
            </div>
        </div>
    ) 
}

export default UtilityBar