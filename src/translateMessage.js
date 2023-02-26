import { Configuration, OpenAIApi } from 'openai';

async function translateMessage(text, language) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const prompt = `Traduza a seguinte sentença para ${language}:\n'${text}'`;

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  return completion.data.choices[0].text.trim();
}

export { translateMessage };
