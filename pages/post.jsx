import "isomorphic-fetch";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

import Header from "../components/header";

const useStyles = makeStyles({
  backBtn: {
    marginTop: 40
  }
});

const Post = ({ title, content }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>NextJS blog :: {title}</title>
      </Head>
      <Header />
      <Container maxWidth="xl">
        <Card>
          <CardHeader title={title} />
          <CardContent>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Link href="/" as="/blog">
              <Button
                className={classes.backBtn}
                fullWidth={true}
                variant="contained"
              >
                Go back to blog!
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

Post.getInitialProps = async opts => {
  const postId = opts.query.id;
  const response = await fetch(
    `${process.env.BLOGGER_URL}/${postId}?key=${process.env.API_KEY}`
  );
  const { title, content } = await response.json();

  return { title, content };
};

export default Post;
