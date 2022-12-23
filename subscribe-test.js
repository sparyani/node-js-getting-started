var jsforce = require('jsforce');
// Establish an authenticated Salesforce connection. (Details elided)
const conn = new jsforce.Connection();
conn.login('sanjay.paryani@gusto.com.uat', 'xyzU$hererrenta1bit');
const channel = "/event/Exception_Log_Event__e";
const replayId = -2; // -2 is all retained events

const replayExt = new jsforce.StreamingExtension.Replay(channel, replayId);

const fayeClient = conn.streaming.createClient([ replayExt ]);

const subscription = fayeClient.subscribe(channel, data => {
  console.log('Received exception log event', data);
});