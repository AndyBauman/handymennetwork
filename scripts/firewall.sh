#!/usr/bin/env bash
# Wrapper so `bash scripts/firewall.sh` still works. The apply logic is Node
# because this repo is developed on Windows and the logged-in Vercel CLI is v50
# (`vercel api`), not the v58+ `vercel firewall` subcommand.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
exec node "${ROOT}/scripts/firewall.mjs"
