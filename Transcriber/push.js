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


const one = async () => {
  assembly
      .post("/transcript", {
          audio_url: "https://bit.ly/3yxKEIY"
      })
    assembly 
      //.then((res) => console.log(res.data.id))
      
      .catch((err) => console.error(err));
  }

one();


const run = async () => {
  assembly
      .post("/transcript", {
          audio_url: "https://bit.ly/3yxKEIY"
      })
      .then((res) => console.log(res.data.id))
      .then((res) => console.log("hello"))
      .catch((err) => console.error(err));
  }
  
  const show = async () => {
    assembly
    .get(`/transcript/${'rc0ujodim0-0517-4c94-a218-bd8b9509602c'}`)
    .then((res) => console.log(res.data.text))
    .catch((err) => console.error(err));
  }

app.set('port', 4031);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${server.address().port}`);
});

//run();
//show();