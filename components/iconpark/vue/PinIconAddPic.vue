<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><path d="M38 21V40C38 41.1046 37.1046 42 36 42H8C6.89543 42 6 41.1046 6 40V12C6 10.8954 6.89543 10 8 10H26.3636" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 31.0308L18 23L21 26L24.5 20.5L32 31.0308H12Z" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 10H42" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.9941 5.79544V13.7954" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconAddPic",
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
