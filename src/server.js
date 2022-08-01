var admin = require("firebase-admin");

var serviceAccount = require("./auth.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const registrationTokens = [
    'eC6QiRUwRh6qaAwkUQBU9M:APA91bGHQ4vu37C5Ai1gyxxXxcpu49Tx295btgZBJFGwaY75udGZVk_WUvtPTjsEdhEV1g9KWPVQR2wz0i1QYWR9hp5uZC67Y-CZRlBW3TrQS9kT5oWThBoAz9v3o8cioQNZ-PVqH7_k',
    // …
    'eOZV6EKrRuGhy3vzy3ONZo:APA91bH5n2GcDrJywusA8YFEeZt9X2WYNepWc4SxKsNZT9sdBqHZ3HOy7focxklszovHmMTfi7Z2VW0bwCCGLETjdz-IU16coMgsC7w1O94WECtoNeVm6XEzIbNqXQd4dtmuelzX5n49',
  ];
  
  const message = {
    notification: {
        title: '$FooCorp up 1.43% on the day',
        body: '$FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.'
      },
    data: {score: '850', time: '2:45'},
    tokens: registrationTokens,
  };
  

admin.messaging().sendMulticast(message)
.then((response) => {
  // Response is a message ID string.
  console.log('Successfully sent message:', response);
})
.catch((error) => {
  console.log('Error sending message:', error);
});