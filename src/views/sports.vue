<template>
        <div>
            <div v-for="item in data" :key="item.id">
                <h1>{{item.title}}</h1>
                <div>{{item.content}}</div>
            </div>
        </div> 
</template>

<script>
    import { fetchSports } from '@/api/sports.js';
    export default {
        created() {
            this.axiosHttp()
        },
        methods: {
            async axiosHttp() {
                let data = await fetchSports();
                this.data = data;
            }
        },
        data: function () {
            return {
                data: ''
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>