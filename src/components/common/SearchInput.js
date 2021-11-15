import React from "react";
import { Input } from "@chakra-ui/react";

const SearchInput = ({ changeHandler, style }) => (
  <>
    <div style={style}>
      <Input onChange={changeHandler} placeholder="Search for a post" />{" "}
    </div>
    <hr style={{ marginBottom: 20, marginTop: 20 }} />
  </>
);

export default SearchInput;
