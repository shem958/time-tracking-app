import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import fetchActivityData, { Activity } from "./api"; // Import the Activity type from api.ts

const App: React.FC = () => {
  const [data, setData] = React.useState<Activity[]>([]);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const activityData = await fetchActivityData();
        setData(activityData);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Dashboard data={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default App;
