<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M4 8H32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M28 21H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M18 42L18 8" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M36 42L36 21" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAddText",
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
