import ResMenu from "../module/ResMenu";
import { useSession } from "next-auth/react";

import { Box, Container, Grid2 } from "@mui/material";
import Sidebar from "../module/Sidebar";

function Layout({ children }) {
  const { data, status } = useSession();

  return (
    <>
      <header>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#bebfc0",
            marginBottom: "32px",
            boxShadow: "0px 0px 7px 2px #929394",
          }}
        ></Box>
      </header>

      <Grid2
        container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {status === "authenticated" && (
          <Grid2 size={{ xs: 12, sm: 4, lg: 2 }}>
            <Container maxWidth="md">
              <aside>
                <ResMenu />
                <Sidebar />
              </aside>
            </Container>
          </Grid2>
        )}

        <Grid2
          size={{ xs: 12, sm: 8, lg: 10 }}
          sx={{ width: "100%", margin: "0 auto" }}
        >
          <main
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </main>
        </Grid2>
      </Grid2>

      <footer></footer>
    </>
  );
}

export default Layout;
