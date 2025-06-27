# Language Switcher Feature

## Overview

The language switcher is a new feature added to the Emirates store header that allows users to switch between different languages. Currently, it supports English (en) and German (de).

## Features

- **Language Selection**: Dropdown menu with flag icons and language names
- **URL Routing**: Automatically updates the URL to include the language code (e.g., `/us/en/`, `/us/de/`)
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Keyboard navigation and ARIA labels
- **Visual Feedback**: Hover effects and smooth transitions

## Implementation Details

### JavaScript (header.js)

The language switcher is implemented in `blocks/header/header.js` with the following key functions:

- `getCurrentLanguage()`: Extracts the current language from the URL path
- `switchLanguage(langCode)`: Updates the URL to switch to the selected language
- `updateLanguageDisplay()`: Updates the visual display of the current language
- `toggleLanguagePanel()`: Shows/hides the language dropdown

### CSS (header.css)

Styling is defined in `blocks/header/header.css` with:

- Desktop styles for the language button and dropdown
- Mobile responsive styles that hide language code and arrow on small screens
- Hover effects and transitions
- Proper positioning and z-index management

### URL Structure

The language switcher expects URLs in the following format:
- English: `/us/en/[path]`
- German: `/us/de/[path]`

If no language code is present in the URL, it defaults to English.

## Usage

1. **Desktop**: Click on the language button (shows flag + language code) to open the dropdown
2. **Mobile**: Click on the language button (shows only flag) to open the dropdown
3. **Selection**: Click on any language option to switch
4. **Close**: Click outside the dropdown or select a language to close

## Testing

Cypress tests are available in `cypress/src/tests/e2eTests/verifyLanguageSwitcher.spec.js` that cover:

- Display of language switcher
- Dropdown functionality
- Language switching
- URL updates
- Responsive behavior
- Accessibility features

## Adding New Languages

To add a new language:

1. Add the language to the `languages` array in `header.js`:
   ```javascript
   const languages = [
     { code: 'en', name: 'English', flag: '🇺🇸' },
     { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
     { code: 'fr', name: 'Français', flag: '🇫🇷' } // New language
   ];
   ```

2. Update the URL routing logic if needed
3. Add corresponding content for the new language
4. Update tests to include the new language

## Browser Support

The language switcher uses modern CSS features and JavaScript APIs that are supported in:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Color contrast compliance

## Performance

- Minimal DOM manipulation
- Efficient event handling
- No external dependencies
- Lightweight CSS animations 