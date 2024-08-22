const config = {
  'src/**/*.{ts,tsx}': (filenames) =>
    `eslint ${filenames.join(' ')} --fix`,
  '**/*.{json,html,yml,md}': (filenames) =>
    `prettier ${filenames.join(' ')} --write --ignore-path .gitignore`,
  'src/**/*.{css,scss,sass,less,styl,vue,svelte}': (filenames) =>
    `stylelint ${filenames.join(' ')} --fix`,
};

export default config;
