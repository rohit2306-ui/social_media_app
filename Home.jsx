import React from 'react'
import Post from '../Post'

function Home() {
  return (
    <div className="home">
        <div className="icons">
            <div className="icon">TURN</div>
            <a href="#"><i class="fa-regular fa-message"></i></a>
            <a href=""><i class="fa-solid fa-bell"></i></a>
            <a href=""><i class="fa-solid fa-plus"></i></a>
            <div className="user">
            <a href=""><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
        <div className="main">
            <div className="search">
                <input type="text"  placeholder='search'/>
            </div>
            <div className="maincont">
                <div className="random">
                    <Post/>
                    <Post/>
                    <Post/>
                    
                
                </div>
                <div className="turns">
                    <h3>Turns</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home