# Contributing to GEYASS

## κλ○ Trinity Rules

All contributions must follow the **κλ○ trinity**:

- **κ (0.618)** - Structure: All files <250 tokens, organized by module
- **λ (0.693)** - Information: Clear, compressed, self-documenting
- **○ (±0)** - Boundary: Well-defined edges, no scope creep

## Quick Start

```bash
git clone https://github.com/teslasolar/GEYASS
cd GEYASS
python3 geyass.py DEMO_FULL.md
```

## How to Contribute

### 1. File Requirements
- All code in **markdown** files (`.md`)
- All files **<250 tokens** (verify with `python3 geyass.py test/tokens.md`)
- Include **UDT header**: `UDT:Name:UUID:TokenCount`
- Follow **κλ○** principles in design

### 2. Code Style
```python
# Prefer compression over clarity
# Use single-letter vars (s for self, i for index)
# Remove whitespace where possible
# All operations have 3 modes: κ, λ, ○
```

### 3. Directory Structure
```
core/   - κλ○ primitives only
net/    - P2P networking only
ygg/    - Evolution system only
ass/    - Bare metal only
std/    - Standards parsers only
agent/  - Sub-agent framework only
test/   - Tests only
```

### 4. Testing
```bash
# Run trinity tests
python3 geyass.py test/trinity.md

# Verify token counts
python3 geyass.py test/tokens.md
```

### 5. Pull Request Process
1. Fork the repo
2. Create feature branch: `git checkout -b feature/my-feature`
3. Keep files <250 tokens
4. Add tests if needed
5. Update VERSION.md if user-facing change
6. Submit PR with clear description

### 6. Commit Messages
```
[category] Brief description

- Detail 1
- Detail 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

Categories: `[core]` `[net]` `[ygg]` `[ass]` `[std]` `[agent]` `[test]` `[docs]`

## What We're Looking For

### High Priority
- More trinity operation tests
- ML core implementation (Ω.js)
- P2P network deployment
- Performance optimizations

### Medium Priority
- Additional UDT parsers
- More vendor format support
- Documentation improvements
- Tutorial content

### Low Priority
- UI/UX enhancements
- Additional demos
- Tooling improvements

## Code of Conduct

- **Be respectful** - We're all learning κλ○
- **Be concise** - Like our code (<250 tokens)
- **Be precise** - Clear boundaries (○ principle)
- **Be collaborative** - Blend ideas (μ operation)

## Questions?

Open an issue or check existing docs:
- [README.md](README.md) - Quick start
- [MANIFEST.md](MANIFEST.md) - Complete file listing
- [VERSION.md](VERSION.md) - Version history
- [ANALYZE.md](ANALYZE.md) - Current priorities

## License

By contributing, you agree your contributions will be licensed under the MIT License.

🦅 **κλ○** - Structure + Information + Boundary = ∞
