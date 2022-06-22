import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  // externals: ['@vue/reactivity'],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})