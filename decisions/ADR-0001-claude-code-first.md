# ADR-0001: Claude Code first interface

## Decision

OpenReason v0.1.0 treats Claude Code as the primary practical interface.

## Reason

The project is a repository of code, frameworks, examples, and documentation. Claude Code can read and modify these files, run tests, and produce analyses while keeping the repository as source of truth.

## Consequence

The CLI exists primarily for testing and automation. Users should not have to manually invoke npm commands for everyday use.
