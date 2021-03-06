/*
 * File: app/store/BookingList.js
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

Ext.define('PnZ.store.BookingList', {
    extend: 'Ext.data.Store',

    requires: [
        'PnZ.model.CameraDetails'
    ],

    config: {
        data: [
            {
                name: 'Canon EOS 70D'
            },
            {
                name: 'Canon EOS 5D Mark |'
            },
            {
                name: 'Nikon D5200'
            },
            {
                name: 'Nikon 35mm / F1.8'
            }
        ],
        model: 'PnZ.model.CameraDetails',
        storeId: 'BookingList'
    }
});