# mirasapo
 
https://code4fukui.github.io/mirasapo/

## Usage

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

## データ出展

- [支援制度 - データセット - レジストリカタログ](https://catalog.registries.digital.go.jp/rc/dataset/ms000002)
