<template>
    <div class="loader-container" v-show="loading">
        <div style="position: relative;top: 45%;transform: translateY(-50%);">
            <div class="loader two"></div>
            <h4 style="text-align:center;color:#1F303C;margin-top:20px;">资源加载中</h4>
        </div>
    </div>
</template>

<script>
export default {
    name : 'loading',
    data() {
        return {
            loading: true
        }
    },
    created() {
        var that = this;
        this.bus.$on('loading', function(data) {
            that.loading = !!data;
        })
    }
}

</script>

<style scoped>
    .loader-container {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #fff;
        z-index: 10010;
    }
    .loader {
        position: relative;
        width: 50px;
        height: 50px;
        margin: 10px;
    }
    .two {
        border-radius: 50%;
        border: solid transparent 5px;
        border-top: solid #1F303C 5px;
        border-left: solid #1F303C 5px;
        animation: loader2Animation 1s linear infinite;
        margin-left: auto;
        margin-right: auto;
        margin-top: 45px;
    }
    @keyframes loader2Animation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
