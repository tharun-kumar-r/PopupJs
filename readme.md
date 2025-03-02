# PopupJs.js

**PopupJs.js** is a lightweight and easy-to-use JavaScript library for creating customizable popups and modals.

## Features

- Simple and minimalistic popup creation.
- Fully customizable with CSS.
- Supports multiple popup instances.
- Close popups via button, click outside, or timeout.
- No dependencies required.

## Installation

Download the `PopupJs.js` file and include it in your project:

```html
<script src="PopupJs.js"></script>
```

Or install via npm:

```sh
npm install popupjs
```

## Usage

```html
  <button onclick="showSuccess('Operation successful!')">Success</button>
  <button onclick="showError('An error occurred!')">Error</button>
  <button onclick="showInfo('This is a warning with long description!.')">Warning</button>
  <button onclick="showConfirm('Are you sure you want to quit?.', () => { alert('Clicked Yes') } )">Confirm</button>
```

```JavaScript
  showSuccess('Operation successful!');
  showError('An error occurred!');
  showInfo('This is a warning with long description!.');
  showConfirm('Are you sure you want to quit?.', () => { alert('Clicked Yes') } );
```
### Custom Styling

You can customize the popup with your own styles with using class Names

## License

This project is licensed under the MIT License.
