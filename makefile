YELLOW=\033[33m
RESET=\033[0m

set-node-version:
	@echo "$(YELLOW)Setting up node version...$(RESET)"
	@NVM_DIR="$${HOME}/.nvm" && . "$${NVM_DIR}/nvm.sh" && nvm use

start-client-dev:
	@$(MAKE) set-node-version
	@echo "$(YELLOW)Starting development server ui...$(RESET)"
	@cd client && yarn run dev

start-server-dev:
	@$(MAKE) set-node-version
	@echo "$(YELLOW)Starting development server api ...$(RESET)"
	@cd server && yarn run dev &
	@wait
