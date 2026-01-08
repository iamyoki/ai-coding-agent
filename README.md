# AI Coding Agent

A modular, TypeScript-based AI agent designed to assist with coding tasks using AI-powered tools.

## Features

- Intelligent code generation using AI models (OpenAI, Ollama).
- Modular architecture with clear separation of concerns.
- Supports development, testing, and automated commits.
- Built with modern tooling: TypeScript, TSX, Biome, and LeftHook.

## Technologies Used

- **Languages**: TypeScript
- **Frameworks**: TSX, TypeScript
- **AI Libraries**: `ai`, `openai`, `ollama-ai-provider-v2`
- **Tooling**: Biome (code formatting), LeftHook (commit hooks)

## Setup and Usage

### Prerequisites

- Node.js (v18+)
- pnpm (v7+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-coding-agent.git
   cd ai-coding-agent
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Application

- **Development Mode**:
  ```bash
  pnpm run dev
  ```
  Starts the application in watch mode for real-time development.

- **Start Application**:
  ```bash
  pnpm run start
  ```
  Runs the application in production mode.

- **Run Tests**:
  ```bash
  pnpm run test
  ```
  Executes unit tests for all tools.

- **Automated Commit**:
  ```bash
  pnpm run commit
  ```
  Uses `committier` to automate commit messages.

### Testing Tools

The project includes test cases for individual tools:
- `read-file.test.ts`
- `write-file.test.ts`
- `list-files.test.ts`

These ensure each tool functions correctly.

## Directory Structure

```
src/
├── agent.ts
├── main.ts
├── models.ts
├── tools/
│   ├── get-system-date-time.tool.ts
│   ├── list-files.tool.ts
│   ├── read-file.tool.ts
│   └── write-file.tool.ts
└── index.ts
evals/
├── one-turn-tools/
│   ├── get-system-date-time.test.ts
│   ├── list-files.test.ts
│   ├── read-file.test.ts
│   └── write-file.test.ts
```

## Contributing

Contributions are welcome! Please submit a pull request with clear documentation and test cases.

## License

This project is licensed under the ISC License.
