var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", "updated_at", "ASC", function(res){
            cb(res);
        });
    },
    insert: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(colValObj, id, cb){
        orm.updateOne("burgers", colValObj, id, function(res){
            cb(res);
        });
    },
    delete: function(id, cb){
        orm.delete("burgers", id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;