import HobbySection from '../components/HobbySection'

export default function PersonalPage() {
  return (
    <div className="space-y-16">
      <HobbySection
        imageSrc="/images/saxophone.jpg"
        alt="Saxophone"
        title="Saxophone"
        description={
          <>
            I enjoy playing the saxophone in my spare time, especially jazz and classical pieces.
          </>
        }
      />
      <HobbySection
        imageSrc="/images/go.jpg"
        alt="Go"
        title="Go (Weiqi)"
        description={
          <>
            Go is my favorite board game. I appreciate its strategic depth and philosophical spirit.
          </>
        }
      />
    </div>
  )
}
