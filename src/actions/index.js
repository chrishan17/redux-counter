import { fetchUser, fetchCats } from '../api'
export const increase = () => ({
  type: 'INCREMENT'
})
export const decrease = () => ({
  type: 'DECREMENT'
})
export const setCounter = (value) => ({
  type: 'SET_COUNTER',
  counter: value
})
const receiveCats = (catsUrl) => ({
  type: 'RECEIVE_CATS',
  cats: catsUrl
})
export const fetchUserCats = userId => dispatch => {
  fetchUser(userId)
    .then(response => response.json())
    .then(user => {
      const catPromises = user.cats.map(catId =>
        fetchCats(catId)
          .then(response => response.json())
          .then(cat => cat.imageUrl)
      )
      return Promise.all(catPromises).then((catsUrl) => dispatch(receiveCats(catsUrl)))
    })
}
