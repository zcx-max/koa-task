<template>
    <div>
        首页
        <button @click="btn">点击获取</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            btn(){
                this.axios.get('/api/list').then(res=>{
                    console.log(res)
                })
            }
        },
    }
</script>

<style scoped>

</style>