import './SkeletonLoader.css'

const SkeletonLoader = () => {
  return (
    <div className="country-details-container">
      <span className="back-button skeleton-box short"></span>
      <div className="country-details">
        <div className="skeleton-flag skeleton-box"></div>
        <div className="details-text-container">
          <div className="skeleton-title skeleton-box"></div>
          <div className="details-text">
            <div className="skeleton-line skeleton-box"></div>
            <div className="skeleton-line skeleton-box"></div>
            <div className="skeleton-line skeleton-box"></div>
            <div className="skeleton-line skeleton-box"></div>
            <div className="skeleton-line skeleton-box"></div>
            <div className="skeleton-line skeleton-box"></div>
            <div className="skeleton-line skeleton-box"></div>
            <div className="skeleton-line skeleton-box"></div>
          </div>
          <div className="border-countries">
            <div className="skeleton-pill skeleton-box"></div>
            <div className="skeleton-pill skeleton-box"></div>
            <div className="skeleton-pill skeleton-box"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
