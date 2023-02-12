export type PostTypes = {
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
