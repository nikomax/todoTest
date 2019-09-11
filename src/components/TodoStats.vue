<template>
    <div class="todo-stats">
        <heading>STATS</heading>
        <stats-table/>
        <div class="todo-stats__button">
            <simple-button
                    @click="clearCompletedTodos"
                    color="secondary"
            >
                Clear completed
            </simple-button>
        </div>
    </div>
</template>

<script>
import SimpleButton from "./SimpleButton";
import StatsTable from "./StatsTable";
import Heading from "./Heading";
export default {
    name: 'TodoStats',
    components: {Heading, StatsTable, SimpleButton},
    methods: {
        clearCompletedTodos() {
            this.$store.commit('CLEAR_COMPLETED');
        }
    }
}
</script>

<style lang="scss">
.todo-stats {
    width: 150px;
    &__button {
        margin-top: 15px;
    }
}
</style>
