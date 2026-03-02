
export const pages = async () => {
  try {
    return await platform.env.DB.prepare(
      'SELECT * FROM pages LIMIT 5'
    ).run()
  } catch ( error ) {
    return []
  }
}
