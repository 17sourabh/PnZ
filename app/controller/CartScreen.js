Ext.define('PnZ.controller.CartScreen', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'CartScreen'
        ],

        refs: {
            cartScreen: 'cartscreen'
        },

        control: {
            "cartscreen": {
                painted: 'onCartScreenPainted'
            }
        }
    },

    onCartScreenPainted: function(ele, eOpts) {
        var me = this;
		console.log(me);
    }
});