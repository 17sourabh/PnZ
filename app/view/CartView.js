/*
 * File: app/view/CartView.js
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

Ext.define('PnZ.view.CartView', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.Button',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Toolbar'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'datepickerfield',
                label: 'Start Date',
                labelWidth: '50%',
                placeHolder: '10/06/2015'
            },
            {
                xtype: 'datepickerfield',
                label: 'End Date',
                labelWidth: '50%',
                placeHolder: '11/06/2015'
            },
            {
                xtype: 'textfield',
                label: 'Start Time',
                labelWidth: '50%'
            },
            {
                xtype: 'textfield',
                label: 'End Time',
                labelWidth: '50%'
            },
            {
                xtype: 'label',
                html: 'Selected items:',
                margin: '10 0 0 10'
            },
            {
                xtype: 'list',
                flex: 1,
                itemId: 'BookingList',
                margin: '15 0 15 0',
                itemTpl: [
                    '<div class=\'camera-details\'>{name}</div>'
                ],
                store: 'BookingList'
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'label',
                        html: 'Cart'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        margin: '0 10 0 10',
                        text: 'Submit Request'
                    },
                    {
                        xtype: 'button',
                        margin: '0 10 0 10',
                        text: 'Cancel'
                    }
                ]
            }
        ]
    }

});