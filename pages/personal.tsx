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
            I'm an amateur saxophonist. I joined the Tsinghua University Symphonic Band (a.k.a. THUMB) in the fall of 2017, where I served as principal saxophonist and band captain. I've played soprano, alto, and tenor saxophones. Here are selected videos: 
          </>
        }
      />
      <HobbySection
        imageSrc="/images/go.jpg"
        alt="Go"
        title="Go (Weiqi)"
        description={
          <>
            I'm an amateur Go player. I started learning Go at age 7 and reached an amateur 5-dan level. I also participated in the National Professional Dan Qualification Tournament. In 2017, I was lucky enough to place 5th in Tsinghua University's Go competition.
          </>
        }
      />
    </div>
  )
}
