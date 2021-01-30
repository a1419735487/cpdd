<template>
    <div class="p-0">
        <Home />
        <Info />
        <TabBar1 />
        <remote-css href="/css/particle.css"></remote-css>
        <remote-js src="/libs/home-scroll.js"></remote-js>
        <remote-js src="/libs/particle.js"></remote-js>
        <remote-js src="/libs/login.js"></remote-js>
        <remote-js src="/libs/bootstrap.min.js"></remote-js>
    </div>
</template>

<script>

import Home from '@/components/Home';
import Info from '@/components/Info';
import TabBar1 from '@/components/TabBar1';
const axios = require('axios');
export default {
    name : 'home',
    components : {
        Home,
        Info,
        TabBar1,
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
    @media (max-width:575px){
        .footer>div{
            position: relative;
        }
    }
    @media (min-width:576px){
        .footer>div{
            position: absolute;
            top: 200vh;
        }
    }
</style>
