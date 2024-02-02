'use client';
import FullScreenImage from '@/components/FullScreenImage/FullScreenImage';
import MySlider from '@/components/Slider/Slider';
import { ProductType } from '@/types/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductPage = () => {
  const [product, setProduct] = useState<ProductType | undefined>();
  const [photoNumber, setPhotoNumber] = useState<number>(0);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState<boolean>(false);

  const firstPhoto = product?.images.find((item) => item.imagePosition === 0);
  const miniPhotos = product?.images;
  const toggleFullScreen = () => setIsFullScreenOpen((prev) => !prev);

  const nextPhoto = () => {
    setPhotoNumber(
      (prevPhotoNumber) => (prevPhotoNumber + 1) % product?.images.length
    );
  };
  const prevPhoto = () => {
    if (photoNumber > 0) {
      setPhotoNumber((prevPhotoNumber) => prevPhotoNumber - 1);
    }
  };
  function selectImage(index) {
    setPhotoNumber(index);
    console.log(selectImage);
  }
  const getProducts = () => {
    const currentURL = window.location.pathname;
    const currentPageNumber = parseInt(currentURL.replace('/', ''));
    axios
      .get(`https://91.239.232.14:443/laptops/product/${currentPageNumber}`)
      .then((response) => {
        const data = response.data;
        if (typeof data === 'object' && data.hasOwnProperty('images')) {
          const productWithImages = { ...data };
          productWithImages.imagesBase64 = data.images.map((image) => ({
            position: image.imagePosition,
            image: image.imageUrl,
          }));

          setProduct(productWithImages);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных о продукте:', error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col ">
      {isFullScreenOpen && (
        <FullScreenImage
          productImage={product?.images[photoNumber].imageUrl}
          toggleFullScreen={toggleFullScreen}
          nextPhoto={nextPhoto}
          isFullScreenOpen={isFullScreenOpen}
          miniPhotos={miniPhotos}
          prevPhoto={prevPhoto}
          photoNumber={photoNumber}
          selectImage={selectImage}
          product={product}
        />
      )}
      <div className="flex flex-row">
        <div className="flex flex-row justify-center items-center ">
          <div className="ml-8 mt-8">
            {
              <MySlider
                size="large"
                miniPhotos={miniPhotos}
                selectImage={selectImage}
              />
            }
          </div>
          <div className="ml-12 mt-8 w-[47vw] h-[77vh] border border-black">
            <img
              src={product?.images[photoNumber].imageUrl}
              className="
            w-[100%] h-[100%]"
            />
            <img
              onClick={nextPhoto}
              className="absolute top-[46%] right-[33.5%]"
              src="https://img.icons8.com/ios-glyphs/60/forward.png"
              alt="circled-left-2"
            />
            <img
              onClick={prevPhoto}
              className="product-page__prev-photo__btn"
              src="https://img.icons8.com/ios-glyphs/60/forward.png"
              alt="circled-left-2"
            />
            <img
              onClick={toggleFullScreen}
              className="absolute top-[84.5%] right-[37.5%] h-12"
              src="https://img.icons8.com/?size=512&id=38034&format=png"
            />
          </div>
        </div>
        <div className="pl-6 flex flex-col ml-8">
          <h1 className="text-2xl font-semibold mt-24 mb-8">
            {product?.title}
          </h1>
          <strong className="text-3xl mb-7">
            {product?.price.toLocaleString()} грн
          </strong>
          <div className="flex flex-col gap-3">
            <button className="bg-add-to-card text-white font-semibold text-lg rounded-full w-[30vw] p-2">
              Купити зараз
            </button>
            <button className="bg-buy-now-card text-white font-semibold text-lg rounded-full w-[30vw] p-2">
              Добавити в кошик
            </button>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="w-1 h-full horizontal-line-color my-3" />
        <div className="flex flex-col h-full justify-center mt-4 items-center text-left">
          <h2 className="font-semibold text-2xl mb-1 mt-5">Описание</h2>
          <div className="w-full h-[1px] horizontal-line-color my-3" />
          <div className="h-full flex flex-row">
            <div className="w-[1px] horizontal-line-color" />
            <p className="w-[51vw] p-5" style={{ whiteSpace: 'pre-line' }}>
              {product?.description}
            </p>
            <div className="w-[1px] horizontal-line-color" />
          </div>
          <h2 className="font-semibold text-2xl mt-5 mb-3 ">Характеристики</h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-[1px] horizontal-line-color mb-3" />
        <div className="flex flex-row">
          <div className="w-[1px] horizontal-line-color " />
          <div className="flex flex-col p-5 gap-4 w-[50vw] mr-4 mt-2 text-left items-left">
            <span>Екран: {product?.characteristicScreen}</span>
            <span>Процесор: {product?.characteristicProcessor}</span>
            <span>Оперативна пам'ять: {product?.characteristicMemory}</span>
            <span>Накопичувач: {product?.characteristicStorage}</span>
            <span>Відеосистема: {product?.characteristicGraphics}</span>
            <span>Батарея: {product?.characteristicBatery}</span>
          </div>
          <div className="w-[1px] horizontal-line-color" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
