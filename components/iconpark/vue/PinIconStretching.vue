<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-2346b7880e6b37c6)"><path d="M23 5.99966H8C6.89543 5.99966 6 6.89509 6 7.99966V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V25" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 15.9998V23.9998" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M42 5.99951V13.9995" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M32 23.9998H24" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M42 5.99966L24 23.9997" :stroke="stroke" :stroke-width="strokeWidth"/><path d="M42 5.99966H34" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></g><defs><clipPath id="icon-2346b7880e6b37c6"><rect width="48" height="48" fill="currentColor"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconStretching",
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
