<template>
	<div class="container d-flex align-items-center" style="height: 100vh;">
		<div class="row w-100">
			<div class="col-md-12">
				<h2 class="text-center">Форма ввода данных</h2>
				<DataForm />
			</div>
		</div>
	</div>
</template>



<script>
import DataForm from '@/shared/ui/DataForm.vue';

export default {
	components: { DataForm }
};
</script>
