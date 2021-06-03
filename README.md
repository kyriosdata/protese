# protese

Informações e detalhes sobre próteses para estudantes de odontologia.

## Configuração, ...

- Usuário "proteses" criado no Expo.io.

- `https://expo.io/@proteses/protese` (URL onde atualizações serão publicada)

Durante desenvolvimento, cada alteração a ser disponibilizada exige

- `expo publish`

## Acesso durante desenvolvimento (Android ou iOS)

- Instalar Expo Go em seu dispositivo. Este aplicativo encontra-se
  disponível tanto na Apple Store quanto Google Play, é gratuito.
- Na aba `Profile`, realizar `Sign in` com a conta de usuário `proteses` (a senha não segue aqui por segurança).

### Usuários (iOS)

- Acesso ao aplicativo (para testes) (há duas opções)
  - Seguir link `https://expo.io/@proteses/protese` onde se encontra o QRcode que pode ser aberto pelo iOS, ou
  - Seguir link `exp://exp.host/@proteses/protese` (navegador). Por comodidade, este link está disponível para cópia no endereço
    `https://expo.io/@proteses/protese`.

### Usuários (Android)

- Seguir URL `https://expo.io/@proteses/protese`
- Clicar no botão `Abrir com Expo Go`

## Desenvolvimento

- `expo export --public-url https://kyriosdata.github.io/protese`
- `expo build:android --public-url https://kyriosdata.github.io/protese/android-index.json`
- `expo build:android --public-url https://kyriosdata.github.io/protese/ios-index.json`

- expo start
- expo export --public-url https://kyriosdata.github.io/protese
  O comando acima produz o diretório dist. Copie o conteúdo deste diretório, gerado pelo comando anterior, para o diretório docs (fornecido pelo Github Pages). Observe que vários diretórios serão sobrescritos.
  Faça o commit das mudanças introduzidas no diretório docs e o correspondente push.
- Após o push você poderá acessar, pelo celular, a url https://kyriosdata.github.io/protese. Clique no link correspondente ao seu celular (Android/iOS).
- O celular deve ter instalado o Explo Client (instale por meio da Apple Store ou Google Play).
