const CourseData = [
  {
    id: 1,
    rating:4.5,
    price:"₹1200",
    instructor:"Vikram Singh",
    name: "Introduction to Management",
    description: "Learn the basic principles of management.",
    longDescription:
      "This course provides a comprehensive overview of the fundamental principles of management. Students will learn about planning, organizing, leading, and controlling resources in an organization. Topics include management theories, organizational structure, team dynamics, motivation, and communication. Real-world examples and case studies will be used to illustrate key concepts.",
    modules: [
      { title: "Module 1: Overview of Management" },
      { title: "Module 2: Planning and Organizing" },
      { title: "Module 3: Leading and Controlling" },
      { title: "Module 4: Management Theories" },
      { title: "Module 5: Organizational Structure" },
    ],
    videos: [
      { id: "--x7q3PTT_c", title: "Module 1: Overview of Management" },
      { id: "fJ9rUzIMcZQ", title: "Mod  ule 2: Planning and Organizing" },
      { id: "YOUTUBE_VIDEO_ID_3", title: "Module 3: Leading and Controlling" },
      { id: "VIDEO_ID_4", title: "Module 4: Management Theories" },
      { id: "VIDEO_ID_5", title: "Module 5: Organizational Structure" },
    ],
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1551135049-83f3419ef05c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    instructor:"Priya Deshmukh",
    price:"₹1500",
    rating:4.0,
    name: "Financial Accounting",
    description: "Understand the fundamentals of financial accounting.",
    longDescription:
      "This course introduces the core concepts of financial accounting. Students will learn how to prepare and analyze financial statements, including balance sheets, income statements, and cash flow statements. The course covers the accounting cycle, basic accounting principles, and the interpretation of financial information for decision-making.",
    modules: [
      { title: "Module 1: Basic Accounting Principles" },
      { title: "Module 2: Analyzing Financial Statements" },
      { title: "Module 3: The Accounting Cycle" },
    ],
    videos: [
      { id: "W4wh3cW8yYk", title: "Module 1: Basic Accounting Principles" },
      { id: "t_yJ2i4IP0w", title: "Module 2: Analyzing Financial Statements" },
      { id: "ANOTHER_VIDEO_ID_1", title: "Module 3: The Accounting Cycle" },
    ],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661313684055-81cfb3dd17d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    instructor:"Aditya Verma",
    price:"₹1000",
    rating:4.9,
    name: "Marketing Essentials",
    description: "Explore core marketing concepts and strategies.",
    longDescription:
      "This course provides a comprehensive introduction to the world of marketing. Students will explore key concepts such as market segmentation, targeting, and positioning. The course will also cover the marketing mix (product, price, place, promotion), consumer behavior, and marketing strategy development. Emphasis will be placed on both traditional and digital marketing approaches.",
    modules: [
      { title: "Module 1: Introduction to Marketing" },
      { title: "Module 2: Marketing Mix" },
      { title: "Module 3: Digital Marketing" },
      { title: "Module 4: Consumer Behavior" },
    ],
    videos: [
      { id: "oKxzwc7LTlc", title: "Module 1: Introduction to Marketing" },
      { id: "y60_o-vFz2s", title: "Module 2: Marketing Mix" },
      { id: "8-W-fJ9tq8o", title: "Module 3: Digital Marketing" },
      { id: "RANDOM_ID_9", title: "Module 4: Consumer Behavior" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    instructor:"Sneha Nair",
    rating:4.6,
    price:"₹1800",
    name: "Human Resource Management",
    description: "Learn about managing people in organizations.",
    longDescription:
      "This course examines the principles and practices of human resource management. Topics include job analysis, recruitment, selection, training, performance appraisal, compensation, and employee relations. The course also addresses legal and ethical considerations in HRM, as well as current trends and challenges in the field.",
    modules: [
      { title: "Module 1: Introduction to HRM" },
      { title: "Module 2: Recruitment and Selection" },
      { title: "Module 3: Training and Development" },
      { title: "Module 4: Performance Appraisal" },
    ],
    videos: [
      { id: "P_wK5h5c3ZY", title: "Module 1: Introduction to HRM" },
      { id: "EElv9hQPj6s", title: "Module 2: Recruitment and Selection" },
      { id: "SOME_OTHER_ID_22", title: "Module 3: Training and Development" },
      { id: "UNIQUE_VIDEO_ID_5", title: "Module 4: Performance Appraisal" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    instructor:"Rohan Mehta",
    price:"₹1000",
    rating:4.3,
    name: "Project Management",
    description: "Master the tools and techniques of project management.",
    longDescription:
      "This course provides a thorough grounding in the principles and practices of project management. Students will learn how to define, plan, execute, monitor, and close projects. The course covers project management methodologies, tools and techniques for scheduling, budgeting, risk management, and quality control. Students will also develop their skills in teamwork, communication, and problem-solving.",
    modules: [
      { title: "Module 1: Project Planning" },
      { title: "Module 2: Project Execution" },
      { title: "Module 3: Project Closing" },
      { title: "Module 4: Risk Management" },
      { title: "Module 5: Quality Control" },
    ],
    videos: [
      { id: "2TeYmpr-tKk", title: "Module 1: Project Planning" },
      { id: "nZ5j7-vRj7s", title: "Module 2: Project Execution" },
      { id: "x4jB_2W7MaI", title: "Module 3: Project Closing" },
      { id: "NEW_ID_101", title: "Module 4: Risk Management" },
      { id: "LAST_VIDEO_ID", title: "Module 5: Quality Control" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    instructor:"Meera Iyer",
    price:"₹1700",
    rating:4.7,
    name: "Business Communication",
    description: "Develop effective communication skills for the workplace.",
    longDescription:
      "This course focuses on developing effective communication skills for the professional world. Students will learn how to write clear and concise business documents, deliver engaging presentations, and participate effectively in meetings and group discussions. The course will also cover nonverbal communication, intercultural communication, and the use of technology to enhance communication.",
    modules: [
      { title: "Module 1: Communication Fundamentals" },
      { title: "Module 2: Written Communication" },
      { title: "Module 3: Presentation Skills" },
      { title: "Module 4: Intercultural Communication" },
    ],
    videos: [
      { id: "t5n-idkAp9E", title: "Module 1: Communication Fundamentals" },
      { id: "v2z6jz5j3-o", title: "Module 2: Written Communication" },
      { id: "ANOTHER_UNIQUE_ID", title: "Module 3: Presentation Skills" },
      { id: "FINAL_VIDEO_ID", title: "Module 4: Intercultural Communication" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 {
  id: 7,
  instructor:"Karthik Reddy",
  price:"₹1500",
  rating: 4.5,
  name: "Introduction to Project Management",
  description: "Master the basics of managing successful projects.",
  longDescription:
    "This course provides a comprehensive introduction to project management. Students will explore key concepts such as project planning, scheduling, budgeting, and risk management. Real-world case studies and hands-on exercises will help learners apply these principles to actual projects.",
  modules: [
    { title: "Module 1: Project Lifecycle" },
    { title: "Module 2: Planning & Scheduling" },
    { title: "Module 3: Risk and Quality Management" },
    { title: "Module 4: Project Closure" },
  ],
  videos: [
    { id: "pjM_7uHg4ro", title: "Module 1: Project Lifecycle" },
    { id: "lZ4kBXRnOwY", title: "Module 2: Planning & Scheduling" },
    { id: "qPA3Tf2jxyU", title: "Module 3: Risk and Quality Management" },
    { id: "PLJZ5K2EiIM", title: "Module 4: Project Closure" },
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  id: 8,
  instructor:"Diya Patel",
  price:"₹2200",
  rating: 4.2,
  name: "Digital Marketing Essentials",
  description: "Learn core strategies and tools used in digital marketing.",
  longDescription:
    "This course offers insights into the dynamic world of digital marketing. Students will learn about SEO, social media marketing, email campaigns, and analytics. The course emphasizes practical skills and strategies to design, implement, and measure effective marketing campaigns.",
  modules: [
    { title: "Module 1: SEO & Content Marketing" },
    { title: "Module 2: Social Media Strategies" },
    { title: "Module 3: Email & Influencer Marketing" },
    { title: "Module 4: Data Analytics in Marketing" },
  ],
  videos: [
    { id: "8GxJzKpT9T4", title: "Module 1: SEO & Content Marketing" },
    { id: "Vc1HovRVHO8", title: "Module 2: Social Media Strategies" },
    { id: "r2NbOCwvS0Q", title: "Module 3: Email & Influencer Marketing" },
    { id: "4ZZBtR-LTx4", title: "Module 4: Data Analytics in Marketing" },
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  id: 9,
  instructor:"Aarav Sharma",
  price:"₹1900",
  rating: 4.7,
  name: "Critical Thinking and Problem Solving",
  description: "Enhance decision-making through analytical thinking techniques.",
  longDescription:
    "This course is designed to help students develop logical reasoning and critical thinking skills essential for problem-solving in academic and workplace settings. Topics include logical fallacies, creative problem solving, and decision-making frameworks.",
  modules: [
    { title: "Module 1: Introduction to Critical Thinking" },
    { title: "Module 2: Logical Reasoning" },
    { title: "Module 3: Creative Problem Solving" },
    { title: "Module 4: Decision-Making Models" },
  ],
  videos: [
    { id: "kPt6PIlWY1Q", title: "Module 1: Introduction to Critical Thinking" },
    { id: "vME5q3Gooxs", title: "Module 2: Logical Reasoning" },
    { id: "J_R9rsCRaUo", title: "Module 3: Creative Problem Solving" },
    { id: "nmdD-YNRbdo", title: "Module 4: Decision-Making Models" },
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1649478680984-01586ce84ac0?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}

];

export default CourseData;
