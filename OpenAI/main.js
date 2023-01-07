const openai = require('openai');

openai.apiKey = "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";

const prompt = "What is the capital of France?";

const model = "davinci";

const generateText = async () => {
  const response = await openai.completion.create({
    prompt,
    model,
    temperature: 0.5,
  });
  const text = response.choices[0].text;
  console.log(text);
};
generateText();