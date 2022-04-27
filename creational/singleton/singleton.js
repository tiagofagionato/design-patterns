var Singleton = (function () {
    var instance;
    function createInstance() {
        var object = new Object();
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    console.log(instance1 === instance2);
}

main();