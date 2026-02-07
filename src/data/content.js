export const heroStats = [
  { label: "Research Papers", value: "6" },
  { label: "Datasets", value: "5" },
  { label: "Models", value: "3" },
  { label: "Spaces", value: "3" },
];

export const featuredDatasets = [
  {
    name: "HockeyOrient",
    season: "Ice Hockey",
    description: "Dataset for ice hockey player orientation classification.",
    status: "Public",
    link: "https://huggingface.co/datasets/SimulaMet-HOST/HockeyOrient",
  },
  {
    name: "HockeyRink",
    season: "Ice Hockey",
    description: "Dataset for precise ice hockey rink keypoint mapping and analytics.",
    status: "Public",
    link: "https://huggingface.co/datasets/SimulaMet-HOST/HockeyRink",
  },
  {
    name: "HockeyAI",
    season: "Ice Hockey",
    description: "Multi-class ice hockey dataset for object detection.",
    status: "Public",
    link: "https://huggingface.co/datasets/SimulaMet-HOST/HockeyAI",
  },
  {
    name: "MoneyPuck NHL Data",
    season: "NHL (2008-present)",
    description:
      "Open NHL skater, goalie, team and shot datasets with a published data dictionary.",
    status: "Open (non-commercial)",
    link: "https://www.moneypuck.com/data.htm",
  },
  {
    name: "fastRhockey-data (NHL)",
    season: "NHL",
    description:
      "Open hockey data repository with NHL schedule/team files and documented PHF play-by-play and boxscore data.",
    status: "Public",
    link: "https://github.com/sportsdataverse/fastRhockey-data",
  },
];

export const featuredModels = [
  {
    name: "HockeyAI",
    type: "Hugging Face Model",
    description: "Model artifacts aligned with the HockeyAI dataset and tasks.",
    link: "https://huggingface.co/SimulaMet-HOST/HockeyAI",
  },
  {
    name: "HockeyRink",
    type: "Hugging Face Model",
    description: "Model resources for rink keypoint localization and mapping pipelines.",
    link: "https://huggingface.co/SimulaMet-HOST/HockeyRink",
  },
  {
    name: "HockeyOrient",
    type: "Hugging Face Model",
    description: "Model package for player orientation classification in ice hockey.",
    link: "https://huggingface.co/SimulaMet-HOST/HockeyOrient",
  },
];

export const spaces = [
  {
    name: "HockeyAI Space",
    description: "Interactive demo space for HockeyAI workflows.",
    link: "https://huggingface.co/spaces/SimulaMet-HOST/HockeyAI",
  },
  {
    name: "HockeyOrient Space",
    description: "Interactive demo space for orientation-based analysis.",
    link: "https://huggingface.co/spaces/SimulaMet-HOST/HockeyOrient",
  },
  {
    name: "HockeyRink Space",
    description: "Interactive demo space for rink mapping and visualization.",
    link: "https://huggingface.co/spaces/SimulaMet-HOST/HockeyRink",
  },
];

export const papers = [
  {
    title: "Hockey2D: A Keypoint-Based Framework for Ice Hockey Rink Localization and Object Mapping",
    year: 2025,
    venue: "CBMI 2025",
    link: "https://ieeexplore.ieee.org/abstract/document/11339314",
    note: "Rink localization and object mapping framework for structured hockey video analysis.",
  },
  {
    title: "HockeyOrient: A Dataset for Ice Hockey Player Orientation Classification",
    year: 2025,
    venue: "ACM Multimedia Systems 2025",
    link: "https://dl.acm.org/doi/abs/10.1145/3712676.3718342",
    note: "Dataset supporting orientation-aware player analysis in ice hockey.",
  },
  {
    title: "HockeyAI: A Multi-Class Ice Hockey Dataset for Object Detection",
    year: 2025,
    venue: "ACM Multimedia Systems 2025",
    link: "https://dl.acm.org/doi/abs/10.1145/3712676.3718335",
    note: "Multi-class benchmark dataset for object detection in hockey broadcast video.",
  },
  {
    title: "HockeyRink: A Dataset for Precise Ice Hockey Rink Keypoint Mapping and Analytics",
    year: 2025,
    venue: "ACM Multimedia Systems 2025",
    link: "https://dl.acm.org/doi/abs/10.1145/3712676.3718338",
    note: "Keypoint mapping dataset for accurate rink geometry and downstream analytics.",
  },
  {
    title: "AI-Based Cropping of Ice Hockey Videos for Different Social Media Representations",
    year: 2024,
    venue: "IEEE Access",
    link: "https://ieeexplore.ieee.org/abstract/document/10643970",
    note: "Adaptive hockey video cropping tuned for social-media aspect ratios and storytelling.",
  },
  {
    title: "SmartCrop-H: AI-Based Cropping of Ice Hockey Videos",
    year: 2024,
    venue: "ACM Multimedia Systems 2024",
    link: "https://dl.acm.org/doi/abs/10.1145/3625468.3652195",
    note: "Ice-hockey-specific automated cropping pipeline for highlight production.",
  },
];

export const hockeyVideos = [
  {
    title: "HockeyOrient",
    description: "Orientation-aware player analysis demo from the HockeyOrient dataset.",
    url: "https://www.youtube.com/watch?v=ibWJtXZIsM8",
    note: "Highlights player orientation classification and visual overlays.",
  },
  {
    title: "HockeyRink",
    description: "Rink keypoint mapping and analytics visualization.",
    url: "https://www.youtube.com/watch?v=JCnX4N4fi8I",
    note: "Focuses on rink localization and structured analytics output.",
  },
  {
    title: "HockeyAI",
    description: "Multi-class object detection showcase for hockey broadcast video.",
    url: "https://www.youtube.com/watch?v=KYnvicVUtOc",
    note: "Demonstrates real-time object detection outputs.",
  },
  {
    title: "SmartCrop Ice Hockey",
    description: "Automatic cropping for social-ready hockey highlights.",
    url: "https://www.youtube.com/watch?v=Uk-6g1Lq7wo",
    note: "SmartCrop pipeline tuned for hockey footage and output formats.",
  },
  {
    title: "SmartCrop Ice Hockey (Alt)",
    description: "Second SmartCrop demo with alternate gameplay footage.",
    url: "https://www.youtube.com/watch?v=rMmYOCM-k7A",
    note: "Shows adaptive cropping behavior for different play sequences.",
  },
];
