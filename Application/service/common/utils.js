module.exports = {
    forEach: function (collection, callback) {
        for (var i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    },
    isDefined: function (item) {
        return !(item == undefined || item === undefined || item == 'undefined');
    },
    toArray: function (item) {
        var collection = [];
        collection.push(item);
        return collection;
    },
    isArray: function (variable) {
      return Array.isArray(variable);
    }
};
