import { log, error, success } from "./utils.js"


console.log(log("Lunaloid starting server."))
console.log(log("Lunaloid getting login info."))
/** Starting Bot **/

import("./bot.js")
  .catch(err => console.log(error(`Lunaloid failed ${err.message}.`)));

/** End **/