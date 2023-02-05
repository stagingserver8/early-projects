const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


  
const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "e420f2e1ae134a0caf6e9a4aaffbce52",
    },
});
assembly
    .get(`/transcript/${'rc04on0jk8-917c-4134-85a7-cffe62cc9504'}`)
    .then((res) => console.log(res.data.text))
    .catch((err) => console.error(err));


// const assembly = axios.create({
//   baseURL: "https://api.assemblyai.com/v2",
//   headers: {
//       authorization: "e420f2e1ae134a0caf6e9a4aaffbce52",
//   },
// });

// const run = async () => {
//   assembly
//       .post("/transcript", {
//           audio_url: "https://bit.ly/3yxKEIY"
//       })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.error(err));
//   }
  
//   run()



app.set('port', 4031);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${server.address().port}`);
});

