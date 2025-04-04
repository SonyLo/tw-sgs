import { baseApi } from '@/shared/api/baseApi';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import { mockDictionaries } from '@/shared/api/mockData';

export const dictionaryApi = {
	async getAllDictionaries() {
		// Временное решение с моковыми данными
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(mockDictionaries);
			}, 500); // Имитация задержки сети
		});
	},

	async getCities() {
		const response = await baseApi.get(API_ENDPOINTS.dictionaries.cities);
		return response.data;
	},

	async getWorkshops() {
		const response = await baseApi.get(API_ENDPOINTS.dictionaries.workshops);
		return response.data;
	},

	async getEmployees() {
		const response = await baseApi.get(API_ENDPOINTS.dictionaries.employees);
		return response.data;
	},

	async getTeams() {
		const response = await baseApi.get(API_ENDPOINTS.dictionaries.teams);
		return response.data;
	},

	async getShifts() {
		const response = await baseApi.get(API_ENDPOINTS.dictionaries.shifts);
		return response.data;
	}
}; 