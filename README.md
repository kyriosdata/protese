# protese

Informações e detalhes sobre próteses para estudantes de odontologia.

## Configuração, ...

- `https://expo.io/@proteses/protese` (URL onde atualizações serão publicada)
- `expo publish`

- `expo export --public-url https://kyriosdata.github.io/protese`
- `expo build:android --public-url https://kyriosdata.github.io/protese/android-index.json`
- `expo build:android --public-url https://kyriosdata.github.io/protese/ios-index.json`

## Desenvolvimento

- expo start
- expo export --public-url https://kyriosdata.github.io/protese
  O comando acima produz o diretório dist. Copie o conteúdo deste diretório, gerado pelo comando anterior, para o diretório docs (fornecido pelo Github Pages). Observe que vários diretórios serão sobrescritos.
  Faça o commit das mudanças introduzidas no diretório docs e o correspondente push.
- Após o push você poderá acessar, pelo celular, a url https://kyriosdata.github.io/protese. Clique no link correspondente ao seu celular (Android/iOS).
- O celular deve ter instalado o Explo Client (instale por meio da Apple Store ou Google Play).
