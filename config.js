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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347045754872";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_15_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImpOOEFQamZJaG0ydmRUY1h4VjREZFRoS2tCV3JaaVFFeC9Fbk5Sakd0S1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NTc1NDg3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjQ1NEQ1QjQ3N0M0Q0M3QjRFOURFNkUyQjQwQ0Y5OERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMjM2NTE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NTc1NDg3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0E2QzVDQ0U3RkYwNzRERkNEOEZFODE5QkU2NjQyMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMjM2NTE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhuVlAzY0M4VHBXZTJSdXJaaExtekFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODkwZGNhMmItMmZlMi00Njk3LThlNzEtODM5NDdlYmQ5ZWRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDEzNixcbiAgICAgIDE2NCxcbiAgICAgIDc0LFxuICAgICAgMjUyLFxuICAgICAgMSxcbiAgICAgIDEyNSxcbiAgICAgIDE2MyxcbiAgICAgIDIxMCxcbiAgICAgIDM5LFxuICAgICAgODAsXG4gICAgICAyLFxuICAgICAgODEsXG4gICAgICAyMDEsXG4gICAgICAyMzcsXG4gICAgICAxNTcsXG4gICAgICAyMzIsXG4gICAgICAxMjAsXG4gICAgICAxMTEsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDYsXG4gICAgICAxNTMsXG4gICAgICAyMDUsXG4gICAgICAzNSxcbiAgICAgIDE1MyxcbiAgICAgIDEzOCxcbiAgICAgIDMsXG4gICAgICAxNjAsXG4gICAgICAyNTEsXG4gICAgICAxMjksXG4gICAgICAyMzIsXG4gICAgICA3MSxcbiAgICAgIDE5OCxcbiAgICAgIDkwLFxuICAgICAgMTAyLFxuICAgICAgMjUzLFxuICAgICAgMTk5LFxuICAgICAgOTEsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRN0hMUDdQNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NTc1NDg3MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5vbnltb3VzXCIsXG4gICAgXCJsaWRcIjogXCIyNjg3MTUyMTYwODkyODU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdkQ1NmdFRU9DZ2hia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ2NHYzcHoxSWY2M05wYzQzclpMSkt5NzQ4TFdUYUhrOERiNjhSdGNnSGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTG5OSWxWaEtCUHBiR0xQVk9LSmdyMThkVmhRZEROcGVBdEd1MEhpVkYwc1Zhai9YSFhaYzFOWjlMVWVBRHZSNmdyM050a1d4a2YvUVZSUGhkL25yQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmdmMmhoNnJXRW95cGtUYlZXOUhHaU9yOUlEYW9aZ1lzQTVNQlljc3lFbkQwaE9SWUx4Ri81K1ZRaVM4Z21lcFo2VmliN0tJVGhqQWhTcXRENGswQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NTc1NDg3MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDIzNjUxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU11V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXVXLmpzb24iOiAie1wia2V5RGF0YVwiOlwicm1WQ0Q3OWJpbGRlMGgvZnVrdzEwYkJOYlF2QmRremNyc3RDcUlZNDg0VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU5MzI0MTU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAyMzY1MTg4NzVcIn0iCn0="  // PUT your SESSION_ID 


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
