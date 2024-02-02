import { SizesType } from '@/types/types';
import React from 'react';
import Slider from 'react-slick';

interface SampleNextArrowProps {
  style?: React.CSSProperties;
  onClick?: () => void;
  size: SizesType; // size проп имеет тип SizesType
}
function SampleNextArrow(props: SampleNextArrowProps) {
  const { style, onClick, size } = props;
  return (
    <div
      style={{
        ...style,
        position: 'absolute',
        top: '100%',
        right: size === 'super-large' ? '60%' : '43%',
        color: 'black',
      }}
      onClick={onClick}
    >
      <img
        style={{
          transform: 'rotate(90deg)',
          height: '45px',
          width: '45px',
          borderRadius: '50px',
          backgroundColor: 'white',
          padding: '4px',
        }}
        src="https://img.icons8.com/ios-glyphs/60/forward.png"
      />
    </div>
  );
}

export default SampleNextArrow;
