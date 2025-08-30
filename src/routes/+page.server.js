export const load = async ({ locals, url, parent }) => {
  
  await parent()

  console.log('homepage')

}