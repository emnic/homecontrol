exports.config = {
  baseUrl: 'http://127.0.0.1:3000',
    
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./features/*.feature'],

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'cucumber',
  cucumberOpts: {
    // define your step definitions in this file
    require: './features/step_definitions/*.js',
    format: 'pretty',
  },
};
