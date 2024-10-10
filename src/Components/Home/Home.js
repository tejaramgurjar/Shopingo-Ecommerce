import React from 'react'
import Slider from './Slider'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'
import TrendingProducts from './TrendingProducts'
import Offer from './Offer'
import TopCategories from './TopCategories'
import LatestBlog from './LatestBlog'
import Subscribe from './Subscribe'
import Brand from './Brand'

function Home() {
  return (
    <div>
      
      <Slider/>
      <FeaturedProducts/>
      <LatestProducts/>
      <TrendingProducts/>
      <TopCategories/>
      <LatestBlog/>
      <Offer/>
        <Subscribe/>
        <Brand/>
        
    </div>
  )
}

export default Home
