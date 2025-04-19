# Create Element

CE is a element utility function that creates an element with the specified tag name, attributes, and children.

# Usage

```javascript
import { CE } from 'ce.js';
const element = CE('div', { class: 'container' }, [
  CE('h1', { class: 'title' }, 'Hello World'),
  CE('p', { class: 'description' }, 'This is a description.'),
]);
```
# Parameters
- `tagName` (string): The name of the HTML tag to create.
- `attributes` (object): An object containing the attributes to set on the element. The keys are the attribute names and the values are the attribute values.
- `children` (array): An array of child elements to append to the created element. Each child can be a string or another element created using the `CE` function.

# Returns
- (HTMLElement): The created HTML element with the specified tag name, attributes, and children.

# Example
```javascript
import { CE } from 'ce.js';
const element = CE('div', { class: 'container' }, [
  CE('h1', { class: 'title' }, 'Hello World'),
  CE('p', { class: 'description' }, 'This is a description.'),
]);
document.body.appendChild(element);
```