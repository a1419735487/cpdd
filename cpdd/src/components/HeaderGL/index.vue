<template>
  <div class="nav bg-dark flex-column justify-content-center" style="width: 100%;height: 56.41px;background-image: url(/images/gl_bg_header.jpg);background-color: transparent;background-repeat: no-repeat;background-size: cover;">
    <div class="container">
      <router-link tag="a" to="/love" class="float-left ml-1 ml-sm-0" style="width: 36px;height: 36px;background-image: url(/images/fas\ fa-fire.svg);background-color: transparent;background-position: center;background-repeat: no-repeat;"></router-link>
      <span class="d-inline float-left d-sm-none text-light align-self-center" style="font-size: 0.5rem;">By:Sunfire</span>
      <span class="text-light float-left align-self-center" style="padding: 6px 0;">早上好</span>
      <div class="dropdown float-right" style="padding: 4.5008px;">
          <router-link tag="a" to="/Edit" role="button" href="#">
              <span class="text-light float-left align-self-center px-2 mx-2" style="padding: 2px 0;">写文章</span>
          </router-link>
          <a class="px-2" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="text-light float-left align-self-center" style="padding: 2px 0;">分类</span>
              <img src="/images/fas fa-bars.svg" style="width: 24px;height: 24px;">
          </a>
          <div class="dropdown-menu dropdown-menu-right mt-2 mt-sm-3" aria-labelledby="navbarDropdown" style="min-width: 9rem;">
              <a class="dropdown-item" href="/love/qwgn">
                  <img src="/images/fas fa-life-ring red.svg" class="mr-1">
                  <span class="text-danger">趣味功能</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/love/mnzl">
                  <img src="/images/fas fa-user-md red.svg" class="mr-1">
                  <span class="text-danger">码农之路</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/love/mstd">
                  <img src="/images/fas fa-coffee red.svg" class="mr-1" style="fill: #b22222;">
                  <span class="text-danger">美食生活</span>
              </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name : 'HeaderGL'
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
