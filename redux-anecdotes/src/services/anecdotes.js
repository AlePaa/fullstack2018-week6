import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(url, {content, votes: 0})
  return response.data
}

const addVote = async (id) => {
  const res = await axios.get(url+'/'+id)
  const anec = res.data
  const response = await axios.put(url+'/'+id, {...anec, votes: anec.votes + 1})
  return response.data
}

export default {
  getAll, createNew, addVote
}
