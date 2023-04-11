import Link from 'next/link'
export default function About() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>About</h1>
      <div>
        <p>
          I am Jinpu Li (李金璞), a second-year PhD candidate @ Tsinghua University. My field of interest: data economy, digital economy, and macro-finance.
        </p>
        <hr />

        <h2>Education</h2>
        <p>
        2021/09 - 2026 (Exp.), 清华大学, 理论经济学, 博士
        </p>
        <p>
        2017/09 - 2021/06,     清华大学, 经济学, 学士
        </p>

        <h2>Publications</h2>
        <p>
        “论数据要素市场参与者的培育”,  李金璞, 汤珂, <b>西安交通大学学报 (社会科学版)</b>, 录用
        </p>
        <p>
        “数据信托：可信的数据流通模式”, 黄京磊, 李金璞, 汤珂, <b>大数据</b>, 2023, 9(02), 67-78
        </p>

        <h2>Working Papers</h2>
        <p>
        “企业数据资产化：会计确认与价值评估”, 罗玫, 李金璞, 汤珂, 2022
        </p>
        <h2>Books</h2>
        <p>
          “数据经济学”, 汤珂, 熊巧琴, 李金璞, 屈阳, <b>清华大学出版社</b>, 2023
        </p>
        <h2>Rewards</h2>
        <p>
        清华大学优良毕业生 (Excellent Graduates, Tsinghua University), 2021
        </p>  
        <p>
        清华大学优秀本科毕业论文 (Outstanding Undergraduate Thesis, Tsinghua University), 2021
        </p>
      </div>
    </div>
  )
}
