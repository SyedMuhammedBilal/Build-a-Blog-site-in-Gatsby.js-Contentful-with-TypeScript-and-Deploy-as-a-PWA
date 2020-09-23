import React from 'react'
import "../styles/HeaderBox.css"

const CatBox = () => {
  return (
    <div className="cards-list">
      <div className="card 1">
        <div className="card_image"> <img style={{'backgroundImage': 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'}} /> </div>
        <div className="card_title title-white">
          <p>CATEGORIES</p>
          <p style={{fontSize: '23px'}}>More Blogs</p>
        </div>
      </div>
    </div>
  )
}

export default CatBox;