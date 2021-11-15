import React from "react";
import { Heading, CircularProgress, Container } from "@chakra-ui/react";
import { connect } from "react-redux";
import { loadAllAuthors } from "../../store/actions/AuthorsActions";
import AuthorsList from "./AuthorsList";

class AuthorsPage extends React.Component {
  componentDidMount() {
    if (this.props.authors.length === 0) {
      this.props.loadAllAuthors();
    }
  }

  render() {
    return (
      <Container maxW="container.xl">
        <Heading fontSize="4xl" mb="10">
          Authors
        </Heading>
        {this.props.authors.length > 0 ? (
          <AuthorsList authors={this.props.authors} />
        ) : (
          <CircularProgress isIndeterminate color="primary" />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authors: state.authorsState.authors,
  };
};

const mapDispatchToProps = {
  loadAllAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
