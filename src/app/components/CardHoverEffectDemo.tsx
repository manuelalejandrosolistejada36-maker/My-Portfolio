"use client";
import React from "react";
import { HoverEffect } from "./Projects";
import { projects } from "../../lib/projects";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
