<template>
	<form @submit.prevent="handleSubmit">
		<select v-model="selectedCity">
			<option v-for="city in cities" :key="city.id" :value="city.id">
				{{ city.name }}
			</option>
		</select>

		<select v-model="selectedWorkshop">
			<option v-for="workshop in filteredWorkshops" :key="workshop.id" :value="workshop.id">
				{{ workshop.name }}
			</option>
		</select>

		<select v-model="selectedEmployee">
			<option v-for="employee in filteredEmployees" :key="employee.id" :value="employee.id">
				{{ employee.name }}
			</option>
		</select>

		<select v-model="selectedTeam">
			<option v-for="team in teams" :key="team.id" :value="team.id">
				{{ team.name }}
			</option>
		</select>

		<select v-model="selectedShift">
			<option v-for="shift in shifts" :key="shift.id" :value="shift.id">
				{{ shift.name }}
			</option>
		</select>

		<button type="submit">Сохранить</button>
	</form>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useFormStore } from '@/entities/form/model';

export default {
	setup() {
		const router = useRouter();
		const formStore = useFormStore();

		const cities = ref([{ id: 1, name: 'Москва' }, { id: 2, name: 'СПб' }]);
		const workshops = ref([{ id: 1, cityId: 1, name: 'Цех 1' }, { id: 2, cityId: 2, name: 'Цех 2' }]);
		const employees = ref([{ id: 1, workshopId: 1, name: 'Иван' }, { id: 2, workshopId: 2, name: 'Петр' }]);
		const teams = ref([{ id: 1, name: 'Бригада 1' }, { id: 2, name: 'Бригада 2' }]);
		const shifts = ref([{ id: 1, name: 'Первая смена' }, { id: 2, name: 'Вторая смена' }]);

		const selectedCity = ref(null);
		const selectedWorkshop = ref(null);
		const selectedEmployee = ref(null);
		const selectedTeam = ref(null);
		const selectedShift = ref(null);

		const filteredWorkshops = computed(() => workshops.value.filter(w => w.cityId === selectedCity.value));
		const filteredEmployees = computed(() => employees.value.filter(e => e.workshopId === selectedWorkshop.value));

		const handleSubmit = () => {
			formStore.setFormData({
				city: selectedCity.value,
				workshop: selectedWorkshop.value,
				employee: selectedEmployee.value,
				team: selectedTeam.value,
				shift: selectedShift.value
			});
			router.push('/result');
		};

		return { cities, filteredWorkshops, filteredEmployees, teams, shifts, selectedCity, selectedWorkshop, selectedEmployee, selectedTeam, selectedShift, handleSubmit };
	}
};
</script>
