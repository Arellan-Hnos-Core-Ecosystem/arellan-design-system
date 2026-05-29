module.exports = {
  extends: ['@arellan-hnos-core-ecosystem/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist', '.turbo', 'node_modules', 'vitest.setup.ts', 'vitest.d.ts', 'tailwind.config.ts'],
}
