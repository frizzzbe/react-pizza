import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="132" r="120" /> 
    <rect x="0" y="270" rx="7" ry="7" width="280" height="25" /> 
    <rect x="0" y="315" rx="10" ry="10" width="280" height="85" /> 
    <rect x="0" y="430" rx="10" ry="10" width="103" height="25" /> 
    <rect x="128" y="420" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default SkeletonPizza