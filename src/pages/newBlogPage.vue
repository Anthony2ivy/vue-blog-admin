<template>
  <div>
    <Breadcrumb>
      <Card shadow class="full-card">
        <p slot="title">
          <BreadcrumbItem>
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
              <Input v-model="uploadBlogForm.intro" type="textarea" style="max-width: 700px"></Input>
            </FormItem>
            <FormItem label="标签">
              <TagInput v-model="uploadBlogForm.tags"></TagInput>
            </FormItem>
            <FormItem label="详细内容">
              <editormd ref=""></editormd>
            </FormItem>
          </Form>
        </div>
      </Card>
    </Breadcrumb>
  </div>

</template>

<script>
    import Editormd from '../components/Editormd'
    import TagInput from "../components/TagInput";

    export default {
        name: "newBlogPage",
        data: function () {
            return {
                uploadBlogForm: {
                    title:"",
                    intro:"",
                    tags:[]
                },
                uploadEditor: {},
            };
        },
        mounted: function () {
        },
        components: {
            "Editormd": Editormd,
            "TagInput": TagInput
        }
    }
</script>

<style scoped>

</style>
