import { server } from './appVersions/appJune2nd'

const start = async () => {
  console.log('Starting up...')

  server
    .listen()
    .then(({ url }) =>
      console.log(`Server is running on ${url}`)
    );
}

start()