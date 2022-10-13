
export function useGetPropertyValue (object:object, string:string) {
  type objectKey = keyof typeof object
  const result = string as objectKey
  return object[result]
}
