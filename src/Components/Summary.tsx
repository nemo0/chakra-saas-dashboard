"use client";

import {
  Box,
  Grid,
  GridItem as ChakraGridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

interface SummaryProps {
  totalProjects: number;
  completedTasks: number;
  totalTasks: number;
  teamCollaborations: number;
}

const GridItem = ({
  title,
  value,
  percentage,
}: {
  title: string;
  value: number | string;
  percentage?: number;
}) => (
  <ChakraGridItem
    borderRadius="0.375rem"
    backgroundColor="#F3F4F6"
    padding="0.5rem"
  >
    <Heading
      marginBottom="0.5rem"
      fontSize="1rem"
      fontWeight="500"
      color="gray.500"
    >
      {title}
    </Heading>
    <Box>
      <Text fontSize="1.5rem" fontWeight="700" color="gray.700">
        {value}
      </Text>
      {percentage && (
        <Text
          color="green"
          fontFamily="monospace"
          fontSize="1.25rem"
          fontWeight="500"
        >
          {percentage > 0 ? "+" : ""}
          {percentage.toFixed(2)}%
        </Text>
      )}
    </Box>
  </ChakraGridItem>
);

const Summary = ({
  totalProjects,
  completedTasks,
  totalTasks,
  teamCollaborations,
}: SummaryProps) => {
  const taskCompletionRate = (completedTasks / totalTasks) * 100;

  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      mb="1.5rem"
      borderRadius="0.375rem"
      bgColor="white"
      p="1rem"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <Heading mb="1rem" fontSize="1.25rem" fontWeight="600" color="gray.700">
        Project Summary
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap="1rem"
      >
        <GridItem title="Total Projects" value={totalProjects} />
        <GridItem
          title="Tasks Completion Rate"
          value={`${completedTasks}/${totalTasks}`}
          percentage={taskCompletionRate}
        />
        <GridItem title="Team Collaborations" value={teamCollaborations} />
      </Grid>
    </Box>
  );
};

export default Summary;
