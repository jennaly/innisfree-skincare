import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client';
import Link from 'next/link';

const Home = ({ featuredProductsData, heroBannerData, footerBannerData } ) => {

  return (
      <>  
      
        <HeroBanner heroBanner={heroBannerData.length && heroBannerData[0]} />

        <div className="min-h-screen flex flex-col justify-center px-8 gap-5 lg:gap-10" id="about">
          <div className="hero bg-base-100 lg:py-8 mt-10">
            <div className="flex flex-col lg:flex-row lg:gap-10 md:max-w-lg lg:max-w-full">
              <img src="../jeju_island.jpeg" className="lg:max-w-xl rounded-lg shadow-2xl" />
              <div className="max-w-lg lg:w-2/3 lg:my-auto">
                <h3 className="text-3xl lg:text-5xl font-bold mt-6">Where Beauty Meets Sustainability</h3>
                <p className="py-6">Our skin care products are formulated with an average of 80% of naturally-derived ingredients responsively-sourced from the pure and protected island of Jeju. From its lush forests to its crystal sea, we search every corner to handpick the finest ingredients nature has to offer. </p>
              </div>
            </div>
          </div>

          <div className="hero bg-base-100 lg:py-8 mb-10">
            <div className="flex flex-col lg:flex-row lg:gap-10 md:max-w-lg lg:max-w-full">
              <div className="max-w-lg lg:my-auto">
                <h3 className="text-3xl lg:w-2/3 lg:text-5xl font-bold">Skincare Powered by Nature&apos;s Finest</h3>
                <p className="py-6">Innisfree&apos;s proprietary extraction methods preserve the purity and potency of these wholesome ingredients from plant to bottle, offering advanced formulas that safely address all skin concerns without the use of harmful chemicals and preservatives.</p>
              </div>
              <img src="../skincare_model.jpg" className="lg:max-w-xl rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>

        <div className="hero flex flex-col justify-center bg-base-100 gap-8 my-10" id="featured">
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