build-app:
	cd infra; kubectl apply -f .

build-images:
	cd frontend; docker build . -t alvinlucillo/k8todo-frontend
	cd backend; docker build . -t alvinlucillo/k8todo-backend

push-images:
	docker push alvinlucillo/k8todo-frontend
	docker push alvinlucillo/k8todo-backend

# docker build -t alvinlucillo/k8todo-frontend -f ./Dockerfile ./

# docker pull mongo:latest
# docker run -d -p 3002:27017 --name k8todo-db mongo:latest

#  docker ps -a --filter "name=k8todo-frontend" 


# Backend
# docker build . -t alvinlucillo/k8todo-backend