export const getPagination = (
  query: Record<string, any> | undefined
): Record<string, any> => {
  if (!query) {
    return {};
  }

  const { page, pageSize } = query;

  if (!pageSize || pageSize < 0) {
    return {};
  }

  if (page === 1) {
    return { limit: pageSize, offset: 0 };
  }

  return { limit: pageSize, offset: (page - 1) * pageSize };
};

export const getFilters = (
  query: Record<string, any> | undefined
): Record<string, any> => {
  if (!query) {
    return {};
  }

  return Object.entries(query).reduce(
    (acc: Record<string, any>, [key, value]) => {
      if (key !== 'page' && key !== 'pageSize') {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
};
