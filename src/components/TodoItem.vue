<template>
    <div class="todo-item" :class="{'is-completed': item.completed}">
        <div class="todo-item__checkbox">
            <custom-checkbox
                    :id="item.id"
                    :checked="item.completed"
                    @change="updateStatus(item.id)"
            />
        </div>
        <span
                class="todo-item__text"
                v-if="!edit"
        >
            {{item.text}}
        </span>
        <input
                type="text"
                class="todo-item__input"
                v-if="edit"
                v-model="newValue"
                @keydown.enter="updateItem(item.id)"
                @focusout="updateItem(item.id)"
        />
        <button class="todo-item__button" @click="startEdit" v-if="!edit">
            <svg fill="#214aff" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/>
                <path d="M0 0h48v48h-48z" fill="none"/>
            </svg>
        </button>
        <button class="todo-item__button" @click="removeTodo(item.id)">
            <svg fill="#ff1945" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"/>
                <path d="M0 0h48v48h-48z" fill="none"/>
            </svg>
        </button>
    </div>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox";
export default {
    name: 'TodoItem',
    components: {CustomCheckbox},
    data() {
        return {
            edit: false,
            newValue: ''
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeTodo(id) {
            this.$store.commit('REMOVE_TODO', id);
        },
        updateStatus(id) {
            this.$store.commit('TOGGLE_STATUS', id);
        },
        startEdit() {
            this.edit = true;
            this.newValue = this.item.text;
        },
        updateItem(id) {
            this.edit = false;
            this.$store.commit('UPDATE_ITEM', {id, newValue: this.newValue})
        }
    }
}
</script>

<style lang="scss">
.todo-item {
    $this: &;
    display: flex;
    align-items: center;
    &__checkbox {
        margin-right: 10px;
    }
    &__text, &__input {
        flex-grow: 1;
    }
    &__button {
        margin: 0 3px;
        background-color: transparent;
        border: none;
        height: 18px;
        width: 18px;
        svg {
            height: 100%;
            width: 100%;
        }
    }
    &.is-completed {
        #{$this}__text {
            text-decoration: line-through;
        }
    }
}

</style>
