// pluginsフォルダ作成すると外部関数化が可能
import { createClient } from "contentful";

// 外部関数化
export default defineNuxtPlugin(({ $config }) => {
  const config = {
    space: $config.public.spaceID,
    accessToken: $config.public.accessToken,
  };
  return {
    provide: {
      client: createClient(config),
    },
  };
});
