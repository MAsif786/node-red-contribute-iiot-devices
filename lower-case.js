module.exports = function(RED) {
	// 'use strict';
	// const myjson = require('my.json');

    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            'use strict';
            let myjson = require('./my.json');
            var reg_blocks = myjson["reg_blocks"]
            var resp = []
            var unitid = msg.payload
            for(var i=0; i < reg_blocks.length; i++){
                msg.payload = reg_blocks[i]
                msg.payload["unitid"] = unitid
                node.send(msg);
            }

        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
