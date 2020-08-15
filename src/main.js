import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

// App manifest
import ManifestForm from "./app-manifest/Form";
import ManifestResult from "./app-manifest/Result";
import manifestJsonBuilder from "./app-manifest/handler";

var handlers = {};

Vue.component("app-manifest-form", ManifestForm);
Vue.component("app-manifest-result", ManifestResult);
handlers["app-manifest"] = manifestJsonBuilder;

Vue.use(Vuetify);

Vue.mixin({
  data() {
    return {
      playgrounds: handlers ? Object.keys(handlers) : undefined,
      defaultPlayground: handlers ? Object.keys(handlers)[0] : undefined
    };
  },
  methods: {
    handler: (pg, data) => {
      if (pg in handlers) {
        return handlers[pg](data);
      }
      return {};
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify()
}).$mount("#app");
