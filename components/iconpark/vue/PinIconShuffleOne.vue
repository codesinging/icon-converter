<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M40 33L44 37L40 41" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 7L44 11L40 15" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 11.0001H37C29.8203 11.0001 24 16.8204 24 24.0001V24.0001C24 31.1798 29.8203 37.0001 37 37.0001H44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M4 37.0001H11C18.1797 37.0001 24 31.1798 24 24.0001V24.0001C24 16.8204 18.1797 11.0001 11 11.0001L4 11.0001" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconShuffleOne",
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
