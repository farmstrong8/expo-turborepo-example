# Expo and TurboRepo Multi-App Example

This repository demonstrates how to set up [Expo](https://expo.dev/) and [TurboRepo](https://turbo.github.io/) for a project that contains two simple apps: `app-one` and `app-two`. Both apps are created with the Expo TypeScript example.

## Prerequisites

Before proceeding, ensure that you have the following installed on your machine:

-   [Node.js](https://nodejs.org/en/) (version 16 or above)
-   [NPM](https://docs.npmjs.com/getting-started)
-   [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

## Getting Started

1. Clone this repository by running the following command:

    ```bash
    git clone https://github.com/farmstrong8/expo-turborepo-example.git
    ```

2. Install dependencies by running the following command in the root directory of the cloned repository:

    ```bash
    npm i
    ```

3. Run the apps by running the following command based on the app you want to target:

    ```bash
    npm -w=apps/app-one run start
    ```

    You can then run the apps on your device by scanning the QR code or by running them in an emulator.

## Learn More

-   [Expo Documentation](https://docs.expo.dev/)
-   [TurboRepo Documentation](https://turbo.build/repo/docs)
