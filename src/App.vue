<template>
  <navbar :pages="pages"  :active-Page="activePage"
    :nav-link-click="(index)=>activePage= index"></navbar>

    <page-viewer :page="pages[activePage]"></page-viewer>

</template>
<script>

import  Navbar  from './components/Navbar.vue';
import   PageViewer  from './components/PageViewer.vue';

export default {
  // adding components which we are going to use 
  components: {
      Navbar,
    PageViewer
  },
  data() {
    return {
      // with the help of active page we are creating an index value : default 0 for home page which keeps on updating onClick Event
      // create variables here that can help to manipulate data
      activePage: 0,
      useDarkNavBar: true,

      pages: [
        {
          link: { text: "Home", url: "index.html" },
          pageTitle: "HOME PAGE",
          content: "This is Home Page",
        },
        {
          link: { text: "About", url: "about.html" },
          pageTitle: "ABOUT PAGE",
          content: "This is About Page",
        },
        {
          link: { text: "Contact", url: "contact.html" },
          pageTitle: "CONTACT PAGE",
          content: "This is Contact Page",
        },
      ],
    };
  },
};
</script>
