import MtButton from './Button';
import MtTable from './Table';

const MtEle = {};

const COMPONENTS = [
    MtButton,
    MtTable
]

MtEle.install = function(Vue, options) {
    if(options && options.components) { 
        const components = options.components;
        components.forEach(componentName => {
            COMPONENTS.forEach(component => {
                if(componentName === component.name) {
                    Vue.component(component.name, component);
                }
            })
        })
    } else {
        COMPONENTS.forEach(component => {
            Vue.component(component.name, component);
        })
    }
}

export default MtEle;