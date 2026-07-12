import '../css/Reviews.css'
import reviewsData from '../data/reviewsData'

function getInitials(name) {
    return name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
}

function StarRating({ rating }) {
    return (
        <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= rating ? 'star star-filled' : 'star'}>
                    ★
                </span>
            ))}
        </div>
    )
}

function Reviews() {
    const averageRating =
        reviewsData.reduce((sum, r) => sum + r.rating, 0) / reviewsData.length

    return (
        <div className="reviews-page">

            <div className="reviews-intro">
                <p className="reviews-tagline">what customers are saying</p>
                <h1 className="reviews-heading">Loved, one stitch at a time</h1>
                <div className="reviews-summary">
                    <span className="reviews-average">{averageRating.toFixed(1)}</span>
                    <div className="reviews-summary-text">
                        <StarRating rating={Math.round(averageRating)} />
                        <p>{reviewsData.length} reviews</p>
                    </div>
                </div>
            </div>

            <div className="reviews-grid">
                {reviewsData.map((review) => (
                    <div className="review-card" key={review.id}>
                        <div className="review-header">
                            <div className="review-avatar">{getInitials(review.name)}</div>
                            <div>
                                <p className="review-name">{review.name}</p>
                                <p className="review-date">{review.date}</p>
                            </div>
                        </div>

                        <StarRating rating={review.rating} />

                        <p className="review-comment">{review.comment}</p>

                        <span className="review-product">{review.product}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Reviews