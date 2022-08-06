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

const pageKeys = ['page', 'pagesize'];
const sortValues = ['asc', 'desc'];

export const getFilters = (
  query: Record<string, any> | undefined
): Record<string, any> => {
  if (!query) {
    return {};
  }

  return Object.entries(query).reduce(
    (acc: Record<string, any>, [key, value]) => {
      if (
        !pageKeys.includes(key.toLowerCase()) &&
        !sortValues.includes(value.toLowerCase())
      ) {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
};

export const getOrder = (query: Record<string, any> | undefined): any => {
  if (!query) {
    return [];
  }

  return Object.entries(query).reduce((acc: string[][], [key, value]) => {
    if (value.toLowerCase() === 'asc' || value.toLowerCase() === 'desc') {
      acc.push([key, value]);
    }
    return acc;
  }, []);
};
