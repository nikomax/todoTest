<template>
    <div
            class="custom-input"
            :class="{
                'is-focused': focused,
                'is-not-empty': value
            }"
    >
        <label class="custom-input__label" :for="id">{{label}}</label>
        <input
                class="custom-input__field"
                :id="id"
                type="text"
                :value="value"
                @input="handleInput"
                @keydown.enter="handleEnter"
                @focusin="focused = true"
                @focusout="focused = false"
        >
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    data() {
        return {
            focused: false
        }
    },
    props: {
        value: {
            type: String
        },
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        },
        handleEnter(event) {
            this.$emit('enter-keydown', event);
        }
    }
}
</script>

<style lang="scss">
.custom-input {
    $this: &;
    position: relative;
    margin-top: 20px;
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
    &__label {
        transition: transform 0.3s;
        position: absolute;
        bottom: 4px;
        left: 0;
    }
    &__field {
        font-size: 14px;
        padding: 5px 0;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid #a5a5a5;
        &:focus {
            outline: none;
        }
    }
    &.is-focused {
        &:after {
            transform: scaleX(1);
        }
        #{$this}__label {
            transform: translate(-10%, -100%) scale(0.8);
        }
    }
    &.is-not-empty {
        #{$this}__label {
            transform: translate(-10%, -100%) scale(0.8);
        }
    }
}

</style>
