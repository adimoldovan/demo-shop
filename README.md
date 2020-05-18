# Demo online shop

## Local

```sh
npm start
```

# Using Docker

### Public image

```sh
docker run -d --name demo-shop -p 9100:80 adimoldovan/demo-shop
```

### Build your own image

```sh
docker build -t demo-shop .
docker run --name demo-shop -p 9100:80 demo-shop
```

# Deploy to GH pages

```sh
npm install
PUBLIC_URL=http://your-github-pages-url npm run deploy
```