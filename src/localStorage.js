export const loadState = () => {
  try {
    const state = localStorage.getItem('state')
    console.log(state)
    if (state === null) {
      return undefined
    }
    return JSON.parse(state)
  } catch(err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch(err) {
    console.log(err)
  }
}