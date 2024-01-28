'use client';

import Image from 'next/image';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
const Hero = () => {
  const scrollToProductList = () => {
    const pageHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const scrollHeight = pageHeight * 0.6;

    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth', // Добавляем плавность прокрутки
    });
  };
  return (
    <article className="flex-row items-center justify-center ">
      <div className="flex gap-36 mt-6">
        <div className="mt-28 ml-20 w-96 flex flex-col">
          <h1 className="text-5xl font-semibold">
            Знаходьте свій ідеальний ноутбук разом із{' '}
            <span className="text-custom-green text-6xl font-semibold italic">
              Ltop
            </span>
          </h1>
          <p className="my-6 text-gray-500">
            Знайдіть найкращі б/у ноутбуки, привезені з США.
          </p>
        </div>

        <div>
          <Image
            src={'/laptops-for-hero.png'}
            alt="laptop"
            width={850}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={scrollToProductList}
          className="px-8 py-3 bg-custom-green mt-10 flex items-center justify-center gap-4 font-semibold text-white rounded-lg"
        >
          <span>Перейти до товару</span>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default Hero;
