const app = Vue.createApp({
  data() {
    return {
      i: 0,
      counter: 0,
      name: "",
    };
  },
  methods: {
    add() {
      this.counter =
        this.counter == 100
          ? this.counter
          : this.counter + this.i > 100
          ? this.counter
          : this.counter + this.i;
    },
    subtract() {
      this.counter =
        this.counter == 0
          ? this.counter
          : this.counter - this.i < 0
          ? this.counter
          : this.counter - this.i;
    },
    setName(e, surname) {
      this.name = e.target.value + ` ` + surname;
    },
    handleI(e) {
      this.i = Number(e.target.value) ? Number(e.target.value) : 1;
    },
    submitForm(e) {
      e.preventDefault();
      alert("WHy?");
    },
  },
});

app.mount("#events");
