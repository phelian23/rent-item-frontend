import React from 'react'
import './myfavourites.css' 
import {Container,CardImg,Card} from 'react-bootstrap'



const MyFavourites = ()=> {
  
  const favourites = [
        {
          id: 1,
          title: "Classic Blue",
          price: "$ 3,600",
          image: "https://media.istockphoto.com/photos/classic-vintage-scooter-motor-bike-or-moped-isolated-on-whte-picture-id1348520235?b=1&k=20&m=1348520235&s=170667a&w=0&h=VMQrftBuUWaSwO70pti7DjLnDc4AG8Y9QWIGqzvguZA="
        },
        {
          id: 2,
          title: "Light Blue",
          price: "$ 2,500",
          image: "https://media.istockphoto.com/photos/blue-scooter-with-white-background-picture-id1041315464?k=20&m=1041315464&s=612x612&w=0&h=ro2tosXYLDrBsKqKTioXdUKDah8DLdu2ggxK-ZZRRe8="
        },
        {
          id: 3,
          title: "White Red",
          price: "$ 4,000",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJP4z5K8uIcVekb6uM3uxtBDSjQcUc-sOfk8UFwons8gEJKnqz-L2ADfUnBhR2GXuoLZc&usqp=CAU"
        },
        {
          id: 4,
          title: "Black Orange",
          price: "$ 5,400",
          image: "https://image.shutterstock.com/z/stock-photo--d-rendering-of-a-black-orange-scooter-on-white-background-725302228.jpg"
        },
        {
          id: 5,
          title: "Red Black",
          price: "$ 3,500",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlEO9jMhf6h6zkVRWoPYldP8Kih5QG5adk2n8pxNJgm0EHuSN7w6gqxvGd6Iuy54BRPI&usqp=CAU"
        },
        {
          id: 6,
          title: "Maroon Black",
          price: "$ 4,200",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUskD0dRRrP144DXEKF1Tr8dB4oEQjQkfdQ&usqp=CAU"
        }
      ]
  return(
    <div>
<div class="row row-cols-1 row-cols-md-3 g-4">
{favourites.map(favourite => ( 
  <div class="col">
    <div class="card" key={favourite.id}>
      <img src={favourite.image} class="card-img-top" alt="..." />
      <div class="card-body d-flex justify-content-between">
        <h5 class="card-title">{favourite.title}</h5>
        <p class="card-text">{favourite.price}</p>
      </div>
    </div>
  </div>
 ))}
 </div>
    </div>
  )
}
export default MyFavourites







































// const MyFavourites  = ()=>{

//   const favourites = [
//     {
//       id: 1,
//       title: "Classic Blue",
//       price: "$ 3,600",
//       image: "https://media.istockphoto.com/photos/classic-vintage-scooter-motor-bike-or-moped-isolated-on-whte-picture-id1348520235?b=1&k=20&m=1348520235&s=170667a&w=0&h=VMQrftBuUWaSwO70pti7DjLnDc4AG8Y9QWIGqzvguZA="
//     },
//     {
//       id: 2,
//       title: "Light Blue",
//       price: "$ 2,500",
//       image: "https://media.istockphoto.com/photos/blue-scooter-with-white-background-picture-id1041315464?k=20&m=1041315464&s=612x612&w=0&h=ro2tosXYLDrBsKqKTioXdUKDah8DLdu2ggxK-ZZRRe8="
//     },
//     {
//       id: 3,
//       title: "White Red",
//       price: "$ 4,000",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJP4z5K8uIcVekb6uM3uxtBDSjQcUc-sOfk8UFwons8gEJKnqz-L2ADfUnBhR2GXuoLZc&usqp=CAU"
//     },
//     {
//       id: 4,
//       title: "Black Orange",
//       price: "$ 5,400",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQQt992w6pmjU_BnL_Kt9SWHbdBlW4QBP6n5lacebvL0pkpspd2Hn13l-8_YcWx_zz-0&usqp=CAU"
//     },
//     {
//       id: 5,
//       title: "Red Black",
//       price: "$ 3,500",
//       image: "https://techcrunch.com/wp-content/uploads/2021/12/bounce-infinity-e1.jpg"
//     },
//     {
//       id: 6,
//       title: "Maroon Black",
//       price: "$ 4,200",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUskD0dRRrP144DXEKF1Tr8dB4oEQjQkfdQ&usqp=CAU"
//     }
//   ]
//   return(

//   )
// }
// export default MyFavourites








// class MyFavourites extends Component {
//    render() {
//      return (
// <div>

//   <Card className="row row-cols-1 row-cols-md-3 g-4">
//   <div className="col">
//     <div className="card">
//       <img src="https://media.istockphoto.com/photos/classic-vintage-scooter-motor-bike-or-moped-isolated-on-whte-picture-id1348520235?b=1&k=20&m=1348520235&s=170667a&w=0&h=VMQrftBuUWaSwO70pti7DjLnDc4AG8Y9QWIGqzvguZA=" className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Classic Blue</h5>
//         <p className="card-text">$ 3,600</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src="https://media.istockphoto.com/photos/blue-scooter-with-white-background-picture-id1041315464?k=20&m=1041315464&s=612x612&w=0&h=ro2tosXYLDrBsKqKTioXdUKDah8DLdu2ggxK-ZZRRe8=" className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Light Blue</h5>
//         <p className="card-text">$ 2,500</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJP4z5K8uIcVekb6uM3uxtBDSjQcUc-sOfk8UFwons8gEJKnqz-L2ADfUnBhR2GXuoLZc&usqp=CAU" className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">White Red</h5>
//         <p className="card-text">$ 4,000</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQQt992w6pmjU_BnL_Kt9SWHbdBlW4QBP6n5lacebvL0pkpspd2Hn13l-8_YcWx_zz-0&usqp=CAU" className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Black Orange</h5>
//         <p className="card-text">$ 5,400</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src="https://techcrunch.com/wp-content/uploads/2021/12/bounce-infinity-e1.jpg" className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Red Black</h5>
//         <p className="card-text">$3,500</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUskD0dRRrP144DXEKF1Tr8dB4oEQjQkfdQ&usqp=CAU" className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Maroon Black</h5>
//         <p className="card-text">$ 4,200</p>
//       </div>
//     </div>
//   </div>
// </Card>
// </div>
//      )
//    }
// }

