<template>
  <div id="editormd">
    <textarea style="display:none;"></textarea>
  </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "editormd",
        data: function () {
            return {editorInstance: {}};
        },
        methods: {
            getMarkdown() {
                debugger
                if (this.editorInstance) {
                    return this.editorInstance.getMarkdown();
                } else {
                    return "";
                }
            },
            getHTML() {
                if (this.editorInstance) {
                    return this.editorInstance.getHTML();
                } else {
                    return "";
                }
            }
        },
        mounted: function(){
            let self = this;
            $.getScript('static/editormd/editormd.min.js', () => {
                $.getScript('static/editormd/plugins/copy-image/copy-image.js', () => {
                    let editorInstance = editormd("editormd", {
                        path: "static/editormd/lib/",
                        width: '90%',
                        height: '560px',
                        saveHTMLToTextarea: true,
                        imageUpload: true,
                        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
                        imageUploadURL: "http://localhost:3000/rest/static/img",
                        onload: function () {
                            this.copyImage();
                        }
                    });
                    self.editorInstance=editorInstance;
                    console.log(self);
                })
            });
        },

    }
</script>

<style scoped>
  #editormd {
    width: 100% !important;
  }
</style>
