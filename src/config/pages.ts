type TPage = 'Pressure' | 'Pulse' | 'Temperature' | 'Charts' | 'Outdoor';

interface IPageData {
	name: TPage;
	url: string;
	title: string;
	text?: string;
}

const pagesData = new Map<TPage, IPageData>([
	[
		'Pressure',
		{
			name: 'Pressure',
			url: '/pressure',
			title: 'Давление',
			text: 'Просмотр и изменение показателей давления'
		}
	],
	[
		'Pulse',
		{
			name: 'Pulse',
			url: '/pulse',
			title: 'Пульс',
			text: 'Просмотр и изменение показателей пульса'
		}
	],
	[
		'Temperature',
		{
			name: 'Temperature',
			url: '/temperature',
			title: 'Температура',
			text: 'Просмотр и изменение показателей температуры'
		}
	],
	[
		'Charts',
		{
			name: 'Charts',
			url: '/charts',
			title: 'Графики'
		}
	],
	[
		'Outdoor',
		{
			name: 'Outdoor',
			url: '/outdoor',
			title: 'Температура на улице',
			text: 'Просмотр показателя температуры на улице'
		}
	]
]);

export default pagesData;
