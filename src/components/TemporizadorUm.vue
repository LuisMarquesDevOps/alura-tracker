<template>
    

    <div class="is-flex is-align-items-center is-justify-content-space-between">


                    <UmCronometro :tempoEmSegundos = "tempoEmSegundos"/>
                    <button class="button" @click="iniciar" :disabled="UmCronometroRodando">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="finalizar" :disabled="!UmCronometroRodando">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UmCronometro from './UmCronometro.vue'

export default defineComponent({
    name: 'TemporizadorUm',
    emits: ['aoTemporizadorUmFinalizado'],
    components:{
        UmCronometro,
    },
    data(){
        return {
            tempoEmSegundos: 0,
            UmCronometro: 0,
            UmCronometroRodando: false,
        }
    },

   
    methods: {
        iniciar(){
            this.UmCronometroRodando = true,
            this.UmCronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000),
            console.log('iniciando');
        },
        finalizar(){
            this.UmCronometroRodando = false,
            clearInterval(this.UmCronometro);
            this.$emit('aoTemporizadorUmFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>