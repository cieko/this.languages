const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    resultText() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    result(i) {
      this.counter = this.counter + i;
    },
  },
});

app.mount("#assignment");
