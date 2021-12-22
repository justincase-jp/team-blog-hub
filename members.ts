import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "jict",
    name: "justInCase Technologies",
    bio: "justInCaseTechnologiesは、保険を変える保険テック会社です",
    avatarSrc: "https://github.com/justincase-jp.png",
    sources: [
      "https://jict.hatenablog.com/rss",
    ],
    twitterUsername: "justInCaseHoken",
    githubUsername: "justincase-jp",
  },
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
    avatarSrc: "https://github.com/xhiroga.png",
    sources: [
      "https://qiita.com/hiroga/feed.atom",
      "https://zenn.dev/hiroga/feed?all=1",
      "https://hiroga.hatenablog.com/rss",
    ],
    twitterUsername: "xhiroga",
    githubUsername: "xhiroga",
  },
  {
    id: "takkyun",
    name: "takkyun",
    role: "Software Engineer",
    bio: "NZ 🇳🇿 在住 / 2017年より justInCase 参画",
    avatarSrc: "/avatars/takkyun.png",
    sources: [
      "https://qiita.com/takkyun/feed.atom",
      "https://zenn.dev/takkyun/feed?all=1",
      "https://serennz.sakura.ne.jp/sb/sb.cgi?feed=rss&cid=1",
      "https://serennz.sakura.ne.jp/sb/sb.cgi?feed=rss&cid=2",
      "https://note.com/takkyun/rss",
    ],
    twitterUsername: "takkyun",
    githubUsername: "takkyun",
  },
];
