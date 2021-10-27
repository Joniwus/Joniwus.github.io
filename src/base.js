import { createApp } from 'vue';
import Components from './components';
import clickOutside from './directives/click-outside';

export const init = function (rootComponent) {
    const app = createApp(rootComponent);

    app.directive('click-outside', clickOutside);

    for (const componentName in Components) {
        app.component(componentName, Components[componentName]);
    }

    return app.mount('#app');
};
