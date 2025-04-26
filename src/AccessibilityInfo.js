import React from 'react';

function AccessibilityInfo() {
  return (
    <div className="accessibility-info">
      <h1>Keyboard Accessibility </h1>
      <h2>Navigation Instructions:</h2>
      <ul>
        <li><strong>Tab</strong>: Move forward through interactive elements (like links and buttons).</li>
        <li><strong>Shift + Tab</strong>: Move backward through interactive elements.</li>
        <li><strong>Enter</strong>: Activate the currently focused link or button.</li>
        <li><strong>Arrow Keys</strong>: Scroll up and down the page if necessary.</li>
      </ul>

      <h2>Key Usability Principles:</h2>
      <ul>
        <li><strong>Simplicity</strong>: The design is easy to understand and use without confusion.</li>
        <li><strong>Accessibility</strong>:The interface is usable by people with different abilities, including those with disabilities.</li>
        <li><strong>Responsiveness</strong>: The interface works well on various devices, adjusting to different screen sizes.</li>
      </ul>

    </div>
  );
}

export default AccessibilityInfo;
