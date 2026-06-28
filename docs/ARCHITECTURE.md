# Architecture

```text
User input
  ↓
Intent Router
  ↓
Framework Resolver
  ↓
Prompt Compiler
  ↓
Compiled Prompt
  ↓
LLM Provider (future)
  ↓
Evidence-aware Report
```

The compiler is intentionally provider-independent. It produces a prompt that can be used with ChatGPT, Claude, Gemini, Ollama, or another model.
