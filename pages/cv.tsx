import Link from 'next/link'
export default function CV() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>Curriculum Vitae &nbsp;&nbsp; 个人简历</h1>
      <div>
        
        <hr />

        <h2>Education &nbsp;&nbsp; 教育背景</h2>
        <ul>
        <li>
        <b>Ph.D. in Economics</b>, Tsinghua University, Expected 2027
        </li>
        <li>
        <b>Visiting Student Researcher</b>, University of California, Berkeley, 2024.11 - 2025.11
        </li>
        <li>
        <b>B.A. in Economics</b>, Tsinghua University, 2021
        </li>
        </ul>

        <h2>Publications &nbsp;&nbsp; 学术发表</h2>
        <ul>
        <li>
          Deng, M., Han, L., Li, J.*, & Li, Z. (2025). Data empowerment and crash risk. <i>Applied Economics Letters</i>, 1–6. https://doi.org/10.1080/13504851.2025.2526710
        </li>
        <li>
        “企业数据资产化：会计确认与价值评估”. 罗玫, 李金璞, 汤珂, 清华大学学报（哲学社会科学版）, 2023, 38(05), 195-209+226.
        </li>
        <li>
        “论数据要素市场参与者的培育”.  李金璞, 汤珂, 西安交通大学学报 (社会科学版), 2023, 43(02), 78-89.
        </li>
        <li>
        “数据信托：可信的数据流通模式”. 黄京磊, 李金璞, 汤珂, 大数据, 2023, 9(02), 67-78.
        </li>
        </ul>

        <h2>Working Papers &nbsp;&nbsp; 工作论文</h2>
        <ul>
        
        <li>
        “数字时代的宏观经济学的研究新进展”. 李金璞, 孙浩宁, 汤珂, 董丰*, 2024.
        </li>
        
        <li>
        “数据资产泡沫：理论机制与政策权衡”.  李金璞, 孙浩宁*, 汤珂, 董丰, 2024.
        </li>

        <li>
        <a href="https://ssrn.com/abstract=4790765" >Asset Bubbles in the Data Economy</a>, with Feng Dong, 2024. 
        </li>

        <li>
        <a href="https://ssrn.com/abstract=4642433">Dynamic Efficiency Redux: Evidence from China</a>, with Feng Dong, Haoning Sun, and Siqing Wang, 2023. 
        </li>

        <li>
        <a href="https://ssrn.com/abstract=4664864">Optimal Data Pricing Decisions of Competitive Two-sided Platforms with Heterogeneous Data Costs</a>, with Ronghua Sui and Ruize Gao, 2024.
        </li>

        </ul>
      
        
        <h2>Books & Book Chapters &nbsp;&nbsp; 专著及书目章节</h2>
        <ul>
        <li>
        “数字经济发展与治理（第4辑）”. 江小涓主编, 中信出版集团, 2025年2月. 与汤珂合作撰写《数据的可信流通》. ISBN: 978-7-521-77161-9.
        </li>
        <li>
        “数据要素的可信流通”. 汤珂和吴志雄主编, 人民出版社, 2024年6月. 撰写第三章《数据可信流通框架》.
        </li>
        <li>
        “数据资产化”. 汤珂主编, 人民出版社, 2023年8月. 撰写第二章《数据资产的确认》, 第五章《数据资产价值评估》.
        </li>
        <li>
        “数据经济学”. 汤珂, 熊巧琴, 李金璞, 屈阳, 清华大学出版社, 2023年1月第1版, 2024年1月第2版.
        </li>
        </ul>


        <h2>Grants & Rewards &nbsp;&nbsp; 资助与获奖</h2>
        <ul>
        <li>
        国家建设高水平大学公派研究生项目 (China Scholarship Council (CSC) Scholarship), 2024
        </li>
        <li>
        数炬计划——中国数据要素新锐学者 (Data Torch Plan – China Data Factor Emerging Scholars), 2024
        </li>
        <li>
        “清华之友——昆华英才奖学金”综合优秀奖 (Kunhua Talent Scholarship, Tsinghua University), 2024
        </li>
        <li>
        清华大学优秀助教 (Excellent Teaching Assistant, Tsinghua University), 2023
        </li>
        <li>
        “清华之友——启东英才奖学金”综合优秀奖 (Qidong Talent Scholarship, Tsinghua University), 2023
        </li> 
        <li>
        清华大学优良毕业生 (Excellent Graduates, Tsinghua University), 2021
        </li>  
        <li>
        清华大学优秀本科毕业论文 (Outstanding Undergraduate Thesis, Tsinghua University), 2021
        </li>
        <li>
        清华大学优秀共青团员 (Excellent League Member, Tsinghua University), 2021
        </li>
        <li>
        “唐立新奖学金”综合优秀奖 (Tang Lixin Scholarship), 2020
        </li>
        </ul>

        <h2>Teaching &nbsp;&nbsp; 教学</h2>
        <ul>
        <li>
        Principles of Economics (00510454) by Prof. Feng Dong. 2025 Spring, 2024 Spring, and 2023 Spring.
        </li>
        <li>
        Econometrics II (30700932) by Prof. Sainan Jin. 2024 Spring, 2023 Spring, and 2022 Spring.
        </li>
        <li>
        Introduction to Financial Economics (40701113) by Prof. Ke Tang. 2022 Fall, 2021 Fall, and 2020 Fall.
        </li>
        </ul>

        <h2>Conferences &nbsp;&nbsp; 学术会议</h2>
        <ul>
        <li>
        2025: INFORMS 2025 Annual Meeting, The 2025 Modern Risk Society International Risk Conference (MRS2025); 清华大学第788期博士生学术论坛
        </li>
        <li>
        2024: Asia Meeting of the Econometric Society East & Southeast Asia (AMES), China Financial Research Conference (CFRC), Asian Finance Association Annual Conference (AsianFA), CCER Summer Institute (CCERSI), SWUFE International Macro-Finance Conference, The Consumer Theme Conference “Navigating Chinese Economy: A Demand Perspective” by China and World Economy; 第二届“中国数字经济发展论坛”, 第六届“中国发展经济学前沿学术会议”, 清华大学第743期博士生学术论坛（获“优秀论文”）
        </li>
        </ul>


        <h2>Service &nbsp;&nbsp; 学术服务</h2>
        <ul>
            <li>Referee: Economic Modelling, China & World Economy, International Journal of Economic Theory, Industrial Management & Data Systems</li>
            
        </ul>

        <h2>Non-Academic Publications &nbsp;&nbsp; 杂志或媒体文章</h2>
        <ul>
            <li>“加快培育统一的数据市场”. 李金璞, 汤珂. 清华金融评论, 2025, 139(06), 39-41.</li>
            <li>“基于数据要素价值链评估企业数据资产”. 赵丽芳, 林立, 李金璞, 企业管理, 2023(12), 88-91.</li>   
        </ul>

      </div>
    </div>
  )
}
