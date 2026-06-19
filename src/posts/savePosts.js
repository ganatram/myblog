export async function savePost(newPostData) {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    body: JSON.stringify(newPostData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();

  return { ...newPostData, ...body };
}
