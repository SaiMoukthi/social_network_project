
#!/usr/bin/env bash
# Usage: ./scripts/push_to_github.sh repo-name [public|private]
set -e
REPO_NAME=${1:-social_network_project}
VISIBILITY=${2:-private}
if ! command -v gh >/dev/null; then echo "GitHub CLI (gh) not found. Install it first: https://cli.github.com/"; exit 1; fi
git init
git add .
git commit -m "chore: initial commit - social network starter"
gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push
echo "Pushed to https://github.com/$(gh api user --jq .login)/$REPO_NAME"
