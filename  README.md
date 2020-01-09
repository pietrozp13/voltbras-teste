# Teste Voltbras

## Objetivo: 
Criar um aplicativo que mostre em um mapa pontos de recarga de veículos elétricos e suas informações como: status de utilização, valores, localização, horário te funcionamento, descrição do local e imagens.

## Tecnologias:
No aplicativo foi utilizado React native em conjunto com a abstração Expo. Por se tratar de um projeto de tamanho pequeno e com um escopo bem definido e limitado, foi escolhido utilizar o Expo para maior produtividade. Com tudo, se o aplicativo no futuro exigisse mais performance e mais utilização de recurso nativo, a ideia seria usar somente o React native e suas milhares de bibliotecas que a comunidade vem construindo ao longo dos últimos anos.

## Desafios:
Aprender do zero animações com react native e trabalhar com mapa.

## Melhorias:
Por conta de se tratar de um visualizador de status de pontos de carregamento, seria interessante dotar uma estratégia de consulta em tempo real (via pooling ou websocket), para ter mais fidelidade nos dados apresentados.

## Fontes:
1. Stack: 
    [https://facebook.github.io/react-native/](https://facebook.github.io/react-native/)
    [https://docs.expo.io/versions/v35.0.0/](https://docs.expo.io/versions/v35.0.0/)

2. Mapa: 
    [https://github.com/react-native-community/react-native-maps](https://github.com/react-native-community/react-native-maps)

3. Animações: 
    [https://facebook.github.io/react-native/docs/animatedvalue#__docusaurus](https://facebook.github.io/react-native/docs/animatedvalue#__docusaurus)
    [https://www.youtube.com/watch?v=DDm0M_rZLJo](https://www.youtube.com/watch?v=DDm0M_rZLJo) && [https://github.com/Rocketseat/youtube-react-native-nubank](https://github.com/Rocketseat/youtube-react-native-nubank)

# Instalação

    npm install or yarn

    npm run ios
      or
    npm run androidxs

# Build app
    expo build:android
      or
    expo build:ios
----