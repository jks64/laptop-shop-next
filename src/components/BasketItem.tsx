'use client';
import { deleteBasketState } from '@/redux/slice/basketSlice';
import { ProductCardType } from '@/types/types';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const BasketItem = (props: ProductCardType) => {
  const firstPhoto:
    | {
        position: number;
        image: string;
      }
    | undefined = props.images.find((item) => item.position === 0);
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(deleteBasketState(props.id));
  };

  return (
    <div>
      <div className="flex flex-col w-full items-end justify-center">
        <div className="flex flex-row w-full items-center justify-start gap-14 ">
          <img src={firstPhoto?.image} className="w-40 pl-4" />
          <h1 className="text-2xl w-2/3">{props.title}</h1>
          <FaRegTrashAlt
            onClick={handleAddToBasket}
            className="w-10 h-10 mb-7"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4 pr-3">
          {props.price.toLocaleString()} грн
        </h2>
      </div>
      <div className="w-full horizontal-line-height horizontal-line-color mb-5" />
    </div>
  );
};

export default BasketItem;
