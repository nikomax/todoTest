<template>
    <button
            class="todo-filter-button"
            :class="{'is-active': isActive}"
            @click="handleClick()"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'FilterButton',
    props: {
        filterType: {
            type: String,
            required: true
        },
    },
    computed: {
        isActive() {
            return this.$store.getters.SORT_TYPE === this.filterType;
        }
    },
    methods: {
        handleClick() {
            this.$store.commit('SET_FILTER', this.filterType);
        }
    }
}
</script>

<style lang="scss">
.todo-filter-button {
    background-color: transparent;
    border-radius: 0;
    border: none;
    text-transform: uppercase;
    display: block;
    width: 100%;
    padding: 10px 5px;
    text-align: center;
    position: relative;
    transition: color 0.3s;
    &:hover, &:focus {
        color: #214aff;
        outline: none;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: #214aff;
        transform: scaleX(0);
        transition: transform 0.3s;
    }
    &.is-active {
        &:after {
            transform: scaleX(1);
        }
    }
}
</style>
