// import React from 'react'
// // import Btn from './Btn';

// const Card = ({data}) => {
//     console.log(data);
   
    
//   return (
// <>

// {
//     data? data.map((item,index)=>{
//       if (!item.urlToImage) {
//         return null
//       }else{
//         return<div className='border-2 w-72 h-[480px] float-start grid justify-items-center  ms-[55px] mt-5  '>
//             <div > <img src={item.urlToImage} alt="" className='w-72 h-56 '/>
         
//                 <a className='text-[12px] font-bold underline hover:underline-offset-4 'onClick={()=>window.open(item.url)}>{item.title}</a>
//                 <p className='text-[14px] mt-3  '>{item.description}</p>
//                 <button className=' bg-orange-600 mt-5 hover:bg-orange-700 rounded-lg p-1 mx-2 text-white font-bold '  onClick={()=>window.open(item.url)} >Read More</button>
//                 </div>
           
//         </div> 
//       }

        
      
//     }):<h1>Loading</h1>
// }

// </>
//   )
// }

// export default Card


import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className='flex flex-wrap justify-center gap-6 mt-6'>
      {
        data ? data.map((item, index) => {
          // Only render cards with a valid image URL
          if (!item.urlToImage) return null;

          return (
            <div 
              key={index} 
              className='border-2 rounded-lg p-4 w-full sm:w-64 md:w-72 lg:w-80 h-auto flex flex-col items-center shadow-lg'
            >
              {/* Image */}
              <img 
                src={item.urlToImage} 
                alt="" 
                className='w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-t-lg'
              />
              
              {/* Content */}
              <div className='p-4 text-center flex flex-col items-center'>
                <a
                  className='text-sm sm:text-base md:text-lg font-bold underline hover:underline-offset-4 mb-2'
                  onClick={() => window.open(item.url)}
                >
                  {item.title}
                </a>
                <p className='text-xs sm:text-sm md:text-base mt-3'>
                  {item.description}
                </p>
                <button
                  className='mt-5 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-bold'
                  onClick={() => window.open(item.url)}
                >
                  Read More
                </button>
              </div>
            </div>
          );
        }) : <h1 className='text-center text-2xl w-full'>Loading...</h1>
      }
    </div>
  );
}

export default Card;
