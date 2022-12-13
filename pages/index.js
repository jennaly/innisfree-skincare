import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <>  
        topBanner

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
         
        
      </>
    </div>
  )
}
