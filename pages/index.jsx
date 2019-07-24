import "isomorphic-fetch";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import Header from "../components/header";

const Index = ({ posts = [] }) => (
  <div>
    <Head>
      <title>NextJS blog :: Posts</title>
    </Head>
    <Header />
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {posts.map(x => (
          <Grid item key={x.id} xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title={x.title} />
              <CardContent>
                <Link href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
                  <Button fullWidth={true} color="primary" variant="contained">
                    Click to view post!
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
);

Index.getInitialProps = async () => {
  const response = await fetch(
    `${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`
  );
  const { items } = await response.json();

  return { posts: items };
};

export default Index;
