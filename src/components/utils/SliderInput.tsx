import React, {useContext} from 'react'
import { MovieContext } from '../store/movieContext'



const SliderInput = () => {
  const { backgroundOpacity, backgroundOpacityChangeHandler } = useContext(MovieContext)
  const changeOpacityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    backgroundOpacityChangeHandler(e)
  }

    return (
        <>
            <div className="slider-wrapper">
                <span className="fontsize big">A</span>
                <input type="range" min="1" max="10" onChange={changeOpacityHandler}></input>
                <span className="fontsize small">a</span>
            </div>
        </>
    )
}

export default SliderInput