<template>
  <div  class="container">
        <h1 class="emphasize" >{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>
<script>
export default {
    
            props: ['page']
    
};
</script>
// scoped attribute scopes the changes within the attribute
<style scoped>
.emphasize{
  color:red
}
  </style>