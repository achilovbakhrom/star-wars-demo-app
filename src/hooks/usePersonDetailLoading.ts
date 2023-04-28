import { useSelector } from 'react-redux'
import { AppState } from '../config/store'

const usePersonDetailLoading = () => {
  const isLoading = useSelector<AppState, boolean>(
    (state) => state.detail.isLoading
  )
  return { isLoading }
}

export default usePersonDetailLoading
