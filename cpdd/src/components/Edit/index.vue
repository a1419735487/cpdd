<template>
    <div class="container contain">
        <form>
            <div class="p-0" style="background-color: #fff;">
                <div style="height: 120.422px;">
                    <hr>
                    <input type="text" class="form-control text-center font-weight-bold" placeholder="请在这里输入标题" ref="title" id="title" style="width: 100%;height: 6vh;">
                    <div class="row row-cols-2 mt-2">
                        <div class="col pr-2">
                            <input class="float-right" style="width: 150px; height: 23px;" id="date" type="date" ref="time" value="2020-05-22"/>
                            <img src="/images/far fa-clock red.svg" class="clock float-right mr-1" style="width: 18px;height: 18px;margin-top: 3px;">
                        </div>
                        <div class="col pl-2" id="texttype">
                            <img src="/images/fas fa-tags Copy red.svg" class="tag float-left mt-1 mr-1" style="width: 18px;height: 18px;">
                            <select class="float-left" style="width: 120px; height: 23px;" ref="type" id="type">
                                <option>-选择分类-</option>
                                <option>趣味功能</option>
                                <option>码农之路</option>
                                <option>美食生活</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div id="editor"></div>
        <div class="border-top border-danger" id="fimg" style="margin-bottom: 69.422px;background-color: #fff;">
            <p class="py-3 pl-4 text-danger mb-0">封面</p>
                <ImgCutter
                    ref="imgCutterModal"
                    label="选择文件..."
                    :crossOrigin="true"
                    crossOriginHeader="*"
                    rate="16:9"
                    toolBgc="none"
                    :tool="false"
                    :isModal="true"
                    :showChooseBtn="true"
                    :lockScroll="false"
                    :boxWidth="352"
                    :boxHeight="198"
                    :cutWidth="352"
                    :cutHeight="198"
                    :sizeChange="true"
                    :moveAble="false"
                    :originalGraph="false"
                    :smallToUpload="false"
                    :saveCutPosition="false"
                    :scaleAble="true"
                    @cutDown="cutDown">
                    <button slot="open" @click="stop()" class="pri mb-3" id="imgCutter" style="width: 224px;height: 126px;border:2px dotted #b22222;background-color:#fff;">
                        <div class="mb-0" style="cursor: pointer;padding: 26px 90px;">
                            <img src="/images/fas fa-plus.svg" id="imgAdd" style="width:40px;margin-left:2px;">
                            <p class="text-danger mb-0 text-center" id="imgText">上传</p>
                            <input @change="uploadPhoto($event)" type="file" accept="image/jpg,image/jpeg,image/png" name="file" style="display: none;" id="img"/>
                            <img :src="imgBase64" id="imgBase64" style="width: 224px;height: 126px;display:none;position:relative;right:92px;bottom:28px;">
                        </div>
                    </button>
                </ImgCutter>
            <p class="ml-4 ml-sm-5 text-danger">！必须添加一张封面</p>
            <hr>
        </div>
        <div class="tool-bar" style="background-color: #fff;height: 69.422px;z-index: 993;">
            <div class="container border-top border-danger position-relative">
                <div class="float-left ml-0 ml-sm-2" style="margin-top: 23px;">
                    <span class="text-danger">字数：</span>
                    <span class="text-danger">{{ count }}</span>
                </div>
                <button id="change_art" type="button" @click="addText()" class="btn btn-danger float-right mx-1 p-0" style="font-size: 1.04rem;height: 40px;margin: 1.85vh 0px;border-radius: 0.5rem;">保存并发布</button>
                <button id="cancel" type="button" @click="confirm()" class="btn btn-outline-danger float-right mx-1 p-0 d-sm-block d-none" style="font-size: 1.04rem;height: 40px;margin: 1.85vh 0px;border-radius: 0.5rem;">取消</button>
                <button id="remove_art" type="button" @click="delText()" class="btn btn-outline-danger float-right mx-1 p-0" style="font-size: 1.04rem;height: 40px;margin: 1.85vh 0px;border-radius: 0.5rem;">删除/重置</button>
            </div>
        </div>
        <a @click="confirm()" class="remove position-fixed btn-radius btn-radius-alive" style="z-index: 993;background-image: url(./images/fas\ fa-time.svg);background-size: 80% 80%; background-color: #fff;background-position: center;background-repeat: no-repeat;background-clip: content-box;"></a>
        <a href="#fimg" class="tool2 position-fixed btn-radius btn-radius-alive" style="z-index: 993;background-image: url(./images/fas\ fa-arrow-circle-down.svg);background-size: 108% 108%; background-color: #fff;background-position: center;background-repeat: no-repeat;background-clip: content-box;"></a>
        <a href="#" class="tool position-fixed btn-radius btn-radius-alive" id="jump" style="z-index: 993;background-image: url(./images/fas\ fa-arrow-circle-up\ red.svg);background-size: 108% 108%; background-color: #fff;background-position: center;background-repeat: no-repeat;background-clip: content-box;"></a>
    </div>
