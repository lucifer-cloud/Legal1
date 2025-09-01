import Image from 'next/image'
const Avatar = () => {
  return (
    <Image
      src="/profileIcon.png"
      alt="skin-era"
      width={30}
      height={30}
      title={process.env.AppName}
    />
  )
}

export default Avatar
