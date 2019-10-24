<template>
  <div>
    <Input prefix="md-pricetags" clearable @on-enter="addTag" v-model="inputValue" placeholder="请输入标签" style="max-width: 300px" ></Input>
    <div class="tag-list" style="margin-top: 10px">
      <Tag type="border"  size="medium" v-for="item in tagList" :key="item" :name="item" closable @on-close="tagClose">{{item}}</Tag>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TagInput",
        data: function () {
            return {
                inputValue: ""
            }
        },
        model: {
            prop: "tagList",
            event: "change"
        },
        props: {
            tagList: {
                type: Array,
                require: true,
                default: []
            }
        },
        methods: {
            tagClose(event, name) {
                const index = this.tagList.indexOf(name);
                this.tagList.splice(index, 1);
            },
            addTag(event) {
                if (this.tagList.indexOf(this.inputValue) < 0) {
                    this.tagList.push(this.inputValue);
                }
                this.inputValue = "";
            }
        }
    }
</script>

<style scoped>

</style>
