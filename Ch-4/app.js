const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      const temp = ["boxASelected", "boxBSelected", "boxCSelected"];
      this[temp.find((item) => item[3] === box)] = true;
    },
  },
});

app.mount("#styling");
