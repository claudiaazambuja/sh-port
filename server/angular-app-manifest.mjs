
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sh-port/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sh-port"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16133, hash: '02b590224196de1c0954c50cfbd7b4ba26baf1a848344df98e3425d6432b4854', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16646, hash: 'b8402e4cedecbda81d4f44f33799ee0890d61651395e8bbb824b7491cfd8896d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 61446, hash: '2f624c0e20a01a9938d597c9eb8e7f23452f279e079062318c4655633f9df86e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
