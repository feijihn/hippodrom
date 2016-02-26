import React from 'react';
import Content from './Content.jsx';
import styles from '../styles/InlineStyles.js';
import Events from './Events.jsx';

var data = {
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

export default class Home extends React.Component {
	render() {
		return (
				<div id="contentWrapper">
					<Events data={data}/>
				</div>
		);
	}
}
