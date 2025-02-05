import React from "react";
import { PageContainer, LeftColumn, RightColumn } from "./index.styles";
import TodoList from "@/components/todo-list";
import WeatherWidget from "@/components/weather-widget";

// const MemoizedWeatherWidget = React.memo(WeatherWidget);
const Homepage: React.FC = () => {
  console.log("Homepage called...");
  return (
    <PageContainer>
      <LeftColumn>
        <TodoList />
      </LeftColumn>
      <RightColumn>
        <WeatherWidget />
      </RightColumn>
    </PageContainer>
  );
};

export default Homepage;
