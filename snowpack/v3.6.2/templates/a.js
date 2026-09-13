import { gamma } from "../lib-b/gamma.js";

console.log("template a loaded (context chunk), gamma:", gamma);

// context chunk that itself lazily pulls another chunk
import("../views/extra.js").then((m) => m.paint());
