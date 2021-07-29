<template>
  <div >
    <div>First Number</div>
    <input v-model="number1" />
    <div>Second Number</div>
    <input v-model="number2" />
    <br />
    <br />
    <div>
    <button @click="getMultiplication">Multiply numbers</button>
    </div>
    <br />
    <div>
    <button @click="getMultiplicationShared">Multiply numbers with shared worker</button>
    </div>
    <br />
    <br />
    <div>Result :</div>
    <div>{{multiplicationResult}}</div>
  </div>
</template>

<script>
import * as Comlink from "comlink";

const Mulptiplier = Comlink.wrap(
  new Worker("@/comlinkWorker/mulptiplierWorker.js", {type: 'module'})
);

const MultiplierShared = Comlink.wrap(
  new SharedWorker("@/comlinkWorker/mulptiplierWorker.js").port
);

export default {
  data() {
    return {
      multiplicationResult: "No token yet",
      resultFromSharedWorker: "",
      number1: 1,
      number2: 4
    }
  },
  mounted() {
    
  },
  methods: {
    async getMultiplication() {
      try {
        console.log("Mulptiplier.getMultiplication");
        var result = await Mulptiplier.getMultiplication(this.number1, this.number2);
      } catch (err) {
        this.multiplicationResult = err;
      }
      this.multiplicationResult = result;
    },

    async getMultiplicationShared() {
      try {
        console.log("Mulptiplier.getMultiplication");
        var result = await MultiplierShared.getMultiplication(this.number1, this.number2);
      } catch (err) {
        this.multiplicationResult = err;
      }
      this.multiplicationResult = result;
    }
  }
}
</script> 