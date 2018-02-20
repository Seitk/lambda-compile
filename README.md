# lambda-compile
AWS Lambda script endpoint to compile Javascript and Style, including script to compile zip for AWS  
Included features: SASS, Autoprefix, CleanCSS, UglifyJS  
  
Remarks: Docker with node 6.10 is used to align with AWS Lambda environment and node-sass requires same architecture on npm install  

## Usage

Run `./deploy/compile.sh` to compile a zip file to `./dist` folder for uploading to AWS Lambda  
Run `./deploy/debug.sh` to start a docker container bash for debugging  

## Request samples

Compiling Javascript
```
{
  "content": "function methodName(first, second) { return first + second; }",
  "name": "example.js"
}
```
Output
```
function methodName(e,n){return e+n}
```

Compiling style
```
{
  "content": "$v_color: red; p { a { flex: 1 } &.test { color: $v_color; }}",
  "name": "example.css"
}
```
Output
```
p a{-webkit-box-flex:1;-ms-flex:1;flex:1}p.test{color:red}
```
