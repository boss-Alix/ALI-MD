{
  "name": "ALI-MD",
  "description": "Javascript WhatsApp bot made by ALI",
  "logo": "https://cdn.ironman.my.id/i/2du3i5.jpg",
  "keywords": ["ALI-MD"],
  "success_url": "/",

    "stack": "container",
  "env": {
    "SESSION_ID": {
      "description": "gQgCRD5Y#XdSqTFw9yeQYjQOJzf6Zih3FJuX4ef1l11NloqZmcpA",
      "required": true,
      "value": "gQgCRD5Y#XdSqTFw9yeQYjQOJzf6Zih3FJuX4ef1l11NloqZmcpA"
    },  
    
    "STICKER_NAME": {
      "description": "type your sticker pack name.",
      "required": false,
      "value": "𓆩ု᪳𝐀𝐋𝐈-𝐌𝐃ှ᪳𓆪"
    }, 
      
    "PREFIX": {
      "description": "paste your bot prefix note! Don't apply null prefix.",
      "required": false,
      "value": "."
    },
    
    "MODE": {
      "description": "select your bot work type public-private-inbox-group.",
      "required": false,
      "value": "private"
      
    },
    
    
    "ALWAYS_ONLINE": {
      "description": "Make it true if want always online.",
      "required": false,
      "value": "true"  
    },    
  
    "AUTO_VOICE": {
      "description": "Make it true if want automatic voice reply .",
      "required": false,
      "value": "false"
    }, 

    "AUTO_REPLY": {
      "description": "Make it true if you want automatic reply.",
      "required": false,
      "value": "false"
    }, 

    "AUTO_STICKER": {
      "description": "Make it true if you want automatic sticker.",
      "required": false,
      "value": "true"
    }, 


    "AUTO_STATUS_SEEN": {
      "description": "Make it true for automatic status seen.",
      "required": true,
      "value": "true"
    }, 

    "AUTO_STATUS_REACT": {
      "description": "make it true for automatic status reaction or like.",
      "required": true,
      "value": "true"
    }, 

    "AUTO_STATUS_REPLY": {
      "description": "Make it true for auto reply msg on status seen.",
      "required": true,
      "value": "false"
    }, 

    "AUTO_STATUS_MSG": {
      "description": "Type custom message on status reply",
      "required": true,
      "value": "*SEEN YOUR STATUS JUST NOW ALIX-MD 🍒*"
   
     }, 

    "BOT_NAME": {
      "description": "Type here the bot name.",
      "required": false,
      "value": "𓆩ု᪳𝐀𝐋𝐈-𝐌𝐃ှ᪳𓆪"

      }, 
    
    "ALIVE_IMG": {
      "description": "put here the bot Menu url if you don't have you can use this public url.",
      "required": true,
      "value": "https://cdn.ironman.my.id/i/2du3i5.jpg" 
      },

    "DELETE_LINK": {
      "description": "Make it true if you want bot auto remove group link.",
      "required": false,
      "value": "false"
    }, 
    
    "ANTI_LINK_KICK": {
      "description": "Make it true if you want bot auto remove group link.",
      "required": false,
      "value": "false"
    }, 
    
    "ANTI_BAD_WORD": {
      "description": "Make it true if you want bot auto delete bad words.",
      "required": false,
      "value": "false"
    }, 
    
    "AUTO_RECORDING": {
      "description": "Make it true if you want auto recoding.",
      "required": false,
      "value": "false"
    },

    "AUTO_TYPING": {
      "description": "Make it true if you want auto typing.",
      "required": false,
      "value": "false"
    },

    "AUTO_REACT": {
      "description": "Make it true if you want react on every message.",
      "required": false,
      "value": "false"
    },
    
    "CUSTOM_REACT": {
      "description": "Make it true if you want custom reactions.",
      "required": false,
      "value": "false"
      
    }, 
    
    "CUSTOM_REACT_EMOJIS": {
      "description": "put here custom react react emojis.",
      "required": false,
      "value": "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍"
    }, 
    
    "ANTI_DEL_PATH": {
      "description": "change it to -same- if you want to resend deleted message in same chat",
      "required": false,
      "value": "log"
    }, 

    "READ_MESSAGE": {
      "description": "Make it true if you want bot read your all sms just now.",
      "required": false,
      "value": "false"
    }

},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
  
