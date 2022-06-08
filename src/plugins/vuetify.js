import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.red.lighten5, // #E53935
                info: colors.red.lighten1, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        }
    }

});
