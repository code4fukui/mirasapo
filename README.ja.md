# mirasapo

日本の「ミラサポplus制度ナビ」プラットフォームから、支援制度のCSVおよびJSONデータを提供します。データは毎日自動的に更新されます。

## デモ

- **[ライブデータビューア](https://code4fukui.github.io/mirasapo/)**: すべての支援制度をウェブブラウザで閲覧・検索できます。

## 機能

- 1,100件以上の支援制度データをCSVおよびJSON形式で提供します。
- GitHub Actionsのワークフローにより、データを毎日自動的に更新します。
- 簡単に閲覧・検索できるウェブベースのビューアが含まれています。
- 開発者向けにファイルへの直接アクセスを提供します。

## データと利用方法

データは[支援制度 - データセット - レジストリカタログ](https://catalog.registries.digital.go.jp/rc/dataset/ms000002)から取得しており、[公式のデータ定義](https://app.swaggerhub.com/apis/JPSMEA/api-search-case-and-assistance-data/4.0#/Support)に準拠しています。

生データファイルには直接アクセスできます:
- **CSV**: `https://github.com/code4fukui/mirasapo
- **JSON**: `https://github.com/code4fukui/mirasapo

### CSVデータの利用方法

```html
<script type="module">
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("https://code4fukui.github.io/mirasapo/supports.csv");
console.log(data);
</script>
```

### JSONデータの利用方法

```html
<script type="module">
const data = await (await fetch("https://code4fukui.github.io/mirasapo/supports.json")).json();
console.log(data);
</script>
```

## 自動化

このリポジトリでは、[GitHub Actionsのワークフロー](.github/workflows/scheduled-fetch.yml)を使用して、毎日最新のデータをダウンロードし、CSVおよびJSONに変換して変更をコミットします。

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
