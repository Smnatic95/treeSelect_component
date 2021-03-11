Component({
  mixins: [],
  data: {},
  props: {
    cityList: []
  },
  didMount() {
  },
  didUpdate() {
  },
  didUnmount() { },
  methods: {
    changedown(e) {
      console.log('change111');
      this.props.onChangedown(e);
    },
    checkedChange(e) {
      this.props.onCheckedChange(e);
    }
  },
});
