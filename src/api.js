import fetch from 'isomorphic-fetch'

export const fetchUser = (userId) => {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
}
export const fetchCats = (catId) => {
  return fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
}