// import React from 'react'
// import {useStyles} from './styles'
// import { Box } from '@mui/material';

// const HelView = () => {

//   const classes = useStyles();

//   return (
//     <Box sx={{width:"85%"}}>
//       sdv
//     </Box>
//   )
// }

// export default HelView

import { useStyles } from "./styles";
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDropzone } from "react-dropzone";
import { useNavigate, useParams } from "react-router";

const HelvetiaCompliancyCheck = () => {
  // const navigate = useNavigate();
  const { pid, fid, tid } = useParams();
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);


  // const rows = data.map((row, index) => ({ id: index + 1, ...row }));
  const rows = []

  const columns = [
    {
      field: "filename",
      headerClassName: classes.super_app_theme_header,
      headerName: "FILENAME",
      width: 335,
      renderCell: (params) => (
        <p className={classes.filenameclass}>{params.formattedValue}</p>
      ),
    },
    {
      field: "compliancystatus",
      headerName: "COMPLAINT TO SHIP",
      headerClassName: classes.super_app_theme_header,
      width: 200,
      renderCell: (params) => (
        <div className={classes.compliancystatus}>
          <div
            style={{
              background:
                params.formattedValue === "Yes" ? "#31C285" : "#B80351",
            }}
          ></div>
          <p>{params.formattedValue}</p>
        </div>
      ),
    },
    {
      field: "rulesrev",
      headerName: "REVISION RULE SET",
      headerClassName: classes.super_app_theme_header,
      width: 200,
      renderCell: (params) => (
        <p className={classes.rulesrevpara}>{params.formattedValue}</p>
      ),
    },
    {
      field: "datetimeparsed",
      headerName: "COMPUTATION DATE",
      headerClassName: classes.super_app_theme_header,
      width: 285,
      renderCell: (params) => (
        <div className={classes.computationdate}>
          {params.formattedValue?.split("T")[0]}
        </div>
      ),
    },
    {
      field: "button",
      headerName: "DETAILS",
      headerClassName: classes.super_app_theme_header,
      sortable: false,
      width: 90,
      renderCell: (params) => (
        <button
          onClick={() => {
            // navigate(`/overview/entry/${pid}/${fid}/${params.row.filename}`);
            setOpenDetails(true);
          }}
          className={classes.detailbtn}
        >
          VIEW
        </button>
      ),
    },
  ];

  const [filename, setFilename] = useState("");
  const [key, setKey] = useState(0); // Key to reset the DataGrid

  const onDrop = (acceptedFiles) => {
    try {
      console.log("Accepted files:", acceptedFiles);

      const currentFile = acceptedFiles[0];
      const allowedTypes = ["text/plain"];

      if (!allowedTypes.includes(currentFile.type)) {
        throw new Error("Invalid file type. Only text files are allowed.");
      }

      setFilename(currentFile.name);
    } catch (error) {
      alert("only text files are allowed")
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [page, setPage] = useState(1);
  const pageSize = rowsPerPage;
  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / pageSize);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  //This code is calculating the start and endIndex of each page
  const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(page * pageSize, totalRows);

  // console.log("start - end Index ", startIndex, endIndex);

  const rowsperpageHandler = (e) => {
    parseInt(setRowsPerPage(e.target.value));
    setPage(1);
  };

  return (
    <>
      <div
        className={classes.theader}
      // sx={{ display: openDetails ? "none" : "flex" }}
      >
        <p>List of EDC Files</p>

        <div className={classes.theaderbtngroup} >
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <button>
              {!filename && "Drag and drop or Choose files"}{" "}
              {filename.length > 20
                ? filename.substring(0, 20) + "..."
                : filename}
            </button>
          </div>
          <button onClick={() => alert("Hi")}>UPLOAD FILE</button>
        </div>
      </div>
      {/* <div
        className={classes.pageWrapper}
        // sx={{ display: openDetails ? "none" : "flex" }}
      >
        <DataGrid
          key={key}
          rows={paginatedRows}
          pageSize={pageSize}
          columns={columns}
          checkboxSelection={false}
          disableRowSelectionOnClick
          style={{
            border: "none",
            color: "#5B5D6E",
            fontWeight: "500",
            fontSize: "13px",
          }}
          hideFooterPagination
          disableColumnMenu={true}
          hideFooter
        />
      </div> */}
      {/* <div
        className={classes.pagination_container}
        // sx={{ display: openDetails ? "none" : "flex" }}
      >
        <div>
          <Pagination
            count={10}
            page={1}
            onChange={() => {}}
            // onChange={handlePageChange}
          /> 
        </div>
        <div className={classes.pagination_container_rowsperpage}>
          <div>
            <label style={{ marginRight: "10px" }}>Rows Per Page</label>
            <select
              data-testid="rowsperpageHandler"
              value={rowsPerPage}
              onChange={rowsperpageHandler}
            >
              <option
                data-testid="rowsPerPage-5"
                value="5"
                style={{
                  backgroundColor:
                    pageSize == 5 ? "rgba(0, 0, 0, 0.08)" : "initial",
                }}
              >
                5
              </option>
              <option
                data-testid="rowsPerPage-10"
                value="10"
                style={{
                  backgroundColor:
                    pageSize == 10 ? "rgba(0, 0, 0, 0.08)" : "initial",
                }}
              >
                10
              </option>
              <option
                data-testid="rowsPerPage-18"
                value="18"
                style={{
                  backgroundColor:
                    pageSize == 18 ? "rgba(0, 0, 0, 0.08)" : "initial",
                }}
              >
                18
              </option>
            </select>
          </div>
          <div>
            <label>Showing</label>
            <select
              value={`${startIndex + 1} - ${endIndex}`}
              onChange={(e) =>
                setPage(
                  Math.ceil(Number(e.target.value.split(" - ")[0]) / pageSize),
                )
              }
            >
              {Array.from({ length: totalPages }, (_, index) => {
                const start = index * pageSize + 1;
                const end = Math.min((index + 1) * pageSize, totalRows);
                const optionValue = `${start} - ${end}`;

                return (
                  <option
                    key={index}
                    value={optionValue}
                    style={{
                      background:
                        optionValue === `${startIndex + 1} - ${endIndex}`
                          ? "rgba(0, 0, 0, 0.08)"
                          : "inherit",
                    }}
                  >
                    {optionValue}
                  </option>
                );
              })}
            </select>
            <p>of {rows.length}</p>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default HelvetiaCompliancyCheck;