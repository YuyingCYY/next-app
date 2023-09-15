# NextJS App With TypeScript Tutorial

學習創建 NextJs 項目，搭配 TypeScript、TailwindCss、React Query

## 使用到的一些技巧

插件下載[ES7+](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)，要新增新的 React 元件可打 rafce 快速生成

## Routing and Navigation

1. 項目的 app 底下的 page 會是主頁面
2. app 底下新建的資料夾的 page，會是此資料夾的頁面。例：在 users 底下創建 page，它的路由將會是 [http://localhost:3000/users](http://localhost:3000/users)
3. 可以創建嵌套的路由
4. 使用 next/link 來做導航頁面 (Client Side Navigation)

## CSR & SSR

### CSR(Client-side Rendering)

1. Large bundles & Resource intensive：捆綁了所有的組件並發送到客戶端渲染，隨著應用程式增長，包的大小也會增加，這樣需要更多的內存來加載這些組件，佔用了大量的資源。
2. No SEO：搜索引擎(瀏覽和索引網站的機器)無法查看到內容，因為無法執行 JavaScript Code，因此無法像網路瀏覽器一樣呈現我們的組件。
3. Less secure：敏感資料或其依賴項(例如 API key)都會暴露給客戶端。

### SSR(Server-side Rendering)

1. Smaller bundles & Resource efficient：服務器處理大部分渲染，我們在客戶端需要的資源就更少。
2. SEO：因為渲染是在服務端上完成的，將實際內容發送到客戶端搜索引擎可以查看並索引我們的頁面。
3. More secure：可以在服務器上保留 API key 等等敏感資料

但是在使用 SSR 我們會失去交互性。因使 Server Components 沒辦法做到以下

1. Listen to browser events：服務器上渲染的服務器組件無法監聽瀏覽器事件。像是點擊"更改提交"等等
2. Access browser APIs：無法訪問瀏覽器 API(例如：local storage)
3. Maintain state & Use effects：無法維護狀態或使用效果

## Data Fetching

### Fetching on the Client

在客戶端上，通常使用 useState()來聲明狀態變量，並使用 useEffect()來調用後端獲取資料並放入狀態變量中

### Caching

Storing data somewhere that is faster to access
將資料儲存在訪問速度更快的地方

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
