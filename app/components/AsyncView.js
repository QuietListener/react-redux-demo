import React from 'react'
import {incrementAsync,fetchPostsIfNeeded }from "../actions.js"

 class AsyncView_ extends React.Component
 {

     constructor(props)
     {
         super(props);
     }

     render()
     {

         var ppp = this.props.ppp;
         if(ppp == null) ppp= [];
         return (
             <div>
                 <button onClick={()=>this.props.click("reactjs")}>获取网页</button>

                 <div>{ppp.length}</div>
                 <div>{ppp.map((item,index)=>{return <p key={index}>{item.title}</p>})}</div>
             </div>
         )
     }
}

export default AsyncView_