if [ -z "$TAG" ]; then
  echo "::error:: TAG not provided"
  exit 1
fi

docker build -t adimoldovan/demo-shop:"$TAG" .
docker push adimoldovan/demo-shop:"$TAG"

docker build -t adimoldovan/demo-shop:latest .
docker push adimoldovan/demo-shop:latest
