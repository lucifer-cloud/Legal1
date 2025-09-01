import Image from 'next/image'
const Logo = () => {
  return (
    <Image
      src="/skineralogo.png"
      alt="skin-era"
      width={200}
      height={220}
      title={process.env.AppName}
    />
  )
}

export default Logo
