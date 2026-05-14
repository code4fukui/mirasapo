> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

# mirasapo

Provides CSV and JSON data for support systems from Japan's ミラサポplus制度ナビ platform. The data is automatically updated daily.

## Demo

- **[Live Data Viewer](https://code4fukui.github.io/mirasapo/)**: Browse and search all support systems in your web browser.

## Features

- Provides data for 1,100+ support systems in both CSV and JSON formats.
- Automatically updates data daily via a GitHub Actions workflow.
- Includes a web-based viewer for easy browsing and searching.
- Offers direct file access for developers.

## Data & Usage

The data is sourced from the [支援制度 - データセット - レジストリカタログ](https://catalog.registries.digital.go.jp/rc/dataset/ms000002) and follows the [official data definition](https://app.swaggerhub.com/apis/JPSMEA/api-search-case-and-assistance-data/4.0#/Support).

You can access the raw data files directly:
- **CSV**: `https://github.com/code4fukui/mirasapo
- **JSON**: `https://github.com/code4fukui/mirasapo

### Using the CSV Data

```html
<script type="module">
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("https://code4fukui.github.io/mirasapo/supports.csv");
console.log(data);
</script>
```

### Using the JSON Data

```html
<script type="module">
const data = await (await fetch("https://code4fukui.github.io/mirasapo/supports.json")).json();
console.log(data);
</script>
```

## Automation

This repository uses a [GitHub Actions workflow](.github/workflows/scheduled-fetch.yml) to download the latest data, convert it to CSV and JSON, and commit the changes every day.

## License

MIT License — see [LICENSE](LICENSE).