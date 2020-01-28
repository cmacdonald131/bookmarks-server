const uuid = require('uuid/v4')

const bookmarks = [
    {
        id: uuid(),
        title: 'Thinkful',
        url: 'https://www.thinkful.com/',
        description: 'Think outside the classroom',
        rating: 5
    },
    {
        id: uuid(),
        title: 'Node.js',
        url: 'https://nodejs.org/en/',
        description: 'Download Node',
        rating: 4
    },
    {
        id: uuid(),
        title: 'NFL',
        url: 'https://www.nfl.com/',
        description: 'The No Fun League',
        rating: 2
    },

]

module.exports = { bookmarks }