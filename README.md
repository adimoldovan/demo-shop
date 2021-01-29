# Demo online shop

Simple e-commerce app built for test automation practice. Built with React.

| Github pages | Heroku | Vercel | Netlify | Render |
| --- | --- | --- | --- | --- |
| [![Github pages status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fadimoldovan.github.io%2Fdemo-shop%2F%23%2F)](https://adimoldovan.github.io/demo-shop) | [![Heroku status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Ftau-demo-shop.herokuapp.com)](https://tau-demo-shop.herokuapp.com) | [![Vercel status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fdemo-shop.vercel.app%2F%23%2F)](https://demo-shop.vercel.app/#/) |  [![Netlify status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Ftau-demo-shop.netlify.app%2F)](https://tau-demo-shop.netlify.app/) | [![Render status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fdemo-shop.onrender.com%2F%23%2F)](https://demo-shop.onrender.com/#/) |

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