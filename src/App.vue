<template>
  <navbar :pages="pages"  :active-Page="activePage"
    :nav-link-click="(index)=>activePage= index"></navbar>

<!--using if statement if pages.lenght is 0 PageViewer components will not be called -->

    <!-- <page-viewer v-if="pages.length>0"
    :page="pages[activePage]"></page-viewer> -->
<create-page
:page-created="pageCreated">
</create-page>
</template>
<script>

import  Navbar  from './components/Navbar.vue';
import   PageViewer  from './components/PageViewer.vue';
import   CreatePage  from './components/CreatePage.vue';

export default {
  // adding components which we are going to use 
  components: {
      Navbar,
    PageViewer,
    CreatePage
  },
  created(){
   this.getPages()
  },
  data() {
    return {
      // with the help of active page we are creating an index value : default 0 for home page which keeps on updating onClick Event
      // create variables here that can help to manipulate data
      activePage: 0,
      useDarkNavBar: true,

      pages: [],
    };
  },
  methods:{
    // fetching data from pages.json through a method
    // NOTE : learn more about aync and Await 
    async getPages(){
      let res =await fetch('pages.json')
      let data = await res.json();
     this.pages = data;
    },
    pageCreated(pageObj){
     console.log(pageObj)
      this.pages.push(pageObj)
    }
  }
};
</script>
