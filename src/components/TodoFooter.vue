<template>
    <div class="todo-footer">
        <div class="todo-footer__tab">
            <filter-button filter-type="all">All</filter-button>
        </div>
        <div class="todo-footer__tab">
            <filter-button filter-type="completed">Completed</filter-button>
        </div>
        <div class="todo-footer__tab">
            <filter-button filter-type="uncompleted">Uncompleted</filter-button>
        </div>
    </div>
</template>

<script>
import FilterButton from "./FilterButton";
export default {
    name: 'TodoFooter',
    components: {FilterButton},
}
</script>

<style lang="scss">
.todo-footer {
    display: flex;
    &__tab {
        width: 33.33%;
    }
}
</style>
