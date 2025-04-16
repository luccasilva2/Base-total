export type RootStackParamList = {
    Welcome: undefined;
    Auth: undefined;
    Login: undefined;
    Register: undefined;
    App: undefined;
    Home: undefined
    Profile: undefined
    Settings: undefined
  };
  
  // Declaração global para o useNavigation
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }