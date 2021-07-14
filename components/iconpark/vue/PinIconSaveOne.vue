<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M39.3 6.00012H8.7C7.20883 6.00012 6 7.20895 6 8.70012V39.3001C6 40.7913 7.20883 42.0001 8.7 42.0001H39.3C40.7912 42.0001 42 40.7913 42 39.3001V8.70012C42 7.20895 40.7912 6.00012 39.3 6.00012Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M32 6V24H15V6H32Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M26 13.0001V17.0001" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M10.9969 6.00012H35.9985" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconSaveOne",
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
