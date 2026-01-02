#!/usr/bin/env python3
"""GEYASS κλ○ Runner - Execute code from markdown files"""
import re,sys
from pathlib import Path

def extract_code(md_path):
    """Extract Python code from markdown file"""
    text = Path(md_path).read_text()
    matches = re.findall(r'```python\n(.*?)```', text, re.DOTALL)
    return matches[0] if matches else None

def run_module(md_path):
    """Execute Python code from markdown file"""
    code = extract_code(md_path)
    if not code:
        print(f"No Python code found in {md_path}")
        return None

    # Create isolated environment
    env = {'__name__': '__main__', '__file__': str(md_path)}
    exec(code, env)
    return env

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("🦅 GEYASS v6.0 κλ○ Runner")
        print("\nUsage: python geyass.py <module.md>")
        print("\nExamples:")
        print("  python geyass.py core/const.md")
        print("  python geyass.py test/trinity.md")
        sys.exit(0)

    target = sys.argv[1]
    run_module(target)
