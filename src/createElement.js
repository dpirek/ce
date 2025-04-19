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

  element.text = function(text) {
    if (text) {
      element.innerText = text;
    } else {
      return element.innerText;
    }
  }

  element.html = function(html) {
    if (html) {
      element.innerHTML = html;
    } else {
      return element.innerHTML;
    }
  }

  element.attr = function(name, value) {
    if (value) {
      element.setAttribute(name, value);
    } else {
      return element.getAttribute(name);
    }
  }

  element.append = function(child) {
    if (Array.isArray(child)) {
      child.forEach(c => element.appendChild(c));
    } else {
      element.appendChild(child);
    }
  }

  element.prepend = function(child) {
    if (Array.isArray(child)) {
      child.forEach(c => element.insertBefore(c, element.firstChild));
    } else {
      element.insertBefore(child, element.firstChild);
    }
  }

  element.click = function(handler) {
    element.addEventListener('click', handler);
  }

  element.on = function(event, handler) {
    element.addEventListener(event, handler);
  }

  element.class = function(className) {
    if (className) {
      element.classList.add(className);
    } else {
      return element.className;
    }
  }

  element.removeClass = function(className) {
    if (className) {
      element.classList.remove(className);
    }
  }

  element.toggleClass = function(className) {
    if (className) {
      element.classList.toggle(className);
    }
  }

  element.hasClass = function(className) {
    return element.classList.contains(className);
  }

  return element;
}