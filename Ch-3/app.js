const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(i) {
      this.counter =
        this.counter == 100
          ? this.counter
          : this.counter + i > 100
          ? this.counter
          : this.counter + i;
    },
    subtract(i) {
      this.counter =
        this.counter == 0
          ? this.counter
          : this.counter - i < 0
          ? this.counter
          : this.counter - i;
    },
  },
});

app.mount("#events");
