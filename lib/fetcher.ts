import useSWR from 'swr'

const useFetch = (url: string, revalidateOnFocus: boolean = false) => {
  const { data, error } = useSWR(
    url,
    async (requestUrl: string) => {
      const response = await fetch(requestUrl)
      const json = await response.json()

      return json
    },
    { revalidateOnFocus }
  )

  return { data, error }
}

export default useFetch