import React, { useRef, useCallback } from "react";
import ReactFlow, { MiniMap, Controls } from "reactflow";
import jsonToTree from "../utils/jsonToTree";
import { toPng } from "html-to-image";
import "reactflow/dist/style.css";

function getNodeColor(type) {
    switch (type) {
        case "object":
            return "#6c63ff";
        case "array":
            return "#28a745";
        case "primitive":
            return "#ff9900";
        default:
            return "#aaa";
    }
}

function TreeVisualizer({ treeData, searchResult }) {
    const { nodes, edges } = jsonToTree(treeData, searchResult);
    const flowWrapperRef = useRef(null);

    const onElementClick = useCallback((event, element) => {
        if (element.data?.path) {
            navigator.clipboard.writeText(element.data.path);
            alert("Copied JSON Path: " + element.data.path);
        }
    }, []);

    const handleDownload = () => {
        if (flowWrapperRef.current) {
            toPng(flowWrapperRef.current)
                .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = "json-tree.png";
                    link.href = dataUrl;
                    link.click();
                })
                .catch(() => alert("Error generating image."));
        }
    };
    const onNodeClick = useCallback((event, node) => {
        if (node.data?.path) {
            navigator.clipboard.writeText(node.data.path);
            alert(`Copied JSON Path: ${node.data.path}`);
        }
    }, []);
    return (
        <>
            <div
                ref={flowWrapperRef}
                style={{ height: 500, width: "100%", background: "var(--bg)" }}
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodeClick={onNodeClick}
                    fitView
                    nodesDraggable
                    nodesConnectable={false}
                    zoomOnScroll
                    snapToGrid
                    onElementClick={onElementClick}
                >
                    <MiniMap nodeColor={(n) => getNodeColor(n.data.type)} />
                    <Controls />
                </ReactFlow>
            </div>
            <button
                className="export-btn"
                onClick={handleDownload}
                style={{ marginTop: "1em" }}
            >
                Download as Image
            </button>
        </>
    );
}

export default TreeVisualizer;
