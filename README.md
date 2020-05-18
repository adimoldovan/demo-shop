# Demo online shop

## Local

```sh
npm start
```

# Using Docker
```sh
docker build -t demo-shop .
docker run --name demo-shop -p 9100:80 demo-shop
```

# Deploy to GH pages

```sh
npm install
npm run deploy
```