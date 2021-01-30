<template>
    <div class="container">
        <div class="p-0 border" style="background-color: #fff;">
            <div class="border-bottom border-danger border-change" style="height: 120.422px;">
                <h2 class="text-center font-weight-bold pt-4 text-danger" id="title">{{artDatas.Title}}</h2>
                <div class="row row-cols-2 mt-0 mt-sm-3">
                    <div class="col pr-2">
                        <span class="text-danger float-right" id="time">{{artDatas.Time}}</span>
                        <img src="/images/far fa-clock red.svg" class="clock float-right mr-1" style="width: 18px;height: 18px;margin-top: 3px;">
                    </div>
                    <a class="col pl-4 text-decoration-dark type-danger" id="texttype" style="cursor:pointer;" @click="handleToType(artDatas.Type)">
                        <img src="/images/fas fa-tags Copy red.svg" class="tag float-left mt-1 mr-1" style="width: 18px;height: 18px;">
                        <span class="float-left">{{artDatas.Type}}</span>
                    </a>
                </div>
            </div>
            <div class="my-4 px-5" v-html="artDatas.Text"></div>
            <div class="text-change media border-top border-danger" style="height: 103.094px;">
                <div class="container align-self-center">
                    <button class="text-danger ml-4" id="lastArt" style="text-decoration:none;font-size: 1.5rem;" @click="goToOther(artLastId)">
                        <img src="/images/fas fa-caret-left red.svg" class="last float-left">
                        <span class="last text-danger float-left" style="padding: 10px 0;">上一篇</span>
                        <span class="text-alive text-danger float-left" id="last" style="padding: 10px 0;">{{artLast ? '：'+artLast.Title : ''}}</span>
                        <span class="text-danger float-left" id="lastNone" style="padding: 10px 0;display:none;">没有上一篇了...</span>
                    </button>
                    <button class="text-danger mr-4 float-right" id="nextArt" style="text-decoration:none;font-size: 1.5rem;" @click="goToOther(artNextId)">
                        <img src="/images/fas fa-caret-right red.svg" class="next float-right">
                        <span class="text-alive text-danger float-right" id="next" style="padding: 10px 0;">{{artNext ? '：'+artNext.Title : ''}}</span>
                        <span class="text-danger float-left" id="nextNone" style="padding: 10px 0;display:none;">没有下一篇了...</span>
                        <span class="next text-danger float-right" style="padding: 10px 0;">下一篇</span>
                    </button>
                </div>
            </div>
        </div>
        <a @click="goToEdit(artDatas._id)" class="rewrite position-fixed btn-radius btn-radius-alive" id="rewrite" style="z-index: 10003;background-image: url(/images/fas\ fa-pencil-alt.svg);background-size: 64% 64%; background-color: #b22222;background-position: center;background-repeat: no-repeat;background-clip: content-box;cursor:pointer;"></a>
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
            artNextId:'',
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
            this.$router.replace({
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
                path: '/love/' + type
            })
        },
        goToEdit(id){
            this.$router.push({
                path: '/Edit',
                query: {
                    id: id
                }
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
    .type-danger{
        color: #b22222;
    }
    .swiper-container {
        width: 347.062px;
        height: 347.062px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-container {
        --swiper-theme-color:#b22222;
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
    .rewrite{
        display: inline;
        animation:top 0.5s linear alternate;
    }
    @keyframes top{
        from{transform:translateX(50px);}
        to{transform:translateX(0px);}
    }
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
        .rewrite{
            width: 50px;
            height: 50px;
            bottom: 120px;
            right: 10px;
        }
    }
    @media screen and (min-width:768px) and (max-width:1200px){
        .rewrite{
            width: 50px;
            height: 50px;
            bottom: 158px;
            right: 10px;
        }
    }
    @media screen and (max-width:767px){
        .rewrite{
            width: 30px;
            height: 30px;
            bottom: 136px;
            right: 10px;
        }
    }
</style>
