  
var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'hjsdhgsdsa' }, function(err, tunnel) {
  console.log('LT running')
});

