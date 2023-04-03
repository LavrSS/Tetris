<template>
    <div class="bg-cyan-200 rounded p-2 text-cyan-900 min-w-[40px] text-center font-bold text-2xl">{{game.counter}}</div>
</template>

<script setup>
import {useGame} from "../store/game.js";

const game = useGame();

</script>

<style scoped>

</style>