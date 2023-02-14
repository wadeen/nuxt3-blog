// pluginsフォルダ作成すると外部関数化が可能
import { createClient } from "contentful";

// 外部関数化

// ToDo: 切り分けからやる（＋SGの設定・）
export default defineNuxtPlugin(({ $config }) => {
  const config = {
    // space: process.env.CTF_SPACE_ID as string,
    // accessToken: process.env.CTF_CDA_ACCESS_TOKEN as string,
    space: $config.public.spaceID,
    accessToken: $config.accessToken,
  };
  return {
    provide: {
      client: createClient(config),
    },
  };
});
