import React from 'react';
import FotoAntonio from '../../assets/images/Antonio.png'
import './style.css';
import AmburgueLogo from '../../assets/images/Vector (5).png'
import IconMas from '../../assets/images/Vector (6).png'
import {Link} from 'react-router-dom'
import Pesquisa from '../../assets/images/Vector (8).png'
import Caixa from '../../assets/images/Vector.png'
import CorretoLogo from '../../assets/images/Vector (9).png'
const MyTasks = () => (
  <div className="ContainerTask">
    <div className="Header">  
  <div className="Header_I">
      <img src={AmburgueLogo}/>
      <img src={IconMas} />
      <p>Add Task</p>
  </div>
  <div className="Header_II">
    <img src={FotoAntonio}/>
    <div>
        <h3>António Gabriel</h3>
        <p>My account - </p>
    </div>
  </div>
  </div>
  <div className="CorpoMyTasks">
      <div className="TextCorpo">
        <h1>My Tasks</h1>
        <p>Register your tasks and have a better monitoring of your activities</p>
        <div className="inputt">
            <img src={Pesquisa} alt="Pesquisa"/>
            <input type="text" placeholder="Find of tasks"/>
        </div>
    
        
        <h1>Tasks - 2</h1>
        <div className="type">
            <img src={Caixa} alt="Pesquisa"/>
            <input type="text" placeholder="Find of tasks"/>
        </div>
        <div className="inputt">
            <img src={CorretoLogo} alt="Pesquisa"/>
            <input type="text" placeholder="Find of tasks"/>
        </div>
      </div>
  </div>

</div>    
)


export default MyTasks;


/* */