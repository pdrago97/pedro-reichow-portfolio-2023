import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Pedro Reichow</h1>
      <div className="flex justify-center">
        <Image src="/images/profile.jpg" width={200} height={200} alt={''} />
      </div>
      <p className="text-lg text-center mt-4">
        Software Engineer at{' '}
        <a href="https://www.linkedin.com/company/stoneco/mycompany/">
          Stone Pagamentos
        </a>
      </p>
    </div>
  )
}
