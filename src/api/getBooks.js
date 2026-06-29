export const getBooks = async (category, searchQuery, customURL) => {
  let searchParams = new URLSearchParams();
  if (category && searchQuery) {
    searchParams.append("topic", category);
    searchParams.append("search", searchQuery);
  } else if (category) searchParams.append("topic", category);
  else if (searchQuery) searchParams.append("search", searchQuery);

  const queryString = searchParams.toString();

  const url = `https://gutendex.com/books${queryString ? `?${queryString}` : ""}`;
  console.log(url);
  try {
    const response = await fetch(customURL ? customURL : url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
