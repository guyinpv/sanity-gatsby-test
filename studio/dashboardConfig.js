export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d19a030cb813c9b63b2f75c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio-4pfxrovb',
                  apiId: '36f32307-6aab-4bb3-b5b5-506c8c767cb4'
                },
                {
                  buildHookId: '5d19a030fbf19aeb7b08e963',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test-web',
                  apiId: '336b80d0-5d25-4cdf-b6eb-90ec98f2285f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guyinpv/sanity-gatsby-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-test-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
