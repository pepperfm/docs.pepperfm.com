SHELL := /bin/bash
.DEFAULT_GOAL := help

# Project
APP_NAME := docs.pepperfm.com
PM := pnpm

##@ Development

.PHONY: dev
dev: ## Start development server
	$(PM) dev

.PHONY: install
install: ## Install dependencies
	$(PM) install

.PHONY: prepare
prepare: ## Prepare Nuxt (generate types)
	$(PM) run postinstall

##@ Quality

.PHONY: lint
lint: ## Run ESLint
	$(PM) lint

.PHONY: lint-fix
lint-fix: ## Run ESLint with auto-fix
	$(PM) lint:fix

.PHONY: typecheck
typecheck: ## Run TypeScript type checking
	$(PM) typecheck

##@ Build

.PHONY: build
build: ## Build for production (server)
	$(PM) build

.PHONY: generate
generate: ## Generate static site
	$(PM) generate

.PHONY: preview
preview: ## Preview production build locally
	$(PM) preview

##@ CI

.PHONY: ci
ci: lint typecheck build ## Run all CI checks (lint + typecheck + build)

##@ Utilities

.PHONY: clean
clean: ## Remove build artifacts
	rm -rf .nuxt .output dist node_modules/.cache

.PHONY: clean-all
clean-all: clean ## Remove all generated files including node_modules
	rm -rf node_modules

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'
