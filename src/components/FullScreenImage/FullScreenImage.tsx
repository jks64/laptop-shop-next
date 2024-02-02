'use client';

import { useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

import {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from '@/utils/SwipeHandler';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import MySlider from '../Slider/Slider';
import Media from 'react-media';

export default function FullScreenImage({
  productImage,
  toggleFullScreen,
  nextPhoto,
  prevPhoto,
  isFullScreenOpen,
  miniPhotos,
  selectImage,
  photoNumber,
  product,
}) {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  console.log(productImage);
  return (
    <>
      {isFullScreenOpen && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 backdrop-blur flex justify-center items-center">
          <div className="bg-white flex flex-col items-center w-[100vw] h-[100vw]  overflow-x-hidden">
            <div className="flex flex-row absolute left-[2%] top-[2%]">
              <div className="mt-16">
                {
                  <MySlider
                    className="full-screen__slider"
                    size="super-large"
                    photoNumber={photoNumber}
                    miniPhotos={miniPhotos}
                    selectImage={selectImage}
                  />
                }
              </div>
              <div
                onTouchStart={(e) => handleTouchStart(e, touchStartX)}
                onTouchMove={(e) => handleTouchMove(e, touchEndX)}
                onTouchEnd={() =>
                  handleTouchEnd(touchStartX, touchEndX, nextPhoto, prevPhoto)
                }
                className="full-screen-image__container"
              >
                <IoCloseSharp
                  onClick={toggleFullScreen}
                  className="h-16 w-16 absolte top-[5%] left-[90%]"
                />
                <div className="flex flex-row items-center gap-5 justify-around">
                  <Media
                    query="(min-width: 768px)"
                    render={() => (
                      <>
                        <FaArrowCircleLeft
                          className="h-14 w-14  "
                          onClick={prevPhoto}
                        />
                      </>
                    )}
                  />

                  <div className="w-[55vw] h-[88vh]">
                    <img
                      className="       
            w-[100%] h-[100%] border border-black "
                      src={productImage}
                    />
                  </div>
                  <Media
                    query="(min-width: 768px)"
                    render={() => (
                      <>
                        <FaArrowCircleRight
                          onClick={nextPhoto}
                          className="h-14 w-14  "
                        />
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
