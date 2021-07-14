<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M31 14C31 22 17 22 17 14C17 9.00004 22 7.99996 20 4.99998C18 1.99998 8 6.99993 8 16V31.9999C8 40.4998 16.5 43.9998 23.5 43.9999C30.5 44 40 41 40 31.9999V16.0001C40 7.00004 29 2 27 4.99998C25 7.99995 31 9.00004 31 14Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linejoin="round"/><path d="M19 32L24 27L29 32L24 37L19 32Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBib",
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
