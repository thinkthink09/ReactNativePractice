# ReactNativePractice

A practice repo for react native, using **Expo** with Typescript

This is a prototype of how we're gonna build mobile apps

---

## Prerequisite

Download and install [Expo](https://docs.expo.io/) on your mobile device, you should be able to get it in App Store and Play Store

[IOS](https://apps.apple.com/us/app/expo-client/id982107779)

[Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

## How to start the servers:

```
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios
- yarn web
```

---

## Notes:

here's how to setup both environments:

1.  install expo client

    ```
    sudo npm i -g expo-cli
    ```

2.  init the app using expo

    ```
    expo init client
    ```

3.  when under clinet folder, start your expo metro bundler with

    ```
    yarn start
    ```

    a localhost page directing to http://localhost:19002/ should appear

4.  on your mobile device, open Expo Client App, and scan the QR code on your metro bundler page.
    other debug methods please view https://www.youtube.com/watch?v=0-S5a0eXPoc&t=33s

5.  Adding test libraries

    ```
    yarn add --dev jest jest-expo jest-fetch-mock @types/jest @testing-library/react-native
    ```