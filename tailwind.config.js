/** NOTE: tailwind 설정 파일
 * [참고] https://tailwindcss.com/docs/guides/create-react-app
 * [참고] https://tailwindcss.com/docs/adding-custom-styles
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // 컴포넌트 파일 경로
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // tailwind 스타일 변수 사용자 정의
  theme: {
    // colors: {}, // 기존 변수의 값 재 정의
    extend: { // 추가 변수 설정
      colors: {
        primary: '#926EDC',
        secondary: '#C89AF2',
      }
    },
  },
  plugins: [],
}