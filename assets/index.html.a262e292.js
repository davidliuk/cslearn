import{_ as p,o as e,c as i,a as n}from"./app.c6ec1d6c.js";const a={},l=n(`<h1 id="四个部分" tabindex="-1"><a class="header-anchor" href="#四个部分" aria-hidden="true">#</a> 四个部分</h1><ol><li><p>Linux、Unix用法</p><p>主要是Linux（相对没有含金量，但是比较重要）</p></li><li><p>运维硬件的角度</p><ol><li>给很多的脚本</li><li>冗余、故障转移（冗余节点对故障节点的接管）</li><li></li></ol></li><li><p>Docker容器</p></li><li><p>Kubernetes</p></li></ol><p>Linux</p><p>讲生产环节下的Linux环境下的东西</p><p>一般用GNU：bash</p><p>建议学分够了，要考研的就退课</p><p>上班有用，不上班不太有用，学了很快就忘了</p><p>理论性和思维性，掌握Linux的思维、计算机的思想</p><p>Devops、Kubernetes</p><p>prefork多线程怎么选择模式</p><p>教材：Unix and linux system administration handbook</p><p>Unix-base或VM player</p><h3 id="分数构成" tabindex="-1"><a class="header-anchor" href="#分数构成" aria-hidden="true">#</a> 分数构成</h3><p>平时作业 50%</p><blockquote><p>非常简单的，一次作业，平时上课学的东西，上课做的东西截图截一截</p></blockquote><p>大作业： 50% 报告</p><p>mainframe，追求极高的availablility，最强的机器</p><p>1000多w一台，电费、网费也很贵</p><p>钢厂、银行用mainframe</p><p>民企唯一一个院士：wangjian</p><p>互联网在Unix上发展的</p><p>availablility</p><p>平均两个failure之间的时间，</p><p>shell编程</p><p>UNIX</p><ul><li>System V，贝尔实验室的正统的Unix</li><li>BSD，</li><li>POSIX，ieee指定的标准</li></ul><p>Linux kernel 单核</p><p>微核、单核</p><blockquote><p>工程上用最简单的</p></blockquote><p>GNU ：</p><p>GPL：</p><p>Scientific Linux</p><p>SuSe：华晨宝马用的（德国的）</p><p>企业级就用CentOS</p><p>人工智能深度学习主要用的Ubuntu</p><p>bladerunner：cyberpunk鼻祖</p><p>gods in the shell：</p><p>单一职责原则：任何一个UNIX命令都叫做一个软件工具，都是标准输入输出，所以可以串联，需要用到“管道”：<code>|</code>用来连接两个命令，eg</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /usr/include/stdio.h <span class="token operator">|</span> <span class="token function">grep</span> <span class="token comment">#endif | wc -l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>标准输出重定向指令：后面+<code>&gt; 文件名</code></p><p>标准输入重定向指令：后面+<code>&lt; 文件名</code>（sort有点bug）</p>`,41),s=[l];function o(t,c){return e(),i("div",null,s)}const d=p(a,[["render",o],["__file","index.html.vue"]]);export{d as default};
