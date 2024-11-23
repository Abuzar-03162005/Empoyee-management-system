const employees = [
  {
    id: "101",
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: "true",
        newTask: "true",
        completed: "false",
        failed: "false",
        title: "Prepare monthly report",
        description: "Compile and finalize the monthly performance report.",
        date: "2024-11-21",
        category: "Work",
      },
      {
        active: "false",
        newTask: "false",
        completed: "true",
        failed: "false",
        title: "Team meeting",
        description: "Participate in the weekly team progress meeting.",
        date: "2024-11-18",
        category: "Meeting",
      },
      {
        active: "true",
        newTask: "false",
        completed: "false",
        failed: "true",
        title: "Follow-up with clients",
        description: "Respond to client emails and provide updates.",
        date: "2024-11-19",
        category: "Communication",
      },
    ],
  },
  {
    id: "102",
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        active: "true",
        newTask: "true",
        completed: "false",
        failed: "false",
        title: "Design new flyer",
        description: "Create a flyer for the marketing campaign.",
        date: "2024-11-17",
        category: "Marketing",
      },
      {
        active: "false",
        newTask: "false",
        completed: "true",
        failed: "false",
        title: "Conduct training session",
        description: "Lead a training session for new employees.",
        date: "2024-11-15",
        category: "Training",
      },
      {
        active: "true",
        newTask: "false",
        completed: "false",
        failed: "true",
        title: "Market research",
        description: "Analyze market trends for upcoming projects.",
        date: "2024-11-16",
        category: "Research",
      },
    ],
  },
  {
    id: "103",
    email: "emily.jones@example.com",
    password: "123",
    tasks: [
      {
        active: "true",
        newTask: "true",
        completed: "false",
        failed: "false",
        title: "Prepare budget proposal",
        description: "Draft a budget proposal for the next quarter.",
        date: "2024-11-21",
        category: "Finance",
      },
      {
        active: "false",
        newTask: "false",
        completed: "true",
        failed: "false",
        title: "Feedback review",
        description: "Review feedback forms submitted by employees.",
        date: "2024-11-20",
        category: "HR",
      },
      {
        active: "true",
        newTask: "false",
        completed: "true",
        failed: "false",
        title: "Team collaboration",
        description: "Collaborate on team project assignments.",
        date: "2024-11-19",
        category: "Work",
      },
    ],
  },
  {
    id: "104",
    email: "michael.brown@example.com",
    password: "123",
    tasks: [
      {
        active: "true",
        newTask: "true",
        completed: "false",
        failed: "false",
        title: "Software deployment",
        description: "Deploy the latest version of the software.",
        date: "2024-11-19",
        category: "IT",
      },
      {
        active: "false",
        newTask: "false",
        completed: "true",
        failed: "false",
        title: "Server maintenance",
        description: "Perform routine server maintenance.",
        date: "2024-11-18",
        category: "IT",
      },
      {
        active: "true",
        newTask: "false",
        completed: "false",
        failed: "true",
        title: "Database optimization",
        description: "Optimize database queries to improve performance.",
        date: "2024-11-20",
        category: "IT",
      },
    ],
  },
  {
    id: "105",
    email: "sarah.davis@example.com",
    password: "123",
    tasks: [
      {
        active: "true",
        newTask: "true",
        completed: "false",
        failed: "false",
        title: "Survey analysis",
        description: "Analyze data from the latest customer survey.",
        date: "2024-11-20",
        category: "Analytics",
      },
      {
        active: "false",
        newTask: "false",
        completed: "true",
        failed: "false",
        title: "Social media campaign",
        description: "Plan posts for the social media campaign.",
        date: "2024-11-19",
        category: "Marketing",
      },
      {
        active: "true",
        newTask: "false",
        completed: "false",
        failed: "true",
        title: "Customer feedback session",
        description: "Conduct a feedback session with key customers.",
        date: "2024-11-21",
        category: "Customer Relations",
      },
    ],
  },
];

const admin = [
  {
    id: "1",
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
  // console.log(employees);
  // console.log(admin);
};
