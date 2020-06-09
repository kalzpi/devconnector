# Initial commit

package.json의 "scripts"에는 npm run 이후 줄 명령어를 부가할 수 있다.
현재 아래와 같이 추가한 상태이다.
"scripts": {
"start": "node server",
"server": "nodemon server"
},
npm run start의 node server는 아직 잘 모르겠다. num run server의 nodemon server는 별도로 설치한 nodemon 을 구동시키는 것으로, API server를 켜둔 상태에서 변경 사항들이 자동으로 반영되어 리프레시 해 주는 플러그인으로 보인다.
