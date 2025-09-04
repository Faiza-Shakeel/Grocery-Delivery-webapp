import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import Bottom_banner from '../components/Bottom_banner'
const Home = () => {
  return (
    <div className='mt-10'>
<MainBanner/>
<Categories/>
 <BestSeller/>
 <Bottom_banner/>
</div>
  )
}

export default Home