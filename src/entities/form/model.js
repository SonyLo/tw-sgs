import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
	state: () => ({
		forms: [] // массив для хранения объектов формы
	}),
	actions: {
		setFormData(data) {
			this.forms.push({ ...data }); // добавляет новый объект формы в массив
		},
		removeForm(index) {
			this.forms.splice(index, 1); // удаляет форму по индексу
		},
		updateForm(index, data) {
			if (this.forms[index]) {
				this.forms[index] = { ...data }; // обновляет форму по индексу
			}
		}
	}
});


// import { defineStore } from 'pinia';

// export const useFormStore = defineStore('form', {
// 	state: () => ({
// 		formData: {
// 			city: '',
// 			workshop: '',
// 			employee: '',
// 			brigade: '',
// 			shift: '',
// 		},
// 	}),
// 	actions: {
// 		setFormData(data) {
// 			this.formData = data;
// 		},
// 	},
// });