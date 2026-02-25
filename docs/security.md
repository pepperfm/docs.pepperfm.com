[← Configuration](configuration.md) · [Back to README](../README.md)

# Security

## Dependency Audit Workflow

This project uses Bun as the single package manager and `bun audit` as the baseline vulnerability scanner.

### Local Commands

```bash
bun audit
make audit
```

Expected behavior:
- Exit code `0` when no vulnerabilities are found
- Exit code `1` when vulnerabilities are present
- Summary line format: `N vulnerabilities (X high, Y moderate, Z low)`

## CI Audit

Security audit is automated in GitHub Actions:

- Workflow: `.github/workflows/security-audit.yml`
- Triggers: `pull_request`, `push` to `master`, weekly schedule, manual dispatch
- Output:
  - Job summary with severity counts
  - Artifact `bun-audit-report` containing raw scanner output

Policy:
- `FAIL_ON_HIGH=false` by default (non-blocking while residual transitive issues remain)
- Can be switched to strict blocking after upstream fixes are available

## Current Status (2026-02-25)

- Baseline before remediation: `33` (`13 high`, `15 moderate`, `5 low`)
- Current after remediation: `6` (`4 high`, `1 moderate`, `1 low`)
- Quality gates on current lockfile:
  - `bun run lint` ✅
  - `bun run typecheck` ✅
  - `bun run build` ✅
- Detailed matrix and advisory paths:
  - `docs/security/vulnerability-triage.md`

## Residual Risk Register

| Package group | Remaining risk | Exploitability context | Mitigation |
|---|---|---|---|
| `tar` via `c12/giget` | High | Build/install dependency graph | Track Nuxt upstream releases and re-audit after each update |
| `lodash` (`_.unset`/`_.omit`) | Moderate | Transitive in tooling paths | Keep dependency updates frequent and isolate CI runtime |
| `brace-expansion` | Low | ReDoS in transitive parser chain | Residual accepted until upstream aligns |

Owner: platform maintainers
Next review date: `2026-03-15`

## See Also

- [Vulnerability Triage](security/vulnerability-triage.md) — Baseline, package matrix, decisions
- [Configuration](configuration.md) — Runtime and module settings
- [Back to README](../README.md) — Project overview
