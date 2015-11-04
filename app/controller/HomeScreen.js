/*
 * File: app/controller/HomeScreen.js
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

Ext.define('PnZ.controller.HomeScreen', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'HomeScreen'
        ],

        refs: {
            homeScreen: 'homescreen',
            nikonList: 'list#nikonList',
            cannonList: 'list#cannonList',
            accList: 'list#accList',
            lightList: 'list#lightList',
            tabPanel: 'homescreen tabpanel#tabPanel',
			cartButton: 'homescreen button#cart'
        },

        control: {
            "homescreen": {
                painted: 'onHomeScreenPainted'
            },
            "homescreen list#nikonList": {
                itemtap: 'onListItemTap'
            },
            "homescreen list#cannonList": {
                itemtap: 'onListItemTap'
            },
            "homescreen list#accList": {
                itemtap: 'onListItemTap'
            },
            "homescreen list#lightList": {
                itemtap: 'onListItemTap'
            },
			"homescreen button#cart": {
				tap: 'onCartTap'
			}
        }
    },

    onHomeScreenPainted: function(ele, eOpts) {
        var me = this,
            homeScreen = me.getHomeScreen(),
            tabPanel = me.getTabPanel();
			
		tabPanel.element.on('swipe',onTabPanelSwipe);
        me.populateListData();
    },
	
	onTabPanelSwipe: function(a,b,c) {
		console.log(a);
		console.log(b);
		console.log(c);
	},
	
    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this,list;
		var checkbox = e.target.children[0];
		if(!Ext.isEmpty(checkbox)) {
			if(checkbox.checked == true) {
				checkbox.checked = false;
				me.removeItemFromCart(record);
			} else {
				checkbox.checked = true;
				me.addItemToCart(record);
			}
		}
    },

    populateListData: function() {
        var me = this,
            homeScreen = me.getHomeScreen(),
            tabPanel = me.getTabPanel(),
            nikonList = me.getNikonList(),
            cannonList = me.getCannonList(),
            accList = me.getAccList(),
            lightList = me.getLightList(),
            dataArray = [];

        tabPanel.setMasked({
            xtype: 'loadmask',
            message: 'Please wait...Loading Data',
            indicator: false
        });

        for(var i=0;i<10;i++){
            dataArray.push({
                name: 'Camera'+i,
                specification: ''
            });
        }

        nikonList.setStore(Ext.create('Ext.data.Store',{
            model: 'PnZ.model.CameraDetails',
            data: dataArray
        }));

        cannonList.setStore(Ext.create('Ext.data.Store',{
            model: 'PnZ.model.CameraDetails',
            data: dataArray
        }));

        accList.setStore(Ext.create('Ext.data.Store',{
            model: 'PnZ.model.CameraDetails',
            data: dataArray
        }));

        lightList.setStore(Ext.create('Ext.data.Store',{
            model: 'PnZ.model.CameraDetails',
            data: dataArray
        }));

        tabPanel.setMasked(false);

        PnZ.app.getCannonItems(function(results){
            console.log(results);
        },function(results){
            console.log(results);
        });


    },
    addItemToCart: function(rec) {
        var me = this,
            store = Ext.getStore('Cart'),
            model = Ext.create('PnZ.model.CameraDetails');
        store.add({'name': rec.get('name'),'specification':rec.get('specification')});
    },
	removeItemFromCart: function(rec) {
        var me = this,
            store = Ext.getStore('Cart');
		var index = store.find('name',rec.data.name);
		if(index != -1) {
			store.removeAt(index);
		}
    },
	onCartTap: function(button,e,eOpts) {
		var me = this,
			homeScreen = me.getHomeScreen(),
			cartScreen;
		cartScreen = Ext.create('PnZ.view.CartScreen');
		homeScreen.removeAll(true);
		homeScreen.add(cartScreen);
	}
});