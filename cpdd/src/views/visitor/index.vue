<template>
  <div>
    <loading></loading> 
    <Header />
    <Eyes />
    <keep-alive>
        <router-view />
    </keep-alive>
    <TabBar1 />
    <Top />
    <remote-css href="/css/eyes.css"></remote-css>
    <remote-js src="/libs/view-scroll.js"></remote-js>
    <remote-js src="/libs/eyes.js"></remote-js>
  </div>
</template>

<script>

import Header from '@/components/Header';
import Eyes from '@/components/Eyes';
import TabBar1 from '@/components/TabBar1';
import Top from '@/components/Top';
import loading from '@/components/loading'

export default {
    name : 'visitor',
    components : {
        Header,
        Eyes,
        TabBar1,
        Top,
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
    @media screen and (max-width:1199px){
        .input-group-append{
            display: none;
        }
    }
</style>
