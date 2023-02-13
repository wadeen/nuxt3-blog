// pluginsフォルダ作成すると外部関数化が可能

import { createClient } from "contentful";

const config = {
  space: "t30l2wtsagvb",
  accessToken: "5-QF5-1lGQ6fLyig3NHe7QX0fFrWlxP3VjOBnTGh6PU",
  // space: process.env.CTF_SPACE_ID as string,
  // accessToken: process.env.CTF_CDA_ACCESS_TOKEN as string,
};

// 外部関数化
export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient(config),
    },
  };
});
