<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M14 4L14 44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14.5 6C14.5 6 28 13 32 22C36 31 33 44 33 44" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M4 44H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 15H32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 22H22" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 29H26" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M14 36H27" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconDubai",
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
