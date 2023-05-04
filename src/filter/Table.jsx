import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./AGGridTable.css";
import { feedbackdatamapper } from "./DataMapper";

const Table = ({
    data = [],
    gridOptions = [],
    type="formData"

}) => {
    const [gridApi, setGridApi] = useState(null);
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        if(type === "formData")
            setRowData(feedbackdatamapper(data));
    }, [data, type]);

    const onGridReady = (params) => {
        setGridApi(params.api);
    };

    const onFilterTextChange = (value) => {
        if (gridApi) {
            gridApi.setQuickFilter(value);
        }
    };
    const defaultColDef = {
        resizable: true,
        flex: 1,
    };

    // useEffect(() => {
    //     onFilterTextChange(searchData.trim());
    // }, [searchData]);

    return (
        <div style={{ width: "100%", height: "500px" }}>
            <div
                className="ag-theme-alpine"
                style={{ height: "100%", width: "100%" }}
            >
                {rowData.length === 0 ? (
                    <AgGridReact
                        defaultColDef={defaultColDef}
                        rowData={"NO DATA FOUND"}
                        onGridReady={onGridReady}
                        // columnDefs={columnDefs}
                        pagination={true}
                        paginationPageSize={12}
                        gridOptions={gridOptions}
                        noRowsOverlayComponent={"customNoRowsOverlay"}
                    />
                    // 
                ) : (
                    <AgGridReact
                        defaultColDef={defaultColDef}
                        rowData={rowData}
                        onGridReady={onGridReady}
                        // columnDefs={columnDefs}
                        pagination={true}
                        paginationPageSize={12}
                        gridOptions={gridOptions}
                        noRowsOverlayComponent={"customNoRowsOverlay"}
                    />
                )}

            </div>
        </div>
    );
};

export default Table;


