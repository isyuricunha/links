const Footer = () => {
  const start_year = 2025
  const current_year = new Date().getFullYear()
  const year_label =
    current_year > start_year
      ? `${start_year}–${current_year}`
      : `${start_year}`

  return (
    <footer className='mb-8 mt-16 flex justify-center'>
      Yuri Cunha | &copy; {year_label}
    </footer>
  )
}

export default Footer
