<template>
<svg :width="size" :height="size" viewBox="0 0 48 48" :fill="fill" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="4" width="8" height="8" rx="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="12" y="22" width="8" height="8" rx="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="31" x2="16" y2="44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><rect x="28" y="4" width="8" height="8" rx="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><rect x="28" y="22" width="8" height="8" rx="4" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><line x1="32" y1="31" x2="32" y2="44" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><path d="M13 17H19" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 17H35" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 36H19" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 36H35" :stroke="stroke" :stroke-width="strokeWidth" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="14" x2="16" y2="20" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/><line x1="32" y1="14" x2="32" y2="20" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round"/></svg>
</template>

<script>
export default {
    name: "PinIconBarbecue",
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
