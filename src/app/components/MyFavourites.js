import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllFavourites } from '../redux/actions/favourites'
import './myfavourites.css'



const MyFavourites = ()=> {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favourites.favourites)

  useEffect(() => {
    dispatch(getAllFavourites())
  }, [dispatch])
  
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
