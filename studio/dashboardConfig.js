export default {
  widgets: [
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
                  buildHookId: '609b3823688c4c37d7eb0853',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qwmwcq2y',
                  apiId: '2c52f57a-49ad-4975-b4d6-69c35ca0221b'
                },
                {
                  buildHookId: '609b382300392e459242ab3c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j6s3r4j5',
                  apiId: 'cc3cddd0-f837-463c-9d03-1ad532a61ecb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/se7eng/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j6s3r4j5.netlify.app', category: 'apps'}
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
