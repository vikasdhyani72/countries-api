import './CountriesListShimmer.css'

export default function CountriesListShimmer() {
  return (
    <div className="country-container">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="shimmer-card">
          <div className="shimmer shimmer-flag"></div>
          <div className="shimmer shimmer-title"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
        </div>
      ))}
    </div>
  )
}
