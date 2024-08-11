import useGetScroll from "../../utils/useWindowScroll";
import LazyImage from "../lazy_image";
import "./index.style.scss";

const HeroBanner = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  const { scrollYPos } = useGetScroll();
  const yBannerPosition = ((scrollYPos ?? 0) + 1) * 0.7;

  return (
    <section className="hero_banner">
      <section className="hero_image">
        <LazyImage
          src={image}
          width="100%"
          alt="hero"
          style={{
            transform: `translateY(${yBannerPosition}px)`,
          }}
        />
        <div className="overlay"></div>
        <div className="diagonal_line"></div>
      </section>
      <div className="hero_text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default HeroBanner;
