<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue';
    import MyFooter from './components/MyFooter.vue';
    import MyList from './components/MyList.vue';
    
    export default {
        name: 'App',
        components: {
            MyHeader,
            MyFooter,
            MyList
        },
        data() {
            return {
                // todos: [
                //     {id: '001', title: 'Manger', done: true},
                //     {id: '002', title: 'Dormir', done: false},
                //     {id: '003', title: 'Fumer', done: true},
                // ]
                todos: JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            addTodo(todoObj) {
                this.todos.unshift(todoObj)
                // console.log('x')
            },
            checkTodo(id) {
                this.todos.forEach((todo) => {
                    if (todo.id === id) {
                        todo.done = !todo.done
                    }
                })
            },
            deleteTodo(id){
                this.todos = this.todos.filter((todo) => {
                    return todo.id !== id
                })
            },
            checkAllTodo(done) {
                this.todos.forEach((todo) => {
                    todo.done = done;
                })
            },
            clearAllTodo() {
                this.todos = this.todos.filter((todo) => {
                    return !todo.done
                })
            }
        },
        watch: {
            // todos(value) {
            //     localStorage.setItem('todos', JSON.stringify(value))
            // }
            todos:{
                deep: true,
                handler(value) {
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }
        }
    }
</script>

<style>
    body {
        background-color: #fff;
    }

    .btn {
        /* don't add line break and can set the width and height */
        display: inline-block;
        /* Padding is used to create space around an element's content, inside of any defined borders. */
        padding: 4px 12px;
        /* Margins are used to create space around elements, outside of any defined borders. */
        margin-bottom: 0;
        /* Set the font size for different elements: */
        font-size: 14px;
        /* line-height = 1/2*hang ju(la distance between two line) + font-size + 1/2*hang ju(la distance between two line)*/
        line-height: 20px;
        /* Set the text alignment for different <div> elements: like zuo dui qi, you dui qi, ju zhong dui qi*/
        text-align: center;
        vertical-align: middle;
        /* CSS can generate a bunch of different mouse cursors: */
        cursor: pointer;
        /* box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit; */
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    /* Select and style a link when you mouse over it: */
    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    /* Select and style an input field when it gets focus: */
    .btn:focus {
        /* An outline is a line drawn outside the element's border. */
        outline: none;
    }

    .todo-container {
        width: 600px;
        /* * top and bottom margins are 0 */
        /* * right and left margins are auto */
        margin: 0 auto;
        /* border: 1px solid black; */
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }



</style>