<!-- <template>
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
			<button type="button" class="btn btn-secondary" @click="clearSelect"><i class="bi bi-x-circle"></i></button>
		</div>
	</form>

</template> -->


<template>
	<form @submit.prevent="handleSubmit">
		<div class="d-flex flex-wrap gap-2 w-100 mt-2">
			<select class="form-select w-100 w-md-auto" v-model="selectedCity">
				<option :value="null">Все города</option>
				<option v-for="city in cities" :key="city.id" :value="city.id">
					{{ city.name }}
				</option>
			</select>

			<select class="form-select w-100 w-md-auto" v-model="selectedWorkshop">
				<option :value="null">Все цехи</option>
				<option v-for="workshop in filteredWorkshops" :key="workshop.id" :value="workshop.id">
					{{ workshop.name }}
				</option>
			</select>

			<select class="form-select w-100 w-md-auto" v-model="selectedEmployee">
				<option :value="null">Все сотрудники</option>
				<option v-for="employee in filteredEmployees" :key="employee.id" :value="employee.id">
					{{ employee.name }}
				</option>
			</select>

			<select class="form-select w-100 w-md-auto" v-model="selectedTeam">
				<option :value="null">Выберите бригаду</option>
				<option v-for="team in teams" :key="team.id" :value="team.id">
					{{ team.name }}
				</option>
			</select>

			<select class="form-select w-100 w-md-auto" v-model="selectedShift">
				<option :value="null">Выберите смену</option>
				<option v-for="shift in shifts" :key="shift.id" :value="shift.id">
					{{ shift.name }}
				</option>
			</select>

			<div class="d-flex gap-2 w-100 w-md-auto">
				<button class="btn btn-success flex-grow-1" type="submit">Сохранить</button>
				<button type="button" class="btn btn-secondary" @click="clearSelect">
					<i class="bi bi-x-circle"></i>
				</button>
			</div>
		</div>
	</form>
</template>



<script>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useFormStore } from '@/entities/form/model';
import { useDictionaryStore } from '@/entities/dictionary/model';




export default {

	setup() {
		const router = useRouter();
		const formStore = useFormStore();



		const dictionaryStore = useDictionaryStore();

		const cities = computed(() => dictionaryStore.getCities);
		const workshops = computed(() => dictionaryStore.getWorkshops);
		const employees = computed(() => dictionaryStore.getEmployees);
		const teams = computed(() => dictionaryStore.getTeams);
		const shifts = computed(() => dictionaryStore.getShifts);

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
			if (!selectedCity.value || !selectedWorkshop.value || !selectedEmployee.value || !selectedTeam.value || !selectedShift.value) {
				alert("Заполните все нужные поля")
				return
			}

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
			clearSelect,

		};
	}
};
</script>
