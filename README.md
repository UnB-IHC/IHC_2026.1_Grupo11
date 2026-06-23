# IHC 2026.1 - Grupo 11

Este projeto tem como objetivo o desenvolvimento do projeto de IHC do grupo 11 no semestre de 2026.1

## Integrantes

<div align="center">
  <table align="center">
    <tr>
      <td align="center">
        <a href="https://github.com/BeatrizSants" target="_blank" rel="noopener noreferrer">
          <img style="border-radius: 50%; border: 3px solid #4CAF50;" src="https://github.com/BeatrizSants.png" width="120px;" alt="Beatriz Figueiredo"/>
        </a><br />
        <sub>
          <b>
            <a href="https://github.com/BeatrizSants" target="_blank" rel="noopener noreferrer">Beatriz Figueiredo</a>
          </b>
        </sub><br/>
      </td>
      <td align="center">
        <a href="https://github.com/enzocostaj" target="_blank" rel="noopener noreferrer">
          <img style="border-radius: 50%; border: 3px solid #4CAF50;" src="https://github.com/enzocostaj.png" width="120px;" alt="Enzo Costa"/>
        </a><br />
        <sub>
          <b>
            <a href="https://github.com/enzocostaj" target="_blank" rel="noopener noreferrer">Enzo Costa</a>
          </b>
        </sub><br/>
      </td>
      <td align="center">
        <a href="https://github.com/IderlanJ" target="_blank" rel="noopener noreferrer">
          <img style="border-radius: 50%; border: 3px solid #4CAF50;" src="https://github.com/IderlanJ.png" width="120px;" alt="Iderlan Junio"/>
        </a><br />
        <sub>
          <b>
            <a href="https://github.com/IderlanJ" target="_blank" rel="noopener noreferrer">Iderlan Junio</a>
          </b>
        </sub><br/>
      </td>
      <td align="center">
        <a href="https://github.com/leticialopes20" target="_blank" rel="noopener noreferrer">
          <img style="border-radius: 50%; border: 3px solid #4CAF50;" src="https://github.com/leticialopes20.png" width="120px;" alt="Leticia Lopes"/>
        </a><br />
        <sub>
          <b>
            <a href="https://github.com/leticialopes20" target="_blank" rel="noopener noreferrer">Leticia Lopes</a>
          </b>
        </sub><br/>
      </td>
      <td align="center">
        <a href="https://github.com/paulocerqr" target="_blank" rel="noopener noreferrer">
          <img style="border-radius: 50%; border: 3px solid #4CAF50;" src="https://github.com/paulocerqr.png" width="120px;" alt="Paulo Cerqueira"/>
        </a><br />
        <sub>
          <b>
            <a href="https://github.com/paulocerqr" target="_blank" rel="noopener noreferrer">Paulo Cerqueira</a>
          </b>
        </sub><br/>
      </td>
      <td align="center">
        <a href="https://github.com/Mach1r0" target="_blank" rel="noopener noreferrer">
          <img style="border-radius: 50%; border: 3px solid #4CAF50;" src="https://github.com/Mach1r0.png" width="120px;" alt="Daniel Ferreira"/>
        </a><br />
        <sub>
          <b>
            <a href="https://github.com/Mach1r0" target="_blank" rel="noopener noreferrer">Daniel Ferreira</a>
          </b>
        </sub><br/>
      </td>
      <td align="center">
        <a href="https://github.com/mel14-hub" target="_blank" rel="noopener noreferrer">
          <img style="border-radius: 50%; border: 3px solid #4CAF50;" src="https://github.com/mel14-hub.png" width="120px;" alt="Lara Souza"/>
        </a><br />
        <sub>
          <b>
            <a href="https://github.com/mel14-hub" target="_blank" rel="noopener noreferrer">Lara Souza</a>
          </b>
        </sub><br/>
      </td>
      <td align="center">
    </tr>
  </table>
</div>

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