SHELL := /bin/bash
.DEFAULT_GOAL := help

# Project
APP_NAME := docs.pepperfm.com
BUN := bun

##@ Development

.PHONY: dev
dev: ## Start development server
	$(BUN) run dev

.PHONY: install
install: ## Install dependencies
	$(BUN) install

.PHONY: prepare
prepare: ## Prepare Nuxt (generate types)
	$(BUN) run postinstall

##@ Quality

.PHONY: lint
lint: ## Run ESLint
	$(BUN) run lint

.PHONY: lint-fix
lint-fix: ## Run ESLint with auto-fix
	$(BUN) run lint:fix

.PHONY: typecheck
typecheck: ## Run TypeScript type checking
	$(BUN) run typecheck

.PHONY: audit
audit: ## Run dependency vulnerability audit
	$(BUN) audit

##@ Build

.PHONY: build
build: ## Build for production (server)
	$(BUN) run build

.PHONY: generate
generate: ## Generate static site
	$(BUN) run generate

.PHONY: preview
preview: ## Preview production build locally
	$(BUN) run preview

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
