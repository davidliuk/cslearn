import{_ as a,o as s,c as e,e as p}from"./app.760b91a5.js";const n={},i=p(`<p>IDE</p><p>SCSI</p><p>移动硬盘</p><p>hd</p><p>sd开头是窜口磁盘</p><p>默认是8e，Linux LVM，现在是83</p><p>Disk Partitions</p><h3 id="make-filesyste" tabindex="-1"><a class="header-anchor" href="#make-filesyste" aria-hidden="true">#</a> make filesyste</h3><p>创建文件系统</p><p>Windows目录森林，每个文件系统都是一棵树</p><p>Unix只有一个根，把他们嫁接成一个树，需要有一个mount point，挂载点，一般喜欢找到一个空目录mnt进行挂载（因为会把原目录里的文件遮蔽）</p><p>lost+found</p><p>取消挂载：umount+目录名或者设备名都可以</p><p>mount上去</p><p>link number不为0的文件，就放在lost+found</p><p>Mount -o ro：只读，不能被修改</p><p>fuser 可以查看谁在用哪个硬盘</p><p>LVM</p><p>乔布斯讲iCloud，标准的presentation的范本，presentation的条理性</p><p>mkfs在分好区的硬盘上构建一个文件系统，在逻辑上进行组织</p><p>m1性能很好，但是写入写出很多，很耗硬盘</p><p>文件系统：</p><ol><li><p>超级块</p></li><li><p>i节点表</p><p>ls -l里面所有的信息都来自i节点i-node(FCB)</p><p>一个i节点有13个指针，第11块指针指向的块只存他指向的块的指针（非常多），12块就是上一类块的指针（根本用不完这么多）</p><p>ls -i一开始的序号就是i节点的序号</p></li><li><p>blocks</p></li></ol><p>磁盘配额</p><p>目录就是一张表，存的就是所有的i节点信息</p><p>entry：文件，从哪个目录里面出现一下</p><p>文件移动，只需要修改两个目录就可以了，所以非常快</p><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><h4 id="ln-link" tabindex="-1"><a class="header-anchor" href="#ln-link" aria-hidden="true">#</a> ln：link</h4><p>i节点一样，同一个文件</p><p>unix不允许一个目录的链接</p><p>rm删除就是文件链接数据，如果链接数是0的时候，就释放（没法删掉，只是以后别人可以占用这里）</p><p>删除的只是，把这个链接删掉了，用工具去扫描硬盘就可以看到里面所有的东西</p><p>文件名不用在i节点，文件名是目录赋予他的，可以有多个名字（考虑ln）</p><h4 id="ln-s" tabindex="-1"><a class="header-anchor" href="#ln-s" aria-hidden="true">#</a> ln -s</h4><p>符号链接，就是快捷方式，可以一起改内容</p><p>符号链接可以做链接</p><p>权限</p><ol><li><p>第一位：4bit，文件类型</p><ul><li>- 文件</li><li>d 目录</li><li>l 符号链接</li><li>b 块设备：硬盘</li><li>c 字符设备：tty、mice</li></ul></li><li><p>st_mode，</p><p>rwx：文件夹的rwx，r是ls，x是cd，w是里面内容的增删改查，不能cd就不能操作了</p></li></ol><p>st_mode，16bit</p><p>Type: setuid: setgid: sticky; rwx(user); rwx(group); rwx(other)</p><p>s：setid被置为1了，执行这个的时候以uid的身份运行，passwd在运行的时候就是root权限了</p><p>setuid的程序，应该少用，容易被人攻克，人家就拿到root了</p><p>8进制写法</p><p>共享目录：chmod 1777 sticky，只允许自己做</p><p>sticky，</p><h3 id="filesystem-table" tabindex="-1"><a class="header-anchor" href="#filesystem-table" aria-hidden="true">#</a> Filesystem Table</h3><p>临时文件，重启之后有效就挂载一下etc/fstab，告诉系统重启以后如何挂载</p><p>mount -a</p><p>sda1专门放boot</p><p>boot进去以后</p><p>逻辑卷，虚拟的，好处很多</p><p>swap交换空间，可以是独立分区，也可以是一个文件，一般是用放一个独立分区</p><p>m1的硬盘损失特别大，</p><h3 id="disk-use" tabindex="-1"><a class="header-anchor" href="#disk-use" aria-hidden="true">#</a> Disk use</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span> <span class="token comment"># 每个文件的每个目录占多大</span>
<span class="token function">du</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span> <span class="token comment"># 总共占多少</span>
<span class="token function">du</span> <span class="token parameter variable">-ms</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>

<span class="token function">df</span> <span class="token operator">&lt;</span>文件系统<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>umask</p><p>可以杜绝用户无意之间的权限给的太多的问题</p><p>没有物理安全就没有信息安全</p><p>chmod 修改文件权限</p><p>chown 修改文件的owner</p><p>chgrp</p><h3 id="acl" tabindex="-1"><a class="header-anchor" href="#acl" aria-hidden="true">#</a> ACL</h3><p>可以给每一个用户一个独一无二的权限（也可以给一个目录）</p><p>挂载的时候，打开ACL选项（好用，但是开销比较大）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getfacl <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>
 <span class="token parameter variable">-m</span> u::<span class="token comment"># 修改权限</span>
 <span class="token parameter variable">-x</span> <span class="token comment"># 删掉一个权限</span>
setfacl 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ACL mask给一个最大的权限，所有人的权限不超过这个</p><p>copy ACL</p><p>给一个目录设置一个ACL权限，然后下面所有的文件都有权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setfacl <span class="token parameter variable">-dm</span> u: <span class="token comment"># 多了一个d，可以让所有人都可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,70),l=[i];function t(r,o){return s(),e("div",null,l)}const c=a(n,[["render",t],["__file","7. Filesystem.html.vue"]]);export{c as default};