module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ],
      '@babel/typescript',
      [
        '@babel/preset-env',
        {
          targets: '> 0.25%, not dead',
          modules: 'commonjs',
          debug: true
        }
      ]
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
  }
}
