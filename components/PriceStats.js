import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PriceStats({ coinData, formatDollar }) {
  const dateConverter = (dateVar) => {
    let date_real = new Date(dateVar);
    date_real = date_real.toLocaleDateString();
    return date_real;
  };

  return (
    <TableContainer component={Paper} sx={{ margin: "1rem 0 0 0" }}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              {coinData.name} Price
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight="bold">
                {coinData.market_data.current_price.usd > 0.01
                  ? formatDollar(coinData.market_data.current_price.usd)
                  : formatDollar(coinData.market_data.current_price.usd, 7)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Market Cap
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight="bold">
                ${coinData.market_data.market_cap.usd.toLocaleString()}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Market Cap Rank
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight="bold">
                #{coinData.market_cap_rank}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              24H Trading Volume
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight="bold">
                ${coinData.market_data.total_volume.usd.toLocaleString()}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              24H Low / 24H High
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight="bold">
                {coinData.market_data.low_24h.usd > 0.01
                  ? formatDollar(coinData.market_data.low_24h.usd)
                  : formatDollar(coinData.market_data.low_24h.usd, 7)}
                &nbsp;/&nbsp;
                {coinData.market_data.high_24h.usd > 0.01
                  ? formatDollar(coinData.market_data.high_24h.usd)
                  : formatDollar(coinData.market_data.high_24h.usd, 7)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              All Time High
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight="bold" component="span">
                {coinData.market_data.ath.usd > 0.01
                  ? formatDollar(coinData.market_data.ath.usd)
                  : formatDollar(coinData.market_data.ath.usd, 7)}
              </Typography>
              <Typography variant="caption" margin="0 0 0 .25rem">
                on {dateConverter(coinData.market_data.ath_date.usd)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              All Time Low
            </TableCell>
            <TableCell align="right">
              <Typography variant="body2" fontWeight="bold" component="span">
                {coinData.market_data.atl.usd > 0.01
                  ? formatDollar(coinData.market_data.atl.usd)
                  : formatDollar(coinData.market_data.atl.usd, 7)}
              </Typography>

              <Typography variant="caption" margin="0 0 0 .25rem">
                on {dateConverter(coinData.market_data.atl_date.usd)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
