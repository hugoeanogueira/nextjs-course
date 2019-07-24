# nextjs-course

Demo with NextJS, Material UI and ZEIT's Now, based on the "[Build a Server-rendered ReactJS Application with Next.js](https://egghead.io/courses/build-a-server-rendered-reactjs-application-with-next-js)" course from Egghead.

## How to run

The full list of commands is in `package.json`, including:

```bash
# start in development mode (for dev, with HMR)
npm run dev

# start in production mode (for inspect only)
$ npm run build && npm run start

# deploy to Now
$ npm run deploy
```

### Environment variables

This project uses `dotenv` to read the environment variables present in the `.env` file. Use `.env.sample` to create a new `.env` for yourself.

When deploying in Now, these environment variables are provided by the secrets already stored in the platform ([about secrets](https://zeit.co/docs/v2/environment-variables-and-secrets/)).
