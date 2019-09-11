<template>
    <div class="todo-list">
        <div class="todo-list__item" v-for="todoIitem in sortedTodoList" :key="todoIitem.id" >
            <todo-item :item="todoIitem"/>
        </div>
    </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
    name: 'ToodoList',
    components: {TodoItem},
    computed: {
        todoList() {
            return this.$store.getters.TODO_LIST
        },
        sortType() {
            return this.$store.getters.SORT_TYPE
        },
        sortedTodoList() {
            return this.getSortedList(this.todoList, this.sortType);
        },
    },
    methods: {
        getSortedList(list, sortBy) {
            switch (sortBy) {
                case 'all': return list;
                case 'completed': return list.filter(item => item.completed);
                case 'uncompleted': return list.filter(item => !item.completed);
            }
        }
    },
    beforeMount() {
        const list = JSON.parse(localStorage.getItem('todoList') || '[]');
        this.$store.commit('SET_TODO_LIST', list);
    },
    watch: {
        todoList: {
            handler: (newValue) => {
                localStorage.setItem('todoList', JSON.stringify(newValue));
            },
            deep: true
        }
    }
}
</script>

<style lang="scss">
.todo-list {
    padding: 10px;
    &__item {
        padding: 10px 0;
    }
}
</style>
