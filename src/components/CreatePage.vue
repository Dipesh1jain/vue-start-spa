<template>
  <div class="container mb-3">
    <form action="">
    <div class="row">
    <div class="col-md-8">
        <div class="mb-3">
      <label for="" class="form-label">
        Page Title
      </label>
             <!-- bind the data  using v-model -->
       <input type="text" class="form-control" 
       v-model="pageTitle"
       ></input>
      </div>

        <div class="mb-3">

         <label for="" class="form-label" >Content</label>
        <textarea type="text"
            class="form-control"
            rows="5"
            v-model="content">
        </textarea>
        </div>
        </div>
 <div class="col">
   <div class="mb-3">
         <label for="" class="form-label" >Link Test</label>
        <input type="text"
            class="form-control"
        
            v-model="LinkText">
        </input>
    </div>
   <div class="mb-3">
         <label for="" class="form-label" >Link URL</label>
        <input type="text"
            class="form-control"
        
            v-model="LinkUrl">
        </input>
    </div>
    <div class="row mb-3">
    <div class="form-check">
    <input class="form-check-input" type="checkbox" v-model="published">
    </input>
    <label class="form-check-label" for="gridCheck1">Published</label>
    </div>
    
    </div>
 </div>


 </div>

    <div class="mb-3">
        <button class="btn btn-primary"
        :disabled="isFormInvalid"
        @click.prevent="submitForm"
        >Create Page
        </button></div>
    </form>
  </div>
</template>
<script>
export default{
    props:['pageCreated'],
    computed:{
isFormInvalid(){
return !this.pageTitle || !this.content || !this.LinkText || !this.LinkUrl
}
    },
    data(){
        return{
            pageTitle:'',
            content:'',
            LinkText:'',
            LinkUrl:'',
            published:true
        }
    },
    methods:{
        submitForm(){
            if(!this.pageTitle || !this.content || !this.LinkText || !this.LinkUrl){
    alert('please fill the form')
    return;
            }

this.pageCreated({
    pageTitle:this.pageTitle,
    content:this.content,
    link:{
    text:this.LinkText,
    url:this.LinkUrl
    }
                        //if pusblished is not true it will not be displayed on nav bar

    ,published:this.published
                });
            this.pageTitle='',
            this.content='',
            this.LinkText='',
            this.LinkUrl='',
            this.published=true
        }
    }
}
</script>