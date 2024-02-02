'use client';

import { ProductCardType } from '@/types/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBasketState } from '@/redux/slice/basketSlice'; // Replace with the actual path to your reducer
import Link from 'next/link';

const ProductCard = (props: ProductCardType) => {
  const dispatch = useDispatch();

  const firstPhoto:
    | {
        position: number;
        image: string;
      }
    | undefined = props.images.find((item) => item.position === 0);

  const handleAddToBasket = () => {
    dispatch(addBasketState(props));
  };

  return (
    <div className="bg-gray-200 w-80 items-center flex flex-col justify-between gap-7 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black transition-all">
      <Link className="product-card" href={`${props.id}`}>
        <img src={firstPhoto?.image} className="w-72 " />
        <h1>{props.title}</h1>
      </Link>
      <button
        className="font-medium bg-lime-600 h-16 px-6 py-2 text-white rounded-full text-base"
        onClick={handleAddToBasket}
      >
        <span>Добавить в корзину </span>
        <span className="font-bold">{props.price.toLocaleString()}</span>
        <span> грн</span>
      </button>
    </div>
  );
};
export default ProductCard;
