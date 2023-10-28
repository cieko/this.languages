const app = Vue.createApp({
  data() {
    return {
      firstText: "",
      secondText: "",
    };
  },
  methods: {
    showAlert() {
      alert("Your mom just got fucked bro!");
    },
    setFirstText(e) {
      this.firstText = e.target.value;
    },
    setSecondText(e) {
      this.secondText = e.target.value;
    },
  },
});

app.mount("#assignment");
