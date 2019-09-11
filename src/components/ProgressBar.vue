<template>
    <div class="progress-bar">
        <radial-progress-bar :diameter="100"
                             inner-stroke-color="#a5a5a5"
                             start-color="#214aff"
                             stop-color="#214aff"
                             :completed-steps="todosDone"
                             :total-steps="todoListLength">
            <div class="progress-bar__value">{{progressValue}}%</div>
        </radial-progress-bar>
    </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';

export default {
    name: 'ProgressBar',
    components: {
        RadialProgressBar
    },
    computed: {
        todoList() {
            return this.$store.getters.TODO_LIST;
        },
        todoListLength() {
            return this.todoList.length;
        },
        todosDone() {
            return this.todoList.filter(item => item.completed).length;
        },
        progressValue() {
            return this.getPercentageValue(this.todoListLength, this.todosDone) || 0;
        }
    },
    methods: {
        getPercentageValue(full, part) {
            return Math.floor((part / full) * 100)
        }
    }
}
</script>

<style lang="scss">
.progress-bar {
    padding: 10px;
    &__value {
        color: #214aff;
    }
}
</style>
