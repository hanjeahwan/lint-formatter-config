// module.exports = {
//   plugins: [
//     "@semantic-release/commit-analyzer",
//     "@semantic-release/release-notes-generator",
//     "@semantic-release/changelog",
//     [
//       '@semantic-release/npm',
//       {
//         npmPublish: true,
//         pkgRoot: 'packages',
//       },
//     ],
//     "@semantic-release/github",
//     ["@semantic-release/git", {
//       "assets": ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json', 'src/package.json']
//     }]
//   ],
//   branches: ['master'],
// }