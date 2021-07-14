<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="fill" viewBox="0 0 16 16">
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
</template>

<script>
export default {
    name: "PinIconDice5Fill",
    props: {
        size: {
            type: [Number, String],
            default: '1rem'
        },
        color: {
            type: String,
            default: 'currentColor'
        },
    },
    computed: {
        fill() {
            return this.color || 'currentColor';
        }
    },
}
</script>
