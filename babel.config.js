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
        targets: '> 0.25%, not dead',
        modules: 'commonjs',
        debug: true
      }
    ]
  ]

  return { presets, plugins: [] }
}
