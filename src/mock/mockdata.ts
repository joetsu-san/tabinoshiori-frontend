import { ModelCourseOverview } from "@/@types";
import { OfficialSpotBookmark } from "../../api/@types/index";

export const data = [
  {
    id: "auvfuwfba",
    tourismSpots: {
      id: "bfouabwb",
      title: "上越妙高駅",
      ruby: "じょうえつみょうこうえき",
      description: "",
      address: "address",
      latitude: 31,
      longitude: 30,
      officialSpotStatus: "open",
      officialSpotImages: [
        {
          id: "aaaaaaaa",
          src: "https://picsum.photos/200/300",
        },
      ],
    },
    travelPlanId: "",
    comment: "集合場所",
    sortIndex: 0,
    minuteToNext: 6,
    startTime: "12:00",
  },
  {
    id: "f9ha9",
    tourismSpots: {
      id: "bfouabwb",
      title: "上越市立歴史博物館",
      ruby: "じょうえつしりつれきしはくぶつかん",
      description: "",
      address: "address",
      latitude: 31,
      longitude: 30,
      officialSpotStatus: "open",
      officialSpotImages: [
        {
          id: "aaaaaaaa",
          src: "https://picsum.photos/200/300",
        },
      ],
    },
    travelPlanId: "",
    comment: "集合場所",
    sortIndex: 0,
    minuteToNext: 6,
    startTime: "12:00",
  },
];

