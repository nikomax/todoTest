<template>
    <button
            class="simple-button"
            :class="{'simple-button_secondary': color === 'secondary'}"
            @click="handleClick"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'SimpleButton',
    props: {
        color: {
            type: String
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
}
</script>

<style lang="scss">
.simple-button {
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 15px;
    color: #214aff;

    &_secondary {
        color: #ff1945;
    }
}
</style>
