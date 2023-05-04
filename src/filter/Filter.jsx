import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from './Table';
import { DeleteRounded, PreviewRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';


const BASE_URL = "http://localhost:9091/thor"
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2a0BnbWFpbC5jb20iLCJzdGF0dXMiOiJZIiwiYXV0aG9yaXRpZXMiOlsiQURNSU4iXSwicm9sZXMiOlsiQURNSU4iXSwiaXNFbmFibGUiOnRydWUsImlhdCI6MTY4MzA5MTc5NCwiZXhwIjoxNjgzMjY0NTk0fQ.xGNPcZAMLFFiPgOEPHByecz25Qk-U5buucIhXQGGWZ0`,
        "Content-Type": "application/json",
    },
});

const columnDefsFeedback = [
    {
      headerName: "Candidate",
      field: "candidate",
      sortingOrder: ["asc", "desc"],
      sortable: true,
      unSortIcon: true,
      filter: true,
      width: 110,
    },
    {
      headerName: "Interview Type",
      field: "interviewType",
      sortingOrder: ["asc", "desc"],
      sortable: true,
      unSortIcon: true,
      filter: true,
      width: 110,
    },
    {
      headerName: "Interview Round",
      field: "interviewRound",
      sortingOrder: ["asc", "desc"],
      sortable: true,
      unSortIcon: true,
      filter: true,
      width: 110,
    },
    {
      headerName: "Interviewer",
      field: "interviewer",
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      unSortIcon: true,
      width: 150,
    },
    {
      headerName: "Status",
      field: "status",
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      unSortIcon: true,
      width: 150,
    },
    {
      headerName: "Submitted Date",
      field: "submittedDate",
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      unSortIcon: true,
      width: 150,
    }, 
    {
      headerName: "View",
      cellRenderer: "buttonRendererViewResume",
    },
    {
      headerName: "Share",
      cellRenderer: "buttonRendererShareResume",
    },
    {
      headerName: "Delete",
      cellRenderer: "buttonRendererDeleteResume",
    },
  ];

export const Filter = () => {
    const [formData, setFormData] = useState([])

    const fetchAllForms = async () => {
       await axiosInstance.get("/feedback/allformsdata")
            .then((res) => {
                if (res?.status === 200) {
                    setFormData(res.data); // Set the form data in the state
                } else {
                    alert("Something get Wrong..!");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchAllForms();
    }, []);

    const buttonRendererDelete = (props) => {
        return (
            <IconButton
                size="small"
                // onClick={() => deleteFeedbackForm(props.data.formId)}
                color="error"
            >
                <DeleteRounded />
            </IconButton>
        );
    };


    const buttonRendereShare = (props) => {
        return (
            <IconButton
                size="small"
                // onClick={() => shareFeedbackForm(props.data.formId)}
                color="primary"
                style={{ display: "flex", justifyContent: "center" }}

            >
                <ShareRoundedIcon />
            </IconButton>
        );
    };
    const buttonRendererView = (props) => {
        return (
            <IconButton
                size="small"
                // onClick={() => navigate(`/resumemakerui/feedback/${props.data.formId}`)}
                color="primary"
            >
                <PreviewRounded />
            </IconButton>
        );
    };

    function CustomNoRowsOverlay() {
        return (
            <div
                className="ag-overlay-no-rows-wrapper"
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bolder"
                }}
            >
                <div style={{ textAlign: "center" }}>NO DATA FOUND FOR LOGGED IN USER</div>
            </div>
        );
    }
    const gridOptionsfeedback = {
        columnDefs: columnDefsFeedback,
        frameworkComponents: {
            buttonRendererViewResume: buttonRendererView,
            buttonRendererShareResume: buttonRendereShare,
            buttonRendererDeleteResume: buttonRendererDelete,
            customNoRowsOverlay: CustomNoRowsOverlay,
        },
    };

 
    return (
        <div>
            <Table
                // searchData={searchValue}
                gridOptions={gridOptionsfeedback}
                data={formData}
                type="formData"
            />
        </div>
    )
}
