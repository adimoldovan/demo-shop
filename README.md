# Demo online shop

Simple e-commerce app built for test automation practice. Built with React.

## Deploy URLs

|||
| --- | --- |
| Github pages | https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fadimoldovan.github.io%2Fdemo-shop%2F%23%2F |
| Heroku | https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Ftau-demo-shop.herokuapp.com |

## Run the app

### Local dev server

```sh
npm start
```

### Using Docker

There is a public image already built that you can use:

```sh
docker run -d --name demo-shop -p 9100:80 adimoldovan/demo-shop
```

You can also build your own image:

```sh
docker build -t demo-shop .
docker run --name demo-shop -p 9100:80 demo-shop
```