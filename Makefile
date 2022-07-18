build-app:
	cd infra; kubectl apply -f .

build-images:
	cd frontend; docker build . -t alvinlucillo/k8stodo-frontend
	cd backend; docker build . -t alvinlucillo/k8stodo-backend

build-image-fe:
	cd frontend; docker build . -t alvinlucillo/k8stodo-frontend

build-image-be:
	cd backend; docker build . -t alvinlucillo/k8stodo-backend

push-images:
	docker push alvinlucillo/k8stodo-frontend
	docker push alvinlucillo/k8stodo-backend

push-image-fe:
	docker push alvinlucillo/k8stodo-frontend

push-image-be:
	docker push alvinlucillo/k8stodo-backend