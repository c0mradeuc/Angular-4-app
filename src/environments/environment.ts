// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBx9M2BGUB6n3cbgcSCgHDsmDbpk1vjcTo',
    authDomain: 'angular-4-demo.firebaseapp.com',
    databaseURL: 'https://angular-4-demo.firebaseio.com',
    projectId: 'angular-4-demo',
    storageBucket: 'angular-4-demo.appspot.com',
    messagingSenderId: '811154918045'
  }
};
