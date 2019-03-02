import React, { Component } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

class CustomCarousel extends Component {
  static defaultProps = {
    items: [],
  };

  state = {
    activeIndex: 0,
  };

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const { items } = this.props;
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const { items } = this.props;
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render () {
    const { items } = this.props;
    const { activeIndex } = this.state;

    const slides = items.map(({ src, altText, caption }) => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={src}
      >
        <img src={src} alt={altText} />
        <CarouselCaption captionText={caption} captionHeader={caption} />
      </CarouselItem>
    ));

    const { previous, goToIndex, next } = this;
    return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
}

export default CustomCarousel;
