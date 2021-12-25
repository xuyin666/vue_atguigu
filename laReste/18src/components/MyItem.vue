<template>
    <!-- <transition name="todo" appear> -->
        <li>
            <label>
                <input 
                    type="checkbox" 
                    :checked="todo.done" 
                    @change="handleCheck(todo.id)"
                />
                <!-- <input type="checkbox" v-model="todo.done"/> -->
                <span v-show="!todo.isEdit">{{todo.title}}</span>
                <input 
                    type="text" 
                    v-show="todo.isEdit" 
                    :value="todo.title" 
                    @blur="handleBlur(todo, $event)"
                    ref="inputTitle"
                />
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">Delete</button>
            <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">Modify</button>
        </li>
    <!-- </transition> -->
</template>

<script>

import pubsub from "pubsub-js"
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        handleCheck(id){
            // informe App Component
            // console.log(id);
            this.$bus.$emit('checkTodo', id)
            // this.checkTodo(id);
        },
        handleDelete(id){
            if(confirm('Are you sure? ')){
                // console.log(id)
                // this.deleteTodo(id)
                // this.$bus.$emit('deleteTodo', id)
                pubsub.publish('deleteTodo', id)
            }

        },
        handleEdit(todo) {
            if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
                todo.isEdit = true
            } else {
                // console.log("@");
                this.$set(todo, 'isEdit', true);
            }
            this.$nextTick(function(){
                this.$refs.inputTitle.focus();
            })
            

        },
        handleBlur(todo, e){
            todo.isEdit = false;
            if (!e.target.value.trim()) return alert("The input can't be empty")
            this.$bus.$emit("updateTodo", todo.id, e.target.value)
        }
    }
}
</script>

<style scoped>

li {
    /* Specify all the list properties in one declaration: */
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    /* The display property specifies if/how an element is displayed. */
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button{
    display: block;
}




</style>