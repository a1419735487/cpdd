<template>
    <router-view v-wechat-title="$route.meta.title" :key="$route.fullPath"/>
</template>