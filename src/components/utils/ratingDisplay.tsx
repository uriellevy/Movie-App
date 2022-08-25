import React from 'react'
import "./RatingDisplay.scss"


interface ratingDisplayProps {
    rating: string
}
const ratingDisplay = (props: ratingDisplayProps) => {
    const ratingInt: number = parseFloat(props.rating);
    const ratingTitle = `Rating:${ratingInt}`

    const getStarFullHalfOrEmpty = (star: number): string => {
        const halfRound = Math.round(ratingInt * 2) / 2;
        if (halfRound - star === -0.5) {
            return "half"
        } else {
            return halfRound >= star ? "full" : "empty";
        }
    }

    const renderStars = () => {
        const stars = [1,2,3,4,5,6,7,8,9,10]
        return stars.map((star) =>
            <div className={`rating-star star-${getStarFullHalfOrEmpty(star)}`} key={star} />
        )
    }
    return (
        <div className='rating-wrapper'>
            <div className='rating-title'>{ratingTitle}</div>
            <div className='rating-stars'>
            {renderStars()}
            </div>
        </div>
    )
}

export default ratingDisplay