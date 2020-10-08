## 초기 세팅

```
$ tsc index.ts
```

- 자바스크립트로 컴파일, index.js 생성
- build에 컴파일된 것 배치

```
$ tsc --init # 자동으로 tsconfig.json 생성

# "outDir": "./build"
# "rootDir": "./src"

$ tsc # src안에 있는걸 build안으로
$ tsc -w # 자동으로
```

```
$ node build/index.js # js파일 실행

$ npm init --y # package.json 생성
$ npm install nodemon concurrently # 자동으로 변경된 코드 실행
```

`package.json`

```
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

그 후, `npm start`하면 자동으로 변경된 코드 실행
