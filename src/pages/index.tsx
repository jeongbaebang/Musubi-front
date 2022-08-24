import type { NextPage } from "next";

import Typography from "@mui/material/Typography";

import { Card, CardHeader, Container } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "src/style";

function Content(props: { title: string; content: string }) {
  console.log(props.title);
  return (
    <Card sx={{ maxWidth: 300, height: 130 }}>
      <CardHeader
        title={props.title}
        titleTypographyProps={{
          color: "black",
          fontSize: "1rem",
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
    </Card>
  );
}

const Home: NextPage = () => {
  // const fetcher = (url: string) => axios.get(url).then(res => res.data);
  // const { data, error } = useSWR("http://localhost:4000/crawling/dataInflearn", fetcher);
  // if (Array.isArray(data)) {
  //   data.forEach(item => {
  //     console.log(item.V_OTH_TITLE);
  //   });
  // }

  return (
    <Stack spacing={2}>
      <Container maxWidth="sm" sx={{ border: "1px solid black" }}>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Album layout
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely.
        </Typography>
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Button variant="contained">Main call to action</Button>
          <Button variant="outlined">Secondary action</Button>
        </Stack>
      </Container>

      <Box>
        {/* <Container maxWidth="lg">
          <Box sx={{ height: "auto", border: "1px solid black" }}>
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {data ? (
                data.map(
                  (item: { V_OTH_PRJ_ID: string; T_OTH_CONTENT: string; V_OTH_TITLE: string }) => (
                    <Grid item xs={2} sm={4} md={4} key={item.V_OTH_PRJ_ID}>
                      <Content
                        key={item.V_OTH_PRJ_ID}
                        content={item.T_OTH_CONTENT}
                        title={item.V_OTH_TITLE}
                      />
                    </Grid>
                  )
                )
              ) : (
                <div>test</div>
              )}
            </Grid>
          </Box>
        </Container> */}
      </Box>

      <Box sx={{ bgcolor: "#082d4c", height: "250px" }} />
    </Stack>
  );
};

export default Home;
