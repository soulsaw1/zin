import React, { useState } from "react";
import { Box, Stack, Skeleton } from "@mui/material";
import Post from "./Post";

function Feed() {
  const [loading, setLoding] = useState(true);

  setTimeout(() => {
    setLoding(false);
  }, [3000]);
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {" "}
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />{" "}
          <Skeleton variant="text" height={20} />{" "}
          <Skeleton variant="text" height={20} />{" "}
          <Skeleton variant="rectangular" height={300} />{" "}
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}{" "}
    </Box>
  );
}

export default Feed;
