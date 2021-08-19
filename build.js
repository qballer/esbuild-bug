const { build } = require('esbuild');


const generateBuild = async () => {
  await build({
    entryPoints: ['./src/index.tsx'],
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
      'process.env.NODE_ENV': '"development"'
    }
  }).catch(() => process.exit(1));

};

generateBuild();
