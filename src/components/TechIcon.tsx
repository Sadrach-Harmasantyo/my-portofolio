import React from "react";

export default function TechIcon({
  component,
}: {
  component: React.ElementType;
}) {
  const Components = component;
  return (
    <>
      <Components className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgba(110 231 183)" />
          <stop offset="100%" stopColor="rgba(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
}
