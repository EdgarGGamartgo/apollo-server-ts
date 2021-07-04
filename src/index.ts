import { server } from './appVersions/appJune3rd'

const start = async () => {
  console.log('Starting up...')

  server
    .listen()
    .then(({ url }) =>
      console.log(`Server is running on ${url}`)
    );
}

start()