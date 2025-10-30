import React, { useState,useEffect  } from "react";
import JsonInput from "./components/JsonInput";
import TreeVisualizer from "./components/TreeVisualizer";
import SearchBar from "./components/SearchBar";

function App() {
    const [json, setJson] = useState("{}");
    const [treeData, setTreeData] = useState(null);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const handleJsonChange = (value) => {
        setJson(value);
        setError("");
    };


    const handleVisualize = () => {
    try {
        const parsed = JSON.parse(json);
        if (
            typeof parsed === "object" &&
            parsed !== null &&
            Object.keys(parsed).length === 0 &&
            parsed.constructor === Object
        ) {
            setError("Please enter a non-empty JSON.");
            setTreeData(null);
            return;
        }
        setTreeData(parsed);
        setError("");
    } catch (e) {
        setError("Invalid JSON format. Please check your input.");
        setTreeData(null);
    }
};

    const handleClear = () => {
        setJson("{}");
        setTreeData(null);
        setError("");
        setSearchQuery("");
        setSearchResult(null);
    };
    return (
        <div className="app-container">
            <div className="header">
 <h1>JSON Tree Visualizer</h1>
             <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
                </button>
            </div>
          
                <div className="json-and-search">
                    <div className="json">
 <JsonInput
                value={json}
                onChange={handleJsonChange}
                onClick={handleVisualize}
                error={error}
                onClear={handleClear}
            />
                    </div>
<div>
{treeData &&
                <SearchBar
                    treeData={treeData}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setSearchResult={setSearchResult}
                />
            }
</div>


            
                </div>
           
            {treeData &&
                <TreeVisualizer
                    treeData={treeData}
                    searchResult={searchResult}
                />
            }
        </div>
    );
}

export default App;
