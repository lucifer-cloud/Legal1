import Image from 'next/image'
const Icon = () => {
  return (
    <Image
      src="/skineralogo50.png"
      alt="skin-era"
      width={50}
      height={54}
      title={process.env.AppName}
    />
  )
}

export default Icon
