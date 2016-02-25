import React from 'react';
import Content from './Content.jsx';
import Slider from 'react-slick';

export default class Events extends React.Component {
  render() {
    var slideElements = this.props.data.EventsData.map(function(slide, id) {
      return (
        <div>
          <img src={slide.img} />
          <h3 style={{color: 'white'}}>{slide.title}</h3>
          <p  style={{color: 'white'}}>{slide.text}</p>
        </div>
      );
    });
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dotClass: "dotClass",
      fade: true,

    };
    return (
    	<div id="contentWrapper">
	      <Slider {...settings}>
          {slideElements}
    	  </Slider>
		</div>
    );
  }
}
