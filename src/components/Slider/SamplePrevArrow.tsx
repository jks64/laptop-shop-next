import { SizesType } from '@/types/types';
import React from 'react';
interface SamplePrevArrowProps {
  style?: React.CSSProperties;
  onClick?: () => void;
  size: SizesType; // size проп имеет тип SizesType
}
const SamplePrevArrow = (props: SamplePrevArrowProps) => {
  const { style, onClick, size } = props;

  return (
    <>
      <div
        style={{
          ...style,
          display: 'block',
          fontSize: '24px',
          lineHeight: '1',
          textAlign: 'center',
          width: '40px',
          position: 'absolute',
          top: '-8%',
          left:
            size === 'small' ? '20%' : size === 'super-large' ? '28%' : '34%',
        }}
        onClick={onClick}
      >
        <img
          style={{
            transform: 'rotate(270deg)',
            height: '45px',
            width: '42px',
            borderRadius: '50px',
            backgroundColor: 'white',
            padding: '4px',
          }}
          src="https://img.icons8.com/ios-glyphs/60/forward.png"
        />
      </div>
    </>
  );
};

export default SamplePrevArrow;
