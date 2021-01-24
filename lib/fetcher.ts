import useSWR from 'swr'

type Response = {
  data: any
  error: any
}

const useFetch = (url: string, revalidateOnFocus = false): Response => {
  const { data, error } = useSWR(
    url,
    async (requestUrl: string) => {
      const response = await fetch(requestUrl)
      const json = await response.json()

      return json
    },
    { revalidateOnFocus },
  )

  return { data, error }
}

export default useFetch
