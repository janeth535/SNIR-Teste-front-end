import React from 'react'
import Header from '../../components/Header/index'
import Image from '../../assets/images/Reading list-cuate 1.png'

import './style.css'

const Main = () => (
  <div className="GeralGeral">
    <div className="ContainerGeral">
        <Header/>
        <div className="CorpoMain">
            <div className="TextMain">
                <h1><span>Create Digital</span> Design Agency is looking for new talent</h1>
                <p>Creative Digital Design Agency is looking for new talent</p>
                <button className="button">Get started</button>
            </div>
            <div className="ImageMain">
                <img src={Image} alt="Image"/>
            </div>
        </div>
    </div>
    </div>
)

export default Main;