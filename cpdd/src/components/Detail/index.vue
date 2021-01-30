<template>
    <div class="container">
        <div class="p-0 border" style="background-color: #fff;">
            <div class="border-bottom border-dark border-change" style="height: 120.422px;">
                <h2 class="text-center font-weight-bold pt-4 text-dark" id="title">{{artDatas.Title}}</h2>
                <div class="row row-cols-2 mt-0 mt-sm-3">
                    <div class="col pr-2">
                        <span class="text-dark float-right" id="time">{{artDatas.Time}}</span>
                        <img src="/images/far fa-clock.svg" class="clock float-right mr-1" style="width: 18px;height: 18px;margin-top: 3px;">
                    </div>
                    <a class="col pl-4 text-decoration-dark type-dark" id="texttype" style="cursor:pointer;" @click="handleToType(artDatas.Type)">
                        <img src="/images/fas fa-tags Copy.svg" class="tag float-left mt-1 mr-1" style="width: 18px;height: 18px;">
                        <span class="float-left">{{artDatas.Type}}</span>
                    </a>
                </div>
            </div>
            <div class="my-4 px-5" v-html="artDatas.Text"></div>
            <div class="text-change media border-top border-dark" style="height: 103.094px;">
            <div class="container align-self-center">
                <button class="text-dark ml-4" id="lastArt" style="text-decoration:none;font-size: 1.5rem;" @click="goToOther(artLastId)">
                    <img src="/images/fas fa-caret-left.svg" class="last float-left">
                    <span class="last text-dark float-left" style="padding: 10px 0;">上一篇</span>
                    <span class="text-alive text-dark float-left" style="padding: 10px 0;">{{artLast ? '：'+artLast.Title : ''}}</span>
                    <span class="text-dark float-left" id="lastNone" style="padding: 10px 0;display:none;">没有上一篇了...</span>
                </button>
                <button class="text-dark mr-4 float-right" id="nextArt" style="text-decoration:none;font-size: 1.5rem;" @click="goToOther(artNextId)">
                    <img src="/images/fas fa-caret-right.svg" class="next float-right">
                    <span class="text-alive text-dark float-right" style="padding: 10px 0;">{{artNext ? '：'+artNext.Title : ''}}</span>
                    <span class="text-dark float-left" id="nextNone" style="padding: 10px 0;display:none;">没有下一篇了...</span>
                    <span class="next text-dark float-right" style="padding: 10px 0;">下一篇</span>
                </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    name : 'Detail',
    created () {
        document.title = ''
    },
    data: function(){
        return{
            artDatas:'',
            artLast:'',
            artNext:'',
            artLastId:'',
            artNextId:''
        }
    },
    mounted:function(){
        var id = this.$route.params.id
        axios({
            method:'get',
            url: '/api/profiles/one/' + id
        })
        .then(res => {
            this.artDatas=res.data;
            document.title= this.artDatas.Title
            //加载完毕移除加载页面
            this.removeLoading()
        });
        axios({
            method:'get',
            url: '/api/profiles/last/' + id
        })
        .then(res => {
            this.artLast=res.data;
            this.artLastId=this.artLast._id;
            $("#lastNone").css("display","none");
        })
        .catch(err=>{
            $("#lastArt").attr("disabled", true);
            $('.last').addClass("d-none");
            $("#lastNone").css("display","inline");
        });
        axios({
            method:'get',
            url: '/api/profiles/next/' + id
        })
        .then(res => {
            this.artNext=res.data;
            this.artNextId=this.artNext._id;
            $("#nextNone").css("display","none");
        })
        .catch(err=>{
            $("#nextArt").attr("disabled", true);
            $('.next').addClass("d-none");
            $("#nextNone").css("display","inline");
        });
    },
    methods:{
        goToOther(_id){
            this.$router.push({
                path: _id
                }
            )
        },
        handleToType(type){
            if(type === '趣味功能'){
                type = 'qwgn'
            }else if(type === '码农之路'){
                type = 'mnzl'
            }else if(type === '美食生活'){
                type = 'mstd'
            }
            this.$router.push({
                path: '/visitor/' + type
            })
        },
        removeLoading(){
            var that = this;
            setTimeout(function () {
                that.bus.$emit('loading', false);
            },200);
        }
    }
}

</script>

<style scoped>
    .type-dark{
        color: #1F303C;
    }
    .swiper-container {
        width: 347.062px;
        height: 347.062px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-container {
        --swiper-theme-color:#1F303C;
    }
    .text-alive{
        display: none;
    }
    button{
        border-width: 0px;
        background-color: transparent;
    }
    button:focus{
        outline: none;
    }
    @media screen and (min-width:1200px){
        .text-alive{
            display: inline;
        }
    }
    @media screen and (min-width:768px) and (max-width:1200px){
        .section h2{
            font-size: 2.5rem;
        }
    }
    @media screen and (max-width:767px){
        .section h2{
            font-size: 1.25rem;
        }
        .text-change span{
            font-size: 1.3rem;
        }
    }
</style>