const { Configuration, OpenAIApi } = require("openai");



//The configuration constant is then initialized with an object that contains an apiKey property set to the value of the OPENAI_API_KEY environment variable. This apiKey is used to authenticate requests to the OpenAI API.

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });


  //The openai constant is initialized with a new instance of the OpenAIApi class, passing in the configuration object as an argument.
  
  const openai = new OpenAIApi(configuration);


const generateimage = async (req, res) => {
const { prompt, size } = req.body;

const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';




    try {


       
        
//The function then uses the createImage method of the openai object to generate an image based on the prompt and imageSize variables.

const response = await openai.createImage({
    prompt,
    n: 1,
    size: imageSize
});


//If the image generation is successful, the function returns a JSON object with a success property set to true  and a data property set to the URL of the generated image.

const imageUrl = response.data.data[0].url
res.status(200).json({
    success: true,
    data: imageUrl
});
    } catch (error) {

        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }

          //If the image generation fails, the function returns a JSON object with a success property set to false and an error property containing an error message.

        res.status(400).json({
            success: false,
            error: 'The image could not be generated'
        });

    }

}

module.exports = { generateimage}