import React from 'react';
import { Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
  {
    src: 'https://thumbs.dreamstime.com/b/farmacia-64209774.jpg',
  },
  {
    src: 'https://previews.123rf.com/images/kurhan/kurhan1512/kurhan151200040/48882783-farmac%C3%A9utico-mujer-del-m%C3%A9dico-sobre-el-fondo-de-la-farmacia.jpg',
  },
  {
    src: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?cs=srgb&dl=pexels-pixabay-139398.jpg&fm=jpg',
  }
];

const ProductoCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="img-fluid d-block mx-auto"
          style={{ maxHeight: '400px' }} 
        />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container className="my-4">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="" onClickHandler={next} />
      </Carousel>
    </Container>
  );
};

export default ProductoCarousel;
