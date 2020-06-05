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
                  buildHookId: '5edadaf01311f80bc2d10c43',
                  title: 'Sanity Studio',
                  name: 'brbaurai-studio',
                  apiId: '4f2bfbeb-4acc-4ae7-9c54-da0e2955440a'
                },
                {
                  buildHookId: '5edadaf0f7ef3af8fba7e178',
                  title: 'Blog Website',
                  name: 'brbaurai',
                  apiId: 'ee20c30d-8c85-48cb-8305-e26090515f74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanjeevbaurai/brbaurai',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://brbaurai.netlify.app', category: 'apps' }
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
