# IHC 2026.1 - Grupo 11

Esqueleto de documentação com MkDocs Material e deploy para GitHub Pages.

## Rodar localmente

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Acesse `http://127.0.0.1:8000`.

## Gerar build

```bash
mkdocs build --strict
```

## Deploy

O workflow em `.github/workflows/ci.yml` executa o deploy quando houver push na branch `docs`. O MkDocs publica o site gerado na branch `gh-pages`.

No GitHub Pages, use:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`
