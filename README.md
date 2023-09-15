# NextJS App With TypeScript Tutorial

學習創建 NextJs 項目，搭配 TypeScript、TailwindCss

## 使用到的一些技巧

插件下載[ES7+](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)，要新增新的 React 元件可打 rafce 快速生成

## Routing and Navigation

1. 項目的 app 底下的 page 會是主頁面
2. app 底下新建的資料夾的 page，會是此資料夾的頁面。例：在 users 底下創建 page，它的路由將會是 [http://localhost:3000/users](http://localhost:3000/users)
3. 可以創建嵌套的路由
4. 使用 next/link 來做導航頁面 (Client Side Navigation)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
