const employees = [
  {
    id: "101",
    firstName: "Arjun",
    email: "john.doe@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare monthly report",
        taskDescription: "Compile and finalize the monthly performance report.",
        taskDate: "2024-11-21",
        category: "Work",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Participate in the weekly team progress meeting.",
        taskDate: "2024-11-18",
        category: "Meeting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Follow-up with clients",
        taskDescription: "Respond to client emails and provide updates.",
        taskDate: "2024-11-19",
        category: "Communication",
      },
    ],
  },
  {
    id: "102",
    firstName: "Rohan",
    email: "jane.smith@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design new flyer",
        taskDescription: "Create a flyer for the marketing campaign.",
        taskDate: "2024-11-17",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct training session",
        taskDescription: "Lead a training session for new employees.",
        taskDate: "2024-11-15",
        category: "Training",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Market research",
        taskDescription: "Analyze market trends for upcoming projects.",
        taskDate: "2024-11-16",
        category: "Research",
      },
    ],
  },
  {
    id: "103",
    firstName: "Rahul",
    email: "emily.jones@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare budget proposal",
        taskDescription: "Draft a budget proposal for the next quarter.",
        taskDate: "2024-11-21",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Feedback review",
        taskDescription: "Review feedback forms submitted by employees.",
        taskDate: "2024-11-20",
        category: "HR",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team collaboration",
        taskDescription: "Collaborate on team project assignments.",
        taskDate: "2024-11-19",
        category: "Work",
      },
    ],
  },
  {
    id: "104",
    firstName: "Vikram",
    email: "michael.brown@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Software deployment",
        taskDescription: "Deploy the latest version of the software.",
        taskDate: "2024-11-19",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server maintenance",
        taskDescription: "Perform routine server maintenance.",
        taskDate: "2024-11-18",
        category: "IT",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database optimization",
        taskDescription: "Optimize database queries to improve performance.",
        taskDate: "2024-11-20",
        category: "IT",
      },
    ],
  },
  {
    id: "105",
    firstName: "Priya",
    email: "sarah.davis@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Survey analysis",
        taskDescription: "Analyze data from the latest customer survey.",
        taskDate: "2024-11-20",
        category: "Analytics",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social media campaign",
        taskDescription: "Plan posts for the social media campaign.",
        taskDate: "2024-11-19",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Customer feedback session",
        taskDescription: "Conduct a feedback session with key customers.",
        taskDate: "2024-11-21",
        category: "Customer Relations",
      },
    ],
  },
];

const admin = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  // you cant just pass the data directly but you have to first convert it in string by using stringfy methode
  localStorage.setItem("EMPLOYEES", JSON.stringify(employees));
  localStorage.setItem("ADMIN", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  // converting the data from string to object by using parse methode
  const employees = JSON.parse(localStorage.getItem("EMPLOYEES"));
  const admin = JSON.parse(localStorage.getItem("ADMIN"));
  return { employees, admin };
};
