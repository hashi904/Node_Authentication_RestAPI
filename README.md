## npm install  
npm install -g nodemon && npm install -s express npm install -g nodemon && npm install -s express  
npm install postgresql  
npm install pg  
## postgresql  
createdb node_datarecord_db -O root  
DB: node_datarecord_db  
user root  
pass:  


## refarences
https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/  

## Tables
id           INTEGER  
username     STRING  
email        INTEGER  
password     INTEGER  

## Todo List
tokenの生成、有効期限の設定  
refresh tokenの設定  
パスワードのハッシュ化、ソルト化  
postgresの自動採番

## How to Debug
debugしたい位置にdebuggerを置く  
node --inspect-brk index.js  
chromeのdevelop toolで確認することができる