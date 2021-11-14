import React from 'react'
import Baner from '../../assets/Home.png'
import Logo from '../../assets/Logo.png'
import './css/Home.css'
import LoginModal from './LoginModal'

function Home() {
    
  function modal(e:any) {
    var modal:any = document.getElementById("modal");
    console.log(e.target.className);
    if (e.target.className === 'btn') {
        modal.style.display = "flex";   
    }else if (e.target.className !== 'modal') {
        modal.style.display = "none";
      }
  }
      

//  function login() {  
//     var modal = document.getElementById("modal");
//     modal.style.display = "flex";
//      console.log('clicked');
//  }
    return (
        <> 
        <div onClick={modal} className="body">
                <header>
                    <nav>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                            <ul>
                                <li>School</li>
                                <li>Program</li>
                                <li>Staff</li>
                                <li>Students</li>
                                <li>Online Store</li>
                            </ul>   
                    </nav>
                </header>
                <main>
                <LoginModal/>
                    <section>
                        <h1>Moshood <br />Abiola <br />Polytechnic</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laborum cum officia error assumenda corporis tenetur commodi reprehenderit adipisci, aut esse modi accusamus, culpa tempora quaerat iste nobis eos neque?</p>
                    <div>
                        <button className='btn' onClick={modal} id='login' >Login</button>
                        <button id='register' >Register</button>
                    </div>
                    </section>
                    <img width='1000px' src={Baner} alt=""  />
                </main>
            </div>
        </>
    )
}

export default Home
