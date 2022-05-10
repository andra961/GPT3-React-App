import axios from "axios";

interface GPT3Response {
  choices: {
    text: string;
  }[];
}

const sendCompletionRequest = async (prompt: string) => {
  const defaultSettings = {
    temperature: 0.5,
    max_tokens: 100,
  };

  const { choices } = (
    await axios.post<GPT3Response>(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      { ...defaultSettings, prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GPT3_KEY}`,
        },
      }
    )
  ).data;

  return choices[0].text;
};

export default sendCompletionRequest;
