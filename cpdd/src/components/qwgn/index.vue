<template>
    <div class="section" style="margin-top: -4.67vh;">
        <div class="container input-group">
            <input type="text" v-model="search" class="form-control border border-dark p-3" placeholder="在趣味功能中利用回车搜索..." style="z-index: 1;width: 100%;height: 86.766px;color: #92a0aa;box-shadow: rgba(0,0,0,.2) 0px 5px 5px 0.5px;">
            <div class="input-group-append">
                <button class="btn position-relative d-xl-block d-none" type="submit" @click="searchTitle" style="margin-top: -60.984px;margin-left: 1039.6px;width: 40px;height: 40px;background-image: url(/images/fas\ fa-search.svg);background-size: 40px 40px; background-color: transparent;background-position: center;background-repeat: no-repeat;"></button>
            </div>
        </div>
        <div class="container mt-4 mb-4">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                <div class="col" v-for="data in artDatasMark" :key="data._id">
                    <div class="card mb-4 text-dark card-shadow">
                        <a style="cursor:pointer;">
                            <img class="card-img-top" :src="data.base64" @click="handleToDetail(data._id)" style="width: 100%;height: 100%;">
                        </a>
                        <div class="card-body py-3">
                            <a style="text-decoration: none;cursor:pointer;">
                                <h5 class="card-title pb-3 border-bottom border-secondary text-dark text-truncate" @click="handleToDetail(data._id)">{{data.Title}}</h5>
                            </a>
                            <div class="float-left mt-1">
                                <img src="/images/far fa-clock.svg" class="clock" style="width: 18px;height: 18px;margin-bottom: 4px;">
                                <span class="ml-1">{{data.Time}}</span>
                            </div>
                            <a class="card-type float-right mt-1 text-decoration-dark" style="cursor:pointer;" @click="handleToType()">
                                <img src="/images/fas fa-tags Copy.svg" class="tag" style="width: 18px;height: 18px;margin-bottom: 2px;">
                                <span class="card-type text-dark ml-1">{{data.Type}}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pageObjs mb-4">
                <div class="container">
                    <div class="row row-cols-3">
                        <div class="col-2">
                            <button type="button" class="btn-radius float-left border-0 page-left" style="width: 64px;height: 64px;background-image: url(/images/fas\ fa-chevron-circle-left\ disable.svg);background-position: center;background-repeat: no-repeat;background-clip: content-box;"
                                :disabled="page<=0" @click="gol(-limit);"
                            ></button>
                        </div>
                        <p class="col-8 text-center mb-0 align-self-center text-dark" id="page" style="font-size: 2.25rem;">
                            {{(this.page+12)/12}}  /  {{Math.ceil(artDatas.length/12)}}
                        </p>
                        <div class="col-2">
                            <button type="button" class="btn-radius btn-radius-alive float-right border-0 page-right" style="width: 64px;height: 64px;background-image: url(/images/fas\ fa-chevron-circle-right\ disable.svg);background-position: center;background-repeat: no-repeat;background-clip: content-box;"
                                :disabled="(page+limit)>artDatas.length" @click="gol(limit);"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    name : 'Article',
    created() {
        this.enterSearch()
        this.Btn()
    },
    data: function(){
        return{
            artDatas:'',
            page:0,
            limit:12,
            search:''
        }
    },
    mounted(){
        axios.get("/api/profiles/趣味功能").then(res => {
            this.artDatas=res.data;
            if(this.artDatas.length > 12){
                $(".page-right").css("background-image","url('/images/fas\ fa-chevron-circle-right.svg')");
            }
            this.removeLoading()
        });
    },
    methods:{
        gol:function(obj) {
            this.page+=obj;
            this.Btn()
        },
        handleToDetail(_id){
            this.$router.push({
                path: '/article/' + _id
                }
            )
        },
        handleToType(){
            history.go(0)
        },
        searchTitle(){
            var search = this.search
            if(search) {
                this.artDatas = this.artDatas.filter((article) => {
                    return String(article.Title).indexOf(search) !== -1
                })
                this.page = 0
            }else {
                history.go(0)
            }
            this.search = ''
        },
        enterSearch(){
            const that = this;
            document.onkeydown = function(e) {
                var key = window.event.keyCode;
                if (key == 13) {
                    that.searchTitle();
                }
            }
        },
        Btn(){
            if(this.artDatas.length <= 12 || (this.page+this.limit)>this.artDatas.length){
                $(".page-right").css("background-image","url('/images/fas\ fa-chevron-circle-right\ disable.svg')");
                $('.page-right').removeClass("btn-radius-alive");
            }else{
                $(".page-right").css("background-image","url('/images/fas\ fa-chevron-circle-right.svg')");
                $('.page-right').addClass("btn-radius-alive");
            }
            if(this.page<=0){
                $(".page-left").css("background-image","url('/images/fas\ fa-chevron-circle-left\ disable.svg')");
                $('.page-left').removeClass("btn-radius-alive");
            }else{
                $(".page-left").css("background-image","url('/images/fas\ fa-chevron-circle-left.svg')");
                $('.page-left').addClass("btn-radius-alive");
            }
        },
        removeLoading(){
            var that = this;
            setTimeout(function () {
                that.bus.$emit('loading', false);
            },100);
        }
    },
    computed:{
        artDatasMark:function(){
            return this.artDatas.slice(this.page,this.page+this.limit);
        }
    },
    watch: {
        search: {
            handler(newVal) {
                const that = this;
                that.Btn();
            }
        }
    }       
}

</script>

<style scoped>
    .card-shadow:hover{
        box-shadow: rgba(0,0,0,.2) 0px 5px 5px 0.5px;
        transition: opacity .3s, transform .3s, -webkit-transform .3s;
    }
    button:focus{
        outline: none !important;
    }
    .text-decoration-dark{
        text-decoration-color: #1F303C;
    }
    /* 圆形按钮 */
    .btn-radius{
        border-radius: 999px;
    }
    .btn-radius-alive{
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.14), 0 6px 2px -4px rgba(0,0,0,0.12), 0 2px 10px 0 rgba(0,0,0,0.2);
    }
    .btn-radius-alive:hover{
        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.14), 0 2px 14px 0 rgba(0,0,0,0.12), 0 6px 2px -2px rgba(0,0,0,0.2);
    }
    @media screen and (min-width:1200px){
        .form-control{
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width:1199px){
        .form-control{
            font-size: 1.25rem;
        }
    }
</style>
