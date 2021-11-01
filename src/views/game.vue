<template>
    <div>
        <h1>{{data.title}}</h1>
        <div>{{data.content}}</div>
    </div>
</template>

<script>
    import {fetchGame} from '@/api/game.js'
    export default {
        data(){
            return {
                data:''
            }
        },
        methods:{
            async axiosHttp(){
                let data = await fetchGame();
                this.data = data;
            }
        },
        created(){
            this.axiosHttp()
        }
    }
</script>

<style lang="scss" scoped>

</style>