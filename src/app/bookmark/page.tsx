"use client";

import React from "react";
import { useState } from "react";
import { Tabs } from "@mantine/core";
import { TourismSpotBookmark } from "./_component/TourismSpotBookmark";
import { ModelcourseBookmark } from "./_component/ModelcourseBookmark";

const Bookmark = () => {
  const menuItems = [
    { value: "tourismSpot", label: "観光地" },
    { value: "modelCourse", label: "モデルコース" },
  ];
  const [activeTab, setActiveTab] = useState<string | null>(menuItems[0].value);
  return (
    <>
      <Tabs variant="outline" value={activeTab} onTabChange={setActiveTab} defaultValue="tourismSpot" color="cyan">
        <Tabs.List grow position="center">
          {menuItems.map((item) => (
            <Tabs.Tab key={item.value} value={item.value}>
              {item.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <TourismSpotBookmark />
        <ModelcourseBookmark />
      </Tabs>
    </>
  );
};
export default Bookmark;
