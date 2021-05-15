import React from 'react';
import './App.scss';
import greenBoquet from './images/green-bouquet.jpg';
import roseVase from './images/rose-vase.jpg';

import bpBlack from './images/merch/budparty-black.jpg'
import bpPink from './images/merch/budparty-pink.jpg'
import bpPose from './images/merch/budparty-pose.jpg'
import bpRed from './images/merch/budparty-red.jpg'
import bpShirt from './images/merch/budparty-shirt.jpg'


function App() {

  let displaySections = [
    { title:'Shirt Designs',
      images:[bpPose, bpShirt,bpBlack, bpPink, bpRed]
    }
  ]

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="container">
        <h1 className='title'>Wine and Roses</h1>
        <div className='cta-images'>
          <img src={roseVase} />
          <img src={greenBoquet} />
        </div>
        <div className="info">
          <h2 className='contact-title'>BOOK A PRIVATE CLASS</h2>
          <div className='contacts'>

            <div className='item'>
              <label>Phone</label>
              <p>(773) 209-4805</p>
            </div>
            <div className='item'>
              <label>Email</label>
              <p>cmfairygardens@yahoo.com</p>
            </div>

          </div>
          <a className='msg' href='https://m.me/flowersandclasses?fbclid=IwAR3IgNUGCt8RWVpBAjfbKPDpaM_xgi4r1uMzCJa0_EtgQ5gnPNLlJtieh-E'>Send a Message</a>
          
        </div>

        {displaySections.map((item) => {
          return (<div className='section'>
                    <h2>{item.title}</h2>
                    <div className='sub-section'>
                      {item.images.map((img, index) => {
                        return <img className='sub-section-img' src={img}/>
                    
                      })
                    }
                    </div>
                  </div>)
            
          })
        }

      </div>
    </div>
  );
}

export default App;