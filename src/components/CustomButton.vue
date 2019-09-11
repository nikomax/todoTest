<template>
    <button class="custom-button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
}
</script>

<style lang="scss">
.custom-button {
    background-color: #214aff;
    color: #fff;
    text-transform: uppercase;
    border-radius: 2px;
    padding: 5px;
    border: none;
}
</style>
