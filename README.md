# refire-hackathon-boilerplate

Boilerplate for quick prototyping with [refire-app](https://github.com/hoppula/refire-app)

## Getting started

### Install dependencies
`npm install`

### Edit firebase.json

Create a new app in [Firebase dashboard](https://www.firebase.com/account/) and set `firebase` value in `firebase.json` to match your app's name.

### Run app (localhost:4000, HMR enabled)
`npm start`

## Optional steps

### Edit bootstrap.json

Place your initial data inside `bootstrap.json`

### Login to Firebase

Run `npm run login` to login to Firebase in your terminal.

### Bootstrap your Firebase

Run `npm run bootstrap` to init your Firebase with `bootstrap.json` data.

### Deploy to Firebase

When your app is ready, deploy it to firebaseapp.com by running `npm run build` and `npm run deploy`.

## License

MIT
