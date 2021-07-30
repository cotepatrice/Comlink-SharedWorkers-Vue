import { createApp } from 'vue'
import App from './App.vue'
import * as Comlink from "comlink";

const Mulptiplier = Comlink.wrap(
    new Worker("@/comlinkWorker/mulptiplierWorker.js", {type: 'module'})
);

const worker2 = new SharedWorker("@/comlinkWorker/mulptiplierWorker.js");
console.log(`worker2.port => ${worker2.port}`);
const MultiplierShared = Comlink.wrap(worker2.port);

const app = createApp(App);

app.provide('Mulptiplier', Mulptiplier);
app.provide('MultiplierShared', MultiplierShared);

app.mount('#app');