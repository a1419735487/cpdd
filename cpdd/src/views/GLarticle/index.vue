<template>
  <div>
    <loading></loading>
    <HeaderGL />
    <Loves />
    <div class="section" style="margin-top: -3.7vh;">
        <DetailGL />
    </div>
    <TabBar2GL />
    <TopGL />
    <remote-css href="/css/lovestyle.css"></remote-css>
    <remote-css href="/css/swiper-bundle.min.css"></remote-css>
    <remote-js src="/libs/detail-scroll.js"></remote-js>
    <remote-js src="/libs/swiper-bundle.min.js"></remote-js>
  </div>
</template>

<script>

import HeaderGL from '@/components/HeaderGL';
import Loves from '@/components/Loves';
import DetailGL from '@/components/DetailGL';
import TabBar2GL from '@/components/TabBar2GL';
import TopGL from '@/components/TopGL';
import loading from '@/components/loading'
const axios = require('axios');

export default {
    name : 'visitor',
    beforeRouteEnter(to,from,next){
        const token = localStorage.getItem('Token');
        if(token){
            next()
        }else{
            next('/home')
        }
    },
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
        DetailGL,
        TabBar2GL,
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
    }
}

</script>

<style scoped>
    
</style>
