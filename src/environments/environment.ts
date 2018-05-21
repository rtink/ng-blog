// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAq7ZA6vZLXqs7VNFkUwmu_kPrIVMsvpDE",
    authDomain: "ng-blog-rhonda.firebaseapp.com",
    databaseURL: "https://ng-blog-rhonda.firebaseio.com",
    projectId: "ng-blog-rhonda",
    storageBucket: "gs://ng-blog-rhonda.appspot.com/",
    messagingSenderId: "536979259418"
  }
};
