let _routes = {};
let _templates = {};

export function route(path, template) {
    if (typeof template === "function") {
        return (_routes[path] = template);
    } else if (typeof template === "string") {
        return (_routes[path] = _templates[template]);
    }
}

export function template(name, templateFunction) {
    return (_templates[name] = templateFunction);
}

function _resolveRoute(path) {
    const route = _routes[path];
    if (route) {
        return route;
    }
    if (_routes["/404"]) {
        return _routes["/404"];
    }
    throw new Error("Add 404 route page");
}

export function router(event) {
    const path = window.location.pathname;
    const page = _resolveRoute(path);
    page();
}
