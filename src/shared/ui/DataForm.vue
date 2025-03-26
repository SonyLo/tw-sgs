<!-- <template>
	<form @submit.prevent="handleSubmit">
		<div class="input-group mb-3 mt-2">
			<select class="form-select" v-model="selectedCity">
				<option v-for="city in cities" :key="city.id" :value="city.id">
					{{ city.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedWorkshop">
				<option v-for="workshop in filteredWorkshops" :key="workshop.id" :value="workshop.id">
					{{ workshop.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedEmployee">
				<option v-for="employee in filteredEmployees" :key="employee.id" :value="employee.id">
					{{ employee.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedTeam">
				<option v-for="team in teams" :key="team.id" :value="team.id">
					{{ team.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedShift">
				<option v-for="shift in shifts" :key="shift.id" :value="shift.id">
					{{ shift.name }}
				</option>
			</select>
			<button class="btn btn-success" type="submit">Сохранить</button>
			<button class="btn btn-success" type="submit"><i class="bi bi-x-circle"></i></button>
		</div>

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

		const cities = ref(
			[
				{ id: 1, name: 'Москва' },
				{ id: 2, name: 'СПб' }
			]
		);
		const workshops = ref(
			[
				{ id: 1, cityId: 1, name: 'Цех 1' },
				{ id: 2, cityId: 2, name: 'Цех 2' }
			]
		);
		const employees = ref(
			[
				{ id: 1, workshopId: 1, name: 'Иван' },
				{ id: 2, workshopId: 2, name: 'Петр' }
			]
		);
		const teams = ref(
			[
				{ id: 1, name: 'Бригада 1' },
				{ id: 2, name: 'Бригада 2' }]
		);
		const shifts = ref(
			[
				{ id: 1, name: 'Первая смена' },
				{ id: 2, name: 'Вторая смена' }
			]
		);

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
</script> -->



<template>
	<form @submit.prevent="handleSubmit">
		<div class="input-group mb-3 mt-2">
			<select class="form-select" v-model="selectedCity">
				<option :value="null">Все города</option>
				<option v-for="city in cities" :key="city.id" :value="city.id">
					{{ city.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedWorkshop">
				<option :value="null">Все цехи</option>
				<option v-for="workshop in filteredWorkshops" :key="workshop.id" :value="workshop.id">
					{{ workshop.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedEmployee">
				<option :value="null">Все сотрудники</option>
				<option v-for="employee in filteredEmployees" :key="employee.id" :value="employee.id">
					{{ employee.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedTeam">
				<option :value="null">Выберите бригаду</option>
				<option v-for="team in teams" :key="team.id" :value="team.id">
					{{ team.name }}
				</option>
			</select>

			<select class="form-select" v-model="selectedShift">
				<option :value="null">Выберите смену</option>
				<option v-for="shift in shifts" :key="shift.id" :value="shift.id">
					{{ shift.name }}
				</option>
			</select>

			<button class="btn btn-success" type="submit">Сохранить</button>
			<button type="button" class="btn btn-success" @click="clearSelect"><i class="bi bi-x-circle"></i></button>
		</div>
	</form>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useFormStore } from '@/entities/form/model';

export default {
	setup() {
		const router = useRouter();
		const formStore = useFormStore();

		const cities = ref([
			{ id: 1, name: 'Москва' },
			{ id: 2, name: 'СПб' },
			{ id: 3, name: 'РНД' }
		]);

		const workshops = ref([
			{ id: 1, cityId: 1, name: 'Цех 1' },
			{ id: 2, cityId: 2, name: 'Цех 2' },
			{ id: 3, cityId: 3, name: 'Цех 3' }
		]);

		const employees = ref([
			{ id: 1, workshopId: 1, name: 'Иван' },
			{ id: 2, workshopId: 2, name: 'Петр' },
			{ id: 3, workshopId: 3, name: 'Анатолий' },
			{ id: 4, workshopId: 3, name: 'Николай' },

		]);

		const teams = ref([
			{ id: 1, name: 'Бригада 1' },
			{ id: 2, name: 'Бригада 2' },
			{ id: 3, name: 'Бригада 3' }
		]);

		const shifts = ref([
			{ id: 1, name: 'Первая смена' },
			{ id: 2, name: 'Вторая смена' },
			{ id: 3, name: 'Третья смена' }
		]);

		const selectedCity = ref(null);
		const selectedWorkshop = ref(null);
		const selectedEmployee = ref(null);
		const selectedTeam = ref(null);
		const selectedShift = ref(null);

		const filteredWorkshops = computed(() => {
			if (!selectedCity.value) return workshops.value; // Если город не выбран, показываем все цехи
			return workshops.value.filter(w => w.cityId === selectedCity.value);
		});

		const filteredEmployees = computed(() => {
			if (!selectedWorkshop.value) return employees.value; // Если цех не выбран, показываем всех сотрудников
			return employees.value.filter(e => e.workshopId === selectedWorkshop.value);
		});

		const clearSelect = () => {
			// console.log("GHBD")
			selectedCity.value = null;
			selectedWorkshop.value = null;
			selectedEmployee.value = null;
			selectedTeam.value = null;
			selectedShift.value = null;
		}


		// Если выбран сотрудник → устанавливаем соответствующий цех и город
		watch(selectedEmployee, (newEmployee) => {
			if (newEmployee) {
				const employee = employees.value.find(e => e.id === newEmployee);
				const workshop = workshops.value.find(w => w.id === employee.workshopId);
				if (workshop) {
					selectedWorkshop.value = workshop.id;
					selectedCity.value = workshop.cityId;
				}
			}
		});

		// Если выбран цех, но не выбран город → устанавливаем город
		watch(selectedWorkshop, (newWorkshop) => {
			if (newWorkshop && !selectedCity.value) {
				const workshop = workshops.value.find(w => w.id === newWorkshop);
				if (workshop) {
					selectedCity.value = workshop.cityId;
				}
			}
		});

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

		return {
			cities,
			filteredWorkshops,
			filteredEmployees,
			teams,
			shifts,
			selectedCity,
			selectedWorkshop,
			selectedEmployee,
			selectedTeam,
			selectedShift,
			handleSubmit,
			clearSelect
		};
	}
};
</script>
