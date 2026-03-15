# mirasapo
A project that provides access to support systems published on the ミラサポplus制度ナビ platform.

## Features
- Provides CSV and JSON data on various support systems
- Automatically updates the data daily through a GitHub Actions workflow

## Data / API
The data is sourced from the [支援制度 - データセット - レジストリカタログ](https://catalog.registries.digital.go.jp/rc/dataset/ms000002) dataset.

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

## License
MIT License