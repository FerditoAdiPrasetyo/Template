import React from "react";
import TodoApp from "../../components/TodoApp";
import IntlMessages from "util/IntlMessages";

const todo = () => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="Todo List App"/></h2>
        <TodoApp/>
    </div>
  );
};

export default todo;
