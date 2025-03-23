import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Navbar = () => {
  const [search, setSearch] = useState("Pakistan");
  const [Newsdata, setNewsdata] = useState(null);
  const api = "be70b70b2f71456e8390f06119035f5a";

  const getData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api}`);
      console.log(response.data.articles);
      setNewsdata(response.data.articles);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
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
      
      {/* Header Text */}
      <p className='text-center mt-40 text-2xl md:text-3xl font-semibold md:mt-24'>
        Stay Updated with TrendyNews
      </p>

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
