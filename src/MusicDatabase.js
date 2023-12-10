import { database } from "./firebase-config";
import { ref, set } from "firebase/database";

const Songs = [
    {
      id: 0,
      type: "Vpop",
      favourite: false,
      songName: "Don't Côi",
      artist: "RPT Orijinn, Ronboogz",
      view: "17.415.546",
      duration: "02:26", 
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F001-Don't%20C%C3%B4i.mp3?alt=media&token=709e8e69-cd1d-462f-a3dd-4795541230ea",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F001-Don't%20C%C3%B4i.jpg?alt=media&token=ed8acb96-93e5-44fe-9e2c-8759c5949b25",
    },
    {
      id: 1,
      type: "US-UK",
      favourite: false,
      songName: "Legend Never Die",
      artist: "Against The Current",
      view: "534.807.877",
      duration: "02:59",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F002-Legend%20Never%20Die.mp3?alt=media&token=4af596da-c710-4db6-9072-914b264c7d27",
      imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F002-Legend%20Never%20Die.jpg?alt=media&token=0cd9eb1f-a2f3-4e99-90ce-c6a646ce836b",
    },
    {
      id: 2,
      type: "Vpop",
      favourite: true,
      songName: "Bạn Đời",
      artist: "Karik, GDucky",
      view: "5.805.313",
      duration: "05:18",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F003-B%E1%BA%A1n%20%C4%90%E1%BB%9Di.mp3?alt=media&token=496766c3-c373-4a8e-a2db-7fc535e1d65f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F003-B%E1%BA%A1n%20%C4%90%E1%BB%9Di.jpg?alt=media&token=d7a72116-839f-4755-9b85-ee5464ee05a9",
    },
    {
      id: 3,
      type: "Vpop",
      favourite: false,
      songName: "Chúng ta không thuộc về nhau",
      artist: "Sơn Tùng M-TP",
      view: "7.895.052",
      duration: "04:02",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F004-CTKTVN.mp3?alt=media&token=133cbc2d-8d7b-4bcb-853c-ca3773673450",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F004-CTKTVN.jpeg?alt=media&token=39a41d5c-eb58-48f4-b0a7-35ec1c41fb9c",
    },
    {
      id: 4,
      type: "Vpop",
      favourite: false,
      songName: "Em Là",
      artist: "MONO, Onionn",
      view: "11.851.492",
      duration: "03:20",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F005-Em%20L%C3%A0.mp3?alt=media&token=66a75fdf-fe51-4a6f-9dda-0e741c8dd26b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F005-Em%20L%C3%A0.jpg?alt=media&token=e429bdfc-c5a2-4c9e-b350-6802db0bee6a",
    },
    {
      id: 5,
      songName: "Call of Silence",
      artist: "Hiroyuki Sawano",
      view: "39.728.553",
      duration: "03:02",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F006-Call%20of%20Silence.mp3?alt=media&token=7c4ab6b5-73e5-401a-8f17-fc69ccf9efa7",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F006-Call%20Of%20Silence.jpg?alt=media&token=8de770e7-a4d8-48eb-9e62-88aea738fefd",
    },
    {
      id: 6,
      type: "Vpop",
      favourite: true,
      songName: "There's No One At All",
      artist: "Sơn Tùng M-TP",
      view: "9.099.692",
      duration: "03:41",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F007-NoOneAtAll.mp3?alt=media&token=2c79c850-9a84-4ec7-b94e-d614d6cf260d",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F007-NoOneAtAll.jpg?alt=media&token=bd4af2f9-007b-439e-b50a-239137ba6b68",
    },
    {
      id: 7,
      type: "Vpop",
      favourite: false,
      songName: "Từng Quen",
      artist: "Wren Evans, itsnk",
      view: "8.607.343",
      duration: "02:54",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F008-T%E1%BB%ABng%20Quen.mp3?alt=media&token=4e6c7921-9434-44d0-b4cf-db395d77ad60",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F008-T%E1%BB%ABng%20Quen.jpg?alt=media&token=fad2c31b-af50-43db-99ab-938f39b5f817",
    },
    {
      id: 8,
      type: "Vpop",
      favourite: false,
      songName: "Exit Sign",
      artist: "HIEUTHUHAI, marzuz",
      view: "1.766.691",
      duration: "03:21",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F009-Exit%20Sign.mp3?alt=media&token=ca83ae62-103f-47d0-b1e1-0d303d040df0",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F009-Exit%20Sign.jpg?alt=media&token=590733c4-096a-4a49-a5ae-3fa11541074c",
    },
    {
      id: 9,
      type: "Vpop",
      favourite: true,
      songName: "Từ Chối Hiểu",
      artist: "RHYDER",
      view: "2.443.756",
      duration: "04:08",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music%2F010-T%E1%BB%AB%20Ch%E1%BB%91i%20Hi%E1%BB%83u.mp3?alt=media&token=5c6a8cbd-40ae-4031-a582-45cc4c19abdd",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image%2F010-T%E1%BB%AB%20Ch%E1%BB%91i%20Hi%E1%BB%83u.jpg?alt=media&token=e1704b27-2285-4df8-b4be-c022959adb98",
    },
    {
      id: 10,
      type: "US-UK",
      favourite: true,
      songName: "Attention",
      artist: "Charlie Puth",
      view: "2.443.756",
      duration: "03:51",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music2%2F001%20-%20Attention.mp3?alt=media&token=03a65096-4697-49bb-9363-69ed2a3260ef",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image2%2FAttention.jfif?alt=media&token=b19d6c6e-e901-4c51-b2ce-662325f2705a",
    },
    {
      id: 11,
      type: "Vpop",
      favourite: true,
      songName: "Lối Nhỏ",
      artist: "Đen Vâu",
      view: "2.443.756",
      duration: "04:59",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music2%2F002%20-%20L%E1%BB%91i%20Nh%E1%BB%8F.mp3?alt=media&token=8256323b-b2ea-4ec5-bdad-a7055530ad2f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image2%2FLoi%20Nho.jfif?alt=media&token=d610bdb2-f455-412b-a8df-03ac27e6994c",
    },
    {
      id: 12,
      type: "Vpop",
      favourite: true,
      songName: "Vì Anh Đâu Có Biết",
      artist: "Vũ",
      view: "2.443.756",
      duration: "04:20",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music2%2F003%20-%20V%C3%AC%20Anh%20%C4%90%C3%A2u%20C%C3%B3%20Bi%E1%BA%BFt.mp3?alt=media&token=c16087ca-e011-4c71-8b0d-d867f8cf4848",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image2%2FVADCB.jfif?alt=media&token=16be85d3-aab2-44c7-a12c-6fa8ee6fb8a6",
    },
    {
      id: 13,
      type: "US-UK",
      favourite: true,
      songName: "Havana",
      artist: "Camila Cabello ft. Young Thug",
      view: "2.443.756",
      duration: "03:38",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music2%2F004%20-%20Havana.mp3?alt=media&token=b0feabbe-e32e-414b-8d50-7a43098bc598",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image2%2F004%20-%20Havana.jpg?alt=media&token=49480452-27f4-49db-b131-c213cb74abb8",
    },
    {
      id: 14,
      type: "Vpop",
      favourite: true,
      songName: "Lọ Lem Hè Phố",
      artist: "Trung tâm băng đĩa lậu hải ngoại",
      view: "2.443.756",
      duration: "04:08",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music2%2F005%20-%20L%E1%BB%8D%20Lem%20H%C3%A8%20Ph%E1%BB%91.mp3?alt=media&token=d4018a21-f3ed-4028-bfc1-e66a15220079",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image2%2F005%20-%20L%E1%BB%8D%20Lem%20H%C3%A8%20Ph%E1%BB%91.jpg?alt=media&token=a7429b21-c042-4d16-98c3-ea8a3ff290f7",
    },
    {
      id: 15,
      type: "US-UK",
      favourite: true,
      songName: "Hotel California",
      artist: "Eagles",
      view: "2.443.756",
      duration: "06:44",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Music2%2F006%20-%20Hotel%20California.mp3?alt=media&token=d57df226-84f1-4a0a-bdf6-8227fbbfe21b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Image2%2FHotel%20Cali.jfif?alt=media&token=0537e2a0-f6ca-45a0-8715-a611fb6a1609",
    },
    {
      id: 16,
      type: "US-UK",
      favourite: true,
      songName: "We Don't Talk Anymore",
      artist: "Charlie Puth ft. Selena Gomez",
      view: "4.543.756",
      duration: "04:08",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/US-UK%2F001%20-%20Charlie%20Puth%20-%20We%20Don't%20Talk%20Anymore%20(feat.%20Selena%20Gomez).mp3?alt=media&token=c1191f0d-9de6-4eae-8c13-4d6c0ba1b513",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/IMGUS-UK%2F001%20-%20We%20Don't%20Talk%20Anymore.png?alt=media&token=54f34e21-d2ff-43be-b6b8-c7b4b58b0cf4",
    },
    {
      id: 17,
      type: "US-UK",
      favourite: false,
      songName: "Closer",
      artist: "The Chainsmokers ft. Halsey",
      view: "3.443.756",
      duration: "04:08",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/US-UK%2F002%20-%20The%20Chainsmokers%20-%20Closer%20(Lyric)%20ft.%20Halsey.mp3?alt=media&token=0a384af5-829f-4d7a-b788-2a54630b6e33",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/IMGUS-UK%2F002%20-%20Closer.png?alt=media&token=84ee28d0-7b7a-43e0-a088-15a792b2a3ff",
    },
    {
      id: 18,
      type: "China",
      favourite: false,
      songName: "Thu Thương Biệt Luyến",
      artist: "Chính Là Nam Phương Khải",
      view: "1.500.756",
      duration: "04:08",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/China%2F001%20-%20Vietsub%20-%20PinyinThu%20Th%C6%B0%C6%A1ng%20Bi%E1%BB%87t%20Luy%E1%BA%BFn%20%20Ch%C3%ADnh%20L%C3%A0%20Nam%20Ph%C6%B0%C6%A1ng%20Kh%E1%BA%A3i%20-%20%E7%A7%8B%E6%AE%87%E5%88%AB%E6%81%8B%20-%20%E5%B0%B1%E6%98%AF%E5%8D%97%E6%96%B9%E5%87%B1.mp3?alt=media&token=b19a149c-7fe3-4de3-a73f-f8a76971f572",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/IMG-China%2F001%20-%20Thu%20Th%C6%B0%C6%A1ng%20Bi%E1%BB%87t%20Luy%E1%BA%BFn.png?alt=media&token=43a683a5-a1fb-4640-971b-c69653e67d21",
    },
    {
      id: 19,
      type: "China",
      favourite: true,
      songName: "Phi Điểu và Ve Sầu",
      artist: "Nhậm Nhiên",
      view: "1.443.756",
      duration: "04:08",
      song: "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/China%2F002%20-%20%5BVietsub%2BTiktok%5D%20Phi%20%C4%90i%E1%BB%83u%20V%C3%A0%20Ve%20S%E1%BA%A7u%20-%20Nh%E1%BA%ADm%20Nhi%C3%AAn%20-%20%E9%A3%9E%E9%B8%9F%E5%92%8C%E8%9D%89%20-%20%E4%BB%BB%E7%84%B6%20-%20Nh%E1%BA%A1c%20Hoa%20t%C3%A2m%20tr%E1%BA%A1ng.mp3?alt=media&token=bc8d0807-12e5-4f6f-bad7-6ff4786b3a11",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/IMG-China%2F002%20-%20Phi%20%C4%90i%E1%BB%83u%20v%C3%A0%20Ve%20S%E1%BA%A7u.png?alt=media&token=9b5f84c9-e4f0-4613-ba50-192932bcf3bf",
    }
  ];

  //Đẩy dữ liệu bài hát lên realtime database
  set(ref(database, 'SongInformation/'), {Songs});
