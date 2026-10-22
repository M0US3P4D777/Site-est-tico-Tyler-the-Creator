# Tyler, The Creator — Interactive Website

Um site desenvolvido com Angular, inspirado nos álbuns **Flower Boy** e **IGOR**, de Tyler, The Creator. O projeto explora a identidade visual, a atmosfera e a experiência musical de cada álbum por meio de uma interface interativa.

## Sobre o projeto

Este projeto pessoal foi criado para praticar desenvolvimento web, organização de componentes e estilização de interfaces, combinando elementos visuais e sonoros para apresentar dois trabalhos marcantes da discografia do artista.

## Funcionalidades

- Seção dedicada ao álbum *Flower Boy*.
- Seção dedicada ao álbum *IGOR*.
- Elementos visuais inspirados em discos de vinil.
- Reprodução de áudio integrada à interface.
- Imagens e composições visuais específicas para cada álbum.
- Estilos e identidade visual próprios para cada seção.

## Tecnologias utilizadas

- **Angular** — estrutura da aplicação.
- **TypeScript** — lógica e comportamento dos componentes.
- **HTML5** — estrutura das páginas.
- **CSS3** — estilização, layouts e efeitos visuais.
- **Git e GitHub** — versionamento e hospedagem do código.

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm, instalado junto com o Node.js.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/M0US3P4D777/Site-est-tico-Tyler-the-Creator.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Site-est-tico-Tyler-the-Creator
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npx ng serve
   ```

5. Abra no navegador:

   [http://localhost:4200/](http://localhost:4200/)

### Compilar para produção

Para gerar a versão de produção do projeto, execute:

```bash
npx ng build
```

Os arquivos compilados serão gerados na pasta `dist/`.

## Estrutura do projeto

```text
site-tyler-the-creator/
├── public/
│   ├── audio/
│   │   ├── flower-boy/
│   │   └── igor/
│   ├── img_flowerboy/
│   └── img_igor/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── album-section/
│   │   │   ├── bee/
│   │   │   └── vinyl-record/
│   │   └── models/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .gitignore
├── angular.json
├── package.json
└── README.md
```

## Objetivo de aprendizado

Este projeto faz parte da minha jornada de aprendizado em desenvolvimento de software, com foco em Angular, TypeScript, componentes reutilizáveis, CSS e versionamento com Git.

## Aviso

Projeto independente, desenvolvido para fins de estudo e portfólio. Não é oficial e não possui afiliação com Tyler, The Creator. Os nomes, imagens e músicas pertencem aos respectivos titulares dos direitos.

---

Desenvolvido como projeto de estudo, inspirado nos álbuns *Flower Boy* e *IGOR*.
