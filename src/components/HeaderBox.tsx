import React from 'react'

import "../styles/HeaderBox.css"

const Dali  = require("../images/Dali.png")

const HeaderBox = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <h3>La Casa de Papel</h3>
          <p>Season 05 shooting started, will be out soon on 2021!<br />Season: 01-04 available only on <b>NETFLIX</b></p>
          <div className="btn-cont">
            <button className="btn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBox