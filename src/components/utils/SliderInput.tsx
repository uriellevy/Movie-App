import React, { useContext } from 'react'
import { MovieContext } from '../store/movieContext'
import "./SliderInput.scss"


const SliderInput = () => {
  const { backgroundOpacityChangeHandler } = useContext(MovieContext)
  const changeOpacityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    backgroundOpacityChangeHandler(e)
  }

  return (
    <div className="slider-wrapper" >
      <input type="range" min="1" max="10" onChange={changeOpacityHandler}></input>
    </div>
  )
}

export default SliderInput