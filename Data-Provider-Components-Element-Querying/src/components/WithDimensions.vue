<script>
import elementResizeDetectorMaker from 'element-resize-detector';

const erd = elementResizeDetectorMaker({ strategy: 'scroll' });

export default {
	data() {
		return {
			width: null,
			height: null,
		};
	},
	mounted() {
		// we can access the root element of the component with $el
		erd.listenTo(this.$el, el => {
			this.width = el.offsetWidth;
			this.height = el.offsetHeight;
		});
	},
	render() {
		return this.$scopedSlots.default({
			width: this.width,
			height: this.height,
		});
	},
};
</script>
