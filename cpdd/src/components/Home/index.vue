<template>
    <div class="section1 media p-0" style="height: 100vh;">
        <div class="align-self-center mx-auto position-relative">
                <h1 class="text-center text-dark">Hello, I'm Sunfire</h1>
                <h3 class="text-center text-dark">广泛涉猎 全面发展</h3>
                <div class="text-center">
                    <router-link tag="a" to="/visitor" class="btn btn-dark mb-1 mb-sm-0 mx-1" role="button">开始吧</router-link>
                    <a v-on:click="whats()" class="btn btn0 btn-outline-danger bgLoginBtn globalLoginBtn mx-1">❤</a>
                </div>
        </div>
        <a class="position-absolute d-block" href="#" id="jump">
            <img src="/images/fas fa-chevron-down.svg">
        </a>
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" style="display: none;z-index: 10005;">
            <div style="display:table; width:100%; height:100%;">
                <div style="vertical-align:middle; display:table-cell;">
                    <div class="modal-dialog">
                        <div class="modal-content" style="border: none;border-radius:0;">
                            <div>
                                <div class="modal-header" style="color:#b22222">
                                    <h4 class="modal-title ml-3" id="loginModalLabel" style="font-size: 18px;">请输入两串暗号</h4>
                                    <button type="button" @click="start()" id="login_close" class="close mr-1" data-dismiss="modal">
                                        <span aria-hidden="true">×</span>
                                        <span class="sr-only">Close</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <section class="box-login" id="box-login" style="padding:0 15px 10px;">
                                        <form id="loginForm">
                                            <div class="form-group" style="margin-bottom:10px">
                                                <input class="form-control" v-model="name" v-validate="'required|min:6'" type="password" placeholder="这是第一行..." style="height:42px;line-height:normal;padding-bottom:10px;padding-top:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;">
                                                <input class="form-control mt-2" v-model="password" v-validate="'required|min:6'" type="password" placeholder="这是第二行..." style="height:42px;line-height:normal;padding-bottom:10px;padding-top:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;">
                                            </div>
                                            <div class="login-box">
                                                <button id="login_btn" type="button" v-on:click="login()" class="btn btn-micv5 btn-block" style="height:47px;background:#b22222;color:#fff;font-size:14px;background:-webkit-linear-gradient(#b22222,#b22222);background:-o-linear-gradient(#b22222,#b22222);background:-moz-linear-gradient(#b22222,#b22222);background:linear-gradient(#b22222,#b22222);padding-bottom:8px;padding-top:8px;">
                                                    登录
                                                </button>
                                            </div>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import jwt_decode from "jwt-decode";

export default {
    name : 'Home',
    created() {
        this.enterLogin()
    },
    data: () => ({
        name: "",
        password: ""
    }),
    methods: {
        whats(){
            const token = localStorage.getItem('Token');
            if(token){
                this.$router.push("/love");
            }else{
                this.stop()
            }
        },
        login() {
            let loginUser = {
                name: this.name,
                password: this.password
            };
            this.axios.post("/api/users/login", loginUser).then(res => {
                    // 登录成功
                    const { token } = res.data;
                    localStorage.setItem("Token", token);

                    // 解析token
                    const decode = jwt_decode(token);

                    // 存储数据
                    this.$store.dispatch("setUser", decode);
                    this.start()
                    // 页面跳转
                    this.$router.push("/love");
            });
        },
        isEmpty(value) {
            return (
                value === undefined ||
                value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
            );
        },
        enterLogin() {
            const that = this;
            document.onkeydown = function(e) {
                var key = window.event.keyCode;
                if (key == 13 && $(".modal-open").hasClass("modal-open")) {
                    that.login();
                }
            }
        },
        stop(){
            this.scrollTop = document.scrollingElement.scrollTop;
            document.body.classList.add('modalOpen');
            document.body.style.top = `-${this.scrollTop}px`;
        },
        start(){
            document.body.classList.remove('modalOpen');
            document.scrollingElement.scrollTop = this.scrollTop;
        }
    }
}

</script>

<style scoped>
    /* 背景与按钮处理 */
    .section1:before{
        content: ' ';
        position: fixed;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(/images/bg.jpg) center 0 no-repeat;
        background-size: cover;
        background-color: transparent;
    }
    .section1:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.05);
    }
    .section1 > div > h3{
        margin: 1rem 0 1.5rem;
    }
    @media screen and (min-width:1200px){
        .section1>div>h1{
            font-size: 4.375rem;
        }
        .section1>div>h3{
            letter-spacing: 0.1875rem;
            font-size: 1.875rem;
        }
        .section1>div>div>a{
            width: 9.375rem;
            padding: 12px 0;
        }
    }
    @media screen and (min-width:576px) and (max-width:1199px){
        .section1>div>h1{
            font-size: 3.125rem;
        }
        .section1>div>h3{
            font-size: 1.5rem;
            margin: 1rem 0 1.5rem;
        }
        .section1>div>div>a{
            width: 10rem;
            padding: 4px 0;
        }
    }
    @media (max-width:575px){
        .section1{
            background-size: 1920px 1080px;
        }
        .section1>div>div>button:nth-of-type(1){
            margin-bottom: 0.625rem;
        }
        .section1>div>h1{
            font-size: 1.75rem;
        }
        .section1>div>h3{
            font-size: 1rem;
            margin: 1rem 0 1.5rem;
        }
        .section1>div>div>a{
            width: 18.125rem;
        }
    }
    @media (min-width:576px){
        .section1{
            background-size: 100% 100%;
        }
    }
    /* 管理界面按钮 */
    .btn0{
        border-color:#b22222;
        color:#fff;
    }
    .btn-micv5{
        background-color:#b22222;
        color:#fff;
        padding:8px 12px;
    }
    /* 向下按钮定位 */
    .section1 > a{
        bottom: 20px;
        left: 50%;
        margin-left: -12px;
    }
    /* 向下按钮动画 */
    #jump{
        animation:jump 0.6s linear infinite alternate;
    }
    #jump:hover{
        animation-play-state: paused;
    }
    @keyframes jump{
        from{transform:translateY(0px);}
        to{transform:translateY(20px);}
    }
    /* 登录窗口样式更改 */
    #loginModal .modal-content:before,#loginModal .modal-content:after{
        content:'';
        display:table;
        clear:both;
    }
    .form-control:focus {
        border-color: #b22222;
        outline: 0;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(178, 34, 34, 0.6);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(178, 34, 34, 0.6);
    }
</style>