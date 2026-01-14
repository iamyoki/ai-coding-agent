# AI Coding Agent

A terminal-based AI coding agent built with TypeScript, React (Ink), and the AI SDK. This agent leverages large language models to assist with file operations and system tasks through an interactive command-line interface.

## Features

- 🤖 **Multi-Model Support**: Compatible with Ollama and Zhipu AI models
- 📁 **File System Tools**: Read, write, and list files/directories
- ⏰ **System Time Access**: Get current system date and time
- 🎨 **Beautiful Terminal UI**: Rich interface built with Ink React framework
- 🔒 **User Approval Flow**: Approve or reject tool executions for safety
- 📊 **Real-time Streaming**: Watch AI responses as they're generated
- ✅ **Evaluation Suite**: Automated tests for tool capabilities

## Architecture

```
src/
├── agent.ts              # Agent configuration with ToolLoopAgent
├── main.ts               # Application entry point
├── models.ts             # LLM provider configurations
├── services/
│   └── agent.service.ts  # Agent service for streaming and approvals
├── tools/
│   ├── get-system-date-time.tool.ts
│   ├── list-files.tool.ts
│   ├── read-file.tool.ts
│   └── write-file.tool.ts
└── ui/
    ├── app.tsx           # Main UI component
    ├── approval.tsx      # Tool approval interface
    ├── hero.tsx          # Header/branding
    ├── messages.tsx      # Message display
    └── ...               # Other UI components
```

## Available Tools

| Tool Name | Description | Parameters |
|-----------|-------------|------------|
| `get_system_date_time` | Get current system date and time | None |
| `read_file` | Read file contents | `path` (required), `reason` (optional) |
| `write_file` | Write content to file | `path` (required), `content` (required), `reason` (optional) |
| `list_files` | List directory contents | `directory` (required), `reason` (optional) |

## Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

## Configuration

Configure your preferred AI model in `.env`:

```env
# For Zhipu AI
ZHIPU_APIKEY=your_api_key_here

# For Ollama (ensure Ollama is running locally)
# No additional configuration needed
```

Switch between models in `src/agent.ts`:

```typescript
export const agent = new ToolLoopAgent({
  model: zhipuGLMModel,  // Use Zhipu GLM-4.7
  // model: ollamaQwen3_4b_instruct_q4_KM,  // Or use Ollama
  // ...
});
```

## Usage

```bash
# Start the application
pnpm start

# Development mode with hot reload
pnpm dev
```

Once running:
1. Type your request or question
2. The agent will use available tools as needed
3. Approve or reject tool executions when prompted
4. View results in real-time with markdown formatting

## Testing

Run the evaluation suite to test tool capabilities:

```bash
# Run all tests
pnpm test

# Run specific test files
pnpm test evals/one-turn-tools/get-system-date-time.test.ts
pnpm test evals/one-turn-tools/list-files.test.ts
pnpm test evals/one-turn-tools/read-file.test.ts
pnpm test evals/one-turn-tools/write-file.test.ts
```

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **AI/ML**: AI SDK, OpenAI, Ollama
- **UI**: Ink (React for CLI), Ink UI components
- **State Management**: Valtio
- **Utilities**: Zod (validation), dedent, marked (markdown)
- **Tooling**: pnpm, Biome, Lefthook

## Development

- Code formatting with Biome
- Git hooks managed by Lefthook
- Conventional commits with Committier

## License

ISC
