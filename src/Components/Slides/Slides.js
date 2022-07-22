import React from "react";
import {Component} from 'react'
import "./index.css"
const itemList = [
    {
      itemid: 1,
      title: 'Music Page',
      description:
        'The music page enables the users to browse through the images of all-time favorite music albums.',
    },
    {
      itemid: 2,
      title: 'Tourism Website',
      description:
        'A tourism website enables the user to browse through the images of popular destinations.',
    },
    {
      itemid: 3,
      title: 'Advanced Technologies',
      description:
        'A website that gives you a basic understanding of Advanced Technologies.',
    },
       {
         itemid: 4,
         title: 'Happy Meals',
         description: 'Discover the best foods in over 1,000 restaurants.',
       },


    
  ]


class Slides extends Component {
    state={item:0,activeid:"next",restart:"restart",prev:"prev",next:"next"}
    nextButtonClick=(e)=>{
        
        if(itemList.length-e.target.value<2){
            this.setState({activeid:"prev"})

        }
        else{
        this.setState((prevState)=>{
            
            return  {activeid:e.target.id,item:prevState.item+1}
        }   
        )
        }

    }

    restartButtonClick=(e)=>{
        this.setState({activeid:e.target.id,item:0})
        
       
    }

    prevButtonClick=(e)=>{
        if(e.target.value<1){
            this.setState({activeid:"next"})

        }
        else{
        this.setState((prevState)=>{
            
            return  {activeid:e.target.id,item:prevState.item-1}
        }   
        )
        }
    }

    render(){
    const {item,activeid,restart,prev,next}=this.state
    return (

   <div>
    <div id="navigation" className="container">
        <button value={item} id="restart" onClick={this.restartButtonClick} className={activeid===restart?"green":"white"}>Restart</button>
        <button value={item} id="prev" onClick={this.prevButtonClick} className={activeid===prev?"green":"white"}>Prev</button>
        <button value={item} id="next" onClick={this.nextButtonClick} className={activeid===next?"green":"white"}>Next</button>
        
    </div>
    <div className="card-container"> 
        <h1>{itemList[item].title}</h1>
        <p>{itemList[item].description}</p></div>
    </div>

    );
    
    }
}
    
    export default Slides;