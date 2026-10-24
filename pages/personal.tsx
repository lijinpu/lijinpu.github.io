import HobbySection from '../components/HobbySection'
import Page from 'components/Page'
import { Tag } from 'components/Paper'

export default function PersonalPage() {
  return (
    <Page title="Personal" zh="兴趣爱好">
      <div className="not-prose space-y-12">
        <HobbySection
          imageSrc="/images/sax.jpg"
          alt="Saxophone"
          title="Saxophone"
          description={
            <>
              I&apos;m an amateur saxophonist. I joined the Tsinghua University Symphonic Band (a.k.a. THUMB) in the fall of 2017, where I served as principal saxophonist and band captain. I&apos;ve played soprano, alto, and tenor saxophones. Here are selected videos:
              <Tag href="https://www.bilibili.com/video/BV1Yi421a7Bf/?share_source=copy_web&vd_source=f5ee8f5dc44e7aea34bcad01103f4f66">
                Video 1
              </Tag>
              <Tag href="https://www.bilibili.com/video/BV1WV411x7Vf/?p=6&share_source=copy_web&vd_source=f5ee8f5dc44e7aea34bcad01103f4f66">
                Video 2
              </Tag>
            </>
          }
        />
        <HobbySection
          imageSrc="/images/go.jpg"
          alt="Go"
          title="Go (Weiqi)"
          description={
            <>
              I&apos;m an amateur Go player. I started learning Go at age 7 and reached an amateur 5-dan level. I also participated in the National Professional Dan Qualification Tournament. In 2017, I was lucky enough to place 5th in Tsinghua University&apos;s Go competition.
            </>
          }
        />
      </div>
    </Page>
  )
}
