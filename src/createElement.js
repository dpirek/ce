export function createElement(tag, props) {
  const element = (typeof tag === 'string') ? document.createElement(tag) : tag;

  if (props) {
    for (let key in props) {
      if (key === 'children') continue;
      if (key === 'addEventListener') continue;
      if (key === 'innerHTML') continue;
      if (key === 'innerText') continue;
      element.setAttribute(key, props[key]);
    }

    if (props.innerHTML) element.innerHTML = props.innerHTML;
    if (props.innerText) element.innerText = props.innerText;

    if (props.addEventListener) {
      element.addEventListener(props.addEventListener.name, props.addEventListener.handler);
    }

    if (props.children) {
      appendChildren(element, props.children);
    }

    if (props.style) {
      for (let key in props.style) {
        element.style[key] = props.style[key];
      }
    }
  }

  element.hide = function() {
    element.style.display = 'none';
  };

  element.show = function() {
    element.style.display = 'block';
  };

  element.remove = function() {
    element.parentNode.removeChild(element);
  };

  return element;
}