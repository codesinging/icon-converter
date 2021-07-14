<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-2c9f5d8e172d7ead)"><path d="M35.8 13H32L21 32L9.8 13H6" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.7509 25.5961C31.3517 28.7465 38.446 26.7601 41.5964 21.1593C44.7469 15.5585 42.7605 8.46426 37.1597 5.31381C31.5589 2.16336 24.4646 4.14976 21.3142 9.75056" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M26 44H16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 44L21 32" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16C12 16 14 14 17 14C20 14 22 17 25 17C28 17 30 16 30 16" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="icon-2c9f5d8e172d7ead"><rect width="48" height="48" fill="currentColor"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconCocktail",
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
