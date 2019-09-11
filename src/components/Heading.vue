<template>
    <h2 class="heading">
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: 'Heading'
}
</script>

<style lang="scss">
.heading {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin-bottom: 5px;
}
</style>
