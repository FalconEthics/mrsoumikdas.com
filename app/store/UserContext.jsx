/**
 * This module defines the UserContextProvider component and the UserContext context object.
 * The UserContextProvider component wraps the app and provides the UserContext object to all its children.
 * The UserContext object contains state variables and animation objects that are used throughout the app.
 * @module UserContext
 */

"use client";

import { useState, createContext, useLayoutEffect } from "react";

/**
 * The UserContext object that contains state variables and animation objects.
 * @typedef {Object} UserContext
 * @property {boolean} clicked - A boolean state variable that indicates whether a button has been clicked.
 * @property {function} setClicked - A function that sets the value of the clicked state variable.
 * @property {boolean} showModal - A boolean state variable that indicates whether a modal should be shown.
 * @property {function} setShowModal - A function that sets the value of the showModal state variable.
 * @property {Object} slideIn - An animation object that defines the properties of an element that is sliding into view.
 * @property {Object} slideOut - An animation object that defines the properties of an element that is sliding out of view.
 * @property {Object} slide - An animation object that defines the properties of an element that is sliding horizontally.
 * @property {Object} scaleIn - An animation object that defines the properties of an element that is scaling down.
 * @property {Object} scaleOut - An animation object that defines the properties of an element that is scaling up.
 * @property {Object} offscreen - An animation object that defines the properties of an element that is offscreen.
 * @property {Object} onscreen - An animation object that defines the properties of an element that is onscreen.
 */

/**
 * The UserContext context object that is used to provide the UserContext object to all its children.
 * @type {Object}
 */
export const UserContext = createContext();

/**
 * The UserContextProvider component that wraps the app and provides the UserContext object to all its children.
 * @param {Object} props - The props object that contains the children of the UserContextProvider component.
 * @returns {JSX.Element} - The JSX element that wraps the app and provides the UserContext object to all its children.
 */
const UserContextProvider = ({ children }) => {
  // this state is used to determine whether a button has been clicked
  const [clicked, setClicked] = useState(false);
  // this state is used to determine whether a modal should be shown
  const [showModal, setShowModal] = useState(false);

  // useLayoutEffect(() => {
  //   console.log("clicked: " + clicked);
  //   console.log("showmodal: " + showModal);
  // }, [showModal, clicked]);

  // Animation objects
  const slideIn = {
    x: 300,
    opacity: 0,
  };

  const slide = {
    x: -300,
    opacity: 0,
  };

  const slideOut = {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 0.8,
    },
  };

  const slideTilt = {
    x: 300,
    opacity: 0,
  };

  const slideTiltOut = {
    x: 0,
    opacity: 1,
    rotate: 170,
    transition: {
      type: "ease-in",
      duration: 0.8,
    },
  };

  const scaleIn = {
    scale: 0,
  };

  const scaleOut = {
    scale: 1,
    transition: {
      type: "ease-in",
      duration: 0.8,
    },
  };

  const offscreen = {
    y: -300,
    opacity: 0,
  };

  const onscreen = {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 0.8,
    },
  };

  const fadeIn = {
    opacity: 0,
  };

  const fadeOut = {
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 0.8,
    },
  };

  const value = {
    clicked,
    setClicked,
    showModal,
    setShowModal,
    slideIn,
    slideOut,
    slide,
    scaleIn,
    scaleOut,
    offscreen,
    onscreen,
    slideTilt,
    slideTiltOut,
    fadeIn,
    fadeOut,
  };

  return (
    // this is the provider that will be used to wrap the app
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
