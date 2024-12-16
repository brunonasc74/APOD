import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('nasa-api-check', {
  name: 'NASA API',
  alertChannels: [],
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    url: 'https://api.nasa.gov/planetary/apod?api_key=PVdtYcjSTuenRt1s44hdW25oRDZLfO87FsFdmMq9&count=1',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
  runParallel: true,
})
