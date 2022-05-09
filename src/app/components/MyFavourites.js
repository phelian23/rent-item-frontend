import React, {Component} from 'react';
import myfavourites from './myfavourites.css'

class MyFavourites extends Component {
   render() {
     return (
       <div>
         <section className="card-container">
          <img src="https://media.istockphoto.com/photos/classic-vintage-scooter-motor-bike-or-moped-isolated-on-whte-picture-id1348520235?b=1&k=20&m=1348520235&s=170667a&w=0&h=VMQrftBuUWaSwO70pti7DjLnDc4AG8Y9QWIGqzvguZA=" className="card-img"/>
          <div className="card-description">
            <h2>Sccoter Description</h2>
            <p>$ 3600</p>
          </div>
         </section>
       </div>
     )
   }
}

export default MyFavourites