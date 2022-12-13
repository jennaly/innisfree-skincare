import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client';

const Home = ({ featuredProductsData, heroBannerData } ) => {

  return (

    <div>
      <>  
        <HeroBanner heroBanner={heroBannerData.length && heroBannerData[0]} />

        <div>

          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <img src="https://images.unsplash.com/photo-1609357912334-e96886c0212b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDg5OTU1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="max-w-xl rounded-lg shadow-2xl" />
              <div className="max-w-lg">
                <h2 className="text-5xl font-bold">Custom Solutions for Your Skin’s Unique Needs</h2>
                <p className="py-6">Shopping for skincare at the drugstore is frustrating. Buy it, try it,
                  toss it, repeat. Sound familiar?</p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
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
        

        <FooterBanner />

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