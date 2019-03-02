import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

import Carousel from '../Carousel';
import Navigation from '../Navigation';

const items = [
  {
    src: 'https://dummyimage.com/1110x300/a6a6a6/d6d6d6.png&text=Slide+1',
    altText: 'Slide',
    caption: 'Slide',
  },
  {
    src: 'https://dummyimage.com/1110x300/a6a6a6/d6d6d6.png&text=Slide+2',
    altText: 'Slide',
    caption: 'Slide',
  },
  {
    src: 'https://dummyimage.com/1110x300/a6a6a6/d6d6d6.png&text=Slide+3',
    altText: 'Slide',
    caption: 'Slide',
  },
];

const Header = () => (
  <Row>
    <Col>
      <Carousel items={items} />
      <Navigation />
    </Col>
  </Row>
);

export default Header;
