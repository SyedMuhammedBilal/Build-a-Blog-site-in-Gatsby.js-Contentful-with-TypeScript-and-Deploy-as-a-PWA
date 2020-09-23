import React from 'react'

import "../styles/HeaderBox.css"

const HeaderBox = () => {
  return (
    <div className="cards-list">
      <div className="card 1">
        <div className="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="card_title title-white">
          <p>Blog App</p>
          <p style={{fontSize: '23px'}}>New Blogs</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderBox