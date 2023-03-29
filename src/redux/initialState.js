const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-22-2023'),
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'News',
      shortDescription: 'Actual news',
      content: 'Main content of the article..............',
      publishedDate: new Date('02-22-2023'),
      author: 'Jonathan'
    },
    {
      id: '3',
      title: 'War',
      shortDescription: 'New War',
      content: 'Main content of the article.....................',
      publishedDate: new Date('02-22-2023'),
      author: 'Jonathan'
    },
  ],
}

export default initialState;