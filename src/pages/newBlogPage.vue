<template>
  <div>
    <Breadcrumb>
      <Card shadow class="full-card">
        <p slot="title">
          <BreadcrumbItem >
            <Icon type="md-home"></Icon>
            发布新博客
          </BreadcrumbItem>
        </p>
        <div>
          <Form :model="uploadBlogForm" label-position="top">
            <FormItem label="标题">
              <Input v-model="uploadBlogForm.title" style="max-width: 700px"></Input>
            </FormItem>
            <FormItem label="简介">
              <Input v-model="uploadBlogForm.remark" type="textarea" style="max-width: 700px"></Input>
            </FormItem>
            <FormItem label="详细内容">
              <editormd></editormd>
            </FormItem>
          </Form>
        </div>
      </Card>
    </Breadcrumb>
  </div>

</template>

<script>
  import editormd from '../components/editormd'
  export default {
    name: "newBlogPage",
    data:function () {
      return {
        uploadBlogForm:{},
        uploadEditor:{}
      };
    },
    mounted: function () {
    },
    components:{
      "Editormd":editormd
    }
  }
</script>

<style scoped>

</style>
