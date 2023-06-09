export const columnDefsFeedback = [
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