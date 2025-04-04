export const mockDictionaries = {
	cities: [
		{ id: 1, name: 'Москва' },
		{ id: 2, name: 'СПб' },
		{ id: 3, name: 'РНД' }
	],
	workshops: [
		{ id: 1, cityId: 1, name: 'Цех 1' },
		{ id: 2, cityId: 2, name: 'Цех 2' },
		{ id: 3, cityId: 3, name: 'Цех 3' }
	],
	employees: [
		{ id: 1, workshopId: 1, name: 'Иван' },
		{ id: 2, workshopId: 2, name: 'Петр' },
		{ id: 3, workshopId: 3, name: 'Анатолий' },
		{ id: 4, workshopId: 3, name: 'Николай' }
	],
	teams: [
		{ id: 1, name: 'Бригада 1' },
		{ id: 2, name: 'Бригада 2' },
		{ id: 3, name: 'Бригада 3' }
	],
	shifts: [
		{ id: 1, name: 'Первая смена' },
		{ id: 2, name: 'Вторая смена' },
		{ id: 3, name: 'Третья смена' }
	]
}; 