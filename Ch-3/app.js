const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter = this.counter == 100 ? this.counter : this.counter + 1;
    },
    subtract() {
      this.counter = this.counter == 0 ? this.counter : this.counter - 1;
    },
  },
});

app.mount("#events");
