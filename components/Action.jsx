import React from "react";
import { FaArrowRightLong } from 'react-icons/fa6';

const Action = () => {
  return (
    <section className="py—14 bg-gray-800">
      <div className="container">
         <div className="p-6 rounded—xl bg-default-950/40">
         <div className="flex flex—wrap items-center gap—6">
            <div className="flex—shrink">
              <div className="flex -space-x-2">
                {[1,2,3].map((img, index) => (
                  <img src={`assets/images/avatars/img-${index + 1}.png`}
                  alt="img des" className="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                  style={{ marginTop: '30px' }}/>
                ))}
                <button className= "inline-block h-8 w-8 font-medium text-primary rounded-full ring-2 ring-default-950 bg-white"
                style={{marginTop: '40px'}}>
                  80+
                </button>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-default-200 text-align:left" style={{marginTop:'10px', marginLeft:"-50px"}}>
                Join our blockchain experts community
              </h3>
              <p className="w-3/4 text-base font-medium text-default-300 mt-5 text-align:left" style={{marginTop: '20px', marginLeft: '100px'}}>
                Lorem ipsum dolor sit, amet consectetur
                adipisicing etit.
                Dignissimos dolorum quae doloribus dolores.
                Similique, vet! Ab
                laudantium esse repudiandae suscipit dotorum
                rerum ex vero.
                Aliquid vet nostrum architecto ullam animi.
              </p>
            </div>

            <div className="flex-shrink">
              <a 
                href="#"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white py-1 px-4 rounded-full hover:bg-primary-haver trasition-all duration-300" 
                style={{marginTop: '200px', marginLeft: '-100px'}}>
                  Join <FaArrowRightLong />
                </a>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
};

export default Action;
