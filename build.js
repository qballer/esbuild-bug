const { build } = require('esbuild');


const generateBuild = async () => {
  await build({
    entryPoints: ['./index.tsx'],
    outfile: 'www/main.js',
    logLevel: 'info',
    minify: true,
    bundle: true,
    sourcemap: true,
    platform: 'browser',
    target: ['chrome58','firefox57','safari11'],
    loader: {
      '.svg': 'dataurl',
      '.png': 'dataurl',
      '.eot': 'file',
      '.ttf': 'file',
      '.woff': 'file',
    },
    define: {
      'process.env.NODE_ENV': '\"development\"',
      'process.env.REACT_APP_FLAGS_CTX_APP_NAME': '\"\"',
      'process.env.REACT_APP_FLAGS_CTX_INSTANCE_ID': '\"\"',
      'process.env.REACT_APP_FLAGS_CTX_HOST': '\"\"',
      'process.env.REACT_APP_FLAGS_CTX_URL' :'\"\"',
      'process.env.REACT_APP_FLAGS_CTX_URI':'\"\"'
    }
  }).catch(() => process.exit(1));

};

generateBuild();
