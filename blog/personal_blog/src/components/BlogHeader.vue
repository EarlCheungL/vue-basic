<template>
<nav>
  <ul>
    <li>
      <router-link to="/" exact>博客</router-link>
      <router-link to="/add" exact>写博客</router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'blog-header',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: aliceblue;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav{
  background: gray;
  padding: 30px 0;
  margin-bottom: 40px;
}
.router-link-active{
  background: rgba(255, 255, 255, 0.7);
  color:#444;
}
</style>
