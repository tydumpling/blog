import { algoliasearch } from 'algoliasearch'

const client = algoliasearch('C3P7IZLZFY', 'd9261b217aa1cf13f00d4f8261304a32')

// Fetch and index objects in Algolia
async function processRecords() {
  const datasetRequest = await fetch('https://dashboard.algolia.com/sample_datasets/movie.json')
  const movies = await datasetRequest.json()
  return await client.saveObjects({ indexName: 'movies_index', objects: movies })
}

processRecords()
  .then(() => console.log('Successfully indexed objects!'))
  .catch(err => console.error(err))
