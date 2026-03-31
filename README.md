# Game Ranking

Projeto feito em Django para buscar jogos, ver detalhes, avaliar, comentar e entrar com conta de usuario.

## O que o site faz

- pesquisar jogos pelo nome
- ver a pagina de cada jogo
- criar conta com nome de usuario e senha
- entrar e sair da conta
- avaliar jogos
- comentar em jogos
- ver o perfil do usuario

## Como rodar no computador

1. Crie e ative o ambiente virtual.
2. Instale os pacotes:

```bash
pip install -r requirements.txt
```

3. Rode as atualizacoes do banco:

```bash
python manage.py migrate
```

4. Inicie o projeto:

```bash
python manage.py runserver
```

5. Abra no navegador:

```text
http://127.0.0.1:8000/
```

## Como foi colocado no Render

O projeto foi publicado no Render usando a criacao manual do servico web.

No Render, usamos:

- o arquivo `build.sh`
- o comando de iniciar o projeto com `gunicorn`
- um banco PostgreSQL que ja existia na conta

Tambem foram preenchidos no painel do Render:

- `DATABASE_URL`
- `SECRET_KEY`
- `DEBUG`
- `ALLOWED_HOSTS`
- `CSRF_TRUSTED_ORIGINS`
- `DJANGO_SUPERUSER_USERNAME`
- `DJANGO_SUPERUSER_EMAIL`
- `DJANGO_SUPERUSER_PASSWORD`

## Integrantes

- Arthur de Almeida Oliveira
- Arthur Filipe Silva dos Reis
- Gabriel Gondim Malta
- Gabriel Mendes Cavalcanti
- Guilherme Silva Guimaraes
- Helio de Moraes Rego Neto
- Matheus Assis de Souza Jacome

## Entrega 1

- Figma: https://www.figma.com/board/fm0wB9xITXtjeqBeBZYJjj/Sem-t%C3%ADtulo?node-id=0-1&t=9dShIyt3maLOlE0m-1
- Historias do projeto: https://docs.google.com/document/d/1koSvhLiN-m2yipQsbQeLWTG0vbIIWovv3-FDx5r-KnA/edit?tab=t.0
- Prints do Jira: https://drive.google.com/drive/folders/187pxLEDKzr8ZbCQJDWKPiKosjQO6r-wn?usp=sharing
- Screencast: https://www.youtube.com/watch?v=V_xk95SDth4

## Entrega 2
- Site deploy: https://game-ranking.onrender.com/ 
- Prints do Jira: https://drive.google.com/drive/folders/187pxLEDKzr8ZbCQJDWKPiKosjQO6r-wn?usp=sharing
- Screencast: https://youtu.be/iYjTGXvBgdk
- Relatorio de pair programming: https://docs.google.com/document/d/1ghc7w0ws937uktHESDruGyv4_7DGh1inWLtMlZLwBgc/edit?usp=sharing
