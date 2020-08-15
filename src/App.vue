<template>
  <v-app id="app">
    <v-app-bar app clipped-right color="blue-grey" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container fluid>
      <v-row>
        <v-col align="stretch" justify="start">
          <component @submit="onFormSubmit" :is="formComponent"></component>
        </v-col>
        <v-col align="stretch" justify="end">
          <component :result="result" :is="resultComponent"></component>
        </v-col>
      </v-row>
    </v-container>

    <v-footer app color="blue-grey" class="white--text">
      <span>{{ credits }}</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Web App Manifest Generator",
      credits: "VabyDJ",
      result: {},
      pg: ""
    };
  },
  created() {
    this.pg = this.defaultPlayground;
  },
  computed: {
    formComponent() {
      return this.pg + "-form";
    },
    resultComponent() {
      return this.pg + "-result";
    }
  },
  methods: {
    async onFormSubmit(data) {
      console.log(`Form submitted with data ${JSON.stringify(data)}`);
      this.result = await this.handler(this.pg, data);
      console.log(`Got result from handler ${JSON.stringify(this.result)}`);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
}

a {
  text-decoration: none;
}
</style>
