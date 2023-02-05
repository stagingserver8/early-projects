

const axios = require('axios');
const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "e420f2e1ae134a0caf6e9a4aaffbce52",
    },
});
//status();
 
console.log('hello me')
const exec = async () => {
assembly
    .post("/transcript", {
        audio_url: "https://bit.ly/3yxKEIY"
    })
    .then((res) => console.log(res.data));
    console.log('hello me')
    .catch((err) => console.error(err));
}

// //run()


// const status = async () => { 
// assembly
//     .get(`/transcript/${'rcbn4ha0b4-f27b-4294-970f-746562d10777'}`)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.error(err));
// }

