exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({ devtool: false })
  }
}
