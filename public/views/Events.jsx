import React from 'react';
import Content from './Content.jsx';
import Slider from 'react-slick';
import Styles from '../styles/InlineStyles.js';

export default class Events extends React.Component {
	render() {
		var slideElements = this.props.data.map(function(slide, id) {
//gotta move container style to InlineStyles.js but i dunno how cuz of background image u kno~ what i mean dawg?
			return (
				<div style={{
					backgroundColor: 'white', //in case if image isn't loaded
					backgroundImage: 'url(' + slide.img + ')',
					height: '70vh',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}>
					<div style={Styles.Events.sliderFooter}>
						<h2 style={{marginBottom: 5}}>{slide.title}</h2>
						<p>{slide.text}</p>
					</div>
				</div>
			);
		});
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dotClass: "dotClass",
			fade: true,
			autoplaySpeed: 6000,
			draggable: false
		};
		return (
				<Slider {...settings}>
					{slideElements}
				</Slider>
		);
	}
}
