import React, { useState, useCallback } from 'react';

const Image = ({ src, fallbackSrc }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const onSrcError = useCallback(() => {
    setImageSrc(fallbackSrc);
  }, []);
  return <img src={imageSrc} alt="" onError={onSrcError} />;
};

export default Image;
