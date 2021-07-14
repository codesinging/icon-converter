<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="fill" class="bi bi-toggle2-on" viewBox="0 0 16 16">
  <path d="M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z"/>
  <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z"/>
</svg>
</template>

<script>
export default {
    name: "PinIconToggle2On",
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
