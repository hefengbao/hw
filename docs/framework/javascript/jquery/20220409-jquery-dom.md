# jQuery DOM

**JQuery总结一：选择器归纳**

**1、基本选择器**

    选择符      匹配元素
    *           所有元素
    id          给定ID的元素
    element     给定类型的所有元素
    .class      给定类的所有元素
    a,b         与a或b匹配的元素
    a b         a的后代元素中与b匹配的元素
    a>b         a的直接子元素中与b匹配的元素
    a+b         a的直接同辈元素中与b匹配的元素
    a~b      a的同辈元素中与b匹配的元素

**2、位置选择器**

    选择符                  匹配元素
    a b:nth-child(index)    a的子元素中，第index个与b匹配的元素（从1开始计数）
    a b:nth-child(even)     a的子元素中，第偶数个与b匹配的元素（从1开始计数）
    a b:nth-child(odd)      a的子元素中，第奇数个与b匹配的元素（从1开始计数）
    a b:nth-child(2n+2)     a的子元素中，第2n+2个与b匹配的元素（从1开始计数）,n为自然数
    a b:nth-last-child()    同:nth-child()，从最后一个元素开始计数
    a b:first-child         a的子元素中，第1个与b匹配的元素
    a b:last-child          a的子元素中，最后一个个与b匹配的元素
    :only-child             作为其父元素唯一一个子元素的元素
    a b:nth-of-type()       同:nth-child()，只计同类元素
    a b:nth-last-of-type()  同:nth-last-child()，只计同类元素
    a b:first-of-type()     同:first-child()，只计同类元素
    a b:last-of-type()      同:last-child()，只计同类元素
    a b:only-of-type()      没有同名元素的元素

**3、属性选择器**

    选择符                  匹配元素
    [attr]                  带有属性attr的元素
    [attr="value"]          attr属性值为value的元素
    [attr!="value"]         attr属性值不为value的元素）
    [attr^="value"]         attr属性值以value开头的元素
    [attr$="value"]      attr属性值以value结尾的元素
    [attr*="value"]         attr属性值包含value字符串的元素
    [attr~="value"]      attr属性值是空格分隔的字符串，其中一个字符串值是value的元素
    [attr|="value"]         attr属性值等于value或value后跟一个连字符(-)的元素

**4、表单选择器**

    选择符             匹配元素
    :input             所有<input>、<textarea>、<select>和<button>元素
    :text              type=”text”的<input>元素
    :password          type=”password”的<input>元素
    :file              type=”file”的<input>元素
    :radio             type=”radio”的<input>元素
    :checkbox          type=”checkbox”的<input>元素
    :submit            type=”submit”的<input>元素
    :image             type=”image”的<input>元素
    :reset             type=”reset”的<input>元素
    :button            type=”button”的<input>元素
    :enabled           启用的表单元素
    :disabled          禁用的表单元素
    :checked           选中的复选框和单选按钮
    :selected          选中的<option>元素

**5、过滤选择器**

    选择符                   匹配元素
    :root                   文档根元素
    :header                 标题元素，h1~h6
    :animated               动画正在运行的元素
    :contains(text)         包含文本text的元素
    a:empty                 不包含子节点的a元素
    a:has(b)                至少包含一个b元素匹配的a元素(返回父元素a而非子元素b)
    :parent                 与:empty相反，返回包含子节点的元素
    :hidden                 隐藏的元素，包括<input type="hidden">
    :visible                可见元素
    :focus                  获得焦点的元素
    :lang(language)         给定语言代码的元素
    :target                 URI标识符指向的目标元素，具体见：:target用法

**6、用于结果集中的选择器**

这类选择器在CSS中不存在，但可以用于JQuery的结果中进行筛选。

    选择符          匹配元素
    :first          结果集中的第一个元素，对应方法为first(),如$("a b:first")<==>$("a b").first()
    :last           结果集中的最后一个元素，对应方法为last(),如$("a b:last")<==>$("a b").last()
    :not(a)         结果集中不与a匹配的元素，对应方法为not(),如$("a b:not(c)")<==>$("a b").not(c)
    :even           结果集中索引是偶数的元素(从0开始),如$("a b:even")
    :odd            结果集中索引是奇数的元素(从0开始),如$("a b:odd")
    :eq(index)      结果集中索引是index的元素(从0开始),对应方法是eq(index),如$("a b:eq(2)")<==>$("a b").eq(2)
    :gt(index)      结果集中索引大于index的元素(从0开始),如$("a b:gt(2)")
    :lt(index)      结果集中索引小于index的元素(从0开始),如$("a b:lt(2)")

**JQuery总结二：DOM遍历和事件处理**

**1、筛选元素**

    方法                  返回的元素
    .filter(selector)     与selector匹配的元素
    .filter(callbaxk)     callback中返回true的元素
    .eq(index)            从0开始计数的第index个选中元素
    .first()              选中元素中的第一个元素
    .last()               选中元素的最后一个元素
    .slice(start[,end])   从0开始计数的给定范围内的选中元素
    .not(selector)        与selector不匹配的元素
    .has(selector)        与selector匹配的的后代元素

