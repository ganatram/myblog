export async function getPosts() {
  const apiUrl = process.env.REACT_APP_API_URL;
  if (!apiUrl) {
    throw new Error(
      "REACT_APP_API_URL is not defined in the environment variables.",
    );
  }

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
}
