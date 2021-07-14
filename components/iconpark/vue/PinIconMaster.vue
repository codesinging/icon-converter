<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M38 38V6C38 4.89543 37.1046 4 36 4H12C10.8954 4 10 4.89543 10 6V38" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="32" width="28" height="12" rx="6" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 16L24 12L28 16L32 12L29 23H19L16 12L20 16Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><circle cx="32" cy="38" r="2" fill="currentColor"/></svg>
</template>

<script>
export default {
    name: "PinIconMaster",
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
