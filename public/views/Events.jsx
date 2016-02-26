import React from 'react';
import Content from './Content.jsx';
import Slider from 'react-slick';
import Styles from '../styles/InlineStyles.js';

export default class Events extends React.Component {
  render() {
    var slideElements = this.props.data.EventsData.map(function(slide, id) {
      return (
        <div style={{
          backgroundColor: 'white', //in case if image isn't loaded
          backgroundImage: 'url(' + slide.img + ')',
          height: '500px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <div style={Styles.sliderFooter}>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
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
