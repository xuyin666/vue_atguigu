<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
                <router-link :to="{
                    name: 'xiangqing', 
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push check</button>
                <button @click="replaceShow(m)">replace check</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: 'message001'},
                { id: '002', title: 'message002'},
                { id: '003', title: 'message003'},
            ]
        }
    },
    methods: {
        pushShow(m){
            // console.log(this.$router);
            this.$router.push({
                name: 'xiangqing', 
                query: {
                    id: m.id,
                    title: m.title
                }
            });
        },
        replaceShow(m){
            this.$router.replace({
                name: 'xiangqing', 
                query: {
                    id: m.id,
                    title: m.title
                }
            });
        }
    }
}
</script>
