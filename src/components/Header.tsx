'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaShoppingBasket } from 'react-icons/fa';
import { toggleBasket } from '@/redux/slice/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const basketProducts = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(toggleBasket());
  };
  return (
    <>
      <nav className="flex flex-row justify-between items-center">
        <Link href={'/'}>
          <div className="p-2 pl-5 pt-4">
            <Image
              alt="laptop"
              width={300}
              height={300}
              objectFit="contain"
              src={'/9a3eb036-507d-4e46-83ce-330a91643d64_50.png'}
            />
          </div>
        </Link>
        <div className="flex flex-row gap-5">
          <Link href={'/about'}>
            <button className="px-8 py-3 bg-custom-green h-12 flex items-center justify-center gap-4 font-semibold text-white rounded-lg">
              О нас
            </button>
          </Link>

          <FaShoppingBasket
            onClick={handleCloseModal}
            className="h-12 w-12 mr-5"
          />
          <p className="absolute right-3 bg-custom-green w-6 flex items-center rounded-full justify-center">
            {basketProducts.length}
          </p>
        </div>
      </nav>
      <div className="w-full horizontal-line-height horizontal-line-color" />
    </>
  );
};

export default Header;
