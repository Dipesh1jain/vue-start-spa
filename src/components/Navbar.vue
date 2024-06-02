<template>
  <nav
    :class="[
      `navbar-${theme}`,
      `bg-${theme}`,
      'navbar',
      'navbar navbar-expand-lg',
    ]"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lb-0">
        <!-- how normal HTML works -add more links for  future make more list items -->
        <!-- nowusing VUE's "v-for" derective which is just like for-in loop to create a multiple copies of list based on Links arr size  -->
        <li v-for="(page, index) in pages" class="nav-item" :key="index">
          <!-- in order to bind the data with 'href' we use directive "v-bind" or simply ":" before the property
                                    this will bind the data lets say to a link , coz '{{}}' these braces handles JS code and we simply want the link for href attriubte-->
          <!-- "v-on:" or "@ "direictive used to handle the on click or onmouseover function-->
          <!-- prevent property is used of on click to prevent href to open a new url instead load the content in it -->
          <!-- applying a conditional statemnt to a class using bind directive on class, here we are uplading the active property of
                                        HTml based on the condition if activePage == index
                                        NOT: if a property take Hyphens "- " then need to add " '' " brakects to consider it as string 
                                        syntax ------ :class:{'propertyName=condition','propertyName2':boolean ........}-->
          <!-- <a
            class="nav-link"
            :class="{ active: activePage == index }"
            aria-current="page"
            :href="page.link.url"
            :title="`this link goes to ${page.link.text} page`"
            @click.prevent="navLinkClick(index)"
            >{{ page.link.text }}
          </a> -->
          <navbar-link
          :page="page"
          :isActive="activePage==index"
          @click.prevent="navLinkClick(index)"

          ></navbar-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          Toggle NavBar
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
import NavbarLink from './NavbarLink.vue'
export default {
  components:{
    NavbarLink
  },
   props: ['pages', 'activePage','navLinkClick'],
            data(){
                return {
                    theme: 'light',
                        };
                    },
            methods: {
                changeTheme() {
                    let theme = 'light'
                    if (this.theme == 'light') {
                        theme = 'dark'
                    }
                    this.theme = theme
                }
            }
};
         
        
</script>
