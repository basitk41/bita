import React from "react";
import { PageContainer, LeftColumn, RightColumn } from "./index.styles";
import TodoList from "@/components/todo-list";
import WeatherWidget from "@/components/weather-widget";
import JokeWidget from "@/components/joke-widget";

const MemoizedTodoList = React.memo(TodoList);
const MemoizedWeatherWidget = React.memo(WeatherWidget);
const MemoizedJokeWidget = React.memo(JokeWidget);
const Homepage: React.FC = () => {
  return (
    <PageContainer>
      <LeftColumn>
        <MemoizedTodoList />
      </LeftColumn>
      <RightColumn>
        <MemoizedWeatherWidget />
        <MemoizedJokeWidget />
      </RightColumn>
    </PageContainer>
  );
};

export default Homepage;