</template>

<script>
    import E from 'wangeditor'
    const axios = require('axios')
    import ImgCutter from 'vue-img-cutter'

    export default {
        name:'Edit',
        components: {
            ImgCutter
        },
        data() {
            return {
                editor: {},
                count: 0,
                html: '',
                filename:'',
                filesize:'',
                imgcode:'',
                artDatas:'',
                imgBase64:'',
                artDatas:''
            } 
        },
        mounted () {
            var editor = new E('#editor');
            this.editor = editor;
            var that = this;
            editor.config.onchange = function (html) {
                let text = editor.txt.text();
                that.count = text.length;
                that.html = editor.txt.html();
            }
            editor.config.uploadImgShowBase64 = true;
            editor.create();
            $(".w-e-toolbar").css("border","1px\ solid\ #b22222");
            $(".w-e-toolbar").css("z-index","993");
            $(".w-e-text-container").css("z-index","992");
            $(".w-e-text-container").css("height","42.5vh");
            $(".w-e-text-container").css("border","none");
            $(".w-e-toolbar").css("color","#B74E45");
            $(".w-e-menu>i").css("color","#B74E45");

            var time = new Date();
            var day = ("0" + time.getDate()).slice(-2);
            var month = ("0" + (time.getMonth() + 1)).slice(-2);
            var today = time.getFullYear() + "-" + (month) + "-" + (day);
            $('#date').val(today);
            
            if(this.$route.query.id != undefined){
                var id = this.$route.query.id
                axios({
                    method:'get',
                    url: '/api/profiles/one/' + id
                })
                .then(res => {
                    this.artDatas=res.data;
                    $('#title').val(this.artDatas.Title);
                    $('#date').val(this.artDatas.Time);
                    $('#type').val(this.artDatas.Type);
                    that.imgBase64 = this.artDatas.base64;
                    this.imgcode = this.artDatas.base64;
                    $("#imgBase64").css("display","inline");
                    $("#imgAdd").css("display","none");
                    $("#imgText").css("display","none");
                    editor.txt.html(this.artDatas.Text);
                });
            }
        },
        methods:{
            addText(){
                if(this.$refs.title.value === ''){
                    alert('还没有输入标题哦！')
                }else if(this.$refs.type.value === '-请选择分类-'){
                    alert('还没有选择类型哦！')
                }else if(this.imgcode === ''){
                    alert('还没有添加封面哦！')
                }else if(this.$route.query.id == undefined){
                    axios.post("/api/profiles/add",{
                        Time : this.$refs.time.value,
                        Type : this.$refs.type.value,
                        Title : this.$refs.title.value,
                        Text : this.html,
                        filename: this.filename,
                        filesize: this.filesize,
                        base64: this.imgcode
                    })
                    .then(res => {
                        alert('发布成功！')
                        this.$router.push({
                            path: '/GLarticle/' + res.data._id
                        })
                    });
                }else{
                    var id = this.$route.query.id
                    axios({
                        method:'post',
                        url: '/api/profiles/edit/' + id,
                        data:{
                            Time : this.$refs.time.value,
                            Type : this.$refs.type.value,
                            Title : this.$refs.title.value,
                            Text : this.html,
                            filename: this.filename,
                            filesize: this.filesize,
                            base64: this.imgcode
                        }
                    })
                    .then(res => {
                        alert('修改成功！')
                        this.$router.push({
                            path: '/GLarticle/' + res.data._id
                        })
                    });
                }
            },
            uploadPhoto(e) {
                var that = this;
                // 利用fileReader对象获取file
                that.filesize = e.blob.size;
                that.filename = e.file.name;
                that.imgcode = e.dataURL;
                that.imgBase64 = e.dataURL;
                $("#imgBase64").css("display","inline");
                $("#imgAdd").css("display","none");
                $("#imgText").css("display","none");
                this.start()
            },
            delText(){
                if(confirm("确认重置/删除？")){
                    if(this.$route.query.id == undefined){
                        location.reload()
                    }else{
                        var id = this.$route.query.id
                        axios({
                            method:'delete',
                            url: '/api/profiles/delete/' + id
                        })
                    }
                }
            },
            confirm(){
                if(confirm("返回主页？")){
                    this.$router.replace({
                        path: '/love/all'
                    })
                }
            },
            cutDown:function(res){ 
                this.uploadPhoto(res)
            },
            stop(){
                this.scrollTop = document.scrollingElement.scrollTop;
                document.body.classList.add('modalOpen');
                document.body.style.top = `-${this.scrollTop}px`;
                setTimeout(function () {
                    var a = document.querySelectorAll('.btn-default')
                    $('.btn-default').on('click', function() {
                        $('body').removeClass("modalOpen");
                    });
                    $('.closeIcon').on('click', function() {
                        $('body').removeClass("modalOpen");
                    });
                },100);
            },
            start(){
                document.body.classList.remove('modalOpen');
                document.scrollingElement.scrollTop = this.scrollTop;
            }
        } 
    }
