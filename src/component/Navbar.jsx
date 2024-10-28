

// import React, { useEffect, useState } from 'react';
// import Card from './Card';
// // import Btn from './Btn'

// const Navbar = () => {
//   const [search, setsearch] = useState("Pakistan");
//   const [Newsdata, setNewsdata] = useState(null);
//   const api = "be70b70b2f71456e8390f06119035f5a";

//   const getData = async () => {
//     const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api}`);
//     const jsondata = await response.json();
//     console.log(jsondata.articles);
//     setNewsdata(jsondata.articles);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleInput = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     setsearch(e.target.value);
//   };

//   const userInput = (event) => {
//     setsearch(event.target.value);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <div className='flex flex-col md:flex-row bg-black p-5 fixed top-0 left-0 right-0 items-center md:justify-between z-10'>
//         <div className='text-white'>
//           <h1 className='text-2xl font-semibold hover:underline'>News App</h1>
//         </div>
//         <div className='mt-4 md:mt-0'>
//           <ul className='flex space-x-5 text-white font-bold'>
//             <li className='hover:underline'><a href="">All News</a></li>
//             <li className='hover:underline'><a href="">Trending</a></li>
//           </ul>
//         </div>
//         <div className='mt-4 md:mt-0 flex'>
//           <input
//             type="text"
//             placeholder='Search News'
//             className='border-2 p-1 w-full sm:w-40 md:w-60 lg:w-80 rounded-lg'
//             onChange={handleInput}
//             value={search}
//           />
//           <button
//             className='bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg ml-2 p-2'
//             onClick={getData}
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Header Text */}
//       <p className='text-center text-2xl md:text-3xl font-semibold mt-20 md:mt-24'>Stay Updated with TrendyNews</p>

//       {/* Category Buttons */}
//       <div className='flex flex-wrap justify-center mt-10 gap-4'>
//         <button
//           className='bg-orange-600 rounded-full p-2 w-24 md:w-28 lg:w-32 text-white font-bold hover:bg-orange-700'
//           onClick={userInput}
//           value="Sport"
//         >
//           Sport
//         </button>
//         <button
//           className='bg-orange-600 rounded-full p-2 w-24 md:w-28 lg:w-32 text-white font-bold hover:bg-orange-700'
//           onClick={userInput}
//           value="Politics"
//         >
//           Politics
//         </button>
//         <button
//           className='bg-orange-600 rounded-full p-2 w-24 md:w-28 lg:w-32 text-white font-bold hover:bg-orange-700'
//           onClick={userInput}
//           value="Entertainment"
//         >
//           Entertainment
//         </button>
//         <button
//           className='bg-orange-600 rounded-full p-2 w-24 md:w-28 lg:w-32 text-white font-bold hover:bg-orange-700'
//           onClick={userInput}
//           value="Health"
//         >
//           Health
//         </button>
//         <button
//           className='bg-orange-600 rounded-full p-2 w-24 md:w-28 lg:w-32 text-white font-bold hover:bg-orange-700'
//           onClick={userInput}
//           value="Fitness"
//         >
//           Fitness
//         </button>
//       </div>

//       {/* News Cards */}
//       <div className='mt-10 px-4'>
//         {Newsdata ? <Card data={Newsdata} /> : <h1 className='text-center text-2xl'>Loading...</h1>}
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from 'react';
import Card from './Card';

const Navbar = () => {
  const [search, setsearch] = useState("Pakistan");
  const [Newsdata, setNewsdata] = useState(null);
  const api = "be70b70b2f71456e8390f06119035f5a";

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api}`);
    const jsondata = await response.json();
    console.log(jsondata.articles);
    setNewsdata(jsondata.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };

  const userInput = (event) => {
    setsearch(event.target.value);
    getData();
  };

  return (
    <>
      {/* Navbar */}
      <div className='flex flex-col md:flex-row bg-black p-4 md:p-5 fixed top-0 left-0 right-0 items-center md:justify-between '>
        <div className='text-white mb-3 md:mb-0'>
          <h1 className='text-2xl font-semibold hover:underline'>News App</h1>
        </div>
        <div className='flex space-x-5 text-white font-bold mb-3 md:mb-0'>
          <h1 className='hover:underline'>All News</h1>
          <h1 className='hover:underline'>Trending</h1>
        </div>
        <div className='flex w-full sm:w-auto'>
          <input
            type="text"
            placeholder='Search News'
            className='border-2 p-1 w-full sm:w-40 md:w-60 lg:w-80 rounded-lg'
            onChange={handleInput}
            value={search}
          />
          <button
            className='bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg ml-2 p-2 '
            onClick={getData}
          >
            Search
          </button>
        </div>
      </div>
      {/* text-2xl md:text-3xl font-semibold mt-20 md:mt-24 */}
      {/* Header Text */}
      <p className='text-center mt-40 text-2xl md:text-3xl font-semibold  md:mt-24'>Stay Updated with TrendyNews</p>

      {/* Category Buttons */}
      <div className='flex flex-wrap justify-center mt-10 gap-4'>
        {["Sport", "Politics", "Entertainment", "Health", "Fitness"].map((category) => (
          <button
            key={category}
            className='bg-orange-600 rounded-full p-2  w-28 md:w-28 lg:w-28 text-[15px] text-white font-bold hover:bg-orange-700'
            onClick={userInput}
            value={category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Cards */}
      <div className='mt-10 px-4'>
        {Newsdata ? <Card data={Newsdata} /> : <h1 className='text-center text-2xl'>Loading...</h1>}
      </div>
    </>
  );
};

export default Navbar;
