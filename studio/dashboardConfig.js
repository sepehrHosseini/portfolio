export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e94306e29b6af9a29304581',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-dfsddifh',
                  apiId: 'e865042c-1466-4551-92e9-64bf9ef3dffb'
                },
                {
                  buildHookId: '5e94306e1694d9e276a56e7a',
                  title: 'Portfolio Website',
                  name: 'portfolio-web-5gquu6co',
                  apiId: '0cc0d4e9-f7fc-43f4-add2-c249227905ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sepehrHosseini/portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-web-5gquu6co.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
