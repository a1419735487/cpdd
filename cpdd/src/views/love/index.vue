<template>
  <div>
    <loading></loading> 
    <HeaderGL />
    <Loves />
    <keep-alive>
        <router-view />
    </keep-alive>
    <TabBar1GL />
    <TopGL />
    <remote-css href="/css/lovestyle.css"></remote-css>
    <remote-js src="/libs/view-scroll.js"></remote-js>
  </div>
</template>

<script>

import HeaderGL from '@/components/HeaderGL';
import Loves from '@/components/Loves';
import TabBar1GL from '@/components/TabBar1GL';
import TopGL from '@/components/TopGL';
import loading from '@/components/loading'
const axios = require('axios');

export default {
    name : 'love',
    data: function(){
        return{
            Token:''
        }
    },
    created() {
      axios.post("/api/profiles/token").then(res => {
        this.Token=res.data;
      });
    },
    components : {
        HeaderGL,
        Loves,
        TabBar1GL,
        TopGL,
        loading,
        'remote-css': {
            render(createElement) {            
                return createElement('link', { attrs: { rel: 'stylesheet', href: this.href }});
            },
            props: {
                href: { type: String, required: true },
            },
        },
        'remote-js': {
            render(createElement) {
                return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});            
            },
            props: {
                src: { type: String, required: true },
            },
        }
    },
    mounted(){
      $(".modal-backdrop").removeClass("modal-backdrop");
    }
}
</script>

<style scoped>
  @media screen and (max-width:1199px){
    .input-group-append{
      display: none;
    }
  }
</style>
