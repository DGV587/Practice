var book = {};

Object.defineProperties(book, {
    _year: {
        value: 2004
    },

    edition: {
        value: 1
    },

    year: {
        get: function() {
            return this._year;
        },

        set: function(newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

var properties = ["_year", "edition", "year"];

for (var j = 0; j < properties.length; ++j) {
    console.log("Looking at property descriptor of " + properties[j]);
    var descriptor = Object.getOwnPropertyDescriptor(book, properties[j]);
    for (var i in descriptor) {
        console.log(i + ": " + descriptor[i] + " - " + typeof i);
    }
    console.log("");
}
