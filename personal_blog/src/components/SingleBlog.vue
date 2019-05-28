<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article v-html="blog.content"></article>
    <p>作者:{{blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"single-blog",
  data(){
    return{
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
      this.$http.get("https://vue-basic-8ede5.firebaseio.com/posts/"
       +this.id+".json")
      .then(function(data){
        return data.json();
      })
      .then(function(data){
        this.blog=data;
      })
    }
}
</script>

<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding:20px;
    background: grey;
    border:1px dotted black;
  }
</style>