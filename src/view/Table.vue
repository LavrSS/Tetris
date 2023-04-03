<template>
    <div @keyup.enter="test" class="bg-cyan-900 w-screen h-screen flex justify-center items-center">
        <VCounter class="absolute top-[40px] left-[50px]" />
        <Field/>
        <button @click="game.dropFigure">Start Game</button>

    </div>
</template>

<script setup>
import Field from "@/components/Field.vue";
import { useGame } from '@/store/game.js';
import { useFigure } from '@/store/figure.js';
import VCounter from "../components/VCounter.vue";
const game = useGame()
const figure = useFigure()



window.addEventListener('keydown', test)

function test(e) {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        game.moveRight()
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        game.moveLeft()
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        game.moveDown()
    } else if (e.key === 'ArrowUp' || e.key === 'e') {
        game.moveAround()
    }
}
</script>

<style lang="scss">

</style>