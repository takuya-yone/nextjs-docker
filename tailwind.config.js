/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: [
        "Caveat",
        "Yomogi"
      ],
      body: [
        'YuGothic',
        'Yu Gothic',
        'Avenir',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'ＭＳ Ｐゴシック',
        'MS PGothic',
        'sans-serif'
      ]
    }
  },
  plugins: [],
}
