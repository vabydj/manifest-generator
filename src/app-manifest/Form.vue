<template>
  <div align="left">
    <p align="start">
      The
      <a href="https://www.w3.org/TR/appmanifest/">Web App Manifest</a> is a JSON document that provides application metadata for
      <a
        href="https://developers.google.com/web/progressive-web-apps?hl=en"
      >Progressive Web Apps</a>. Use the form below to generate the JSON file and optionally upload an app icon.
    </p>
    <v-row>
      <v-col align="stretch" justify="start">
        <v-text-field label="App Name" v-model="app_name" required></v-text-field>
        <v-text-field label="Short Name" v-model="short_name" required></v-text-field>
        <v-text-field label="Theme Color" v-model="theme_color" required></v-text-field>
        <v-text-field label="Background Color" v-model="background_color" required></v-text-field>
      </v-col>
      <v-col align="stretch" justify="start">
        <v-text-field label="Display Mode" v-model="display" required></v-text-field>
        <v-text-field label="Orientation" v-model="orientation" required></v-text-field>
        <v-text-field label="Application Scope" v-model="scope" required></v-text-field>
        <v-text-field label="Start Url" v-model="start_url" required></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="success" class="mr-4" @click="submit">Submit</v-btn>
  </div>
</template>

<script>
export default {
  name: "ManifestForm",
  data() {
    return {
      app_name: "",
      short_name: "",
      theme_color: "",
      background_color: "",
      display: "",
      orientation: "",
      scope: "",
      start_url: ""
    };
  },
  methods: {
    submit() {
      this.$emit("submit", {
        app_name: this.app_name,
        short_name: this.short_name,
        theme_color: this.theme_color,
        background_color: this.background_color,
        display: this.display,
        orientation: this.orientation,
        scope: this.scope,
        start_url: this.start_url
      });
    }
  }
};
</script>
