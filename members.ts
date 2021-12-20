import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "kondei",
    name: "kondei",
    role: "web frontend engineer",
    bio: "大阪大学 基礎工学部 情報科学科 → dwango → justInCaseTechnologies",
    avatarSrc: "/avatars/kondei.png",
    sources: [
      "https://qiita.com/kondei/feed.atom",
      "https://zenn.dev/kondei/feed?include_scraps=1&all=1",
    ],
    twitterUsername: "kondei_dev",
    githubUsername: "kondei",
  },
  {
    id: "hiroga",
    name: "Hiroaki Ogasawara",
    role: "Software Engineer",
    bio: "ICU → IBM Japan → justInCase(Technologies)",
    avatarSrc: "https://pbs.twimg.com/profile_images/1402945704176209924/TbTuPO1D_400x400.jpg",
    sources: [
      "https://qiita.com/hiroga/feed.atom",
      "https://zenn.dev/hiroga/feed",
      "https://hiroga.hatenablog.com/rss",
    ],
    twitterUsername: "xhiroga",
    githubUsername: "xhiroga",
  },
];
