<template>
        <div>
            <h1>{{data.title}}</h1>
            <div>{{data.content}}</div>
        </div>
</template>

<script>
    import {fetchRecreation} from '@/api/recreation.js'
    export default {   
                data(){
            return {
                data:''
            }
        }, 
        methods: {
            async axiosHttp(){
                let data = await fetchRecreation();
                this.data = data;
            }    
        },
        created(){
            this.axiosHttp()
        },
    }
</script>

<style lang="scss" scoped>

</style>