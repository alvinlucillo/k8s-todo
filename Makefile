# Creates all resources under the infra folder
# It should be all you need  if you have set up your environment
build-app:
	cd infra; kubectl apply -f .

# If you will not create your own images, you don't need the commands below

# Create Docker images for frontend (FE) and backend (BE)
# After this, the new images can be pushed to Docker Hub
build-images:
	cd frontend; docker build . -t alvinlucillo/k8stodo-frontend
	cd backend; docker build . -t alvinlucillo/k8stodo-backend

build-image-fe:
	cd frontend; docker build . -t alvinlucillo/k8stodo-frontend

build-image-be:
	cd backend; docker build . -t alvinlucillo/k8stodo-backend

# Uploads the images to Docker Hub
push-images:
	docker push alvinlucillo/k8stodo-frontend
	docker push alvinlucillo/k8stodo-backend

push-image-fe:
	docker push alvinlucillo/k8stodo-frontend

push-image-be:
	docker push alvinlucillo/k8stodo-backend