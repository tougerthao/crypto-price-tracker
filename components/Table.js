/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SmallChart from "../components/SmallChart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { CryptoState } from "../cryptoContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import StarAuthModal from "../components/Authentication/StarAuthModal";
import Router, { useRouter } from "next/router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: theme.palette.common.black,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  const { user, watchlist, setAlert } = CryptoState();

  const [data, setData] = React.useState(props.data);

  const router = useRouter();

  const forceReload = () => {
    router.reload();
  };

  const formatPercent = (number) => `${new Number(number).toFixed(2)}%`;

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
      maximumSignificantDigits,
    }).format(number);

  const addToWatchlist = async (coinId, coinName) => {
    const coinRef = doc(db, "watchlist", user.uid);

    try {
      await setDoc(
        coinRef,
        {
          assets: watchlist ? [...watchlist, coinId] : [coinId],
        },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coinName} has been added to the watchlist`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  const removeFromWatchlist = async (coinId, coinName) => {
    const coinRef = doc(db, "watchlist", user.uid);

    try {
      await setDoc(
        coinRef,
        {
          assets: watchlist.filter((watch) => watch !== coinId),
        },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coinName} has been removed from the watchlist`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  let tableElements = props.data.map((coin) => (
    <StyledTableRow key={coin.id}>
      {user ? (
        <StyledTableCell component="th" scope="row">
          {watchlist.includes(coin?.id) ? (
            <Box
              onClick={() => removeFromWatchlist(coin.id, coin.name)}
              sx={{ cursor: "pointer" }}
            >
              <StarIcon fontSize="small" color="primary" />
            </Box>
          ) : (
            <Box
              onClick={() => addToWatchlist(coin.id, coin.name)}
              sx={{ cursor: "pointer" }}
            >
              <StarBorderIcon fontSize="small" />
            </Box>
          )}
        </StyledTableCell>
      ) : (
        <StyledTableCell component="th" scope="row">
          <Box sx={{ cursor: "pointer" }}>
            <StarAuthModal />
          </Box>
        </StyledTableCell>
      )}
      <StyledTableCell component="th" scope="row">
        <Box component="span">{coin.market_cap_rank}</Box>
      </StyledTableCell>
      <StyledTableCell component="th" scope="row">
        <Link
          href={`/assets/${coin.id}`}
          underline="none"
          textDecoration="none"
        >
          <a>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={coin.image} alt={coin.name} width={20} height={20} />
              <Typography
                variant="body1"
                component="p"
                fontWeight="bold"
                sx={{
                  marginLeft: 1,
                  fontSize: ".85rem",
                }}
              >
                {coin.name}
                <Box
                  component="span"
                  sx={{
                    fontWeight: "normal",
                    marginLeft: ".75rem",
                    fontSize: ".70rem",
                  }}
                >
                  {coin.symbol.toUpperCase()}
                </Box>
              </Typography>
            </Box>
          </a>
        </Link>
      </StyledTableCell>

      <StyledTableCell
        align="right"
        sx={{
          fontWeight: "bold",
        }}
      >
        {coin.current_price > 0.1
          ? formatDollar(coin.current_price)
          : formatDollar(coin.current_price, 7)}
      </StyledTableCell>
      <StyledTableCell
        align="right"
        sx={{
          color: "default",
          ...(coin.price_change_percentage_24h > 0 && {
            color: "green",
          }),
          ...(coin.price_change_percentage_24h < 0 && {
            color: "red",
          }),
        }}
      >
        {formatPercent(coin.market_cap_change_percentage_24h)}
      </StyledTableCell>
      <StyledTableCell align="right">
        {formatDollar(coin.market_cap, 20)}
      </StyledTableCell>
      <StyledTableCell
        align="right"
        sx={{
          padding: 0,
        }}
      >
        <SmallChart
          coinId={coin.id}
          height={50}
          price_change_percentage={coin.price_change_percentage_24h}
        />
      </StyledTableCell>
    </StyledTableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">24Hr Change</StyledTableCell>
            <StyledTableCell align="right">Market Cap</StyledTableCell>
            <StyledTableCell align="center">24Hr Chart</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableElements}</TableBody>
      </Table>
    </TableContainer>
  );
}
