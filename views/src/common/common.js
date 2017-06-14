"use strict";

class Common {
    getType(obj) {
        let type = typeof obj;
        switch (type) {
            case "object":
                if (obj.constructor === Object) {
                    type = "Object";
                } else if (obj.constructor === Array) {
                    type = "Array";
                }
                break;
            default:
        }
        return type;
    }
}