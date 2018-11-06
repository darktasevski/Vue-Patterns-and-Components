// Custom event utility class

window.Event = new class {
	constructor(props) {
		this.vue = new Vue();
	}

	fire(event, data = null) {
		this.vue.$emit(event, data)
	}

	listen(event, callback) {
		this.vue.$on(event, callback)
	}

}

Vue.component('button', {
	template: `<button @click="showAlert">Just a button</button>`,
	methods: {
		showAlert() {
			Event.fire('showAlert', {})
		}
	}
})

new Vue({
	el: '#root',
	data: {
		testData: 'test'
	},
	created() {
		Event.listen('showAlert', () => {
			alert('Alert displayed');
		})
	}
})
