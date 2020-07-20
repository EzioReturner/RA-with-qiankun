import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue app',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/vue'
  }
]);

start();
