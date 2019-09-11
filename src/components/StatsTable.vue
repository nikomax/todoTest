<template>
    <div class="stats-table">
        <div class="stats-table__row"><span>Deals:</span> <span class="stats-table__value">{{todosCount}}</span></div>
        <div class="stats-table__row"><span>Deals left:</span> <span class="stats-table__value">{{todosLeft}}</span></div>
    </div>
</template>

<script>
export default {
    name: 'StatsTable',
    computed: {
        todosCount() {
            return this.$store.getters.TODO_LIST.length
        },
        todosLeft() {
            return this.$store.getters.TODO_LIST.filter(item => !item.completed).length
        }
    }
}
</script>

<style lang="scss">
.stats-table {
    border: 1px solid #a5a5a5;
    width: 100%;
    &__row {
        padding: 4px 5px;
        display: flex;
        justify-content: space-between;
        &:not(:last-child){
            border-bottom: 1px solid #a5a5a5;
        }
    }
    &__value {
        color: #214aff;
        font-weight: 600;
    }
}
</style>
