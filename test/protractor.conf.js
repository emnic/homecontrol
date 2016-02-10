exports.config = {
  baseUrl: 'http://' + process.env.APP_IP + ':3000',
  rootElement: 'body',
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./features/*.feature'],

  // Chrome is not allowed to create a SUID sandbox when running inside Docker  
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },

  framework: 'cucumber',
  cucumberOpts: {
    tags: ['~@wip'],

    // define your step definitions in this file
    require: './features/step_definitions/*.js',
    format: 'pretty',
  },
};
