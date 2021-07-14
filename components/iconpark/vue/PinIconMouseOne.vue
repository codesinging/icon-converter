<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="12" y="12" width="24" height="32" rx="12" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24V25H12V24Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M24 25C24 25 24 16 24 12C24 8 25.5 4 31 4C37 4 39 9 39 13" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconMouseOne",
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
