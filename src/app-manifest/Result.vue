<template>
  <div align="start">
    <div align="center" class="transition-swing text-h4">manifest.json</div>
    <JsonViewer v-if="result.output" :value="result.output" :expand-depth="5" copyable boxed sort></JsonViewer>
  </div>
</template>

<script>
import JsonViewer from "vue-json-viewer";

export default {
  name: "ManifestResult",
  props: {
    result: Object
  },
  components: {
    JsonViewer
  }
};
</script>