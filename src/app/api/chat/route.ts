import { OpenAIChat } from '@axflow/models/openai/chat';
import { MessageType, StreamingJsonResponse } from '@axflow/models/shared';
export const runtime = 'edge';


function getLastUserMessageContent(messages:MessageType[]) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") {
      return messages[i].content;
    }
  }
  return null;
}
export async function POST(request: Request) {
  const { messages , context} = await request.json();
  console.log(context + "asldfjkajsdfhkadfs");
  let query = getLastUserMessageContent(messages);
  let combinedContext = JSON.stringify(messages)+JSON.stringify(context) ;
  const key = process.env.OPENAI_API_KEY;
  const template = `Context information is below.
  ---------------------
  ${combinedContext}
  ---------------------
  Given the context information and not prior knowledge, strictly answer the question: ${query} if no relevant context found respond with no context found.
  `;
  const stream = await OpenAIChat.streamTokens(
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: template}],
    },
    {
      apiKey: key,
    }
  );
  return new StreamingJsonResponse(stream);
//   const embedder = new OpenAIEmbedder({ apiKey: process.env.OPENAI_API_KEY });
//   const pinecone = new Pinecone({
//     index: 'vite',
//     namespace: 'default',
//     environment: 'gcp-starter',
//     apiKey: process.env.PINECONE_API_KEY,
//   });
//   const allMessagesContent = messages.map((msg: { content: any; }) => msg.content).join(' ');
//   const combinedContext = `${context} ${allMessagesContent}`;
//   const template =
//    `Context information is below.
// ---------------------
// ${combinedContext}
// ---------------------
// Given the context information and not prior knowledge, answer the question: {query}
// `;

// const rag = new RAG({
//   embedder: embedder,
//   model: new OpenAICompletion({
//     model: 'gpt-3.5-turbo-instruct',
//     max_tokens: 256,
//     apiKey: process.env.OPENAI_API_KEY,
//   }),
//   prompt: new PromptWithContext({ template }),
//   retriever: new Retriever({ store: pinecone, topK: 3 }),
// });
// const query = getLastUserMessageContent(messages);
// const { result, info } = rag.stream(
//   query,
// );
// let val='';
// for await (const chunk of result) {
//   val+=chunk;
// }
// console.log(val)
// return val;
}