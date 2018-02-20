if [[ $PWD == *lambda-compile ]]; then
  docker rm lambda-compile >/dev/null 2>&1
  docker run -it -v `pwd`:/src --entrypoint /src/deploy/docker-entrypoint.sh --name lambda-compile node:6.10
else
  echo "You must be in the lambda-compile/ directory"
fi