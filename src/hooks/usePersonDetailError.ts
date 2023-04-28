import { useSelector } from 'react-redux'
import { AppState } from '../config/store'

const usePersonDetailError = () => {
  const error = useSelector<AppState, string | undefined>(
    (state) => state.detail.error
  )

  return { error }
}

export default usePersonDetailError
