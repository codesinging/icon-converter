<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="40" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="26" cy="8" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="36" cy="24" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><circle cx="12" cy="24" r="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M32 24L16 24" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L15 21" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M32.9998 27L24.9987 37" :stroke="stroke" :stroke-width="strokeWidth"/></svg>
</template>

<script>
export default {
    name: "PinIconWholeSiteAccelerator",
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
