<template>
  <div id="add-blog">
   <h2>添加博客</h2>
   <form v-if="!submmited">
     <label>博客标题</label>
     <input type="text" v-model="blog.title" required/>
     <label>博客内容</label>
     <vue-editor v-model="blog.content"></vue-editor>
     <label>博客分类</label>
     <div id="checkboxes">
       <label>Vue.js</label>
       <input type="checkbox" value="Vue.js" v-model="blog.categories">
       <label>Node.js</label>
       <input type="checkbox" value="Node.js" v-model="blog.categories">
       <label>React.js</label>
       <input type="checkbox" value="React.js" v-model="blog.categories">
       <label>Angular.js</label>
       <input type="checkbox" value="Angular.js" v-model="blog.categories">
     </div>
     <label>作者</label>
     <select v-model="blog.author">
       <option v-for="author in authors" :key="author">{{author}}</option>
     </select>
     <button @click.prevent="save">添加博客</button>
   </form>
   <hr>
   <div v-if="submmited">
     <h3>您的博客发布成功！</h3>
   </div>
   <div id="preview">
     <h3>博客总览</h3>
     <p>博客标题:{{blog.title}}</p>
     <p>博客内容:</p>
     <p v-html="blog.content"></p>
     <p>博客分类:</p>
     <ul>
       <li v-for="category in blog.categories" :key="category">{{category}}</li>
     </ul>
     <p>作者:{{blog.author}}</p>
   </div>
  </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'
export default {
  name: 'add-blog',
  components: {
      VueEditor
    },
  data () {
    return {
      blog:{
        categories:[]
      },
      authors:["Jamy","Tom","Jarry"],
      submmited:false
    }
  },
  methods:{
     async save(){
      let res
      if (this.id){
         res=await this.$http.put(`rest/articles/${this.id}`,this.model)
      }else{
         res=await this.$http.post('rest/articles',this.model)
      }
      this.$router.push('/')
      this.$message({
        type:'success',
        message:'保存成功！'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin:20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width:100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkboxes label{
  display: inline-block;
  margin-top:0;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background: gray;
  color: whitesmoke;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border:1px dotted black;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>
