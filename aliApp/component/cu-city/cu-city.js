Component({
  mixins: [],
  data: {
    cityx: []
  },
  props: {
    city: [],
    show: 0
  },
  didMount() {
    let cityx = this.props.city;
    this.initList(cityx,"");
    this.setData({
      cityx
    })
    console.log(cityx)
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    checkedChange(e) {
      let that = this
      let citys = this.data.cityx;
      let lastA = [];
      let targ = e.currentTarget.dataset.code.split('-');
      targ.forEach((item, index) => {
        lastA.push(item - 1);
        let lastA1 = JSON.parse(JSON.stringify(lastA));
        targ[index] = lastA1;
      });
      targ.forEach((item, index) => {
        if (index == targ.length - 1) {
          let chosCity;
          item.forEach((pos, index) => {
            if (index == 0) {
              chosCity = citys[pos];
            } else {
              chosCity = chosCity.subList[pos]
            }
            e.detail.value && (chosCity.isChecked = true, chosCity.down = true);
          });
          chosCity.subList && deepChecked(chosCity, e.detail.value);
        }
      });
      if (!e.detail.value && targ.length > 1) {
        for (var i = targ.length - 2; i >= 0; i--) {
          let curCity;
          targ[i].forEach((item, index) => {
            if (index == 0) {
              curCity = citys[item];
            } else {
              curCity = curCity.subList[item];
            }
          })
          let isSubNoneChecked = curCity.subList.some((city) => {
            return city.isChecked == true
          });
          curCity.isChecked = isSubNoneChecked;
        };
      }
      function deepChecked(selectobj, checkStatus) {
        selectobj.isChecked = checkStatus;
        selectobj.subList.forEach(city => {
          city.isChecked = checkStatus;
          city.subList && deepChecked(city, checkStatus);
        });
      }
      that.setData({
        cityx: citys
      })
    },
    changedown(e) {
      let voo = e.currentTarget.dataset.ctcode.split('-')
      let citys = this.data.cityx;
      let cur_city;
      voo.forEach((item, index) => {
        if (index == 0) {
          cur_city = citys[item - 1]
        } else {
          cur_city = cur_city.subList[item - 1]
        }
      })
      cur_city.down = !cur_city.down
      this.setData({
        cityx: citys
      })
      console.log(citys)
    },
    initList(arr, floor) {
      arr.forEach((city, index) => {
        city.code = floor + (floor && '-') + (index + 1);
        city.down = false;
        if (city.subList) {
          this.initList(city.subList, city.code)
        }
      })
    }
  },
});
