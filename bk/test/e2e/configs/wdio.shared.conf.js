exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/e2e/specs/**/*.js'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.sauce.conf.js`
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
    },
    // ============
    // Hooks
    // ============
    before: function () {
        require('@babel/register')
    },
};
