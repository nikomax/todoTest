<template>
    <div class="custom-checkbox">
        <input
                class="custom-checkbox__input"
                type="checkbox"
                :id="id"
                :checked="checked"
                @change="handleChange"
        >
        <label class="custom-checkbox__label" :for="id">
            <svg class="custom-checkbox__icon" fill="none" height="24" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
        </label>
    </div>
</template>

<script>
export default {
    name: 'CustomCheckbox',
    props: {
        id: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('change', e)
        }
    }
}
</script>

<style lang="scss">
.custom-checkbox {
    $this: &;
    &__input {
        display: none;
        &:checked {
            & ~ #{$this}__label {
                background-color: #214aff;
                border-color: #214aff;
                #{$this}__icon {
                    opacity: 1;
                }
            }
        }
    }
    &__label {
        display: block;
        height: 15px;
        width: 15px;
        border: 2px solid #a5a5a5;
        border-radius: 2px;
        cursor: pointer;
        transition: background-color 0.3s, border-color 0.3s;
    }
    &__icon {
        opacity: 0;
        width: 100%;
        height: 100%;
        display: block;
        transition: opacity 0.3s;
    }
}
</style>
