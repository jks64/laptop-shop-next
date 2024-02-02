export const handleTouchStart = (e, touchStartX) => {
  e.preventDefault();
  touchStartX.current = e.touches[0].clientX;
};

export const handleTouchMove = (e, touchEndX) => {
  e.preventDefault();
  touchEndX.current = e.touches[0].clientX;
};

export const handleTouchEnd = (
  touchStartX,
  touchEndX,
  nextPhoto,
  prevPhoto
) => {
  if (touchStartX.current - touchEndX.current > 30) {
    nextPhoto();
  } else if (touchEndX.current - touchStartX.current > 30) {
    prevPhoto();
  }

  touchStartX.current = null;
  touchEndX.current = null;
};
