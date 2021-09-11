const baseURL = 'https://api.unsplash.com'
const API_KEY = 'OLtR-i0lLbEb2BAm8mzp8U9kNC8KuIwuCph7BUmrkG0'
// const API_KEY = process.env.API_KEY
export const getImage = async () => {
  try {
    const res = await fetch(`${baseURL}/photos?per_page=10`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    })
    if (!res.ok) {
      console.error(res.statusText)
      return
    }
    const json = await res.json()
    // console.log(json)
    return json
  } catch (error) {
    console.log(error)
  }
}

//return the search images
export const getSearchImages = async (query) => {
  const url = new URL(`${baseURL}/search/photos`)
  url.search = new URLSearchParams({
    per_page: 30,
    query: query,
  })
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    })
    if (!res.ok) {
      console.error(res.statusText)
      return
    }
    const json = await res.json()
    // console.log(json)
    return json.results
  } catch (error) {
    console.log(error)
  }
}
