import useQueries from '../node_modules/history/lib/useQueries'
import useBasename from '../node_modules/history/lib/useBasename'
import baseCreateMemoryHistory from '../node_modules/history/lib/createMemoryHistory'

export default function createMemoryHistory(options) {
  // signatures and type checking differ between `useQueries` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  const memoryHistory = baseCreateMemoryHistory(options)
  const createHistory = () => memoryHistory
  const history = useQueries(useBasename(createHistory))(options)
  return history
}
