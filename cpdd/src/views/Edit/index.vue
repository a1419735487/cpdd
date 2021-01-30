<template>
  <div>
    <HeaderGL />
    <Loves />
    <div class="section" style="margin-top: -5.2vh;">
        <Edit />
    </div>
    <remote-css href="/css/lovestyle.css"></remote-css>
    <remote-js src="/libs/edit-scroll.js"></remote-js>
  </div>
</template>

<script>

import HeaderGL from '@/components/HeaderGL';
import Loves from '@/components/Loves';
import Edit from '@/components/Edit';
const axios = require('axios');

export default {
    name : 'visitor',
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
        Edit,
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
