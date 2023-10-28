const app = Vue.createApp({
  data() {
    return {
      i: 0,
      counter: 0,
      name: "",
      confirmedName: "",
      fullname: "",
    };
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + "Saxena";
      }
    },
  },
  computed: {
    // fullname() {
    //   if (this.name === "") {
    //     return;
    //   }
    //   return this.name + " " + "Saxena";
    // },
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
      this.name = e.target.value;
    },
    resetName() {
      this.name = "";
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    outputFullname() {
      if (this.name === "") {
        return;
      }
      return this.name + " " + "Saxena";
    },
    handleI(e) {
      this.i = Number(e.target.value) ? Number(e.target.value) : 1;
    },
    submitForm() {
      alert("WHy?");
    },
  },
});

app.mount("#events");
