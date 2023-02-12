type PostTypes = {
  post: {
    metadata: { tags: string[] };
    sys: {
      // space: [Object];
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      // environment: [Object],
      revision: 2;
      contentType: [Object];
      locale: string;
    };
    fields: {
      title: string;
      createdAt: string;
      richText: string[];
      html: string;
    };
  };
};

// export default defineComponent({
//   post: {
//     metadata: { tags: [String] },
//     sys: {
//       // space: [Object];
//       id: String,
//       type: String,
//       createdAt: String,
//       updatedAt: String,
//       // environment: [Object],
//       revision: 2,
//       contentType: [Object],
//       locale: String,
//     },
//     fields: {
//       title: String,
//       createdAt: String,
//       richText: [String],
//       html: String,
//     },
//   },
// });
