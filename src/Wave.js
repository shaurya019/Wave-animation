import React, { useEffect } from 'react'
import './Wave.css'

const Wave = () => {
    
    useEffect(() =>{
    
        window.addEventListener('scroll' ,function(){
          var wave1 = document.getElementById('wave1');
          var wave2 = document.getElementById('wave2');
          var wave3 = document.getElementById('wave3');
          var wave4 = document.getElementById('wave4');
          var value = window.scrollY;
            wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
            wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
            wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
            wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
        })
    },[])
  return (
    <>
    <section>
        <div className="wave" id="wave1" style={{"--i":1}}></div>
        <div className="wave" id="wave2" style={{"--i":2}}></div>
        <div className="wave" id="wave3" style={{"--i":3}}></div>
        <div className="wave" id="wave4" style={{"--i":4}}></div>
        </section>
        <div class="sec">
        <h2>HELLO !!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vero inventore obcaecati, dolore alias adipisci? At perferendis quasi quaerat nam sint tempora earum officia facere quod iure! Ipsum laborum possimus, eum laboriosam harum iusto?<br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sit quas vitae, impedit facere magnam inventore maxime unde ipsa pariatur in fugiat ratione?
        </p>
    </div>
    </>
       
  )
}

export default Wave;