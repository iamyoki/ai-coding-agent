# AI Coding Agent

## Overview
This project is an AI-powered coding agent designed to assist developers with various tasks. It leverages modern tools and frameworks to provide a seamless development experience.

## Key Features
- **Modular Architecture**: The agent is structured with clear separation of concerns, making it easy to maintain and extend.
- **Tool Integration**: Built-in tools for system operations such as date-time retrieval, file listing, reading, and writing.
- **Development Workflow**: Supports development, testing, and running of applications using TypeScript and Node.js.
- **AI Model Integration**: Uses AI models like OpenAI and Ollama to assist with code generation and analysis.

## Technologies Used
- **Language**: TypeScript
- **Build Tools**: PNPM, TypeScript, Biome
- **AI Libraries**: OpenAI, Ollama-ai-provider-v2, Zod
- **Testing**: LeFthook, Jest

## Package Details
- **Main Entry Point**: `src/main.ts`
- **Scripts**: 
  - `start`: Runs the application with `tsx src/main.ts`
  - `dev`: Starts development mode with live reload (`tsx --watch src/main.ts`)
  - `test`: Runs tests with `tsx --test`
  - `commit`: Automates commits using `committier commit`

## Dependencies
- `ai`: Version 6.0.7
- `globby`: Version 16.1.0
- `ollama-ai-provider-v2`: Version 2.0.0
- `openai`: Version 6.15.0
- `zod`: Version 4.3.5

## Development Environment
- **Node.js**: Version 25+ (via `@types/node`)
- **TypeScript**: Version 5.9.3
- **Biome**: Version 2.3.11

## File Structure
- `src/`: Contains source code including agent logic and tools.
- `evals/`: Contains unit tests for individual tools.
- `src/tools/`: Implements tool functionality for file operations and system interactions.
- Configuration files like `package.json`, `tsconfig.json`, and `pnpm-workspace.yaml` manage dependencies and build settings.

## How to Use
1. Clone the repository.
2. Install dependencies with `pnpm install`.
3. Start the application with `pnpm run start`.
4. For development, use `pnpm run dev`.
5. Run tests with `pnpm run test`.

## License
ISC

This project is open-source and available under the ISC license.