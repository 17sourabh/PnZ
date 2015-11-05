/*
 * File: app/view/HomeScreen.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PnZ.view.CartScreen', {
    extend: 'Ext.Container',
    alias: 'widget.cartscreen',

    requires: [
        'Ext.Toolbar',
        'Ext.Label',
        'Ext.Spacer',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'fit',
        scrollable: null,
        items: [
            {
                xtype: 'container',
				title: 'Cart',
				layout: 'fit',
				items: [
					{
						xtype: 'list',
						itemId: 'cartList',
						itemTpl: [
							'<div class=camera-details>{name}'+
							'<select name="cartList" style= "float: right; margin-right: 10px;">'+
							'<option value="Days">Days</option>'+
							'<option value="1">1</option>'+
							'<option value="2">2</option>'+
							'<option value="3">3</option>'+
							'</select></div>'
						],
						store: 'Cart'
					}
				]
            }
        ]
    },

    initialize: function() {
        this.callParent();
        this.relayEvents(this,['painted']);
    }
});