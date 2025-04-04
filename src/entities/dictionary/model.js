import { defineStore } from 'pinia';
import { dictionaryApi } from './api/dictionaryApi';

export const useDictionaryStore = defineStore('dictionary', {
	state: () => ({
		cities: [],
		workshops: [],
		employees: [],
		teams: [],
		shifts: []
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
			try {
				const data = await dictionaryApi.getAllDictionaries();
				this.cities = data.cities;
				this.workshops = data.workshops;
				this.employees = data.employees;
				this.teams = data.teams;
				this.shifts = data.shifts;
			} catch (error) {
				console.error('Error fetching dictionaries:', error);
				// Здесь можно добавить обработку ошибок, например, показ уведомления пользователю
			}
		}
	}
});
