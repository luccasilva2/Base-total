export type RootStackParamList = {
    Welcome: undefined;
    Auth: undefined;
    Login: undefined;
    Register: undefined;
    App: undefined;
  };
  
  // Declaração global para o useNavigation
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }