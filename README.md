# Phoenix EIC Event Display

## Migration

⚠️ This project has migrated to https://github.com/eic/firebird. ⚠️

## Quickstart

### Create an EIC GLTF geometry file

At this point, no GLTF geometry for EIC is bundled in this repository. This is in order to avoid large data blobs in the repository during periods of rapid development iterations. In order to build an EIC GLTF file, please consider the repository https://github.com/eic/root-to-gltf-exporter. We will aim to build GLTF files as a standard step in the geometry checks pipeline.

### Start the Phoenix EIC Event Display

You can start the event display app in one of the following two ways:
```
npm start
```
or
```
ng serve
```
You can access the app at the URL that is printed to the screen.

## Angular development notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
