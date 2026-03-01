// pages/cv.tsx
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'

type Props = { lastUpdateISO: string }

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), 'pages', 'cv.tsx') // 当前文件路径
  const mtime = fs.statSync(filePath).mtime.toISOString()
  return {
    props: { lastUpdateISO: mtime },
    revalidate: 60, // ISR，每60秒可再生一次
  }
}

export default function CV({ lastUpdateISO }: InferGetStaticPropsType<typeof getStaticProps>) {
  // 统一香港时间（HKT）
  const tz = 'Asia/Hong_Kong'
  const d = new Date(lastUpdateISO)

  const formattedDate = d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: tz,
  })

  return (
    <div className="min-h-screen flex flex-col relative max-w-none prose dark:prose-invert mx-auto px-4">
      {/* 主体内容 */}
      <main className="flex-1">
        <h1>Curriculum Vitae &nbsp;&nbsp; 个人简历</h1>

        <div>
          <hr />

          <h2>Education &nbsp;&nbsp; 教育背景</h2>
          <ul>
            <li><b>Ph.D. in Economics</b>, Tsinghua University, Expected 2027</li>
            <li><b>Visiting Student Researcher</b>, University of California, Berkeley, 2024.11 - 2025.11</li>
            <li><b>B.A. in Economics</b>, Tsinghua University, 2021</li>
          </ul>

          <h2>Publications &nbsp;&nbsp; 学术发表</h2>
          <ul>
            <li>李金璞, 孙浩宁*, 汤珂, 董丰. 数据资产泡沫：理论框架与政策权衡[J]. 管理世界, 2025, 41(09): 1-24.</li>
            <li>罗玫, 李金璞, 汤珂*. 企业数据资产化：会计确认与价值评估[J]. 清华大学学报(哲学社会科学版), 2023, 38(05): 195-209+226.</li>
            <li>李金璞, 汤珂*. 论数据要素市场参与者的培育[J]. 西安交通大学学报(社会科学版), 2023, 43(04): 78-89.</li>
            <li>Dong, F., Li, J.*, Sun, H., & Wang, S. (2025). Dynamic Efficiency Redux: Evidence from China. <i>China & World Economy</i>, 33(05), 196-222.</li>
            <li>
                Sui, R., Gao, R., & Li, J.* (2025). Optimal Data Pricing Decisions of Competitive Two-sided Platforms with Heterogeneous Data Costs, <i>Industrial Management & Data Systems</i>, Published Online. DOI: 10.1108/IMDS-04-2025-0497
            </li>
            <li>
              Deng, M., Han, L., Li, J.*, & Li, Z. (2025). Data Empowerment and Crash Risk. 
              <i>Applied Economics Letters</i>, Published Online. DOI: 10.1080/13504851.2025.2526710
            </li>
          </ul>

          <h2>Working Papers &nbsp;&nbsp; 工作论文</h2>
          <ul>
            <li>人工智能时代的收入分配与政策权衡：基于任务与代际动态的理论分析, 2025. 合作者：孙浩宁, 董丰.</li>
            <li>数据能力与企业创新：来自千万条招聘信息的证据, 2025. 合作者：赵慧, 韦楚涵, 汤珂.</li>
            <li>数字时代的宏观经济学的研究新进展, 2024. 合作者：孙浩宁, 汤珂, 董丰.</li>
            <li>
              Macroeconomics of Artificial Intelligence: A Review and Agenda. Feng Dong, Jinpu Li, and Haoning Sun, 2026.
            </li>
            <li>The Data Trap: When AI Fails?. Feng Dong, Jinpu Li, and Haoning Sun, 2026.
            </li>
            <li>
              Data Asset, Liquidity, and Misallocation. Feng Dong, Jinpu Li, 2024.
            </li>
          </ul>

          <h2>Books & Book Chapters &nbsp;&nbsp; 专著及书目章节</h2>
          <ul>
            <li>数据要素的可信流通. 汤珂和吴志雄主编, 人民出版社, 2024年6月. 撰写第三章《数据可信流通框架》.</li>
            <li>数据资产化. 汤珂主编, 人民出版社, 2023年8月. 撰写第二章《数据资产的确认》, 第五章《数据资产价值评估》.</li>
            <li>数据经济学. 汤珂, 熊巧琴, 李金璞, 屈阳, 清华大学出版社, 2023年1月第1版, 2024年1月第2版.</li>
          </ul>

          <h2>Grants & Rewards &nbsp;&nbsp; 资助与获奖</h2>
          <ul>
            <li>国家奖学金 (China National Scholarship), 2025</li>
            <li>蒋南翔奖学金 (Jiang Nanxiang Award), 2025</li>
            <li>国家建设高水平大学公派研究生项目 (China Scholarship Council (CSC) Scholarship), 2024</li>
            <li>“数炬计划——中国数据要素新锐学者”三等奖 (Data Torch Plan – China Data Factor Emerging Scholars, Third Prize), 2024</li>
            <li>“清华之友——昆华英才奖学金”综合优秀奖 (Kunhua Talent Scholarship, Tsinghua University), 2024</li>
            <li>清华大学优秀助教 (Excellent Teaching Assistant, Tsinghua University), 2023</li>
            <li>“清华之友——启东英才奖学金”综合优秀奖 (Qidong Talent Scholarship, Tsinghua University), 2023</li>
            <li>清华大学优良毕业生 (Excellent Graduates, Tsinghua University), 2021</li>
            <li>清华大学优秀本科毕业论文 (Outstanding Undergraduate Thesis, Tsinghua University), 2021</li>
            <li>清华大学优秀共青团员 (Excellent League Member, Tsinghua University), 2021</li>
            <li>“唐立新奖学金”综合优秀奖 (Tang Lixin Scholarship), 2020</li>
          </ul>

          <h2>Teaching &nbsp;&nbsp; 教学</h2>
          <ul>
            <li>Econometrics I (30700922) by Prof. Ke Tang. 2025 Fall.</li>
            <li>Intermediate Macroeconomics (30510763) by Prof. Feng Dong. 2025 Fall.</li>
            <li>Principles of Economics (00510454) by Prof. Feng Dong. 2026 Spring, 2025 Spring, 2024 Spring, and 2023 Spring.</li>
            <li>Econometrics II (30700932) by Prof. Sainan Jin. 2024 Spring, 2023 Spring, and 2022 Spring.</li>
            <li>Introduction to Financial Economics (40701113) by Prof. Ke Tang. 2022 Fall, 2021 Fall, and 2020 Fall.</li>
          </ul>

          <h2>Conferences &nbsp;&nbsp; 学术会议</h2>
          <small style={{ color: 'gray', fontSize: '0.85rem' }}>
          *: presented by coauthors
          </small>
          <ul>
            <li>
              2025: INFORMS 2025 Annual Meeting, The 2025 Modern Risk Society International Risk Conference (MRS2025), Macroeconomic Growth Outlook Forum held by Tsinghua SEM*; 第二十届中国管理学年会, 第二十五届中国经济学年会 (中国女经济学者专场)*,中国数字经济联盟2025年会, 第二届全国数字经济学术年会*,《经济学（季刊）》“人工智能的经济影响：前沿研究与政策启示”专题研讨会*, 清华大学第788期博士生学术论坛
            </li>
            <li>
              2024: Asia Meeting of the Econometric Society East & Southeast Asia (AMES),
              China Financial Research Conference (CFRC),
              Asian Finance Association Annual Conference (AsianFA),
              CCER Summer Institute (CCERSI),
              SWUFE International Macro-Finance Conference*,
              The Consumer Theme Conference “Navigating Chinese Economy: A Demand Perspective”;
              第二届中国数字经济发展论坛, 第六届中国发展经济学前沿学术会议, 清华大学第743期博士生学术论坛
            </li>
          </ul>

          <h2>Other Publications &nbsp;&nbsp; 其他发表</h2>
          <ul>
           <li>Gao, R., Xiao, F., Li, J., & Cui, S.* (2026). Textual Semantics and Machine Learning Methods for Data Product Pricing. <i>The Review of Mathematical Economics</i>, 1(01), 129–167. DOI: 10.4310/RME.260221154937</li>
           <li>李金璞, 汤珂. 数据的可信流通：一个理论框架[A]//江小涓主编 (《比较》编辑部主办). 数字经济发展与治理. 北京: 中信出版集团, 2025: 107–120.</li>
           <li>李金璞, 汤珂. 加快培育统一的数据市场[J]. 清华金融评论, 2025, (06):39-41. </li>
           <li>黄京磊, 李金璞, 汤珂*. 数据信托：可信的数据流通模式[J]. 大数据, 2023, 9(02): 67-78. [注：期刊2023年高被引论文]</li>
           <li>赵丽芳, 林立, 李金璞. 基于数据要素价值链评估企业数据资产[J]. 企业管理, 2023, (12): 88-91.</li> 
          </ul>


          <h2>Academic Services &nbsp;&nbsp; 学术服务</h2>
          <ul>
            <li>Reviewer: <i>China Economic Review</i>,<i>China & World Economy</i>, <i>Economic Modeling</i>, <i>International Journal of Economic Theory</i>, <i>Industrial Management & Data Systems</i></li>
          </ul>


          
        </div>
      </main>

      {/* 底部居中，只显示英文时间 */}
      <footer className="mt-8 w-full text-center text-gray-400 text-sm">
        Last update: {formattedDate}
      </footer>
    </div>
  )
}