**2、后代元素**

    方法                    返回的元素
    .find(selector)         与selector匹配的后代元素
    .contents()             子节点（包括文本节点）
    .children([selector])   子节点，可传入selector进行筛选

**3、同辈元素**

    方法                                返回的元素
    .next([selector])                   每个选中元素紧邻的下一个元素，可传入selector进行筛选
    .nextAll([selector])                每个选中元素后的所有同辈元素，可传入selector进行筛选
    .nextUntil([selector],[filter])     每个选中元素之后、直至但不包含第一个和selector匹配的元素，可传入filter进行筛选
    .prev([selector])                   每个选中元素紧邻的上一个元素，可传入selector进行筛选
    .prevAll([selector])                每个选中元素前的所有同辈元素，可传入selector进行筛选
    .prevUntil([selector],[filter])      每个选中元素之前、直至但不包含第一个和selector匹配的元素，可传入filter进行筛选
    .siblings([selector])                所有同辈元素，可传入selector进行筛选

**4、祖先元素**

    方法                                    返回的元素
    .parent([selector])                     每个选中元素的父元素，可传入selector进行筛选
    .parents([selector])                    每个选中元素的所有祖先元素，可传入selector进行筛选
    .parentsUntil([selector],[filter])      每个选中元素的所有祖先元素、直至但不包含第一个和selector匹配的元素，可传入filter进行筛选
    .closest(selector)                      与selector匹配的第一个元素，从元素自身开始沿DOM数向上搜索祖先元素
    .offsetParent()                         选中元素的第一个被定为的父元素(relative或absolute)

**5、集合操作**

    方法                   说明
    .add([selector])      将与selector匹配的元素添加原对象集合中
    .addBack()            选中的元素加上JQuery内部栈中之前选中的元素
    .end()                内部JQuery栈中之前选中的元素
    .map(callback)        对每个选中调用回调函数callback之后的结果
    .pushStack()          指定的元素

**6.操作选中的元素**

    方法                   说明
    .is(selector)          确定匹配的元素中是否有传入的与selector匹配的元素
    .index()               取得匹配元素相对其同辈元素的索引
    .index(element)        取得匹配元素中与指定元素对象的DOM节点的索引
    $.contains(a,b)     确定DOM节点a是否包含DOM节点b
    .each(callback)        迭代匹配元素，对每个元素执行callback
    .length                取得匹配元素的数量
    .get()                 取得与匹配元素对应的DOM节点列表
    .get(index)            取得匹配元素中与指定索引对应的DOM节点
    .toArray()             取得与匹配元素对应的DOM节点列表

**7.事件绑定**

    .ready(handler)                     DOM和CSS完全加载后之间handler
    .on(type,[selector],[data],handler) 绑定type事件，并指定事件处理程序handler;如果指定selector则执行事件委托
    .on(events,[selector],[data])       根据events对象的事件绑定多个事件处理程序
    .off(type,[selector],handler)       解除on给元素绑定的事件处理程序
    .bind(type,[data],handler)          绑定type事件，并指定事件处理程序handler
    .one(type,[data],handler)           绑定type事件，并指定事件处理程序handler,handler被调用后立即解除绑定
    .unbind([type],[handler])           解除bind给元素绑定的指定事件处理程序(不指定则解除所有指定)
    .delegate(selector,type,[data],handler) 给与selector匹配的元素绑定type事件，并指定事件处理程序handler
    .delegate(selector,handlers)        给与selector匹配的元素绑定type事件，并指定事件处理程序handlers
    .undelegate(selector,type,[handler])解除delegate给元素绑定的指定事件处理程序

**8.其它方法**

    方法                            说明
    .trigger(type,[data])           触发元素上的事件并执行事件的默认操作
    .triggerHandler(type,[data])    触发元素上的事件，但不执行事件的默认操作
    $.proxy(fn,context)          创建一个新的在指定上下文中执行的函数。

**JQuery总结三：DOM完全操作和动画**

**特性和属性**

    方法                 说明
    .attr(key)           取得特性key的值
    .attr(key，value)    设置特性key的值为value
    .attr(key，fn)       将fn的返回值作为key的值
    .attr(obj)           根据传入的键值对象参数设置特性的值
    .removeAttr(key)     删除特性key的值
    .prop(key)           取得属性key的值
    .prop(key，value)    设置属性key的值为value
    .prop(key，fn)       将fn的返回值作为key的值
    .prop(obj)           根据传入的键值对象参数设置属性的值
    .removeProp(key)     删除属性key的值
    .addClass(class)     为匹配元素添加传入的类
    .removeClass(class)  为匹配元素删除传入的类
    .toggleClass(class)  对于匹配元素，如果存在类则删除，不存在则添加
    .hasClass(class)     匹配元素中至少一个包含传入的类则返回true
    .val()               获取第一个匹配元素的value属性值
    .val(value)          设置每个匹配元素的value属性

