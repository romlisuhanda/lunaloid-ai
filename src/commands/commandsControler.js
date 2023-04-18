import fs from "fs";
import lunaloid from "lunaloid-sdk";
import { Leap } from "@leap-ai/sdk"
import { download } from "../config/tools.js"

/**
 * 
 * Lunaloid project copyright 2023
 * @author: miruchigawa
 * @lastest: 18 apr 2023
 * 
*/

/** ------- Conv ------- **/
const globalconv = JSON.parse(fs.readFileSync("./src/config/config.json"))
const leap = new Leap(globalconv.TRYLEAP_KEY);
leap.useModel("1e7737d7-545e-469f-857f-e4b46eaa151d");
/** ------- End ------- **/

export default async function(bot, event){
  
  /** If bot is not public function will be active **/
  if (!globalconv.isPublic && !globalconv.OWNER_ID.includes(event.senderID)) return;
  /** ------- End ------- **/
  
  /** Get action on chat if available **/
  const { data } = await lunaloid.actionRecog(event.body);
  switch (data.action) {
    case 'create image': case 'image': case 'create anime': case 'anime':
      if (!data.key) return bot.sendMessage("What picture do you want to make??", event.threadID, event.messageID)
      bot.sendMessage("Pwease wait •~•", event.threadID, event.messageID)
      const results = await leap.generate.generateImage({
        prompt: data.key,
        steps: 200,
        enhancePrompt: true,
        negativePrompt: "duo girl, out of frame, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, extra legs, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature"
      })
      if (!results.error){
        results.data.images.forEach(async (data, index) => {
          const path = `./src/assets/wfx_id=${Date.now()}.jpeg`
          await download(data.uri, path)
          await bot.sendMessage({attachment: fs.createReadStream(path)}, event.threadID)
          await fs.unlinkSync(path)
        })
      }else{bot.sendMessage("Ewwow °~°", event.threadID, event.messageID)} 
      break;
    
    default:
      const chat = await lunaloid.createChat(event.body);
      if (chat.status === 200) return bot.sendMessage(chat.data, event.threadID, event.messageID)
  }
}