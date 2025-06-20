
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/certifications"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 802, hash: 'edec0c3e053a110c3016e7ae9de80b8a35b561562cc4d8bed791cd5c52d81b4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: '7f44afa21d2a441e5feceec01a97c98d6f8c7abef4576922d839bd145f470b8a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 3904, hash: 'a9df9a9f308a61e33c06e4c4385153f203bccd82e9f150f3f26369e61d5ba422', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 3689, hash: 'fc4db0a54ab5299fa3edc22c7b55bd3d88e5062569ef95acd76a5b8ccda0c38c', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 3696, hash: '0dbcc4cc40101dfdfdc7ca632b55cc0a6c06b82392f8bc5ef545df3dd1a022a0', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23947, hash: '598b4ad14d843757528afbf3f267a530feac4de7cd8ba2e78b3b3b89916d9e64', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 3768, hash: 'b2ead44e25b067c63bc0160f36871cca88983762e0ee0a8e5b52c824f1e6d1dc', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3693, hash: '796afa0dc5c81d339458e2c5722c1bc0cb32e56e2a4e9b803063719b0cc0f2b6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 3713, hash: '4217630cf680534c46613c5023f7c816eafc9faa59c026ce07a7974254fa5cf3', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 4540, hash: '57064d6d0482519570e6805bc10af1b01fe92fe587fc22cd6ed6bd4d7bf6c6e0', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-HWHI5YV4.css': {size: 26243, hash: 'OhQh1DWSNOg', text: () => import('./assets-chunks/styles-HWHI5YV4_css.mjs').then(m => m.default)}
  },
};
