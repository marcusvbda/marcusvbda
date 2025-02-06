YELLOW=\033[33m
RESET=\033[0m

set-node-version:
	@echo "$(YELLOW)Setting up node version...$(RESET)"
	@NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && nvm use

start-dev:
	@$(MAKE) set-node-version
	@echo "$(YELLOW)Starting development server ui...$(RESET)"
	@yarn run dev &
	@echo "$(YELLOW)Starting development server api ...$(RESET)"
	@yarn run api-dev &
	@wait

start-prod:
	@$(MAKE) set-node-version
	@yarn run build
	@yarn run start

build:
	@echo "$(YELLOW)Installing backend dependencies...$(RESET)"
	@yarn install
	@echo "$(YELLOW)Copying env files...$(RESET)"
	@docker compose exec app cp .env.example .env.local