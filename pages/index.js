import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client';
import Link from 'next/link';

const Home = ({ featuredProductsData, heroBannerData, footerBannerData } ) => {

  return (

    <div>
      <>  
        <HeroBanner heroBanner={heroBannerData.length && heroBannerData[0]} />

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-5">
            <img src="../jeju_island.jpeg" className=" w-full lg:max-w-xl rounded-lg shadow-2xl" />
            <div className="max-w-lg lg:px-10">
              <h2 className="text-5xl font-bold">Where Beauty Meets Sustainability</h2>
              <p className="py-6">Our skin care products are formulated with an average of 80% of naturally-derived ingredients responsively-sourced from the pure and protected island of Jeju. From its lush forests to its crystal sea, we search every corner to handpick the finest ingredients nature has to offer. </p>

            </div>
          </div>
        </div>

        <div>
          <span>Clean beauty made easy</span>
          <h2>The Latest Essentials</h2>

          <div className="flex justify-center gap-6">
            {featuredProductsData?.map((product => <Product key={product._id} product={product}/>))}
          </div>

        </div>
        

        <FooterBanner footerBanner={footerBannerData.length && footerBannerData[0]} />

      </>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const featuredProductsData = products.filter(product => product.featured);

  const heroBannerQuery = '*[_type == "heroBanner"]';
  const heroBannerData = await client.fetch(heroBannerQuery);

  const footerBannerQuery = '*[_type == "footerBanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);



  return {
    props: {
      featuredProductsData,
      heroBannerData,
      footerBannerData,
    }
  }
}

export default Home;