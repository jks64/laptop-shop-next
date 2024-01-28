'use client';
import { toggleBasket } from '@/redux/slice/basketSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import BasketItem from './BasketItem';

function Modal() {
  const { isBasketOpen } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.products);
  const handleCloseModal = () => {
    dispatch(toggleBasket());
  };
  return (
    <>
      {isBasketOpen && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 backdrop-blur flex justify-center items-center">
          <div className="bg-white w-2/3 m-auto flex flex-col items-center  h-[600px]  overflow-x-hidden">
            <div className=" flex flex-col h-[550px] items-center overflow-y-auto w-full">
              <div className="flex flex-col w-full">
                <div className="flex flex-row gap-4 justify-between w-full">
                  <div className="flex-shrink-0"> </div>{' '}
                  <div className="">
                    <h1 className="font-semibold text-2xl pt-4">Кошик</h1>
                  </div>
                  <button
                    type="button"
                    className="col-span-1 text-2xl text-black pt-4 pr-4 hover:text-red-600 "
                    onClick={handleCloseModal}
                  >
                    X
                  </button>
                </div>
                <div className="w-full horizontal-line-height horizontal-line-color mt-4 mb-5" />
              </div>
              {basketProducts.map((product) => (
                <BasketItem
                  id={product.id}
                  images={product.images}
                  price={product.price}
                  title={product.title}
                  key={product.id}
                />
              ))}
              <br />
            </div>
            <div className="w-full horizontal-line-height horizontal-line-color  mb-2" />

            <button
              type="button"
              className="bg-custom-green  mb-2 text-white font-semibold text-xl rounded-xl p-4 "
              onClick={handleCloseModal}
            >
              Оформити замовлення
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
