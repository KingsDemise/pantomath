"use client";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Home = () => {
  const [trendingNews, setTrendingNews] = useState([]);
  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual Google News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setTrendingNews(response.data.articles);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching trending news:", error);
      });
  }, []);
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* body */}
      <div className="flex flex-col items-center">
        <h1 className="head_text text-center">
          <span className="peach_gradient text-center"> Know Everything</span>
        </h1>
        <p className="p-5 text-center font-bold leading-[1.15]font-extrabold leading-[1.15]">
          Welcome to Pantomath
        </p>
        <HomeSearch />
        <span className="text-center p-5 mt-5 text-3xl font-extrabold leading-[1.15]">
          {" "}
          Trending News
        </span>

        <div className="sm:pb-24 pb-40  mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
            {trendingNews.map((newsItem) => (
              <div key={newsItem.url} className="mb-8">
                <div className="group">
                  <Link href={newsItem.url}>
                    <img
                      src={newsItem.urlToImage}
                      alt={newsItem.title}
                      className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                    />
                  </Link>
                  <Link href={newsItem.url}>
                    <h2 className="group-hover:underline text-xl">
                      {newsItem.title}
                    </h2>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-16"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
