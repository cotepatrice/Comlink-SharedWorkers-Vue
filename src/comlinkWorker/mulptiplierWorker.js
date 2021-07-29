import * as Comlink from "comlink"
import { Mulptiplier } from "./mulptiplier.js";

// self.onconnect = function (event) {
//     const port = event.ports[0];
//     console.log("port");
//     Comlink.expose(TokenManager, port);
//   };
  
// self.onconnect = (e) => {
//     console.log("Inside worker onconnect");
//     Comlink.expose(TokenManager, e.ports[0]);
// }

Comlink.expose(Mulptiplier);