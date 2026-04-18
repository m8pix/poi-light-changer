# PoiLC Docs Website

この `website/` は Docusaurus の `classic` テンプレートをベースにした、PoiLC の GitHub Pages 用 docs ソースです。

## 使い方

依存関係を入れる:

```bash
npm install
```

ローカル開発:

```bash
npm start
```

GitHub Pages 配信用の build を作る:

```bash
npm run build:pages
```

`build:pages` は Docusaurus の静的出力に加えて、repo root の `index.json` `policy.json` `*.zip` を `build/` へコピーします。  
これにより、docs と VPM 配布物を同じ GitHub Pages URL で公開できます。
