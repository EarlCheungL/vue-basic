<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
      <h2 v-rainbow>
        {{blog.title | to-uppercase}}
      </h2>
      </router-link>
      <article v-html="$options.filters.msg(blog.content)">
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  filters:{
        msg(msg) {
            return msg.slice(0, 100) + "...";
        }
      },
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  created(){
    this.$http
    .get("https://vue-basic-8ede5.firebaseio.com/posts.json")
    .then(function(data){
      // console.log(data);
      //this.blogs=data.body.slice(0,10);
      return data.json()
    })
    .then(function(data){
      var blogsArray=[];
      for(let key in data){
        data[key].id=key;
        blogsArray.push(data[key]);
      }
      this.blogs=blogsArray;
    })
  },
  computed:{
    filteredBlogs(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs{
  max-width:800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: grey;
  border: 1px dotted black;
}
#show-blogs a{
  color:#444;
  text-decoration: none; 
}
input[type="text"]{
  padding: 8px;
  width:100%;
  box-sizing: border-box;
}
</style>
