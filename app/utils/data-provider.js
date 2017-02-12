var targetDb,
    referenceDb,
    referenceDbSearch;

module.exports = {
    targetDb: function() {
	if(typeof targetDb === 'undefined') {
	    var PouchDB = require('pouchdb-core')
	      	.plugin(require('pouchdb-adapter-leveldb'));
	    targetDb = new PouchDB('./db/targetDB');
	}
	return targetDb;
    },
    referenceDb: function() {
	if(typeof referenceDb === 'undefined') {
	    var PouchDB = require('pouchdb-core')
	      	.plugin(require('pouchdb-adapter-leveldb'))
		.plugin(require('pouchdb-quick-search'));
	    referenceDb = new PouchDB('./db/referenceDB');
	}
	return referenceDb;
    }
}
