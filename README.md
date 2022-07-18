# k8s-todo

## Set up your environment

1. Install the following

   - Kubernetes: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/
   - Docker: https://docs.docker.com/engine/install/ubuntu/
   - Node/npm: https://nodejs.org/en/download/package-manager/
   - Minikube: https://minikube.sigs.k8s.io/docs/start/

2. Start minikube:
   `minikube start`

3. Enable ingress:` minikube addons enable ingress`

## Set up the project

1. Add the domain to your hosts by editing `/etc/hosts `(Linux) and adding _yetanothertodo.com_
2. Inside the repo folder, enter `make build-app` to build the containers
3. Wait until all services are up; check it by running `kubectl get all`.

   It should look like this:

   ```
   NAME                                 READY   STATUS    RESTARTS      AGE
   pod/backend-depl-6dd885554c-k5z5s    1/1     Running   0             27m
   pod/frontend-depl-69dbc48fcc-mx676   1/1     Running   0             27m
   pod/mongo-depl-765bbddfc5-gzx7v      1/1     Running   1 (26m ago)   27m

   NAME                   TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)     AGE
   service/backend-srv    ClusterIP   10.110.45.195    <none>        3001/TCP    27m
   service/frontend-srv   ClusterIP   10.105.119.125   <none>        3000/TCP    27m
   service/kubernetes     ClusterIP   10.96.0.1        <none>        443/TCP     27m
   service/mongo-srv      ClusterIP   10.108.41.54     <none>        27017/TCP   27m

   NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
   deployment.apps/backend-depl    1/1     1            1           27m
   deployment.apps/frontend-depl   1/1     1            1           27m
   deployment.apps/mongo-depl      1/1     1            1           27m

   NAME                                       DESIRED   CURRENT   READY   AGE
   replicaset.apps/backend-depl-6dd885554c    1         1         1       27m
   replicaset.apps/frontend-depl-69dbc48fcc   1         1         1       27m
   replicaset.apps/mongo-depl-765bbddfc5      1         1         1       27m
   ```

4. Access the app: _yetanothertodo.com_
