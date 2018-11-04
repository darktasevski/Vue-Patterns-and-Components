<script>
export default {
	props: ['tag'],
	data() {
		return {};
	},
	render(createElement) {
		// createElement accepts three arguments
		// the first one is the element we want to create
		// the second one is the object of attributes we want to provide to the element (class etc.)
		// the third one is elements children
		return createElement(
			this.tag,
			{
				attrs: {
					class: 'btn btn-blue',
				},
				// we can also pass the event listeners to the created element
				on: {
					click: () => alert('Clicked!'),
				},
			},
			'Hello world!'
		);
	},
};
</script>
