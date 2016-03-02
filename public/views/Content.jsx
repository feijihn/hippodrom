import React from 'react';

import Home from './Home.jsx';
import News from './News.jsx';
import Places from './Places.jsx';
import Gallery from './Gallery.jsx';
import Contacts from './Contacts.jsx';

import Paper from 'material-ui/lib/paper';
import Styles from '../styles/InlineStyles.js';

var data = {
	PlacesData: [
		{
			img: '../images/thumbone.jpg',
			title: 'Бар',
			text: 'барр',
		},
		{
			img: '../images/thumbtwo.jpg',
			title: 'Зал',
			text: 'залл',
		},
		{
			img: '../images/thumbthree.jpg',
			title: 'Ресторан',
			text: 'ресторанн',
		},
		{
			img: '../images/thumbfour.jpg',
			title: 'Студия',
			text: 'студияя',
		},
	],
	EventsData: [
		{
			img: '../images/thumbnails/2.jpg',
			title: 'Концерт Radiohead 5 марта',
			text: 'Уже очень скоро #ИППОДРОМ посетит никто иной, как Том Йорк - солист группы Radiohead. Мероприятие пройдет в баре #BARNAME. На разогреве выступил группа \'Nobody knows them, but who cares?\'',
		},
		{
			img: '../images/thumbnails/1.jpg',
			title: 'Выступление Comedy Women 8 марта',
			text: 'В Международный женский день в баре #BARNAME будет проходить стенд-ап от резидентов Comedy Women. Для девушек вход свободный',
		},
		{
			img: '../images/thumbnails/4.jpg',
			title: 'Фитнес на открытом воздухе 12 марта',
			text: '12 марта на нашем open-air пространстве пройдут занятия фитнесом с известным тренером Олли Салита. Приглашаются все желающие',
		},
		{
			img: '../images/thumbnails/3.jpg',
			title: 'Большой Всероссийский приз 20 марта',
			text: 'Приглашаем всех на центральную скачку сезона. Понаблюдать за ней вы сможете из нашего кафе #justsittingchilling, успевайте забронировать столик',
		},
	],
};


export default class Content extends React.Component {
	render() {
		switch(this.props.value){
			case 'Home':
				return (
					<Paper style={Styles.Body.contentWrapper}>
					<Home data={data.EventsData} />
					</Paper>
				);
				break;
			case 'News':
				return (
					<Paper style={Styles.Body.contentWrapper}>
					<News />
					</Paper>
				);
				break;
			case 'Places':
				return (
					<Paper style={Styles.Body.contentWrapper}>
					<Places data={data.PlacesData}/>
					</Paper>
				);
				break;
			case 'Gallery':
				return (
					<Paper style={Styles.Body.contentWrapper}>
					<Gallery />
					</Paper>
				);
				break;
			case 'Contacts':
				return (
					<Paper style={Styles.Body.contentWrapper}>
					<Contacts />
					</Paper>
				);
				break;
		}
	}
}
