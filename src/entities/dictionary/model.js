import { defineStore } from 'pinia';

export const useDictionaryStore = defineStore('dictionary', {
	state: () => ({
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
	}),
	getters: {
		getCityById: (state) => (id) => state.cities.find(city => city.id === id)?.name || 'Не найдено',
		getWorkshopById: (state) => (id) => state.workshops.find(workshop => workshop.id === id)?.name || 'Не найдено',
		getEmployeeById: (state) => (id) => state.employees.find(emp => emp.id === id)?.name || 'Не найдено',
		getTeamById: (state) => (id) => state.teams.find(team => team.id === id)?.name || 'Не найдено',
		getShiftById: (state) => (id) => state.shifts.find(shift => shift.id === id)?.name || 'Не найдено',
		getWorkshopsByCityId: (state) => (cityId) => state.workshops.filter(workshop => workshop.cityId === cityId),
		getEmployeesByWorkshopId: (state) => (workshopId) => state.employees.filter(emp => emp.workshopId === workshopId),

		getCities: (state) => state.cities,
		getWorkshops: (state) => state.workshops,
		getEmployees: (state) => state.employees,
		getTeams: (state) => state.teams,
		getShifts: (state) => state.shifts

	},
	actions: {
		async fetchDictionaries() {
			// Заглушка, заменишь на API-запрос при наличии бэка
			const response = await fetch('/api/dictionaries');
			const data = await response.json();
			this.cities = data.cities;
			this.workshops = data.workshops;
			this.employees = data.employees;
			this.teams = data.teams;
			this.shifts = data.shifts;
		}
	}
});
