<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" :stroke-width="strokeWidth" stroke="none" fill-rule="evenodd"/><g transform="translate(4.000000, 4.000000)"><rect :fill="fill" fill-rule="nonzero" x="0" y="29" width="40" height="10" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="stroke"/><rect stroke-linecap="round" x="22" y="22" width="12" height="7" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="stroke" :fill="fill" fill-rule="evenodd"/><circle :fill="fill" fill-rule="nonzero" cx="14" cy="5" r="5" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="stroke"/><path d="M12,10 L5,29" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" :stroke="stroke" :fill="fill" fill-rule="evenodd"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconJoystick",
    props: {
        filled: {
            type: Boolean,
            default: false
        },
        size: {
            type: [Number, String],
            default: '1rem'
        },
        color: {
            type: String,
            default: 'currentColor'
        },
        strokeWidth: {
            type: [String, Number],
            default: 4
        },
    },
    computed: {
        stroke() {
            return this.color
        },
        fill() {
            return this.filled ? this.color : 'none'
        }
    },
}
</script>
