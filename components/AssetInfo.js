import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function AssetInfo({ coinData }) {
  console.log("coinData: ", coinData.links);
  return (
    <Box marginTop="1rem">
      <TableContainer>
        <Table
          size="small"
          aria-label="a dense table"
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
        >
          <TableBody>
            <TableRow>
              {/* <TableCell>
                <Typography variant="caption" fontWeight="bold" color="white">
                  Website
                </Typography>
              </TableCell> */}
              <TableCell>
                <a
                  target="_blank"
                  href={coinData.links.homepage[0]}
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                      width: "100%",
                    }}
                  >
                    Official Website
                  </Button>
                </a>
              </TableCell>
              <TableCell>
                <a
                  target="_blank"
                  href={coinData.links.homepage[0]}
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                      width: "100%",
                    }}
                  >
                    Official Website
                  </Button>
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>
                <Typography variant="caption" fontWeight="bold" color="white">
                  Explorer
                </Typography>
              </TableCell> */}
              <TableCell>
                <a
                  target="_blank"
                  href={coinData.links.blockchain_site[0]}
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                    }}
                  >
                    Blockchain Explorer
                  </Button>
                </a>
              </TableCell>
              <TableCell>
                <a
                  target="_blank"
                  href={coinData.links.blockchain_site[0]}
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                    }}
                  >
                    Blockchain Explorer
                  </Button>
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>
                <Typography variant="caption" fontWeight="bold" color="white">
                  Code
                </Typography>
              </TableCell> */}
              <TableCell>
                <a
                  target="_blank"
                  href={
                    coinData.links.repos_url.github[0] &&
                    coinData.links.repos_url.github[0]
                  }
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                      width: "100%",
                    }}
                  >
                    Source Code
                  </Button>
                </a>
              </TableCell>
              <TableCell>
                <a
                  target="_blank"
                  href={
                    coinData.links.repos_url.github[0] &&
                    coinData.links.repos_url.github[0]
                  }
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                      width: "100%",
                    }}
                  >
                    Source Code
                  </Button>
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>
                <Typography variant="caption" fontWeight="bold" color="white">
                  Community
                </Typography>
              </TableCell> */}
              <TableCell>
                <a
                  target="_blank"
                  href={
                    coinData.links.official_forum_url[0] &&
                    coinData.links.official_forum_url[0]
                  }
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                      width: "100%",
                    }}
                  >
                    {coinData.links.official_forum_url[0]
                      ? "Community Forum"
                      : "N/A"}
                  </Button>
                </a>
              </TableCell>
              <TableCell>
                <a
                  target="_blank"
                  href={
                    coinData.links.official_forum_url[0] &&
                    coinData.links.official_forum_url[0]
                  }
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      border: "1px white solid",
                      width: "100%",
                    }}
                  >
                    {coinData.links.official_forum_url[0]
                      ? "Community Forum"
                      : "N/A"}
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}