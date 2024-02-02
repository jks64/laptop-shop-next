import React from 'react';
import Slider from 'react-slick';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SizesType } from '@/types/types';

const SMALL_SIZE = {
  height: '510vh',
  width: '560vh',
};

const LARGE_SIZE = {
  height: '180vw',
  width: '220vw',
};

const SUPER_LARGE = {
  height: '230vh',
  width: '240vh',
};

const MySlider = ({
  size,
  miniPhotos,
  selectImage,
}: {
  size: SizesType;
  miniPhotos: any;
  selectImage: any;
}) => {
  const slidesToShow = size === 'small' ? 4 : size === 'super-large' ? 3 : 4;

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    speed: 200,
    nextArrow: <SampleNextArrow size={size} />,
    prevArrow: <SamplePrevArrow size={size} />,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={size === 'super-large' ? 'w-[20vw]' : 'w-[10vw]'}>
        {' '}
        <Slider {...settings}>
          {miniPhotos?.map((image, index) => (
            <div data-index={index} key={index} className="w-[10vw]">
              <img
                className="carusel"
                src={image.imageUrl}
                height={
                  size === 'small'
                    ? SMALL_SIZE.height
                    : size === 'super-large'
                    ? SUPER_LARGE.height
                    : LARGE_SIZE.height
                }
                width={
                  size === 'small'
                    ? SMALL_SIZE.width
                    : size === 'super-large'
                    ? SUPER_LARGE.width
                    : LARGE_SIZE.width
                }
                onClick={() => selectImage(index)}
                alt={`miniPhoto-${index}`}
                style={{
                  maxWidth: '100%', // Added max-width
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MySlider;
