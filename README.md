# AngularIonicProjects

This project combines Angular framework with Ionic framework and uses Capacitor for native mobile app development.

## Prerequisites

- Node.js (managed via nvm)
- Angular CLI
- Ionic CLI

## Setup

1. Install nvm (Node Version Manager):
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. Load nvm in your shell:
   ```
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

3. Install Node.js:
   ```
   nvm install node
   nvm use node
   ```

4. Install Angular CLI and Ionic CLI:
   ```
   npm install -g @angular/cli @ionic/cli
   ```

## Development

### Web Development

To run the app in the browser:

```
npm install
ng serve
```

Or using Ionic:

```
ionic serve
```

### Mobile Development

#### Android

1. Ensure Android Studio is installed.
2. Build the web assets:
   ```
   ng build
   ```
3. Sync to Android:
   ```
   npx cap sync android
   ```
4. Open in Android Studio:
   ```
   npx cap open android
   ```
5. Or run directly:
   ```
   npx cap run android
   ```

#### iOS

1. Ensure Xcode is installed (macOS only).
2. Build the web assets:
   ```
   ng build
   ```
3. Sync to iOS:
   ```
   npx cap sync ios
   ```
4. Open in Xcode:
   ```
   npx cap open ios
   ```
5. Or run directly:
   ```
   npx cap run ios
   ```

## Project Structure

- `src/`: Angular source code
- `www/`: Built web assets
- `android/`: Android native project
- `ios/`: iOS native project
- `capacitor.config.ts`: Capacitor configuration

## References

- [Angular Documentation](https://angular.dev/)
- [Ionic Framework](https://ionicframework.com/)
- [Capacitor](https://capacitorjs.com/)

## Troubleshooting

- If you encounter issues with Node.js, ensure nvm is loaded in your shell.
- For Android/iOS build issues, check that the respective SDKs are installed.
- Run `npm install` if dependencies are missing.