</script>

<style lang='less' scoped>
    .btn-radius{
        border-radius: 999px;
    }
    .btn-radius-alive{
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.14), 0 6px 2px -4px rgba(0,0,0,0.12), 0 2px 10px 0 rgba(0,0,0,0.2);
    }
    .btn-radius-alive:hover{
        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.14), 0 2px 14px 0 rgba(0,0,0,0.12), 0 6px 2px -2px rgba(0,0,0,0.2);
    }
    .tool{
        display: none;
    }
    .tool2-hide{
        display: none !important;
    }
    .tool-active,.tool2{
        display: inline;
        animation:top 0.5s linear alternate;
    }
    @keyframes top{
        from{transform:translateX(50px);}
        to{transform:translateX(0px);}
    }
    .text-alive{
        display: none;
    }
    .type-danger{
        color: #b22222;
    }
    .tool-bar{
        position: fixed;
        bottom: 0px;
    }
    .remove{
        display: none;
    }
    .form-control{
        border:none ;
        box-shadow: none;
    }
    .form-control:focus{
        box-shadow: none;
    }
    @media screen and (min-width:1200px){
        .tool,.tool2{
            width: 50px;
            height: 50px;
            bottom: 60px;
            right: 10px;
        }
        #title{
            font-size: 2rem;
        }
        .form-control{
            font-size: 1.5rem;
        }
    }
    @media screen and (min-width:768px) and (max-width:1199px){
        .tool,.tool2{
            width: 50px;
            height: 50px;
            bottom: 98px;
            right: 10px;
        }
        #title{
            font-size: 2rem;
        }
        .form-control{
            font-size: 1.25rem;
        }
    }
    @media screen and (max-width:767px){
        .tool,.tool2{
            width: 30px;
            height: 30px;
            bottom: 96px;
            right: 10px;
        }
        #title{
            font-size: 1.25rem;
        }
        .form-control{
            font-size: 1.25rem;
        }
    }
    @media screen and (min-width:576px){
        .tool-bar button{
            width: 110px;
        }
        .pri{
            margin-left: 65px;
        }
    }
    @media screen and (max-width:575px){
        .tool-bar button{
            width: 100px;
        }
        .remove{
            display: inline;
            width: 30px;
            height: 30px;
            bottom: 132px;
            right: 10px;
        }
        .pri{
            margin-left: 40px;
        }
    }
    @media screen and (max-width:360px){
        #date,#type{
            display: none;
        }
    }
    button:focus {
        outline:none;
    }
</style>