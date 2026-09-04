---
name: AI provider fallback
description: Provider setup and runtime-credit constraints for AI features in this project.
---

The orchestrator should treat live model access as an enhancement and retain a deterministic, useful analysis path when the provider cannot answer.

**Why:** Built-in AI provisioning can require an account upgrade, and a user-owned OpenAI key can still be rejected when the account has no available credits.

**How to apply:** Keep provider calls server-side, never expose credentials, and make fallback behavior concrete enough that the core workflow remains usable.