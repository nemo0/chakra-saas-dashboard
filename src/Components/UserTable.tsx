"use client";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";

const users = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    role: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien.",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "UX Designer",
    role: "Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien.",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Bob Johnson",
    designation: "Frontend Developer",
    role: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien.",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Sarah Lee",
    designation: "Backend Developer",
    role: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien.",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "David Kim",
    designation: "Product Manager",
    role: "Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien.",
    avatar: "https://via.placeholder.com/50",
  },
];

const UserTable = () => {
  return (
    <>
      <Heading as="h2" size="base" mb={4}>
        Users
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>User Image</Th>
            <Th>User Name and Designation</Th>
            <Th>User Role</Th>
            <Th>User Bio</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr
              key={user.id}
              _hover={{
                background: "gray.300",
                cursor: "pointer",
              }}
            >
              <Td>
                <Box w="50px" h="50px" borderRadius="full" overflow="hidden">
                  <Image src={user.avatar} alt="User Avatar" />
                </Box>
              </Td>
              <Td>
                <Text fontSize="sm">{user.name}</Text>
                <Text fontSize="xs" color="gray.500">
                  {user.designation}
                </Text>
              </Td>
              <Td>
                <Box
                  bg="gray.500"
                  color="white"
                  fontSize="xs"
                  px={4}
                  rounded={"xl"}
                  py={1}
                >
                  {user.role}
                </Box>
              </Td>
              <Td color={"gray.600"}>{user.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default UserTable;
