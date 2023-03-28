<template>
    <div class="bg-lime-900 w-screen h-screen flex justify-center items-center">
        <Field/>
        <button @click="game.startGame">Start Game</button>

    </div>
</template>

<script setup>
import Field from "@/components/Field.vue";
import { useGame } from '@/store/game.js';
const game = useGame()
</script>

<style lang="scss">

</style>