import { ErrorBoundary } from "./ErrorBoundary";
import "./container-styles.css";
import React from "react";

export function Child1(props) {
  return <div className={"child1"}>{"I am a child1"}</div>;
}

export function Child2(props) {
  return <div className={"child2"}>{"I am a child2"}</div>;
}

export function Child3() {
  return (
    <div>
      <button
          onClick={() => {
            throw Error("what the heck");
          }}
        >
          Click me, own your own risk
        </button>
      <div className={"child3"}>
        {"I am a child3"}
      </div>
    </div>
  );
}

export function Container(props) {
  return (
    <div className={"container"}>
      {"I am a container"}
      <div>
        {props.data.length >= 14 && <Child1 />}
        <ErrorBoundary>
          <Child2 />
          <Child3 />
        </ErrorBoundary>
      </div>
    </div>
  );
}
