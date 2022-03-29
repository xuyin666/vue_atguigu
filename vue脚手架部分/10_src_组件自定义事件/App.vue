<template>
    <div class="app">
        <h1>{{msg}} student name is : {{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <!-- <Student v-on:atguigu="demo"/> -->
        <!-- <Student v-on:atguigu="getStudentName"/> -->
        <!-- <Student @atguigu="getStudentName"/> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <!-- <Student ref="student"/> -->
        <!-- <Student @atguigu.once="getStudentName"/> -->

        <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->
        <!-- <Student ref="student"/> -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
    import Student from './components/Student.vue';
    import School from './components/School.vue';
    
    export default {
        name: 'App',
        components: {
            Student,
            School
        },
        data() {
            return {
                msg: 'Hello!!!!',
                studentName: ''
            }
        },
        methods: {
            getSchoolName(name) {
                console.log("app recevied school name ", name)
            },
            demo() {
                console.log('demo is called');
            },
            // getStudentName(name) {
            //     console.log("app recevied student name ", name)
            // },
            // getStudentName(name, x, y, z) {
            //     console.log('received student used', name, x, y, z);
            // },
            getStudentName(name, ...params) {
                console.log('received student used', name, params);
                this.studentName = name
            },
            m1(){
                console.log("demo event is declencher");
            },
            show() {
                alert(123)
            },
        },
        mounted() {
            // this.$refs.student.$on('atguigu', this.getStudentName) 绑定自定义事件

            // setTimeout(()=>{
            //     this.$refs.student.$on('atguigu', this.getStudentName)
            // }, 3000)

            // this.$refs.student.$once('atguigu', this.getStudentName) 绑定自定义事件

            // this.$refs.student.$on('atguigu', (name, ...params) => {
            //     console.log('received student used', name, params);
            //     this.studentName = name
            //     console.log(this);
            // })

            // not OK
            // this.$refs.student.$on('atguigu', function(name, ...params){
            //     console.log('received student used', name, params);
            //     this.studentName = name
            //     console.log(this);
            // })
        }
    }
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>