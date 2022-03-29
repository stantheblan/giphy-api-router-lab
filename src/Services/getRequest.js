import axios from 'axios'
const random_url = 'https://api.giphy.com/v1/gifs/random?api_key=iFgCU9a271UZDQN7GJruVoyMzvrzCDFA'
const trending_url = 'https://api.giphy.com/v1/gifs/trending?api_key=iFgCU9a271UZDQN7GJruVoyMzvrzCDFA'
const search_url = 'https://api.giphy.com/v1/gifs/search?api_key=iFgCU9a271UZDQN7GJruVoyMzvrzCDFA&q='

export function getRandom() {
  const res = axios.get(random_url)
  return ( res )
}

export function getTrending() {
  const res = axios.get(trending_url)
  return ( res )
}

export function getSearch(search) {
  const res = axios.get(search_url + search)
  return ( res )
}