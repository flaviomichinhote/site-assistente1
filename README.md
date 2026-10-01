# Site Neoluce Iluminação

Site institucional estático (HTML, CSS e JavaScript puros, sem build), pronto para publicação no GitHub Pages.

## Estrutura

```
index.html        Página única, com todas as seções (âncoras internas)
css/style.css      Estilos (tema escuro + dourado, responsivo)
js/script.js       Menu mobile e ano do rodapé
img/               Fotos das duas lojas e do showroom
```

Todos os caminhos são relativos, então o site funciona tanto na raiz de um domínio quanto em um subcaminho do GitHub Pages.

## Fotos

As fotos em `img/` (fachadas das duas lojas + showroom) são cópias diretas dos arquivos JPEG enviados, sem compressão (200-500 KB cada). Se quiser reduzir o peso da página, comprima essas imagens (ex.: squoosh.app ou TinyPNG) mantendo os mesmos nomes de arquivo.

## Pendências (marcadas como `[PREENCHER]` no HTML)

Nenhuma no momento — os placeholders da Galeria foram substituídos pelas fotos reais das lojas e do showroom.

## Sobre a logo

A logo em `LOGO NEOLUCE.pdf` não pôde ser convertida para imagem automaticamente (sem ferramenta de conversão de PDF disponível no ambiente). Por isso, a logo foi reconstruída em HTML/CSS (texto "NEOLUCE" com as mesmas cores da marca). Se quiser usar o arquivo vetorial original, exporte-o como SVG ou PNG e substitua o bloco `.logo` no `index.html` por uma tag `<img>`.

## Próximo passo: chat.js

O `</body>` do `index.html` foi deixado limpo, logo após `js/script.js`, para receber o `<script src="js/chat.js"></script>` do assistente de vendas.

## Arquivos de referência (não publicados)

Os arquivos `1. Nome do negócio.txt`, `FOCO METALLO - MARÇO 2026 - TABELA FOB.pdf` e `LOGO NEOLUCE.pdf` na raiz são material de apoio usado para escrever o conteúdo do site — eles não são referenciados pelo `index.html` e podem ser mantidos fora do controle de versão, se preferir.

O arquivo `OrçamentoPedido - Por Ambiente Cliente.txt` contém dados pessoais reais de um cliente (CPF, telefone, e-mail, endereço) e está no `.gitignore` — não deve ser versionado nem publicado em nenhum momento.

As fotos originais `WhatsApp Image *.jpeg` na raiz foram copiadas para `img/` com nomes organizados; os arquivos originais na raiz não são referenciados pelo site e também podem ficar fora do controle de versão.

## Publicação

Publicado em `https://github.com/flaviomichinhote/site-assistente1` (branch `main`).
