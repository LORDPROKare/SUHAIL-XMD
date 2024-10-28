const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_37_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTA2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxlUXgzbU9iNVloeU9sQW9uUEFBTGMreHROeXc3VUg1MytkZlJVWGVZWFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NTc1NDg3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0RCOTU3M0VDMjFGMzY5NjVDNTc4RDAxNDg2RjQ2MEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMTU1MDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NTc1NDg3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREE4N0JFMERDMDYyMzE5RkEyMUI1RkEzRDlFMThFQjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMTU1MDQwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtxVlFuc19yUkYySGVxUWRYbVp1YndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDdlYjAxMDYtM2ZiNC00MmI1LWFiNjEtNjY0YjdiOWNmMjk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMTEwLFxuICAgICAgOTEsXG4gICAgICAxNTQsXG4gICAgICAxMDcsXG4gICAgICAxMjMsXG4gICAgICA4OCxcbiAgICAgIDQ4LFxuICAgICAgMyxcbiAgICAgIDE5NSxcbiAgICAgIDE4NyxcbiAgICAgIDI0LFxuICAgICAgNzYsXG4gICAgICAxNyxcbiAgICAgIDMwLFxuICAgICAgMTMwLFxuICAgICAgMjA1LFxuICAgICAgMTk0LFxuICAgICAgNTQsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDEzNCxcbiAgICAgIDEzOSxcbiAgICAgIDE2OSxcbiAgICAgIDg3LFxuICAgICAgMTgzLFxuICAgICAgMTQ3LFxuICAgICAgNjYsXG4gICAgICAxMzgsXG4gICAgICAxNjksXG4gICAgICA1LFxuICAgICAgMzYsXG4gICAgICAxMDUsXG4gICAgICA2MSxcbiAgICAgIDIxOCxcbiAgICAgIDIzMixcbiAgICAgIDIzNSxcbiAgICAgIDE2OCxcbiAgICAgIDM5LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpCVFY1UE03XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ1NzU0ODcyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXNcIixcbiAgICBcImxpZFwiOiBcIjI2ODcxNTIxNjA4OTI4NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByRDU2Z0VFSldrZ0xrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRnY0djNwejFJZjYzTnBjNDNyWkxKS3k3NDhMV1RhSGs4RGI2OFJ0Y2dIZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjRm5CUklsdWZKL015T3dDR296c2NFbjZscEhQQXFrM3c0cFBzWkZHZHlkK2o3b1ZOWkN6V2dqWnFwVUlBdUVmeGlVL0ZCUnV0QXFGcTZROElVK3NEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4Y21QcHl4cGRBbisrOFBrS3VNeVdJTjl0bkg5dnZQUjhISHlZOE1iaWpiRmdWMGRDNGRMMjNyV3I2cjhhaHFOK2I3U08zMFBHbk83ZHh2S0ZxYWtEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ1NzU0ODcyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMTU1MDMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXVVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNdVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZODcrazVOUFVKWEZCTENDR3lkNERDdFVzTjNLNjdENDFROU1ybHJVT3NjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTkzMjQxNTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDE1NTAzNTc0N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
