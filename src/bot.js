/**
 * 
 * Lunaloid project copyright 2023
 * @author: miruchigawa
 * @lastest: 17 apr 2023
 * 
*/


/** Start importing modules **/

import facebook from "fb-chat-api-temp";
import fs from "fs";

import { error, success, log } from "./utils.js";
import commandController from "./commands/commandsControler.js";

/** End of importing modules **/


/** Some fu king function **/

const session = () => {
  const exts = fs.existsSync("./src/session/cookie.json")
  if (!exts) return console.log(error("Lunaloid cannot find session, please create file cookie.json on session directory.")), process.exit()
  return JSON.parse(fs.readFileSync("./src/session/cookie.json"))
}


/** End of function **/

/** Create connection to Facebook server **/
async function conn(){
  facebook({appState: session()}, (err, api) => {
    if (err) throw new Error(error(err))
    
    console.log(success("Lunaloid Successfully login."))
    
    /** Set configuration api **/
    
    api.setOptions({
      logLevel: "silent", // Log Level (info, debug, silent)
      listenEvent: true, // Listening event eg. Someone joined to group etc. (true, false)
      autoReconect: false, // Automatically reconnect if connection closed (true, false)
      forceLogin: true // Force login (true, false)
    })
    
    /** End of configuration **/
    
    api.listen(async (err, event) => {
      
      /** Will throw error when getting error **/
      if (err) throw new Error(error(err));
      /** End **/
      
      
      
      /**
       * 
       * Listening event 
       * List type: message, message_reply, event LogMessageType (log: subscribe, log:unsubscribe)
       * @lastest: 18 apr 2023
       * @author: miruchigawa
       * 
      */
      switch (event.type) {
        case 'message': case 'message_reply':
          /** Show to log if getting messages **/
          console.log(log("Lunaloid getting messages from room "
          + 
          event.threadID 
          + 
          " message: " 
          + 
          event.body
          ))
          /** End **/
          
          try{
            await commandController(api, event)
          }catch(e){
            console.log(error("Lunaloid failure "+e))
          }
          break;
          
      }
    })
  })
}
/** End of connection **/


/** Starting connection **/
conn()