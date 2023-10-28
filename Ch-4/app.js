const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    reset() {
      this.boxASelected = false;
      this.boxBSelected = false;
      this.boxCSelected = false;
    },
    boxSelected(box) {
      // this.reset();
      const temp = ["boxASelected", "boxBSelected", "boxCSelected"];
      this[temp.find((item) => item[3] === box)] =
        !this[temp.find((item) => item[3] === box)];
    },
  },
});

app.mount("#styling");
