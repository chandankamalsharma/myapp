import { type SchemaTypeDefinition } from "sanity";

// import { blog } from "./schemaTypes/blog";
import { policy } from "./schemaTypes/policy";

export const schema: { types: SchemaTypeDefinition[] } = {
  // types: [blog, policy],
  types: [policy],
};
