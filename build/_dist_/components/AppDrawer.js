import React, { Fragment } from '../../web_modules/react.js';
export default function AppDrawer(props) {
  const {
    show,
    setShow
  } = props;
  /**
   * On pressing ESCAPE, remove drawer and backdrop.
   * @param {KeyboardEvent} event user keyboard event
   */

  const handleContentEscape = event => {
    if (event.key === 'Escape') setShow(false);
  };

  const handleDrawerClick = event => {
    if (show) setShow();
  };

  return /*#__PURE__*/React.createElement(Fragment, null, show ? /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 right-0 w-full h-full bg-gray-600 opacity-50",
    onClick: handleDrawerClick
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: `fixed flex flex-col top-0 right-0 w-1/2 h-full focus:outline-none bg-white
           transform duration-300 ease-out ${props.className}
           ${show ? 'translate-x-0' : 'translate-x-full'}
           `,
    tabIndex: "-1",
    onKeyDown: handleContentEscape
  }, props.children));
}