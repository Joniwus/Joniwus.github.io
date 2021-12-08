import { createApp } from 'vue';
import Components from './components';
import { store } from './store';

export const init = function (rootComponent) {
    const app = createApp(rootComponent);

    app.use(store);

    for (const componentName in Components) {
        app.component(componentName, Components[componentName]);
    }

    return app.mount('#app');
};
