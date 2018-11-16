var connection = require("./connection");

function addQuestionMarks(length){
    var array = [];
    for(var i = 0; i < length; i++){
        array.push("?");
    }
    return array.toString();
}

function objToSql(ob){
    var array = [];
    for(var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

var orm = {
    selectAll: function(table, orderCol, order, cb){
        var queryString = "SELECT * FROM " + table + " ORDER BY " + orderCol + " " + order + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + addQuestionMarks(vals.length) +  ");";
        connection.query(queryString,vals, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, colValObj, id, cb){
        var queryString = "UPDATE " + table + " SET " + objToSql(colValObj) + " WHERE " + id;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    delete: function(table, id, cb){
        var queryString = "DELETE FROM " + table + " WHERE " + id;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;