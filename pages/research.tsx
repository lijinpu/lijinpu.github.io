import Link from 'next/link'

export default function Research() {
  return (
     <div
      className="
        flex flex-col relative max-w-none
        prose dark:prose-invert
        prose-li:my-1
        [&_li>ul]:my-1
        [&_li>ul]:pl-6
        [&_li>ul>li]:my-0
        [&_li>ul>li]:text-gray-500
        dark:[&_li>ul>li]:text-gray-400
      "
    >
        <h1>Research &nbsp;&nbsp; 研究</h1>
        <div>

        <h2>Publications &nbsp;&nbsp; 学术发表</h2> 

         <h3>In Chinese &nbsp;&nbsp; 中文发表</h3>
            <ul>
                <li>李金璞, 孙浩宁*, 汤珂, 董丰. 数据资产泡沫：理论框架与政策权衡[J]. 管理世界, 2025, 41(09): 1-24. 
                    <ul>
                        <li>《社会科学文摘》2025年11期转载</li>
                    </ul>
                    
                </li>
                <li>孙浩宁, 李金璞*, 董丰. 人工智能冲击下的收入分配与政策权衡——基于任务替代与代际交叠的一般均衡分析. 经济学(季刊), 2026, 26(03): 831-851.</li>
                <li>李金璞, 孙浩宁*, 董丰, 汤珂. 数字时代宏观经济学研究新进展[J]. 经济学动态, 2026, (03): 201-224.
                     <ul>
                        <li>人大复印报刊资料《国民经济管理》2026年7期全文转载</li>
                    </ul>
                </li> 
                <li>罗玫, 李金璞, 汤珂*. 企业数据资产化：会计确认与价值评估[J]. 清华大学学报(哲学社会科学版), 2023, 38(05): 195-209+226.
                     <ul>
                        <li>人大复印报刊资料《财务与会计导刊(理论版)》2023年12期全文转载</li>
                    </ul>
                </li>
                <li>李金璞, 汤珂*. 论数据要素市场参与者的培育[J]. 西安交通大学学报(社会科学版), 2023, 43(04): 78-89.</li>
            </ul>

            <h3>In English &nbsp;&nbsp; 英文发表</h3>
            <ul>
                <li>
                    Dong, F., Li, J.*, Sun, H., & Wang, S. (2025). Dynamic Efficiency Redux: Evidence from China. <i>China & World Economy</i>, 33(05), 196-222. 
                </li>
                 <li>
                Sui, R., Gao, R., & Li, J.* (2025). Optimal Data Pricing Decisions of Competitive Two-sided Platforms with Heterogeneous Data Costs. <i>Industrial Management & Data Systems</i>, Published Online. DOI: 10.1108/IMDS-04-2025-0497
            </li>
            <li>
              Deng, M., Han, L., Li, J.*, & Li, Z. (2025). Data Empowerment and Crash Risk. <i>Applied Economics Letters</i>, Published Online. DOI: 10.1080/13504851.2025.2526710
            </li>
            </ul>
       

        <h2>Working Papers &nbsp;&nbsp; 工作论文</h2>
<ul>
        <li>
        When Valuations Misallocate: A Macro-Finance Model in the Data Economy. Feng Dong, Jinpu Li, 2026. <b><i>R&R</i></b>. <a
  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4790765"
  target="_blank"
  rel="noopener noreferrer"
>
  [SSRN link]
</a>
    </li>
    <li>
        Macroeconomics of Artificial Intelligence: A Review and Agenda. Feng Dong, Jinpu Li, and Haoning Sun, 2026. <b><i>R&R</i></b>.
    </li>
    <li>
        Big Push Toward Big Data. Feng Dong, Jinpu Li, and Haoning Sun, 2026. <a
  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7352938"
  target="_blank"
  rel="noopener noreferrer"
>
  [SSRN link]
</a>
    </li>
    <li>The Data Trap: When AI Fails?. Feng Dong, Jinpu Li, and Haoning Sun, 2026. <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6259958"
    target="_blank"
    rel="noopener noreferrer"
>
  [SSRN link]
</a>
    </li>
    <li>
        Networked Dollarization: Stablecoin Adoption and Cross-Border Reallocation. Feng Dong, Jinpu Li, and Zhenyang Xu, 2026. <a
  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7352963"
  target="_blank"
  rel="noopener noreferrer"
>
  [SSRN link]
</a>
    </li>
    <li>
        AI Wave, Collaborative Network, and Firm Markups. Feng Dong, Jinpu Li, Haoning Sun, and Guang Yang, 2026.
    </li>
</ul>


    <h2>Books & Book Chapters &nbsp;&nbsp; 专著及书目章节</h2>
    <ul>
        <li>李金璞, 汤珂. 数据的可信流通：一个理论框架[A]//江小涓主编 (《比较》编辑部主办). 数字经济发展与治理. 北京: 中信出版集团, 2025: 107–120.</li>
        <li>
            汤珂, 熊巧琴, 李金璞, 屈阳. 数据经济学. 清华大学出版社, 2023年1月. ISBN: 978-7-302-62351-9. 2024年1月第2版.
        </li>
        <li>
            汤珂和吴志雄主编. 数据要素的可信流通. 人民出版社, 2024年6月. 撰写第三章《数据可信流通框架》. ISBN: 978-7-010-26615-2.
        </li>
        <li>
            汤珂主编. 数据资产化. 人民出版社, 2023年8月. 撰写第二章《数据资产的确认》, 第五章《数据资产价值评估》. ISBN: 978-7-010-25804-1.
        </li>    
    </ul>
        </div>
    </div>      
  )
}
