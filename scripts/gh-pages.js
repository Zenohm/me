var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Zenohm/zenohm.github.io.git',
        user: {
            name: 'Zenohm',
            email: 'Zenohm'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
