<template>
    <a href="#" class="tool position-fixed btn-radius btn-radius-alive" id="jump" style="z-index: 10003;background-image: url(/images/fas\ fa-arrow-circle-up\ red.svg);background-size: 108% 108%; background-color: #fff;background-position: center;background-repeat: no-repeat;background-clip: content-box;"></a>
</template>

<script>
export default {
    name : 'TopGL'
}

</script>

<style scoped>
    .tool{
        display: none;
    }
    .tool-active{
        display: inline;
        animation:top 0.5s linear alternate;
    }
    @keyframes top{
        from{transform:translateX(50px);}
        to{transform:translateX(0px);}
    }

    @media screen and (min-width:1200px){
        .tool{
            width: 50px;
            height: 50px;
            bottom: 60px;
            right: 10px;
        }
    }
    @media screen and (min-width:768px) and (max-width:1199px){
        .tool{
            width: 50px;
            height: 50px;
            bottom: 98px;
            right: 10px;
        }
    }
    @media screen and (max-width:767px){
        .tool{
            width: 30px;
            height: 30px;
            bottom: 96px;
            right: 10px;
        }
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
</style>
