const app = Vue.createApp({
  data() {
    return {
      courseGoal: ["Finish the course", "sleep"],
      text: "<h3 style={{ color: `white` }}>Hey</h3>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
