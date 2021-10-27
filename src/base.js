import { createApp } from 'vue';
import Components from './components';

export const init = function (rootComponent) {
    const app = createApp(rootComponent);

    for (const componentName in Components) {
        app.component(componentName, Components[componentName]);
    }

    return app.mount('#app');
};
