console.log("This is working");

import { Client } from 'fulcrum-app';
// or
// const fulcrum = require('fulcrum-app');
// const Client = fulcrum.Client;

const client = new Client('your-api-token');

client.forms.all({schema: false})
  .then((page) => {
    console.log(`I got you ${page.objects.length} forms.`);
  })
  .catch((error) => {
    console.log('Error getting your forms.', error.message);
  });


  import { getUser } from 'fulcrum-app';
// or
// const fulcrum = require('fulcrum-app');
// const getUser = fulcrum.getUser;

getUser('name@email.com', 'password')
  .then((user) => {
    console.log(user);
    // user.contexts is an array of the organizations you belong to. Use These
    // ids with createAuthorization to create API tokens.
  })
  .catch((error) => {
    console.log(error.message);
  });

  



