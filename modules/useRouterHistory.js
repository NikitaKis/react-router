import useQueries from '../node_modules/history/lib/useQueries'
import useBasename from '../node_modules/history/lib/useBasename'

export default function useRouterHistory(createHistory) {
  return function (options) {
    const history = useQueries(useBasename(createHistory))(options)
    return history
  }
}
