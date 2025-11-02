const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      // Specify the paths to all template files
      content: [
        './index.html',
        './public/**/*.html',
        './examples/**/*.html',
        './docs/**/*.html',
        // Add any JS files that might contain class names
        './public/**/*.js',
        './examples/**/*.js',
      ],

      // Default extractor for HTML and JS
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

      // Safelist - classes to never purge
      safelist: {
        standard: [
          'show', 'active', 'fade', 'collapse', 'collapsing',
          'modal-open', 'modal-backdrop', 'dropdown-menu',
        ],
        // Patterns for dynamic classes
        deep: [
          /^btn-/,
          /^bg-/,
          /^text-/,
          /^border-/,
          /^alert-/,
          /^badge-/,
          /^card-/,
          /^table-/,
          /^form-/,
          /^is-/,
          /^has-/,
          /^sm:/,
          /^md:/,
          /^lg:/,
          /^xl:/,
        ],
        greedy: [
          /data-theme/,
        ]
      },

      // Reject specific patterns (classes to always remove)
      rejected: true,

      // Variables configuration
      variables: true,
      keyframes: true,
    })
  ]
};
