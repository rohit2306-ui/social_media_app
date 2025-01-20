import React from 'react'
import prem from '/src/prem mandir.png'

function Post() {
  return (  
    <div className="post">
        <img src={prem} alt="" />
        <i class="fa-solid fa-heart"></i>
        <p>prem mandir image when i visit prem mandir</p>
    </div>
  )
}

export default Post