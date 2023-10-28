const app = Vue.createApp({
  data() {
    return {
      name: "Cieko",
      random: Math.random(),
      imageUrl:
        "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
      inputValue: "Study Vue!",
    };
  },
  methods: {
    calcAge() {
      const date = new Date();
      const currentYear = date.getFullYear();
      const DOBYear = 1999;
      return Number(currentYear) - DOBYear;
    },
  },
});

app.mount("#assignment");
