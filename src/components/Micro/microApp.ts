import { registerMicroApps, start } from 'qiankun';

import render from './microRender';

function register() {
  // render({ loading: true });

  const loader = (loading: any) => render({ loading });

  registerMicroApps([
    {
      name: 'vue app',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      loader,
      activeRule: '/#/vue'
    }
  ]);

  start();
}

export default register;
