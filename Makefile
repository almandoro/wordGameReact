DEV_CONTAINER=dev-frontend
PRODUCTION_TAG=wordgamereact:latest
PRODUCTION_CONTAINER=production-frontend

###############
# DEVELOPMENT #
###############
.PHONY: dev
dev:
	docker-compose up -d --force-recreate ${DEV_CONTAINER}

.PHONY: stop
stop:
	docker-compose down

.PHONY: console
console:
	docker-compose exec ${DEV_CONTAINER} bash

.PHONY: logs
logs:
	docker-compose logs -f

###############
# PRODUCTION #
###############
.PHONY: docker-build
docker-build:
	docker build --pull --rm -f "Dockerfile" -t ${PRODUCTION_TAG} "."

.PHONY: production
production:
	docker-compose up -d ${PRODUCTION_CONTAINER}