**内容操作**

    方法            说明
    .html()         获取第一个匹配元素的HTML内容
    .html(value)    将每个匹配元素的HTML内容设置为value
    .text()         获取所有匹配元素的文本，以字符串返回
    .text(value)    将每个匹配元素的文本设置为value

**CSS和尺寸相关**

    方法                 说明
    .css(key)            取得属性key的值
    .css(key,value)      设置key的值为value
    .css(obj)            根据传入的键值参数设置CSS的属性值
    offset()             返回第一个匹配元素相对于视口的坐标（单位是像素）
    .position()          返回第一个匹配元素相对.offsetParent()返回元素的坐标（单位是像素）
    .scrollTop()         返回第一个匹配元素的垂直滚动位置
    .scrollTop(value)    设置每个匹配元素的垂直滚动位置
    .scrollLeft()        返回第一个匹配元素的水平滚动位置
    .scrollLeft(value)   设置每个匹配元素的水平滚动位置
    .height()            返回第一个匹配元素的高度
    .height(value)       设置每个元素的高度
    .width()             返回第一个匹配元素的度
    .width(value)        设置每个元素的宽度
    .innerHeight()       返回第一个匹配元素的高度（包含内边距，不包含边框）
    .innerWidth()        返回第一个匹配元素的宽度（包含内边距，不包含边框）
    .outerHeight([includeMargin])   返回第一个匹配元素的高度（包含内边距和边框，bool为true，则包含外边距，反之不包含）
    .outerWidth([includeMargin])    返回第一个匹配元素宽度（包含内边距和边框，bool为true，则包含外边距，反之不包含）

**DOM插入**

    方法  说明
    .append(content)    在每个匹配元素内部的末尾插入content
    .appendTo(selector) 将匹配元素插入到与selector匹配的元素的内部的末尾
    .prepend(content)   在每个匹配元素内部的开头插入content
    .prependTo(selector)    将匹配元素插入到与selector匹配的元素的内部的开头
    .after(content) 在每个匹配元素外部的后面插入content
    .insertAfter(selector)  将匹配元素插入到与selector匹配的元素的外部的后面
    .before(content)    在每个匹配元素部的前面插入content
    .insertBefore(selector) 将匹配元素插入到与selector匹配的元素的外部的前面
    .wrap(content)  匹配的每个元素包含在content中
    .wrapAll(content)   匹配的每个元素作为一个整体包含在content中
    .wrapInner(content) 匹配的每个元素的内部内容包含在content中
    .unwrap()   删除元素的父元素（反操作）

**替换、删除和复制**

    方法                    说明
    .replaceWith(content)   将匹配的元素替换为content
    .replaceAll(selector)   将与selector匹配的元素替换为匹配的元素
    .empty()                删除每个元素的子节点
    .remove([selector])     从DOM中删除节点，selector可以用于筛选
    .detach([selector])     从DOM中删除节点，selector可以用于筛选，并保留JQuery给元素添加的数据
    .clone([withHandlers],[deepWithHandlers])   返回匹配元素的副本，也可以复制事件处理程序

**数据**

    方法                          说明
    .data(key)                    获取第一个匹配元素的key键对应的数据
    .data(key,value)              设置每个元素关联的key对应的数据值为value
    .removeData(key)              删除每个元素与key键关联的数据
    
    .show()                       显示匹配元素
    .show(speed,[callback])       通过高度、宽度和透明度动画显示匹配元素
    .hide() 隐藏匹配元素
    .hide(speed,[callback])       通过高度、宽度和透明度动画隐藏匹配元素
    .toggle([speed],[callback])   显示或隐藏匹配元素
    .slideDown([speed],[callback])  以滑入方式显示匹配元素
    .slideUp([speed],[callback])    以滑出方式隐藏匹配元素
    .slideToggle([speed],[callback])以滑动方式显示或隐藏匹配元素
    .fadeIn([speed],[callback])     以淡入方式显示匹配元素
    .fadeOut([speed],[callback])    以淡出方式隐藏匹配元素
    .fadeToggle([speed],[callback]) 以淡入淡出方式显示或隐藏匹配元素
    .fadeTo(speed,opacity,[callback])调整匹配元素的透明度

**自定义动画**

    方法                                        说明
    .animate(attrs,[speed],[easing],[callback]) 针对指定的css属性自定义动画
    .animate(attrs,options)                     .animate的底层接口，支持队列控制

**队列操作**

    方法                             说明
    .queue([queueName])              返回第一个匹配元素上的动画队列
    .queue([queueName]，callback)    在动画队列的最后添加回调函数
    .queue([queueName]，newQueue)    以新队列替换旧队列
    .dequeue([queueName])            执行动画队列的下一个动画
    .clearQueue([queueName])         清除所有未执行函数
    .stop([clearQueue],[jumpToEnd])  停止当前动画,启动排列动画（若有）
    .finish([queueName])             停止当前动画并将所有排列的动画理解提前到它们的目标值
    .delay(duration,[queueName])     延迟duration毫秒执行队列中的下一个动画
    .promise([queueName],[target])   在集合中所有排队的操作完成后返回一个待解决的承诺

摘自：http://www.imooc.com/article/3675  
