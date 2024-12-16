import DefaultTheme from 'vitepress/theme'
import './custom.less'
import compList from '../components/index.js';
// import Layout from './Layout.vue'
export default {
    ...DefaultTheme,
    // Layout,
    enhanceApp({ app, router, siteData }) {
        compList.forEach(value => {
            app.component(value.name, value.compoment);
        });
    }
}