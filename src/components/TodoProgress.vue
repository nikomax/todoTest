<template>
    <div class="todo-progress">
        <heading>PROGRESS</heading>
        <progress-bar/>
        <div class="todo-progress__button">
            <simple-button @click="completeAllTodos">complete all</simple-button>
        </div>
    </div>
</template>

<script>
import SimpleButton from "./SimpleButton";
import ProgressBar from "./ProgressBar";
import Heading from "./Heading";

export default {
    name: 'TodoProgress',
    components: {Heading, ProgressBar, SimpleButton},
    methods: {
        completeAllTodos() {
            this.$store.commit('COMPLETE_ALL');
        }
    }
}
</script>

<style lang="scss">
.todo-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
