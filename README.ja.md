# mirasapo - ミラサポplus制度ナビで公開されている支援制度

ミラサポplus制度ナビで公開されている支援制度の情報をCSVやJSONで提供するリポジトリです。

## デモ
- https://code4fukui.github.io/mirasapo/

## 機能
- 支援制度の情報をCSVやJSONで取得できます
- 支援制度の一覧をブラウザ上で閲覧できます

## 必要環境
特に必要ありません。

## 使い方
### CSV
```html
<script type="module">
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("https://code4fukui.github.io/mirasapo/supports.csv");
console.log(data);
</script>
```

### JSON
```html
<script type="module">
const data = await (await fetch("https://code4fukui.github.io/mirasapo/supports.json")).json();
console.log(data);
</script>
```

## データ・API
- [支援制度 - データセット - レジストリカタログ](https://catalog.registries.digital.go.jp/rc/dataset/ms000002)

## ライセンス
MIT License