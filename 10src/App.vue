<template>
    <div class="app">
        <h1>{{msg}} student name is : {{studentName}}</h1>
        <School :getSchoolName="getSchoolName"/>

        <!-- <Student v-on:atguigu="getStudentName"/> -->
        
        <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

        <!-- <Student @atguigu.once="getStudentName"/> -->

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
            show() {
                alert(123)
            },
            getSchoolName(name) {
                console.log("recevied school name ", name)
            },
            // getStudentName(name, x, y, z) {
            //     console.log('received student used', name, x, y, z);
            // }
            // getStudentName(name, ...params) {
            //     console.log('received student used', name, params);
            //     this.studentName = name
            // },
            m1(){
                console.log("demo event is declencher");
            }
            
        },
        mounted() {
            this.$refs.student.$on('atguigu', this.getStudentName)

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

            // this.$refs.student.$once('atguigu', this.getStudentName)

            // setTimeout(()=>{
            //     this.$refs.student.$on('atguigu', this.getStudentName)
            // }, 3000)
        }

    }
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>