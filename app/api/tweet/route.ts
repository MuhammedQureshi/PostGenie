import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
 
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        "role": "system",
        "content": "You will be provided with text delimited by triple quotes that is supposed to be the answer to a question. Check if the following pieces of information are directly contained in the answer: \n\n- Neil Armstrong was the first person to walk on the moon.\n- The date Neil Armstrong first walked on the moon was July 21, 1969.\n\nFor each of these points perform the following steps:\n\n1 - Restate the point.\n2 - Provide a citation from the answer which is closest to this point.\n3 - Consider if someone reading the citation who doesn't know the topic could directly infer the point. Explain why or why not before making up your mind.\n4 - Write \"yes\" if the answer to 3 was yes, otherwise write \"no\".\n\nFinally, provide a count of how many \"yes\" answers there are. Provide this count as {\"count\": insert-count-here}."
      },
      {
        "role": "user",
        "content": `${messages}`
      }
    ],
  });
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);
}