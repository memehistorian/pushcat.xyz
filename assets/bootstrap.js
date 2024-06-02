import { startStimulusApp } from '@symfony/stimulus-bundle';

const app = startStimulusApp();

// added to help heroku deployment. 
const port = process.env.PORT || 3000

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
