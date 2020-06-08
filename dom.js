window.dom = {};
//创建标签元素
dom.create = (string) => {
  const container = document.createElement("template");
  container.innerHTML = string.trim();
  return container.content.firstChild;
};

//在节点后插入节点
dom.after = (lnode, rnode) => {
  return lnode.parentNode.insertBefore(rnode, lnode.nextSibling);
};
//在节点前插入节点
dom.before = (lnode, rnode) => {
  return lnode.parentNode.insertBefore(rnode, lnode);
};
//在节点中新增子节点;
dom.append = (parent, node) => {
  parent.appendChild(node);
};
//在节点外增加新的父节点
dom.wrap = (node, parent) => {
  dom.before(node, parent);
  dom.append(parent, node);
};
//删除节点
dom.remove = (node) => {
  node.parentNode.removeChild(node);
  return node;
};
//删除所有子节点
dom.empty = (node) => {
  let x = node.firstChild;
  const arry = [];
  while (x) {
    dom.remove(node.firstChild);
    arry.push(x);
    x = node.firstChild;
  }
  return arry;
};
//设置属性和读取属性
dom.attr = function (node, name, value) {
  //重载
  if (arguments.length === 3) {
    return node.setAttribute(name, value);
  } else if (arguments.length === 2) {
    return node.getAttribute(name);
  }
};

//设置标签中的内容
dom.text = (node, string) => {
  //适配
  if ("innerText" in node) {
    node.innerText = string;
  } else {
    node.textContent = string;
  }
};

dom.find = (selectory) => {
  return document.querySelectorAll(selectory);
};
dom.style = (node, name, value) => {
  if (arguments.length === 3) {
    // dom.style(div, 'color', 'red')
    node.style[name] = value;
  } else if (arguments.length === 2) {
    if (typeof name === "string") {
      // dom.style(div, 'color')
      return node.style[name];
    } else if (name instanceof Object) {
      // dom.style(div, {color: 'red'})
      const object = name;
      for (let key in object) {
        node.style[key] = object[key];
      }
    }
  }
};
dom.each = (nodeList, fn) => {
  for (let i = 0; i < nodeList.length; i++) {
    fn.call(null, nodeList[i]);
  }
};
