<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-58eadc248484b22)"><path d="M19.5571 44.7684C19.5571 44.7684 32.4675 20.4873 33.6412 18.28C34.8149 16.0726 37.453 8.98102 30.3894 5.22524C23.3258 1.46947 19.1566 7.18063 17.7482 9.82948" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="icon-58eadc248484b22"><rect width="48" height="48" fill="currentColor"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconACane",
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
