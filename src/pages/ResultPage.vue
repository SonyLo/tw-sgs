<template>
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
</script>
