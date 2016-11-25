# B2B.UI.Webpack



##使用步驟
>在WWWSite底下新增一個JS專案資料夾，我是取名為B2B.UI.Webpack，把server.js刪除，把git內的東西都複製進去

>下指令

>npm install 

>裝完後

>npm run dev

>即可使用vscode開啟此資料夾進行開發

>指令只要不中斷，檔案一旦修改會自動編譯，自動導入B2B.UI/Content/en/Scripts/webpack/xxx.js

>會看webpack.config.js配置取檔名，會讀取version.config配置自動加上版號


>npm run build

>最小壓縮，最後要提交再使用即可，map檔可決定要不要上傳

>我目前寫了一隻productTest.v1.w.xxxxx.x.js 裡面有簡單的資料流，可以把product2016的配置改成

>`<script key="Product2016" src="webpack/productTest.v1.w.xxxxx.x.js" type ="text/javascript"/>`

>就可以看到結果