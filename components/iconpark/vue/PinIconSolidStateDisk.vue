<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M44 29H4V42H44V29Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z" fill="currentColor"/><path d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M10 35.5H27" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSolidStateDisk",
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
