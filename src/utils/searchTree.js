// Finds the path in JSON tree for JSON path like $.user.address.city
export default function searchTree(json, path) {
    let current = json;
    if (!path.startsWith("$")) return null;
    let tokens = path.slice(1).split(/\.|\[|\]/).filter(Boolean);

    let currPath = "$";
    for (let token of tokens) {
        if (typeof current !== "object" || current === null) {
            return null;
        }
        if (Array.isArray(current)) {
            let idx = parseInt(token);
            if (isNaN(idx) || idx >= current.length) return null;
            current = current[idx];
            currPath += `[${idx}]`;
        } else {
            if (!(token in current)) return null;
            current = current[token];
            currPath += `.${token}`;
        }
    }
    return currPath;
}
