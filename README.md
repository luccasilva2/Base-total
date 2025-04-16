# BaseApp - React Native  

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)  

Aplicativo base desenvolvido em React Native com Expo para servir como template de novos projetos.

## 📋 Pré-requisitos

Antes de começar, verifique se você possui:

- Node.js 16 ou superior
- npm ou yarn
- Expo CLI instalado globalmente (`npm install -g expo-cli`)
- Android Studio/Xcode (para builds nativos)
- Git

## 🚀 Começando

Siga estas etapas para configurar e executar o projeto:

1. **Clone o repositório**:
```bash
git clone https://github.com/luccasilva2/Base.git
cd Base
```

2. **Instale as dependências**:
```bash
npm install
# ou
yarn install
```

3. **Execute o aplicativo**:
```bash
expo start
```

## 🛠 Scripts Úteis

| Comando               | Descrição                              |
|-----------------------|----------------------------------------|
| `expo start`          | Inicia o servidor de desenvolvimento   |
| `expo run:android`    | Executa no emulador/dispositivo Android|
| `expo run:ios`        | Executa no simulador/dispositivo iOS   |
| `npm test`            | Executa testes                         |
| `npm run lint`        | Verifica erros de linting              |

## 📂 Estrutura do Projeto

```
src/
├── assets/          # Assets do aplicativo
├── components/      # Componentes reutilizáveis
├── navigation/      # Configuração de navegação
│   ├── AppStack.js  # Navegação principal
│   └── AuthStack.js # Navegação de autenticação
├── screens/         # Telas do aplicativo
│   ├── Auth/        # Telas de autenticação
│   └── Main/        # Telas principais
├── services/        # Serviços (API, Firebase)
└── styles/          # Estilos globais
```

## 🔧 Configuração

### Firebase Setup

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Baixe o arquivo `google-services.json`
3. Coloque em `android/app/`

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```env
API_KEY=your_api_key_here
AUTH_DOMAIN=your-project.firebaseapp.com
```

## 🚨 Problemas Conhecidos

- **SurfaceRegistryBinding warning**: Não afeta a funcionalidade do app
- **Problemas no emulador**: Recomendado testar em dispositivo físico

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## ✉️ Contato

Lucca Silva - [silvaoliveiralucca@gmail.com](mailto:silvaoliveiralucca@gmail.com)  
Link do Projeto: [https://github.com/luccasilva2/Base](https://github.com/luccasilva2/Base)

---

**Dica**: Para desenvolvimento, recomendo usar o [React Native Debugger](https://github.com/jhen0409/react-native-debugger) para melhor experiência de debug.


