<template>
  <div>
    <loading></loading>
    <Header />
    <Eyes />
    <div class="section" style="margin-top: -3.7vh;">
        <Detail />
    </div>
    <TabBar2 />
    <Top />
    <remote-css href="/css/eyes.css"></remote-css>
    <remote-css href="/css/swiper-bundle.min.css"></remote-css>
    <remote-js src="/libs/eyes.js"></remote-js>
    <remote-js src="/libs/detail-scroll.js"></remote-js>
    <remote-js src="/libs/swiper-bundle.min.js"></remote-js>
  </div>
</template>

<script>

import Header from '@/components/Header';
import Eyes from '@/components/Eyes';
import Detail from '@/components/Detail';
import TabBar2 from '@/components/TabBar2';
import Top from '@/components/Top';
import loading from '@/components/loading'

export default {
    name : 'visitor',
    components : {
        Header,
        Eyes,
        Detail,
        TabBar2,
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
    
</style>