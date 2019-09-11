<template>
    <div class="todo-header">
        <heading>Todo list</heading>
        <div class="todo-header__actions">
            <div class="todo-header__input">
                <custom-input
                        label="Input your deal"
                        id="deal"
                        :value="value"
                        @input="handleInput"
                        @enter-keydown="addTodo"
                />
            </div>
            <div class="todo-header__button">
                <custom-button @click="addTodo">add to list</custom-button>
            </div>
        </div>
    </div>
</template>

<script>
import Heading from "./Heading";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
export default {
    name: 'TodoHeader',
    components: {CustomButton, CustomInput, Heading},
    data() {
        return {
            value: ''
        }
    },
    computed: {
        newItem() {
            return {
                id: `f${(~~(Math.random()*1e8)).toString(16)}`,
                text: this.value,
                completed: false
            }
        }
    },
    methods: {
        handleInput(value) {
            this.value = value;
        },
        addTodo() {
            if (!this.value.trim().length) return;
            this.$store.commit('ADD_TODO', this.newItem);
            this.value = '';
        }
    }
}
</script>

<style lang="scss">
.todo-header {
    &__actions {
        display: flex;
        align-items: flex-end;
    }
    &__input {
        flex-grow: 1;
        margin-right: 10px;
    }
}
</style>
