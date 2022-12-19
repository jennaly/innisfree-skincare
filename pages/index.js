import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client';
import Link from 'next/link';

const Home = ({ featuredProductsData, heroBannerData, footerBannerData } ) => {

  return (

    <div>
      <>  
        <HeroBanner heroBanner={heroBannerData.length && heroBannerData[0]} />

        <div className="hero min-h-screen bg-base-100 p-8" id="about">
          <div className="flex flex-col lg:flex-row gap-10">
            <img src="../jeju_island.jpeg" className=" w-full lg:max-w-xl rounded-lg shadow-2xl" />
            <div className="max-w-lg lg:px-10 lg:my-auto">
              <h3 className="text-3xl lg:text-5xl font-bold">Where Beauty Meets Sustainability</h3>
              <p className="py-6">Our skin care products are formulated with an average of 80% of naturally-derived ingredients responsively-sourced from the pure and protected island of Jeju. From its lush forests to its crystal sea, we search every corner to handpick the finest ingredients nature has to offer. </p>

            </div>
          </div>
        </div>

        <div className="hero min-h-screen flex flex-col justify-center bg-base-100 gap-8" id="featured">
            <div className="flex flex-col items-center gap-2 px-8">
              <span className="mt-6 lg:text-xl">Clean Beauty Made Easy</span>
              <h2 className="text-5xl font-bold text-center">The Latest Essentials</h2>
            </div>

            <div className="flex flex-col lg:flex-row">
              {featuredProductsData?.map((product, index) => {
                return (
                  <div className="card w-full" key={index}>
                      <div className="card-body">
                        <Product key={product._id} product={product} dimensions={500}/>
                      </div>
                  </div>
                )})}
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