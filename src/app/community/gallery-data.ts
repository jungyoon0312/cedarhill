export type GalleryCategory = {
  id: string;
  title: string;
  date: string;
  thumbnail: string; // 대표 이미지
  images: string[]; // 모든 이미지 배열
};

export const galleryCategories: GalleryCategory[] = [
  {
    id: "wittiverse",
    title: "Wittiverse Learning Center",
    date: "2026-02",
    thumbnail: "/images/wittiverse1.jpg",
    images: [
      "/images/wittiverse1.jpg",
      "/images/wittiverse2.jpg",
    ],
  },
  {
    id: "play-learn-hub",
    title: "Play & Learn Hub",
    date: "2026-02",
    thumbnail: "/images/lounge1.jpg",
    images: [
      "/images/lounge1.jpg",
      "/images/lounge2.jpg",
      "/images/lounge3.jpg",
      "/images/lounge4.jpg",
    ],
  },
  {
    id: "meeting-room",
    title: "Meeting Room",
    date: "2026-02",
    thumbnail: "/images/meeting room.jpg",
    images: [
      "/images/meeting room.jpg",
    ],
  },
  {
    id: "english-prep",
    title: "English Prep",
    date: "2026-02",
    thumbnail: "/images/english prep1.jpg",
    images: [
      "/images/english prep1.jpg",
    ],
  },
  {
    id: "gym",
    title: "GYM",
    date: "2026-02",
    thumbnail: "/images/gym.jpg",
    images: [
      "/images/gym.jpg",
      "/images/GYM2.jpg",
      "/images/GYM3.jpg",
    ],
  },
  {
    id: "cafeteria",
    title: "Cafeteria",
    date: "2026-02",
    thumbnail: "/images/cafeteria1.jpg",
    images: [
      "/images/cafeteria1.jpg",
      "/images/cafeteria2.jpg",
    ],
  },
  {
    id: "outside",
    title: "Outside",
    date: "2026-02",
    thumbnail: "/images/OUTSIDE1.jpg",
    images: [
      "/images/OUTSIDE1.jpg",
      "/images/OUTSIDE2.jpg",
      "/images/OUTSIDE3.jpg",
    ],
  },
  {
    id: "library",
    title: "Library",
    date: "2026-02",
    thumbnail: "/images/library1.jpg",
    images: [
      "/images/library1.jpg",
      "/images/library2.jpg",
    ],
  },
  {
    id: "renzuli-ai-coding",
    title: "RENZULI AI Coding Center",
    date: "2026-02",
    thumbnail: "/images/RENZULI1.jpg",
    images: [
      "/images/RENZULI1.jpg",
      "/images/RENZULI2.jpg",
      "/images/RENZULI3.jpg",
      "/images/RENZULI4.jpg",
    ],
  },
];

