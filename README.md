Lerna + NestJS + Angular
========================

I try to share angular ReactiveForms to nestjs on server side to simplify form validation on server side.

Try It Yourself
===============

```sh
git clone git@github.com:ball6847/try-mono-nestjs-angular.git
cd try-mono-nestjs-angular

npm install

# I'm hoping you have npx on your machine ;)
npx lerna bootstrap --hoist

# start a server (nestjs)
npx lerna run --stream --scope=app-server start:watch

# start a client (angular)
npx lerna run --stream --scope=app-website start
```

NestJS will be served on http://localhost:3000/ and Angular will be served on http://localhost:4200/
