<template>
    <div class="section2" style="padding-top: 8.26vh;padding-bottom: 17.59vh;background-color:#fff">
        <div class="particle-network-animation d-none d-sm-block"></div>
        <p class="text-center text-dark mb-1 position-relative" id="target" style="font-size: 2rem;z-index: 2;">关于我</p>
        <hr class="position-relative">
        <div class="container bg-white rounded border border-dark px-0 position-relative" style="max-width: 600px;z-index: 2;">
            <div>
                <div class="bg-dark" style="height: 9.16vh;"></div>
                <div class="mb-4" style="height: 70.5px;"></div>
            </div>
            <img src="/images/头像.png" class="img-fluid position-absolute" style="left: 50%;">
            <div>
                <p class="text-center text-dark mb-1" style="font-size: 1.75rem;">黄泽焱</p>
            </div>
            <div>
                <p class="text-center text-secondary">火树星桥 花晨月夕</p>
            </div>
            <div class="info row row-cols-2 mx-0">
                <div class="col border-right border-dark mb-4">
                    <ul class="mt-4">
                        <li class="clearfix pb-2 border-bottom border-dark">
                            <img src="/images/fas fa-user.svg" class="float-left ml-2 mr-3">
                            <p class="text-dark float-left py-1 mb-0 px-0">21岁</p>
                        </li>
                        <li class="clearfix mt-4 pb-2 border-bottom border-dark">
                            <img src="/images/fas fa-map-marker.svg" class="float-left ml-2 mr-3">
                            <p class="text-dark float-left py-1 mb-0 px-0">福建福州</p>
                        </li>
                        <li class="clearfix mt-4 pb-2 border-bottom border-dark">
                            <img src="/images/fas fa-envelope.svg" class="float-left ml-2 mr-3">
                            <p class="text-dark py-1 mb-0 px-0">hzy1999@vip.qq.com</p>
                        </li>
                        <li class="clearfix mt-4 pb-2 border-bottom border-dark">
                            <img src="/images/fab fa-github-alt.svg" class="float-left ml-2 mr-3">
                            <a href="https://github.com/a1419735487/" class="text-dark float-left py-1 mb-0 px-0">项目源码</a>
                        </li>
                    </ul>
                </div>
                <div class="like col p-0">
                    <div class="clearfix">
                        <div class="rounded-circle border border-dark text-dark media ml-2 ml-sm-4 mt-5 mt-sm-4 float-left">
                            <p class="mb-0 mx-auto align-self-center">前端</p>
                        </div>
                        <div class="rounded-circle border border-dark text-dark media mr-2 mr-sm-4 mt-5 mt-sm-4 float-right">
                            <p class="mb-0 mx-auto align-self-center">摄影</p>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="rounded-circle border border-dark text-dark media ml-2 ml-sm-4 mt-4 float-left">
                            <p class="mb-0 mx-auto align-self-center">理财</p>
                        </div>
                        <div class="rounded-circle border border-dark text-dark media mr-2 mr-sm-4 mt-4 float-right">
                            <p class="mb-0 mx-auto align-self-center">生活</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'Info'
}

</script>

<style scoped>
    /* 动态hr样式 */
    .section2 hr{
        height: 4px;
        width: 0px;
        text-align:center;
        position: relative;
        background: #1F303C;
        margin: 0 auto 50px;
        border: 0;
        z-index: 2;
    }
    .section2.active hr{
        width: 60px;
        transition: all 1.5s 0.2s;
    }
    .section2 .container{
        opacity: 0;
    }
    .section2.active .container{
        opacity: 1;
        transition: all 1.5s 0.2s;
    }
    /* 个人信息样式 */
    @media screen and (min-width:1200px){
        .section2>div>img{
            width: 141px;
            height: 141px;
            top:19.44px;
            margin-left: -70.5px;
        }
    }
    @media screen and (min-width:576px) and (max-width:1199px){
        .section2>div>img{
            width: 121px;
            height: 121px;
            top:32.4px;
            margin-left: -60.5px;
        }
    }
    @media (min-width:576px){
        .like>div>div{
            width: 100px;
            height: 100px;
        }
        .like>div>div>p{
            font-size: 1.5rem;
        }
    }
    @media (max-width:575px){
        .section2>div>img{
            width: 101px;
            height: 101px;
            top:45.36px;
            margin-left: -50.5px;
        }
        .info>div>ul>li:nth-of-type(3){
            font-size: 0.9rem;
        }
        .like>div>div{
            width: 72px;
            height: 72px;
        }
        .like>div>div>p{
            font-size: 1.25rem;
        }
    }
    /* 个人信息手机端适配 */
    @media (max-width:539px){
        .info>div>ul>li:nth-of-type(3){
            text-align: center;
        }
        .info>div>ul>li:nth-of-type(3)>img{
            display: none;
        }
    }
    @media (min-width:540px){
        .info>div>ul>li:nth-of-type(3)>p{
            float: left;
        }
    }
    @import '<%= BASE_URL %>css/particle.css'; 
</style>