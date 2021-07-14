<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M27 34H21V44H27V34Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 34H17L14 26H34L31 34Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 14C23 9.39 27 4 27 4C27 4 33.36 15.49 33.36 19.23C33.36 22.97 30.74 26 27 26H19C16.36 26 14.64 23.86 14.64 21.22C14.64 18.58 19 10 19 10C19 10 19.96 12.01 21 14Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconTorch",
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
