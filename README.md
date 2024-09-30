<!-- start: ================================================================ -->
# [참고] VSCode Settings
<details>
<summary>접기/펼치기</summary>

## Extensions
- Tailwind CSS IntelliSense
- Prettier
- Auto Close Tag
- Auto Rename Tag
- Dracula Official
- ESLint (**v2.2.2**)
- HTML CSS Support
- HTML Snippets
- indent-rainbow
- TODO Highlight

## 설정 파일 생성 및 내용 입력
- ./vscode/**파일명.code-snippets** : 코드 자동완성 단축키 설정 파일
- ./vscode/**settings.json** : 작업 환경 설정 파일
</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# [참고] Git
<details>
<summary>접기/펼치기</summary>

```
git init
git remote add origin 저장소주소
git pull origin 저장소주소
git status
git add .
git status
git commit -m "메세지"
git push origin master
```
</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# React 프로젝트 세팅
<details>
<summary>접기/펼치기</summary>

## 패키지 설치 및 세팅
```
npx create-react-app 경로/어플명
npm i -D postcss autoprefixer
```
1. 프로젝트 생성
2. CSS 를 위한 패키지 설치
    - postcss
        : css 파일의 후처리를 도와줌
    - autoprefixer
        : 접근성을 위한 접두사를 붙여줌

### [옵션] 추가 패키지 설치 및 세팅
```
npm i -D tailwindcss
```
1. tailwindcss 패키지 설치
    - tailwindcss
        : 클래스명 선언 방식으로 사용 가능
        : 리액트에서 bootstrap 사용 시, 스타일 컴포넌트 추가 방식으로 사용해야 함으로 불편함

## 기본 테스트를 위한 파일 및 폴더 생성
1. src/assets/images
3. src/components
4. src/pages

## 설정 파일 생성
1. postcss.config.js
2. tailwind.config.js

### 파일 내용 수정
1. /src/index.css
</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# [참고] webpack 기반 세팅
<details>
<summary>접기/펼치기</summary>

</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# 📌 webpack 기반 React로 전환
<details open>
<summary>접기/펼치기</summary>

</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# 🧪 테스트
<details open>
<summary>접기/펼치기</summary>

</details>
<!-- end  : ================================================================ -->


<!-- start: ================================================================ -->
# 🚀 배포
<details open>
<summary>접기/펼치기</summary>

</details>
<!-- end  : ================================================================ -->