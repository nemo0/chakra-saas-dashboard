import Summary from "@/Components/Summary";
import UserTable from "@/Components/UserTable";

export default function Home() {
  return (
    <main>
      <Summary
        totalProjects={5}
        completedTasks={3}
        totalTasks={10}
        teamCollaborations={2}
      />
      <UserTable />
    </main>
  );
}
