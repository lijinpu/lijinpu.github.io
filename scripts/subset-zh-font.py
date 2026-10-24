"""
生成网站用的思源宋体（Noto Serif SC）子集字体。

网站上的中文只有几百个字，完整的思源宋体每个字重有十几 MB，
所以这里只提取 pages/ 和 components/ 里实际出现的中文字符，
生成两个很小的 woff2 文件：
    public/fonts/noto-serif-sc-subset-400.woff2   （常规，覆盖全部中文）
    public/fonts/noto-serif-sc-subset-700.woff2   （粗体，只覆盖 <b>…</b> 里的中文）

什么时候需要重新运行：
    新增的中文内容里出现了以前没用过的字。不重新运行也不会出错，
    缺的字会由系统自带的宋体补上，只是字形会略有差别。

用法：
    1. 安装依赖：pip install fonttools brotli
    2. 下载完整字体 NotoSerifSC-Regular.otf 和 NotoSerifSC-Bold.otf，
       地址：https://github.com/notofonts/noto-cjk/tree/main/Serif/SubsetOTF/SC
    3. 在项目根目录运行：
       python scripts/subset-zh-font.py <存放上面两个 otf 的文件夹>
"""

import re
import sys
from pathlib import Path

from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
SOURCES = [ROOT / 'pages', ROOT / 'components']
OUT_DIR = ROOT / 'public' / 'fonts'

# 中文字符和全角标点：CJK 部首/符号/标点、假名、汉字、全角字符等（U+2E80 起）。
# “”‘’—… 这些中英文共用的标点由 Pagella 显示，不放进中文子集。
CJK = re.compile(r'[\u2E80-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]')


def read_sources() -> str:
    text = []
    for folder in SOURCES:
        for f in sorted(folder.rglob('*')):
            if f.suffix in ('.tsx', '.ts', '.jsx', '.js', '.mdx') and 'node_modules' not in f.parts:
                text.append(f.read_text(encoding='utf-8'))
    return '\n'.join(text)


def chars(text: str) -> str:
    return ''.join(sorted(set(CJK.findall(text))))


def build(src: Path, dst: Path, text: str) -> None:
    options = subset.Options()
    options.flavor = 'woff2'
    options.layout_features = ['*']
    options.name_IDs = ['*']
    options.name_languages = ['*']
    options.notdef_outline = True
    font = subset.load_font(str(src), options)
    subsetter = subset.Subsetter(options)
    subsetter.populate(text=text)
    subsetter.subset(font)
    subset.save_font(font, str(dst), options)
    print(f'{dst.name}: {len(text)} 个字符, {dst.stat().st_size / 1024:.0f} KB')


def main() -> None:
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    src_dir = Path(sys.argv[1])
    source = read_sources()

    regular = chars(source)
    # 粗体只覆盖 <b>…</b> 和 <strong>…</strong> 里出现的中文（目前主要是本人姓名）
    bold_text = ''.join(re.findall(r'<(?:b|strong)>(.*?)</(?:b|strong)>', source, re.S))
    bold = chars(bold_text) or '李金璞'

    build(src_dir / 'NotoSerifSC-Regular.otf', OUT_DIR / 'noto-serif-sc-subset-400.woff2', regular)
    build(src_dir / 'NotoSerifSC-Bold.otf', OUT_DIR / 'noto-serif-sc-subset-700.woff2', bold)


if __name__ == '__main__':
    main()
