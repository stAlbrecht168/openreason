# How OpenReason Works

OpenReason follows a simple pipeline:

```text
Input → Intent → Frameworks → Evidence statuses → Analysis packet → Final report
```

The current implementation does not pretend to replace the LLM. Instead, it structures the work so that the LLM has to make its method visible.
