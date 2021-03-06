module.exports = function (api) {
  api.cache(true)

  const presets = [
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
        targets: {
          node: 'current',
          chrome: 66,
          firefox: 60
        },
        debug: true
      }
    ]
  ]
  // const plugins = ['@babel/plugin-proposal-optional-chaining']

  return { presets, plugins: [] }
}
