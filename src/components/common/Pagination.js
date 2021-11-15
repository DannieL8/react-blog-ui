import React from "react";
import {
  Flex,
  Select,
  Tooltip,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const Pagination = ({
  postsPerPage,
  currentPage,
  totalPages,
  paginate,
  showMoreElements,
  prevPage,
  nextPage,
}) => (
  <>
    <Flex mb="35" alignItems="center" justifyContent="center">
      <Tooltip label="Previous page">
        <IconButton
          onClick={() => prevPage()}
          icon={<ChevronLeftIcon />}
          mr={4}
        />
      </Tooltip>

      <Select
        onChange={(e) => {
          showMoreElements(e);
        }}
        w={32}
        value={postsPerPage}
      >
        {[6, 9, 15, 21].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Select>

      <div style={{ marginLeft: 15, marginRight: 15 }}>
        {`Page ${currentPage} of ${totalPages}`}
      </div>

      <b>Go to page: </b>
      <NumberInput
        ml="15"
        mr="15"
        maxW="100"
        defaultValue={1}
        min={1}
        max={totalPages}
        onChange={(value) => {
          paginate(value);
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Tooltip label="Next page">
        <IconButton
          onClick={() => nextPage()}
          icon={<ChevronRightIcon />}
          mr={4}
        />
      </Tooltip>
    </Flex>
  </>
);

export default Pagination;
