// list of country GDP and populations
// https://en.wikipedia.org/wiki/List_of_IMF_ranked_countries_by_GDP
export function getData() {
  return [
      { id: 1, country: 'ルクセンブルク', gdpm: 57825, popk: 563, gdpcap: 102708 },
      { id: 2, country: 'スイス', gdpm: 664005, popk: 8238, gdpcap: 80602 },
      { id: 3, country: 'ノルウェー', gdpm: 388315, popk: 5205, gdpcap: 74604 },
      { id: 4, country: 'マカオ', gdpm: 46178, popk: 647, gdpcap: 71372 },
      { id: 5, country: 'カタール', gdpm: 166908, popk: 2421, gdpcap: 68941 },
      { id: 6, country: 'アイルランド', gdpm: 283716, popk: 4635, gdpcap: 61211 },
      { id: 7, country: 'アメリカ', gdpm: 18036650, popk: 321601, gdpcap: 56083 },
      { id: 8, country: 'シンガポール', gdpm: 292734, popk: 5535, gdpcap: 52887 },
      { id: 9, country: 'デンマーク', gdpm: 295091, popk: 5660, gdpcap: 52136 },
      { id: 10, country: 'オーストラリア', gdpm: 1225286, popk: 23940, gdpcap: 51181 },
      { id: 11, country: 'アイスランド', gdpm: 16718, popk: 333, gdpcap: 50204 },
      { id: 12, country: 'スウェーデン', gdpm: 493042, popk: 9851, gdpcap: 50049 },
      { id: 13, country: 'サンマリノ', gdpm: 1558, popk: 31, gdpcap: 50258 },
      { id: 14, country: 'オランダ', gdpm: 750696, popk: 16937, gdpcap: 44322 },
      { id: 15, country: 'イギリス', gdpm: 2858482, popk: 65110, gdpcap: 43902 },
      { id: 16, country: 'オーストリア', gdpm: 374261, popk: 8621, gdpcap: 43412 },
      { id: 17, country: 'カナダ', gdpm: 1550537, popk: 35825, gdpcap: 43280 },
      { id: 18, country: 'フィンランド', gdpm: 232077, popk: 5472, gdpcap: 42411 },
      { id: 19, country: 'ドイツ', gdpm: 3365293, popk: 82176, gdpcap: 40952 },
      { id: 20, country: 'ベルギー', gdpm: 454288, popk: 11209, gdpcap: 40528 },
      { id: 21, country: 'アラブ首長国連邦', gdpm: 370296, popk: 9581, gdpcap: 38648 },
      { id: 22, country: 'フランス', gdpm: 2420163, popk: 64275, gdpcap: 37653 },
      { id: 23, country: 'ニュージーランド', gdpm: 172257, popk: 4647, gdpcap: 37068 },
      { id: 24, country: 'イスラエル', gdpm: 299413, popk: 8377, gdpcap: 35742 },
      { id: 25, country: '日本', gdpm: 4124211, popk: 126981, gdpcap: 32478 },
      { id: 26, country: 'ブルネイ', gdpm: 12930, popk: 417, gdpcap: 31007 },
      { id: 27, country: 'イタリア', gdpm: 1815759, popk: 60796, gdpcap: 29866 },
      { id: 28, country: 'プエルトリコ', gdpm: 102906, popk: 3474, gdpcap: 29621 },
      { id: 29, country: 'クウェート', gdpm: 114079, popk: 4110, gdpcap: 27756 },
      { id: 30, country: '韓国', gdpm: 1377873, popk: 50617, gdpcap: 27221 },
      { id: 31, country: 'スペイン', gdpm: 1199715, popk: 46423, gdpcap: 25843 },
      { id: 32, country: 'バハマ', gdpm: 8854, popk: 364, gdpcap: 24324 },
      { id: 33, country: 'バーレーン', gdpm: 31119, popk: 1294, gdpcap: 24048 },
      { id: 34, country: 'キプロス', gdpm: 19330, popk: 847, gdpcap: 22821 },
      { id: 35, country: 'マルタ', gdpm: 9752, popk: 429, gdpcap: 22731 },
      { id: 36, country: '台湾', gdpm: 523006, popk: 23492, gdpcap: 22263 },
      { id: 37, country: 'スロベニア', gdpm: 42798, popk: 2063, gdpcap: 20745 },
      { id: 38, country: 'サウジアラビア', gdpm: 646002, popk: 31386, gdpcap: 20582 },
      { id: 39, country: 'ポルトガル', gdpm: 199032, popk: 10411, gdpcap: 19117 },
      { id: 40, country: 'トリニダード・トバゴ', gdpm: 24631, popk: 1358, gdpcap: 18137 },
      { id: 41, country: 'ギリシャ', gdpm: 195320, popk: 10858, gdpcap: 17988 },
      { id: 42, country: 'チェコ共和国', gdpm: 185156, popk: 10538, gdpcap: 17570 },
      { id: 43, country: 'エストニア', gdpm: 22704, popk: 1313, gdpcap: 17291 },
      { id: 44, country: '赤道ギニア', gdpm: 13819, popk: 799, gdpcap: 17295 },
      { id: 45, country: 'オマーン', gdpm: 64121, popk: 3840, gdpcap: 16698 },
      { id: 46, country: 'セントキッツ・ネイビス', gdpm: 915, popk: 56, gdpcap: 16339 },
      { id: 47, country: 'パラオ', gdpm: 287, popk: 18, gdpcap: 15944 },
      { id: 48, country: 'スロバキア', gdpm: 86629, popk: 5421, gdpcap: 15980 },
      { id: 49, country: 'バルバドス', gdpm: 4385, popk: 280, gdpcap: 15660 },
      { id: 50, country: 'ウルグアイ', gdpm: 53107, popk: 3416, gdpcap: 15546 }
  ];
}