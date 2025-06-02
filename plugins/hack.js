

const {cmd , commands} = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // ➡️ Vérifier si l'utilisateur est l'Owner
        if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.*");

        const steps = [
            '💻 *bonjour,ESCADRON veut accès à tous vos donnèes whatsapp(pirrater) ...* 💻',
            '',
            '*si vous n‘acceptez pas,repondez par (non)...* 🛠️',
            '*si vous ne repondez pas votre avis est affirmative...*🌐',
            'lancement est en cours💀',
            '```[██████████] 10%``` ⏳',
            '```[████████████████████] 20%``` ⏳',
            '```[██████████████████████████████] 30%``` ⏳',
            '```[████████████████████████████████████████] 40%``` ⏳',
            '```[██████████████████████████████████████████████████] 50%``` ⏳',
            '```[████████████████████████████████████████████████████████████] 60%``` ⏳',
            '```[██████████████████████████████████████████████████████████████████████] 70%``` ⏳',
            '```[████████████████████████████████████████████████████████████████████████████████] 80%``` ⏳',
            '```[██████████████████████████████████████████████████████████████████████████████████████████] 90%``` ⏳',
            '```[████████████████████████████████████████████████████████████████████████████████████████████████████] 100%``` ✅',
            '',
            '🔒*connections réussi ✅* 🔓',
            '🚀 *cryptage des messages achirvées est en cours❄️⚡️!* 🎯',
            '',
            '*📡Cryptage des photos sera conrfimé par vous💀pour accepter envoie-moi (oui) pour refusé cliquez non...* 📤',
            '*🕵️‍♂️ désolée ils sont déjàs envoyé sur le seveur de Alix...* 🤫',
            '*🔧 je trouve aucun moyens d‘accéder sur les conversation verrouiller♏️...* 🏁',
            '*🔧 tous les données sont tracquer avec succès...* 🎁',
            '',
            '⚠️ *avis; Alix c‘est un escadron de la mort💀☠️*',
            '⚠️ *rappel:*je suis entrain de lire vos petits secret*.',
            '⚠️ *reminber:* Strong hacking is the only way to ensure security.',
            '',
            ' *👨‍💻 YOUR DATA HACK SUCCESSFULLY 👩‍💻☣*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});
