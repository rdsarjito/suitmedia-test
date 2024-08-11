import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  ...props
}) => {
  const [isInView, setIsInView] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setImgSrc("");
    }
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? imgSrc : ""}
      alt={alt}
      onError={isInView ? handleError : () => {}}
      {...props}
      style={{
        ...props.style,
        opacity: isInView ? 1 : 0.1,
        transition: "opacity 0.3s",
      }}
    />
  );
};

export default LazyImage;
