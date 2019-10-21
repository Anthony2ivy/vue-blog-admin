<template>
  <div id="editormd">
    <textarea style="display:none;">### Hello Editor.md !</textarea>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "editormd",
    methods: {
    },
    mounted: () => {
      $.getScript('static/lib/editormd/editormd.min.js',function () {
          var editor = window.editormd("editormd", {
              path: "static/lib/editormd/lib/",
              width:'90%',
              height:'560px',
              imageUpload    : true,
              imageFormats   : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
              imageUploadURL : "http://localhost:3000/rest/static/img"
          });
      });
    },

  }
</script>

<style scoped>
</style>
