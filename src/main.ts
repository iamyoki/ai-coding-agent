// curl http://localhost:11434/api/generate -d '{
//   "model": "gemma3",
//   "prompt": "Why is the sky blue?"
// }'

const res = await fetch("http://localhost:11434/api/generate", {
  method: "post",
  body: JSON.stringify({
    model: "qwen3:4b-instruct-2507-q4_K_M",
    prompt: "why is the sky blue?",
    // stream: false,
  }),
});

if (!res.body) process.exit(0);

const decoderStream = new TextDecoderStream();

const stream = res.body.pipeThrough(decoderStream);

for await (const chunk of stream) {
  const json = JSON.parse(chunk);
  process.stdout.write(json.response);
}
process.stdout.write("\n");
