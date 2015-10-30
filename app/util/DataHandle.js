Ext.create('PnZ.util.DataHandle',{

createDB: function(){
	this.db = openDatabase('PnZ','1.0', 'Iventory details', 4 * 1024 * 1024);
	
	this.addData();
},

addData: function(){
	this.db.transaction(function(tx){
		tx.execute('');
	});
}

});