import {
  FormControl,
  FormLabel,
  Select,
  Button,
  Input,
  Textarea,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";

const PostForm = ({ post, onSave, onChange, authors, saving, errors }) => (
  <>
    <Heading>{post.id ? "Edit " : "Create "} Post</Heading>
    <FormControl mt="5" id="title" isRequired isInvalid={errors.title}>
      <FormLabel>Title</FormLabel>
      <Input
        value={post.title}
        name="title"
        type="text"
        onChange={onChange}
        placeholder="Enter title..."
      />
      {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
    </FormControl>

    <FormControl mt="5" id="body" isRequired isInvalid={errors.body}>
      <FormLabel>Body</FormLabel>
      <Textarea
        name="body"
        value={post.body}
        onChange={onChange}
        placeholder="Enter body..."
        size="lg"
        height="225"
      />
      {errors.body && <FormErrorMessage>{errors.body}</FormErrorMessage>}
    </FormControl>

    <FormControl mt="5" id="userId" isRequired isInvalid={errors.userId}>
      <FormLabel>Author</FormLabel>
      <Select value={post.userId || ""} name="userId" onChange={onChange}>
        <option value="">{"Select Author..."}</option>
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </Select>
      {errors.userId && <FormErrorMessage>{errors.userId}</FormErrorMessage>}
    </FormControl>

    <Button mt="5" onClick={onSave}>
      {saving ? "Saving..." : "Save"}
    </Button>
  </>
);

export default PostForm;
