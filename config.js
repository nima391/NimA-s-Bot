const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "C6IhnRgQ#uxqOt9yI_G_ZpUs2YtfAOwonw7NzWvgBgEkfpW_HIgo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/nima391/NimA-s-Bot/blob/main/images/NimA%20Functional%20Bot%20Logo.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 NimA's Bot Is Alive Now😍*",
BOT_OWNER: '94773918295',  // Replace with the owner's phone number



};
