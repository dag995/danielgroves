import { pages } from "$lib/components/db"

export const load = async ({ locals, url, parent }) => {
  
  await parent()

  return {
    pages: await pages()
  }


}