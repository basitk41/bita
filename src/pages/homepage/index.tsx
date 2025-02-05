import React from "react";
import { PageContainer, LeftColumn, RightColumn } from "./index.styles";
import TodoList from "@/components/todo-list";

const Homepage: React.FC = () => {
  return (
    <PageContainer>
      <LeftColumn>
        <TodoList />
      </LeftColumn>
      <RightColumn></RightColumn>
    </PageContainer>
  );
};

export default Homepage;
