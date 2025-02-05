import React from "react";
import { PageContainer, LeftColumn, RightColumn } from "./index.styles";
import TodoList from "@/components/todo-list";
import WeatherWidget from "@/components/weather-widget";

const MemoizedTodoList = React.memo(TodoList);
const MemoizedWeatherWidget = React.memo(WeatherWidget);
const Homepage: React.FC = () => {
  return (
    <PageContainer>
      <LeftColumn>
        <MemoizedTodoList />
      </LeftColumn>
      <RightColumn>
        <MemoizedWeatherWidget />
      </RightColumn>
    </PageContainer>
  );
};

export default Homepage;
