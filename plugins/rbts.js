const Raone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const  Anim = "Get animation videos";


    Raone.addCommand({pattern: 'bts', fromMe: true, desc: Anim}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://dapuhy-api.herokuapp.com/api/randomimage/batues?apikey=SSSSSSS1D";
        r_text[1] = "https://dapuhy-api.herokuapp.com/api/randomimage/batues?apikey=SSSSSSS1D";

        var i = Math.floor(2*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CP_TEXT})

    }));

Raone.addCommand({pattern: 'bts', fromMe: false, desc: Anim}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://dapuhy-api.herokuapp.com/api/randomimage/batues?apikey=SSSSSSS1D";
        r_text[1] = "https://dapuhy-api.herokuapp.com/api/randomimage/batues?apikey=SSSSSSS1D";

        var i = Math.floor(2*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CP_TEXT})

    }));
