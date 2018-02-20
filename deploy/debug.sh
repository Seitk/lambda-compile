if [[ $PWD == *lambda-compile ]]; then
  docker rm lambda-debug >/dev/null 2>&1
  docker run -it -v `pwd`:/src --name lambda-debug node:6.10 bash
else
  echo "You must be in the lambda-compile/ directory"
fi