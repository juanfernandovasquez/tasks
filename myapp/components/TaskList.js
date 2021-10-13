import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import TaskItem from "./TaskItem";
import { getTasks, deleteTask } from "../api";
import { useIsFocused } from "@react-navigation/native";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log(isFocused);
    loadTasks();
  }, [isFocused]);
  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTasks();
  };
  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => await loadTasks());

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          colors="#78e08f"
          refreshing={refreshing}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default TaskList;
