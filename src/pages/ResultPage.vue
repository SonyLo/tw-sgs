<!-- <template>
	<div>
		<h2>Сохраненные данные</h2>

		<pre>{{ formData }}</pre>
		<router-link to="/">Назад</router-link>
	</div>
</template>

<script>
import { useFormStore } from '@/entities/form/model';

export default {
	setup() {
		const formStore = useFormStore();
		return { formData: formStore.$state };
	}
};
</script> -->



<template>
	<div class="container mt-5">
		<h2 class="text-center mb-4">Сохраненные данные</h2>

		<!-- Таблица для отображения данных -->
		<table class="table table-bordered table-striped">
			<thead class="table-dark">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Город</th>
					<th scope="col">Цех</th>
					<th scope="col">Сотрудник</th>
					<th scope="col">Бригада</th>
					<th scope="col">Смена</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(form, index) in formData.forms" :key="index">
					<th scope="row">{{ index + 1 }}</th>
					<td>{{ dictionaryStore.getCityById(form.city) }}</td>
					<td>{{ dictionaryStore.getWorkshopById(form.workshop) }}</td>
					<td>{{ dictionaryStore.getEmployeeById(form.employee) }}</td>
					<td>{{ dictionaryStore.getTeamById(form.team) }}</td>
					<td>{{ dictionaryStore.getShiftById(form.shift) }}</td>
				</tr>
			</tbody>
		</table>

		<!-- Кнопка "Назад" -->
		<div class="text-center">
			<router-link to="/" class="btn btn-primary">Назад</router-link>
		</div>
	</div>
</template>

<script>
import { useFormStore } from '@/entities/form/model';
import { useDictionaryStore } from '@/entities/dictionary/model';

export default {
	setup() {
		const dictionaryStore = useDictionaryStore();
		const formStore = useFormStore();
		// console.log(formStore.$state)
		return { formData: formStore.$state, dictionaryStore };
	}

};
</script>

<style scoped>
.container {
	max-width: 800px;
	margin: 0 auto;
}
</style>