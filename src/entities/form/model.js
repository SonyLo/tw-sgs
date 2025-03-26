import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
	state: () => ({
		city: null,
		workshop: null,
		employee: null,
		team: null,
		shift: null
	}),
	actions: {
		setFormData(data) {
			this.city = data.city;
			this.workshop = data.workshop;
			this.employee = data.employee;
			this.team = data.team;
			this.shift = data.shift;
		}
	}
});
