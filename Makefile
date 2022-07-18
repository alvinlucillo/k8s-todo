build-app:
	cd infra; kubectl apply -f .

build-images:
	cd frontend; docker build . -t alvinlucillo/k8todo-frontend
	cd backend; docker build . -t alvinlucillo/k8todo-backend

build-image-fe:
	cd frontend; docker build . -t alvinlucillo/k8todo-frontend

build-image-be:
	cd backend; docker build . -t alvinlucillo/k8todo-backend

push-images:
	docker push alvinlucillo/k8todo-frontend
	docker push alvinlucillo/k8todo-backend

push-image-fe:
	docker push alvinlucillo/k8todo-frontend

push-image-be:
	docker push alvinlucillo/k8todo-backend