// Recursively converts JSON to React Flow nodes/edges
let idCount = 0;

// function createNode(key, value, parentId, path, highlightPath) {
//     const id = `${idCount++}`;
//     const dataType = Array.isArray(value)
//         ? "array"
//         : (value !== null && typeof value === "object")
//             ? "object"
//             : "primitive";
//     let label = "";
//     if (dataType === "object") label = key || "Object";
//     else if (dataType === "array") label = key || "Array";
//     else label = `${key}: ${String(value)}`;
//     const highlighted = path === highlightPath;

//     return {
//         id,
//         data: { label, type: dataType, path, value },
//         position: { x: Math.random() * 600, y: id * 60 },
//         style: { border: highlighted ? "2px solid #F00" : "1px solid #333" }
//     };
// }
function createNode(key, value, parentId, path, highlightPath) {
    const id = `${idCount++}`;
    const dataType = Array.isArray(value)
        ? "array"
        : (value !== null && typeof value === "object")
            ? "object"
            : "primitive";
    let label = "";
    if (dataType === "object") label = key || "Object";
    else if (dataType === "array") label = key || "Array";
    else label = `${key}: ${String(value)}`;
    const highlighted = path === highlightPath;

    let nodeStyle = { border: highlighted ? "2px solid #F00" : "2px solid #333" };
    if (dataType === "object") {
        nodeStyle.background = "#ebe7fe";      // light purple/blue
        nodeStyle.border = highlighted ? "2px solid #F00" : "2px solid #6c63ff";
    } else if (dataType === "array") {
        nodeStyle.background = "#e8ffe2";      // light green
        nodeStyle.border = highlighted ? "2px solid #F00" : "2px solid #28a745";
    } else if (dataType === "primitive") {
        nodeStyle.background = "#fffae8";      // light orange/yellow
        nodeStyle.border = highlighted ? "2px solid #F00" : "2px solid #ff9900";
    }

    return {
        id,
        data: { label, type: dataType, path, value },
        position: { x: Math.random() * 600, y: id * 60 },
        style: nodeStyle,
    };
}

function traverse(obj, parentId, nodes = [], edges = [], currentPath = "$", highlightPath) {
    Object.entries(obj).forEach(([key, value]) => {
        const myPath = Array.isArray(obj)
            ? `${currentPath}[${key}]`
            : `${currentPath}.${key}`;
        const node = createNode(key, value, parentId, myPath, highlightPath);
        nodes.push(node);
        if (parentId !== null) {
            edges.push({
                id: `${parentId}-${node.id}`,
                source: parentId,
                target: node.id
            });
        }
        if (value !== null && typeof value === "object") {
            traverse(value, node.id, nodes, edges, myPath, highlightPath);
        }
    });
    return { nodes, edges };
}
const parent='$';
export default function jsonToTree(json, highlightPath = null) {
    idCount = 0;
    return traverse(json, parent, [], [], "$", highlightPath);
}
