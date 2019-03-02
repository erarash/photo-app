// function Store(name,callback) {
//     let data;
//     let dbName;

//     callback = callback || function(){};

//     dbName = this._dbName = name;

//     chrome.storage.lpocal.get(dbName, function(storage){
//         if(dbName in storage){
//             callback.call(this,storage[dbName].images);
//         } else {
//             storage = {};
//             storage[dbName] = { images: [] };
//             chrome.storage.local.set(storage, function(){
//                 callback.call(this, storage[dbName].images);
//             }.bind(this));
//         }
//     }.bind(this))
// }

// Store.prototype.find = function(query, callback){
//     if(!callback){
//         return;
//     }
//     chrome.storage.local.get(this._dbName,function(storage){
//         let images = storage[this._dbName] && storage[this._dbName].images || [];
//         callback.call(this, images);
//     }.bind(this));
// }

// Store.prototype.save = function(id, updateData, callback){
//     chrome.storage.local.get(this._dbName, function(storage){
//         let data = storage[this._dbName];
//         let images = data.images;

//         callback = callback || function(){};

//         if( typeof id !== "object" || Array.isArray(id) ) {
//             let ids = [].concat( id );
//             ids.forEach(function( id ){
//                 for(let i = 0; i < images.length; i++){
//                     if( images[i].id === id ){
//                         for(let x in updateData){
//                             images[i][x] = updateData[x]
//                         }
//                     }
//                 }
//             });
//             chrome.storage.local.set(storage, function(){
//                 chrome.storage.local.get(this._dbName, function(storage){
//                     callback.call(this, storage[this._dbName].images)
//                 }.bind(this))
//             }.bind(this))
//         } else {
//             callback = updateData;
//             updateData = id

//             updateData.id = new Date().getTime();

//             images.push(updateData);
//             chrome.storage.local.set(storage, function(){
//                 callback.call(this, [updateData]);
//             }.bind(this))
//         }
//     }.bind(this));
// };

// new Store();
