import Image from "next/image";
import img from '@/assets/blob.png'
export const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={img}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    // {
    //   title: "Version control",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
    //       Version control
    //     </div>
    //   ),
    // },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

export const dummy = [
  {
    title: "Video Summarization",
    description: (
      <>
        <p>
        Transform lengthy videos into concise, insightful summaries with our advanced video summarization feature. Say goodbye to tedious hours spent sifting through footage and hello to streamlined content consumption.
        </p>
        <p>
        Our video summarization tool offers a range of key benefits designed to enhance your video content experience. Firstly, it saves you valuable time by automatically analyzing and condensing lengthy videos into bite-sized summaries. This feature streamlines content consumption, allowing you to focus on what matters most without the need to sift through hours of footage.
        </p>
        <p>
        Additionally, our tool enables you to capture the highlights of your videos swiftly. By quickly identifying the most important moments, you can extract key insights without having to watch the entire content. This not only saves time but also ensures that your audience receives the most impactful information.
        </p>
      </>
    ),
    badge: "data",
    image:
      img,
  },
  {
    title: "Video Context Query Answering System",
    description: (
      <>
        <p>
        Introducing our cutting-edge Video Context Query Answering System, a powerful feature designed to enhance user engagement and interaction on your landing page. With this innovative technology, your visitors can now extract valuable insights from videos effortlessly, driving higher conversion rates and fostering deeper connections with your audience.
        </p>
        <p>
        Our Video Context Query Answering System revolutionizes landing page engagement by providing immediate responses to user inquiries, transforming video content into a more accessible format, and streamlining the user experience. By offering real-time answers to queries, users can quickly find the information they need without extensive searching, resulting in higher satisfaction and engagement levels. Additionally, the systems ability to make video content more inclusive ensures that all users, regardless of their preferences or accessibility needs, can easily access and interact with the content.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
    img,
  },
  {
    title: "Video Answer Generation",
    description: (
      <>
        <p>
        With our cutting-edge Video Answer Generation feature, we empower educators and students alike with an innovative solution to enhance learning and comprehension. Leveraging advanced AI technology, this feature generates detailed answers to questions and provides relevant flowcharts, offering a comprehensive learning experience.
        </p>
        <p>
        Our Video Answer Generation feature offers a transformative solution for education, optimizing efficiency by streamlining the process of finding answers and grasping complex concepts. Through captivating interactive videos and visual aids, it engages students, fostering active participation and sustained focus. Furthermore, our platform enhances comprehension by providing comprehensive video explanations and dynamic flowcharts, facilitating deeper understanding of the subject matter. By delivering instant answers and resources, it also saves valuable time for both students and educators.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
    img,
  },
];

export const loadingStates = [
  {
    text: "fetching video",
  },
  {
    text: "transcribing",
  },
  {
    text: "contextualizing",
  },
  {
    text: "summarizing",
  },
  {
    text: "setting things up",
  },
]