import React, { useEffect } from "react";

import App from "./components/App";

import "../public/fonts.css";
import "../public/app.css";
import "./css/styles.scss";

import { ExcalidrawProps } from "./types";
import { InitializeApp } from "./components/InitializeApp";
import { TopErrorBoundary } from "./components/TopErrorBoundary";
import { IsMobileProvider } from "./is-mobile";

const Excalidraw = (props: ExcalidrawProps) => {
  const {
    width,
    height,
    onChange,
    onBlur,
    initialData,
    user,
    onUsernameChange,
    onResize,
    options,
  } = props;
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      // @ts-ignore
      if (event.scale !== 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      // @ts-ignore
      document.removeEventListener("touchMove", handleTouchMove);
    };
  }, []);

  return (
    <TopErrorBoundary>
      <IsMobileProvider>
        <InitializeApp>
          <App
            width={width}
            height={height}
            onChange={onChange}
            onBlur={onBlur}
            initialData={initialData}
            user={user}
            onUsernameChange={onUsernameChange}
            onResize={onResize}
            options={options}
          />
        </InitializeApp>
      </IsMobileProvider>
    </TopErrorBoundary>
  );
};
export default Excalidraw;
