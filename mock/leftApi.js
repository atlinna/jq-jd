Mock.mock('/leftApi', {
    'data|18': [{
        'titles|2-4': [{
            name: '@cword(2,4)',
            href: '@url("http")'
        }],
        'content': {
            'tabs|2-5': [{
                name: '@cword(2,4)',
                href: '@url("http")'
            }],
            'subs|6-13': [{
                category: '@cword(2,4)',
                href: '#',
                'items|8-20': [{
                    name: '@cword(2,4)',
                    href: '@url("http")'
                }]
            }]
        }
    }]
})