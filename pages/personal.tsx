import HobbySection from '../components/HobbySection'

export default function PersonalPage() {
  return (
    <div className="space-y-16">
      <HobbySection
        imageSrc="/images/sax.jpg"
        alt="Saxophone"
        title="Saxophone"
        description={
          <>
            I&apos;m an amateur saxophonist. I joined the Tsinghua University Symphonic Band (a.k.a. THUMB) in the fall of 2017, where I served as principal saxophonist and band captain. I&apos;ve played soprano, alto, and tenor saxophones. Here are selected videos: <br />
    <a
      href="https://www.bilibili.com/video/BV1Yi421a7Bf/?share_source=copy_web&vd_source=f5ee8f5dc44e7aea34bcad01103f4f66"
      className="text-teal-600 underline hover:text-teal-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      [Video 1]
    </a>
    <br />
    <a
      href="https://www.bilibili.com/video/BV1WV411x7Vf/?p=6&share_source=copy_web&vd_source=f5ee8f5dc44e7aea34bcad01103f4f66"
      className="text-teal-600 underline hover:text-teal-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      [Video 2]
    </a>
          </>
        }
      />
      <HobbySection
        imageSrc="/images/go.jpg"
        alt="Go"
        title="Go (Weiqi)"
        description={
          <>
            I started learning Go at the age of 7 and eventually reached amateur 5-dan level. While I used to be quite competitive, my interest in sports tournaments has mellowed over time—these days, I&apos;m more likely to spend my spare hours playing music than counting liberties.
          </>
        }
      />
    </div>
  )
}
