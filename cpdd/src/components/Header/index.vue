<template>
    <div class="nav bg-dark flex-column justify-content-center" style="width: 100%;height: 56.41px;">
        <div class="container">
            <router-link tag="a" to="/visitor" class="float-left" style="width: 36px;height: 36px;background-image: url(/images/fas\ fa-fire.svg);background-color: transparent;background-position: center;background-repeat: no-repeat;"></router-link>
            <span class="d-inline float-left d-sm-none text-light align-self-center">By:Sunfire</span>
            <span class="text-light float-left align-self-center" style="padding: 6px 0;">早上好</span>
            <div class="dropdown float-right" style="padding: 4.5008px;">
                <a class="px-2" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="text-light float-left align-self-center" style="padding: 2px 0;">分类</span>
                    <img src="/images/fas fa-bars.svg" style="width: 24px;height: 24px;">
                </a>
                <div class="dropdown-menu dropdown-menu-right mt-2 mt-sm-3" aria-labelledby="navbarDropdown" style="min-width: 9rem;">
                    <a class="dropdown-item" href="/visitor/qwgn">
                        <img src="/images/fas fa-life-ring.svg" class="mr-1">
                        <span class="text-dark">趣味功能</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/visitor/mnzl">
                        <img src="/images/fas fa-user-md.svg" class="mr-1">
                        <span class="text-dark">码农之路</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/visitor/mstd">
                        <img src="/images/fas fa-coffee.svg" class="mr-1">
                        <span class="text-dark">美食生活</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'Header'
}

</script>

<style scoped>
    .nav{
        position: relative;
        z-index: 2;
    }
    .nav-active{
        position: fixed;
        top: 0;
    }
    .dropdown-item:active{
        background-color: #92a0aa;
    }
</style>
