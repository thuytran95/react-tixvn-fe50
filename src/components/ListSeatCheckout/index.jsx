import React from 'react'
import './style.scss'
export default function ListSeatCheckOut(props) {
  const activeClass = props.props


    return (
       <div className="list__seat">
           {/* <div className="list__seat__item list__seat__item__vip list__seat__item__selected list__seat__item__active"> */}
           <div  className={activeClass || "list__seat__item"}>
               <button className="list__seat__item__btn"><span className="list__seat__item__btn__tittle">111</span></button>
           </div>
          
          
          
       </div>
       
    )
}
