<template>
    <div style="height: 342.656px;background-image: url(/images/gl_bg.png);background-color: transparent;background-repeat: no-repeat;background-size: cover;background-position: center;" id="add">
        <div class="text-center position-relative">
            <button 
            :class="{
                'like unliked': state === 'Unliked',
                'like saving': state === 'Saving',
                'like liked': state === 'Liked',
            }"
            v-on:click="updateState" style="border: none;outline: none;width: 94.361px;height: 94.361px;margin-top: 13.52vh;">
                <span class="like-icon like-icon-state" aria-label="state" aria-live="polite">{{state}}</span>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name : 'Loves',
    data() {
        return{
            state: 'Unliked'
        }
    },
    methods: {
        async updateState() {
            if(this.state === 'Unliked'){
                this.state = 'Saving';
                await new Promise(resolve => setTimeout(resolve, 1000));
                this.state = 'Liked';
            }else{
                this.state = 'Saving';
                await new Promise(resolve => setTimeout(resolve, 1000));
                this.state = 'Unliked';
            }
        }
    }
}

</script>

<style scoped>

</style>
