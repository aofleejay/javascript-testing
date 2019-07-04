const posts = [
  { id: '001', title: 'How to write good test.' },
  { id: '002', title: 'React best practice.' },
  { id: '003', title: 'Create node server using Express.' },
]

const getAll = () => {
  return Promise.resolve(posts)
}

const getById = id => {
  return Promise.resolve(posts.find(post => post.id === id))
}

export { getById, getAll }