export const modelcourselist: ModelCourseOverview[] = [
  {
    id: "1",
    modelCourseImages: [
      {
        id: "",
        src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      },
    ],
    title: "#上越もよう おすすめお出かけプラン",
    description:
      "当市のスポットを巡る「お出かけプラン」をインスタグラムで募集するキャンペーンを実施し、市民や上越市にお越しのみなさんから投稿いただいたプランをご紹介します。",
    requiredMinute: 120,
  },
  {
    id: "2",
    title: "サクラ咲く！春爛漫コース",
    description:
      "日本三大夜桜のひとつに称される高田城址公園の桜をはじめ、城下町高田には徒歩圏内にさまざまな桜の名所が存在します。地元スタッフおすすめの、隠れた名所を散策してみてください。",
    requiredMinute: 120,
    modelCourseImages: [
      {
        id: "",
        src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "3",
    title: "城下町高田さんぽ",
    description:
      "慶長19年（1614年）の高田城築城とともに造られた城下町高田。平成26年（2014年）に開府400年を迎えたこの地には、今も城下町の風情を残す町家と、雁木の街並みが残ります。歴史の香り漂う城下町で、四季折々の風情を味わってみませんか。",
    requiredMinute: 300,
    modelCourseImages: [
      {
        id: "",
        src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "4",
    title: "春日山城じっくり堪能コース",
    description:
      "上杉謙信公が居城としていた天下の名城・春日山城。標高180mの山の地形を生かした天然の要害には、今なお土塁や空堀などの遺構が数多く残っています。当時に思いを馳せながら、城跡に点在する遺構を巡ることで、壮大な戦国ロマンを体感することができます。",
    requiredMinute: 30,
    modelCourseImages: [
      {
        id: "",
        src: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "5",
    title: "わくわく学習コース",
    description:
      "上杉謙信公が居城としていた天下の名城・春日山城。標高180mの山の地形を生かした天然の要害には、今なお土塁や空堀などの遺構が数多く残っています。当時に思いを馳せながら、城跡に点在する遺構を巡ることで、壮大な戦国ロマンを体感することができます。",
    requiredMinute: 210,
    modelCourseImages: [
      {
        id: "",
        src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "6",
    title: "上杉謙信公ゆかりの地めぐり",
    description:
      "上杉謙信公は、越後守護代であった長尾為景（ながおためかげ）の末子として誕生。幼名を虎千代と名乗りました。謙信公の戦歴は、元服をした天文12（1543）年に始まります。以降、武田晴信（信玄）や北条氏康、織田信長といった戦国時代の名将と戦を重ねましたが、その戦いは欲によるものではなく、義を重んじ出兵したものだったといわれています。",
    requiredMinute: 120,
    modelCourseImages: [
      {
        id: "",
        src: "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

export const modelcoursedetail = {
  id: "00000000-0000-0000-0000-000000000000",
  title: "モデルコースのタイトル",
  description: "モデルコースの説明",
  requiredMinute: 1,
  modelCourseSpots: [
    {
      officialSpotId: "00000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "上越科学館",
      officialSpotRuby: "じょうえつかがくかん",
      officialSpotDescription: "みて、ふれて、たしかめて、科学と遊ぶ不思議なサイエンスパーク",
      address: "新潟県上越市下門前４４６−２",
      latitude: 37.15391864662908,
      longitude: 138.2522367250393,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        },
      ],
      description: "上越科学館で〇〇〇〇を見る",
      stayMinutes: 20,
    },
    {
      officialSpotId: "10000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "たにはま海水浴場",
      officialSpotRuby: "たにはまかいすいよくじょう",
      officialSpotDescription: "長い海岸線、水質の良い海として、日本海側でも有名な海水浴場。",
      address: "新潟県上越市長浜",
      latitude: 37.16342162190787,
      longitude: 138.17436739620473,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        },
      ],
      description: "たにはま海水浴場で泳ぐ",
      stayMinutes: 40,
    },
    {
      officialSpotId: "20000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "お食事処 多七 【上越市地産地消推進の店認定店】",
      officialSpotRuby: "おしょくじどころ たしち",
      officialSpotDescription: "鮮度自慢の鮮魚を中心としたお食事、お料理を提供しています。",
      address: "新潟県上越市中央１丁目２−３",
      latitude: 37.1719989184753,
      longitude: 138.24272216893806,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        },
      ],
      description: "お食事処 多七で海鮮丼を食べる",
      stayMinutes: 15,
    },
    {
      officialSpotId: "30000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "妙高サンシャインランド",
      officialSpotRuby: "みょうこうさんしゃいんらんど",
      officialSpotDescription: "大人から小さなお子様まで、遊べる遊園地です。",
      address: "新潟県上越市中郷区江口９７２",
      latitude: 36.9491281555793,
      longitude: 138.2117995385259,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        },
      ],
      description: "妙高サンシャインランドでアトラクションを楽しむ",
      stayMinutes: 15,
    },
    {
      officialSpotId: "40000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "アートホテル上越",
      officialSpotRuby: "あーとほてるじょうえつ",
      officialSpotDescription: "鮮度自慢の鮮魚を中心としたお食事、お料理を提供しています。",
      address: "新潟県上越市本町５丁目１−１１",
      latitude: 37.115412223908564,
      longitude: 138.24484083853298,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        },
      ],
      description: "お食事処 多七で海鮮丼を食べる",
      stayMinutes: 15,
    },
  ],
};

export const officialSpotBookmarkList: OfficialSpotBookmark[] = [
  {
    officialSpotDetail: {
      id: "05337c8b-2b42-4326-b605-0fd0c48ff9af",
      title: "大潟夕日の森展望台",
      description:
        "日本海を一望する事ができる展望台です。\n海岸沿いの夕日スポットは数多いですが、ここからの景色は遮るものがほとんどなく\n海と夕日のコントラストを思う存分満喫することができます。\nまた、天気の良い日は佐渡を眺めることもできます。",
      address: "新潟県上越市大潟区九戸浜110",
      latitude: 37.23802096,
      longitude: 138.3342061,
      ruby: "おおがたゆうひのもりてんぼうだい",
      officialSpotStatus: {
        id: 1,
        title: "open",
      },
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
    },
    sortIndex: 0,
  },
  {
    officialSpotDetail: {
      id: "082cfc0e-4c80-48cc-9df8-e541a4c83574",
      title: "風巻神社",
      description:
        "この神社は、祭神として級長津彦命（しなつひこのみこと）、級長戸辺命（しなとべのみこと）、天照大御神（あまてらすおおみかみ）、月読命（つくよみのみこと）、建御名方神（たけみなかたのかみ）、十二神大神を祀っています。境内は両側を大きくそびえたった杉に囲まれた114段の石段を登ったところにあり、近郷近在の崇敬を受け、上杉、松平越中守、榊原の藩主のあつい崇敬を受けました。また、神社奥社には樹齢約200～300年のエドヒガン桜が所在し、風巻山の特徴的な存在で、地域の人々にうるおいと安らぎを与えています。",
      address: "新潟県上越市三和区岡田24",
      latitude: 37.1221599,
      longitude: 138.3831518,
      ruby: "かざまきじんじゃ",
      officialSpotStatus: {
        id: 1,
        title: "open",
      },
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
    },
    sortIndex: 0,
  },
];
