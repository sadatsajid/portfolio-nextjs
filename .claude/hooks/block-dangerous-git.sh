#!/bin/bash

# Blocks history-destroying git operations before they run.
# Adapted from mattpocock/skills (git-guardrails-claude-code).
# Deliberately does NOT block plain `git push` — push is the deploy path
# for this portfolio. Only irreversible / history-rewriting ops are blocked.

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

DANGEROUS_PATTERNS=(
  "push --force"
  "push -f"
  "reset --hard"
  "git clean -fd"
  "git clean -f"
  "git branch -D"
  "git checkout \."
  "git restore \."
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qE "$pattern"; then
    echo "BLOCKED: '$COMMAND' matches dangerous pattern '$pattern'. The user has prevented you from doing this." >&2
    exit 2
  fi
done

exit 0
