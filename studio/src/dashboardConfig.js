export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edc6cb5c294697176cddeed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wuf7jbng',
                  apiId: 'ddf60f6b-d962-4094-8693-a24a7465ce46'
                },
                {
                  buildHookId: '5edc6cb51311f8eac6d10d49',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mszjygjw',
                  apiId: 'b5fa89d1-8c03-4f0d-9aae-4f35bc976cf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/serg3dok/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mszjygjw.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
