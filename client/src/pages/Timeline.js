import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";


function Timeline(props) {

  useLayoutEffect(() => {

// https://www.amcharts.com/docs/v5/getting-started/#Root_element
let root = am5.Root.new("chartdiv");




// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Responsive.new(root),
  am5themes_Animated.new(root)
]);

root.dateFormatter.setAll({
  dateFormat: "yyyy",
  dateFields: ["valueX"]
});
  const data = [{
       "date": "2017-05-05",
       "fights": 1,
       "uNames": 2
      },
      {
       "date": "2017-05-06",
       "fights": 742,
       "uNames": 92
      },
      {
       "date": "2017-05-07",
       "fights": 1385,
       "UNames": 134
      },
      {
       "date": "2017-05-08",
       "fights": 1802,
       "uNames": 163
      },
      {
       "date": "2017-05-09",
       "fights": 1965,
       "uNames": 191
      },
      {
       "date": "2017-05-10",
       "fights": 2401,
       "uNames": 183
      },
      {
       "date": "2017-05-11",
       "fights": 2558,
       "uNames": 175
      },
      {
       "date": "2017-05-12",
       "fights": 2888,
       "uNames": 204
      },
      {
       "date": "2017-05-13",
       "fights": 4004,
       "uNames": 255
      },
      {
       "date": "2017-05-14",
       "fights": 3875,
       "uNames": 258
      },
      {
       "date": "2017-05-15",
       "fights": 3865,
       "uNames": 249
      },
      {
       "date": "2017-05-16",
       "fights": 3254,
       "uNames": 244
      },
      {
       "date": "2017-05-17",
       "fights": 3588,
       "uNames": 258
      },
      {
       "date": "2017-05-18",
       "fights": 2874,
       "uNames": 228
      },
      {
       "date": "2017-05-19",
       "fights": 4199,
       "uNames": 257
      },
      {
       "date": "2017-05-20",
       "fights": 5932,
       "uNames": 303
      },
      {
       "date": "2017-05-21",
       "fights": 5055,
       "uNames": 291
      },
      {
       "date": "2017-05-22",
       "fights": 4389,
       "uNames": 272
      },
      {
       "date": "2017-05-23",
       "fights": 3799,
       "uNames": 270
      },
      {
       "date": "2017-05-24",
       "fights": 4476,
       "uNames": 253
      },
      {
       "date": "2017-05-25",
       "fights": 3861,
       "uNames": 268
      },
      {
       "date": "2017-05-26",
       "fights": 4511,
       "uNames": 276
      },
      {
       "date": "2017-05-27",
       "fights": 4545,
       "uNames": 288
      },
      {
       "date": "2017-05-28",
       "fights": 5393,
       "uNames": 317
      },
      {
       "date": "2017-05-29",
       "fights": 5838,
       "uNames": 323
      },
      {
       "date": "2017-05-30",
       "fights": 4616,
       "uNames": 311
      },
      {
       "date": "2017-05-31",
       "fights": 5230,
       "uNames": 290
      },
      {
       "date": "2017-06-01",
       "fights": 4891,
       "uNames": 297
      },
      {
       "date": "2017-06-02",
       "fights": 5488,
       "uNames": 328
      },
      {
       "date": "2017-06-03",
       "fights": 6225,
       "uNames": 312
      },
      {
       "date": "2017-06-04",
       "fights": 6079,
       "uNames": 327
      },
      {
       "date": "2017-06-05",
       "fights": 3731,
       "uNames": 258
      },
      {
       "date": "2017-06-06",
       "fights": 1424,
       "uNames": 155
      },
      {
       "date": "2017-06-07",
       "fights": 2278,
       "uNames": 216
      },
      {
       "date": "2017-06-08",
       "fights": 2498,
       "uNames": 208
      },
      {
       "date": "2017-06-09",
       "fights": 2455,
       "uNames": 218
      },
      {
       "date": "2017-06-10",
       "fights": 2583,
       "uNames": 213
      },
      {
       "date": "2017-06-11",
       "fights": 2416,
       "uNames": 217
      },
      {
       "date": "2017-06-12",
       "fights": 2136,
       "uNames": 171
      },
      {
       "date": "2017-06-13",
       "fights": 2340,
       "uNames": 203
      },
      {
       "date": "2017-06-14",
       "fights": 2285,
       "uNames": 218
      },
      {
       "date": "2017-06-15",
       "fights": 2193,
       "uNames": 181
      },
      {
       "date": "2017-06-16",
       "fights": 2068,
       "uNames": 180
      },
      {
       "date": "2017-06-17",
       "fights": 2156,
       "uNames": 196
      },
      {
       "date": "2017-06-18",
       "fights": 2306,
       "uNames": 204
      },
      {
       "date": "2017-06-19",
       "fights": 2197,
       "uNames": 200
      },
      {
       "date": "2017-06-20",
       "fights": 1909,
       "uNames": 165
      },
      {
       "date": "2017-06-21",
       "fights": 2483,
       "uNames": 198
      },
      {
       "date": "2017-06-22",
       "fights": 2233,
       "uNames": 205
      },
      {
       "date": "2017-06-23",
       "fights": 2295,
       "uNames": 200
      },
      {
       "date": "2017-06-24",
       "fights": 2846,
       "uNames": 208
      },
      {
       "date": "2017-06-25",
       "fights": 2454,
       "uNames": 203
      },
      {
       "date": "2017-06-26",
       "fights": 1957,
       "uNames": 169
      },
      {
       "date": "2017-06-27",
       "fights": 2348,
       "uNames": 192
      },
      {
       "date": "2017-06-28",
       "fights": 2173,
       "uNames": 173
      },
      {
       "date": "2017-06-29",
       "fights": 2099,
       "uNames": 166
      },
      {
       "date": "2017-06-30",
       "fights": 1964,
       "uNames": 161
      },
      {
       "date": "2017-07-01",
       "fights": 2242,
       "uNames": 171
      },
      {
       "date": "2017-07-02",
       "fights": 2117,
       "uNames": 169
      },
      {
       "date": "2017-07-03",
       "fights": 2084,
       "uNames": 178
      },
      {
       "date": "2017-07-04",
       "fights": 2201,
       "uNames": 193
      },
      {
       "date": "2017-07-05",
       "fights": 2159,
       "uNames": 189
      },
      {
       "date": "2017-07-06",
       "fights": 2006,
       "uNames": 176
      },
      {
       "date": "2017-07-07",
       "fights": 2104,
       "uNames": 170
      },
      {
       "date": "2017-07-08",
       "fights": 1904,
       "uNames": 164
      },
      {
       "date": "2017-07-09",
       "fights": 1878,
       "uNames": 166
      },
      {
       "date": "2017-07-10",
       "fights": 1459,
       "uNames": 158
      },
      {
       "date": "2017-07-11",
       "fights": 1677,
       "uNames": 139
      },
      {
       "date": "2017-07-12",
       "fights": 1583,
       "uNames": 139
      },
      {
       "date": "2017-07-13",
       "fights": 1421,
       "uNames": 142
      },
      {
       "date": "2017-07-14",
       "fights": 1305,
       "uNames": 140
      },
      {
       "date": "2017-07-15",
       "fights": 1747,
       "uNames": 145
      },
      {
       "date": "2017-07-16",
       "fights": 1707,
       "uNames": 159
      },
      {
       "date": "2017-07-17",
       "fights": 1043,
       "uNames": 142
      },
      {
       "date": "2017-07-18",
       "fights": 1076,
       "uNames": 128
      },
      {
       "date": "2017-07-19",
       "fights": 793,
       "uNames": 96
      },
      {
       "date": "2017-07-20",
       "fights": 825,
       "uNames": 102
      },
      {
       "date": "2017-07-21",
       "fights": 711,
       "uNames": 90
      },
      {
       "date": "2017-07-22",
       "fights": 764,
       "uNames": 105
      },
      {
       "date": "2017-07-23",
       "fights": 927,
       "uNames": 106
      },
      {
       "date": "2017-07-24",
       "fights": 564,
       "uNames": 85
      },
      {
       "date": "2017-07-25",
       "fights": 848,
       "uNames": 88
      },
      {
       "date": "2017-07-26",
       "fights": 755,
       "uNames": 90
      },
      {
       "date": "2017-07-27",
       "fights": 687,
       "uNames": 80
      },
      {
       "date": "2017-07-28",
       "fights": 537,
       "uNames": 77
      },
      {
       "date": "2017-07-29",
       "fights": 904,
       "uNames": 95
      },
      {
       "date": "2017-07-30",
       "fights": 697,
       "uNames": 102
      },
      {
       "date": "2017-07-31",
       "fights": 850,
       "uNames": 91
      },
      {
       "date": "2017-08-01",
       "fights": 978,
       "uNames": 103
      },
      {
       "date": "2017-08-02",
       "fights": 695,
       "uNames": 89
      },
      {
       "date": "2017-08-03",
       "fights": 728,
       "uNames": 90
      },
      {
       "date": "2017-08-04",
       "fights": 593,
       "uNames": 76
      },
      {
       "date": "2017-08-05",
       "fights": 594,
       "uNames": 78
      },
      {
       "date": "2017-08-06",
       "fights": 561,
       "uNames": 78
      },
      {
       "date": "2017-08-07",
       "fights": 697,
       "uNames": 69
      },
      {
       "date": "2017-08-08",
       "fights": 533,
       "uNames": 68
      },
      {
       "date": "2017-08-09",
       "fights": 533,
       "uNames": 69
      },
      {
       "date": "2017-08-10",
       "fights": 500,
       "uNames": 65
      },
      {
       "date": "2017-08-11",
       "fights": 519,
       "uNames": 50
      },
      {
       "date": "2017-08-12",
       "fights": 777,
       "uNames": 92
      },
      {
       "date": "2017-08-13",
       "fights": 972,
       "uNames": 120
      },
      {
       "date": "2017-08-14",
       "fights": 659,
       "uNames": 81
      },
      {
       "date": "2017-08-15",
       "fights": 927,
       "uNames": 100
      },
      {
       "date": "2017-08-16",
       "fights": 644,
       "uNames": 81
      },
      {
       "date": "2017-08-17",
       "fights": 836,
       "uNames": 85
      },
      {
       "date": "2017-08-18",
       "fights": 609,
       "uNames": 81
      },
      {
       "date": "2017-08-19",
       "fights": 776,
       "uNames": 84
      },
      {
       "date": "2017-08-20",
       "fights": 572,
       "uNames": 65
      },
      {
       "date": "2017-08-21",
       "fights": 361,
       "uNames": 45
      },
      {
       "date": "2017-08-22",
       "fights": 569,
       "uNames": 65
      },
      {
       "date": "2017-08-23",
       "fights": 507,
       "uNames": 72
      },
      {
       "date": "2017-08-24",
       "fights": 668,
       "uNames": 67
      },
      {
       "date": "2017-08-25",
       "fights": 616,
       "uNames": 71
      },
      {
       "date": "2017-08-26",
       "fights": 481,
       "uNames": 47
      },
      {
       "date": "2017-08-27",
       "fights": 511,
       "uNames": 59
      },
      {
       "date": "2017-08-28",
       "fights": 372,
       "uNames": 42
      },
      {
       "date": "2017-08-29",
       "fights": 427,
       "uNames": 54
      },
      {
       "date": "2017-08-30",
       "fights": 487,
       "uNames": 62
      },
      {
       "date": "2017-08-31",
       "fights": 473,
       "uNames": 52
      },
      {
       "date": "2017-09-01",
       "fights": 505,
       "uNames": 52
      },
      {
       "date": "2017-09-02",
       "fights": 212,
       "uNames": 34
      },
      {
       "date": "2017-09-03",
       "fights": 409,
       "uNames": 57
      },
      {
       "date": "2017-09-04",
       "fights": 308,
       "uNames": 42
      },
      {
       "date": "2017-09-05",
       "fights": 394,
       "uNames": 43
      },
      {
       "date": "2017-09-06",
       "fights": 252,
       "uNames": 31
      },
      {
       "date": "2017-09-07",
       "fights": 223,
       "uNames": 22
      },
      {
       "date": "2017-09-08",
       "fights": 383,
       "uNames": 39
      },
      {
       "date": "2017-09-09",
       "fights": 693,
       "uNames": 60
      },
      {
       "date": "2017-09-10",
       "fights": 475,
       "uNames": 42
      },
      {
       "date": "2017-09-11",
       "fights": 449,
       "uNames": 41
      },
      {
       "date": "2017-09-12",
       "fights": 459,
       "uNames": 38
      },
      {
       "date": "2017-09-13",
       "fights": 432,
       "uNames": 38
      },
      {
       "date": "2017-09-14",
       "fights": 275,
       "uNames": 33
      },
      {
       "date": "2017-09-15",
       "fights": 554,
       "uNames": 42
      },
      {
       "date": "2017-09-16",
       "fights": 376,
       "uNames": 36
      },
      {
       "date": "2017-09-17",
       "fights": 582,
       "uNames": 39
      },
      {
       "date": "2017-09-18",
       "fights": 844,
       "uNames": 44
      },
      {
       "date": "2017-09-19",
       "fights": 731,
       "uNames": 33
      },
      {
       "date": "2017-09-20",
       "fights": 554,
       "uNames": 32
      },
      {
       "date": "2017-09-21",
       "fights": 679,
       "uNames": 43
      },
      {
       "date": "2017-09-22",
       "fights": 824,
       "uNames": 49
      },
      {
       "date": "2017-09-23",
       "fights": 969,
       "uNames": 45
      },
      {
       "date": "2017-09-24",
       "fights": 636,
       "uNames": 42
      },
      {
       "date": "2017-09-25",
       "fights": 592,
       "uNames": 40
      },
      {
       "date": "2017-09-26",
       "fights": 542,
       "uNames": 32
      },
      {
       "date": "2017-09-27",
       "fights": 525,
       "uNames": 41
      },
      {
       "date": "2017-09-28",
       "fights": 444,
       "uNames": 42
      },
      {
       "date": "2017-09-29",
       "fights": 384,
       "uNames": 36
      },
      {
       "date": "2017-09-30",
       "fights": 656,
       "uNames": 40
      },
      {
       "date": "2017-10-01",
       "fights": 489,
       "uNames": 37
      },
      {
       "date": "2017-10-02",
       "fights": 231,
       "uNames": 33
      },
      {
       "date": "2017-10-03",
       "fights": 290,
       "uNames": 33
      },
      {
       "date": "2017-10-04",
       "fights": 337,
       "uNames": 38
      },
      {
       "date": "2017-10-05",
       "fights": 229,
       "uNames": 27
      },
      {
       "date": "2017-10-06",
       "fights": 215,
       "uNames": 30
      },
      {
       "date": "2017-10-07",
       "fights": 392,
       "uNames": 39
      },
      {
       "date": "2017-10-08",
       "fights": 637,
       "uNames": 37
      },
      {
       "date": "2017-10-09",
       "fights": 410,
       "uNames": 31
      },
      {
       "date": "2017-10-10",
       "fights": 414,
       "uNames": 35
      },
      {
       "date": "2017-10-11",
       "fights": 404,
       "uNames": 28
      },
      {
       "date": "2017-10-12",
       "fights": 355,
       "uNames": 36
      },
      {
       "date": "2017-10-13",
       "fights": 351,
       "uNames": 34
      },
      {
       "date": "2017-10-14",
       "fights": 472,
       "uNames": 37
      },
      {
       "date": "2017-10-15",
       "fights": 668,
       "uNames": 41
      },
      {
       "date": "2017-10-16",
       "fights": 511,
       "uNames": 48
      },
      {
       "date": "2017-10-17",
       "fights": 600,
       "uNames": 61
      },
      {
       "date": "2017-10-18",
       "fights": 429,
       "uNames": 43
      },
      {
       "date": "2017-10-19",
       "fights": 367,
       "uNames": 35
      },
      {
       "date": "2017-10-20",
       "fights": 240,
       "uNames": 30
      },
      {
       "date": "2017-10-21",
       "fights": 688,
       "uNames": 43
      },
      {
       "date": "2017-10-22",
       "fights": 557,
       "uNames": 38
      },
      {
       "date": "2017-10-23",
       "fights": 215,
       "uNames": 33
      },
      {
       "date": "2017-10-24",
       "fights": 266,
       "uNames": 33
      },
      {
       "date": "2017-10-25",
       "fights": 415,
       "uNames": 52
      },
      {
       "date": "2017-10-26",
       "fights": 656,
       "uNames": 69
      },
      {
       "date": "2017-10-27",
       "fights": 713,
       "uNames": 74
      },
      {
       "date": "2017-10-28",
       "fights": 790,
       "uNames": 81
      },
      {
       "date": "2017-10-29",
       "fights": 769,
       "uNames": 77
      },
      {
       "date": "2017-10-30",
       "fights": 626,
       "uNames": 77
      },
      {
       "date": "2017-10-31",
       "fights": 845,
       "uNames": 87
      },
      {
       "date": "2017-11-01",
       "fights": 605,
       "uNames": 74
      },
      {
       "date": "2017-11-02",
       "fights": 757,
       "uNames": 74
      },
      {
       "date": "2017-11-03",
       "fights": 576,
       "uNames": 66
      },
      {
       "date": "2017-11-04",
       "fights": 929,
       "uNames": 97
      },
      {
       "date": "2017-11-05",
       "fights": 1232,
       "uNames": 110
      },
      {
       "date": "2017-11-06",
       "fights": 850,
       "uNames": 91
      },
      {
       "date": "2017-11-07",
       "fights": 948,
       "uNames": 103
      },
      {
       "date": "2017-11-08",
       "fights": 794,
       "uNames": 95
      },
      {
       "date": "2017-11-09",
       "fights": 671,
       "uNames": 78
      },
      {
       "date": "2017-11-10",
       "fights": 617,
       "uNames": 100
      },
      {
       "date": "2017-11-11",
       "fights": 903,
       "uNames": 94
      },
      {
       "date": "2017-11-12",
       "fights": 826,
       "uNames": 82
      },
      {
       "date": "2017-11-13",
       "fights": 644,
       "uNames": 78
      },
      {
       "date": "2017-11-14",
       "fights": 754,
       "uNames": 74
      },
      {
       "date": "2017-11-15",
       "fights": 786,
       "uNames": 84
      },
      {
       "date": "2017-11-16",
       "fights": 710,
       "uNames": 78
      },
      {
       "date": "2017-11-17",
       "fights": 674,
       "uNames": 82
      },
      {
       "date": "2017-11-18",
       "fights": 1042,
       "uNames": 106
      },
      {
       "date": "2017-11-19",
       "fights": 1170,
       "uNames": 106
      },
      {
       "date": "2017-11-20",
       "fights": 679,
       "uNames": 102
      },
      {
       "date": "2017-11-21",
       "fights": 786,
       "uNames": 94
      },
      {
       "date": "2017-11-22",
       "fights": 1044,
       "uNames": 91
      },
      {
       "date": "2017-11-23",
       "fights": 542,
       "uNames": 84
      },
      {
       "date": "2017-11-24",
       "fights": 595,
       "uNames": 86
      },
      {
       "date": "2017-11-25",
       "fights": 947,
       "uNames": 99
      },
      {
       "date": "2017-11-26",
       "fights": 1090,
       "uNames": 108
      },
      {
       "date": "2017-11-27",
       "fights": 819,
       "uNames": 99
      },
      {
       "date": "2017-11-28",
       "fights": 840,
       "uNames": 99
      },
      {
       "date": "2017-11-29",
       "fights": 652,
       "uNames": 83
      },
      {
       "date": "2017-11-30",
       "fights": 658,
       "uNames": 88
      },
      {
       "date": "2017-12-01",
       "fights": 621,
       "uNames": 78
      },
      {
       "date": "2017-12-02",
       "fights": 906,
       "uNames": 99
      },
      {
       "date": "2017-12-03",
       "fights": 1114,
       "uNames": 118
      },
      {
       "date": "2017-12-04",
       "fights": 1032,
       "uNames": 108
      },
      {
       "date": "2017-12-05",
       "fights": 1120,
       "uNames": 108
      },
      {
       "date": "2017-12-06",
       "fights": 904,
       "uNames": 110
      },
      {
       "date": "2017-12-07",
       "fights": 1179,
       "uNames": 117
      },
      {
       "date": "2017-12-08",
       "fights": 847,
       "uNames": 87
      },
      {
       "date": "2017-12-09",
       "fights": 1468,
       "uNames": 108
      },
      {
       "date": "2017-12-10",
       "fights": 1165,
       "uNames": 121
      },
      {
       "date": "2017-12-11",
       "fights": 1041,
       "uNames": 104
      },
      {
       "date": "2017-12-12",
       "fights": 1271,
       "uNames": 116
      },
      {
       "date": "2017-12-13",
       "fights": 764,
       "uNames": 94
      },
      {
       "date": "2017-12-14",
       "fights": 869,
       "uNames": 97
      },
      {
       "date": "2017-12-15",
       "fights": 610,
       "uNames": 90
      },
      {
       "date": "2017-12-16",
       "fights": 777,
       "uNames": 104
      },
      {
       "date": "2017-12-17",
       "fights": 975,
       "uNames": 91
      },
      {
       "date": "2017-12-18",
       "fights": 499,
       "uNames": 79
      },
      {
       "date": "2017-12-19",
       "fights": 589,
       "uNames": 92
      },
      {
       "date": "2017-12-20",
       "fights": 671,
       "uNames": 94
      },
      {
       "date": "2017-12-21",
       "fights": 923,
       "uNames": 88
      },
      {
       "date": "2017-12-22",
       "fights": 936,
       "uNames": 94
      },
      {
       "date": "2017-12-23",
       "fights": 735,
       "uNames": 75
      },
      {
       "date": "2017-12-24",
       "fights": 340,
       "uNames": 50
      },
      {
       "date": "2017-12-25",
       "fights": 434,
       "uNames": 44
      },
      {
       "date": "2017-12-26",
       "fights": 756,
       "uNames": 70
      },
      {
       "date": "2017-12-27",
       "fights": 883,
       "uNames": 60
      },
      {
       "date": "2017-12-28",
       "fights": 714,
       "uNames": 85
      },
      {
       "date": "2017-12-29",
       "fights": 632,
       "uNames": 66
      },
      {
       "date": "2017-12-30",
       "fights": 805,
       "uNames": 76
      },
      {
       "date": "2017-12-31",
       "fights": 1031,
       "uNames": 98
      },
      {
       "date": "2018-01-01",
       "fights": 884,
       "uNames": 103
      },
      {
       "date": "2018-01-02",
       "fights": 750,
       "uNames": 88
      },
      {
       "date": "2018-01-03",
       "fights": 740,
       "uNames": 88
      },
      {
       "date": "2018-01-04",
       "fights": 736,
       "uNames": 81
      },
      {
       "date": "2018-01-05",
       "fights": 701,
       "uNames": 101
      },
      {
       "date": "2018-01-06",
       "fights": 805,
       "uNames": 92
      },
      {
       "date": "2018-01-07",
       "fights": 986,
       "uNames": 94
      },
      {
       "date": "2018-01-08",
       "fights": 872,
       "uNames": 80
      },
      {
       "date": "2018-01-09",
       "fights": 630,
       "uNames": 85
      },
      {
       "date": "2018-01-10",
       "fights": 590,
       "uNames": 85
      },
      {
       "date": "2018-01-11",
       "fights": 627,
       "uNames": 82
      },
      {
       "date": "2018-01-12",
       "fights": 759,
       "uNames": 77
      },
      {
       "date": "2018-01-13",
       "fights": 834,
       "uNames": 93
      },
      {
       "date": "2018-01-14",
       "fights": 840,
       "uNames": 87
      },
      {
       "date": "2018-01-15",
       "fights": 686,
       "uNames": 69
      },
      {
       "date": "2018-01-16",
       "fights": 603,
       "uNames": 60
      },
      {
       "date": "2018-01-17",
       "fights": 411,
       "uNames": 67
      },
      {
       "date": "2018-01-18",
       "fights": 573,
       "uNames": 67
      },
      {
       "date": "2018-01-19",
       "fights": 432,
       "uNames": 68
      },
      {
       "date": "2018-01-20",
       "fights": 576,
       "uNames": 64
      },
      {
       "date": "2018-01-21",
       "fights": 492,
       "uNames": 67
      },
      {
       "date": "2018-01-22",
       "fights": 755,
       "uNames": 75
      },
      {
       "date": "2018-01-23",
       "fights": 463,
       "uNames": 74
      },
      {
       "date": "2018-01-24",
       "fights": 340,
       "uNames": 67
      },
      {
       "date": "2018-01-25",
       "fights": 221,
       "uNames": 43
      },
      {
       "date": "2018-01-26",
       "fights": 561,
       "uNames": 80
      },
      {
       "date": "2018-01-27",
       "fights": 558,
       "uNames": 87
      },
      {
       "date": "2018-01-28",
       "fights": 667,
       "uNames": 82
      },
      {
       "date": "2018-01-29",
       "fights": 485,
       "uNames": 74
      },
      {
       "date": "2018-01-30",
       "fights": 338,
       "uNames": 58
      },
      {
       "date": "2018-01-31",
       "fights": 340,
       "uNames": 57
      },
      {
       "date": "2018-02-01",
       "fights": 454,
       "uNames": 64
      },
      {
       "date": "2018-02-02",
       "fights": 355,
       "uNames": 59
      },
      {
       "date": "2018-02-03",
       "fights": 502,
       "uNames": 72
      },
      {
       "date": "2018-02-04",
       "fights": 604,
       "uNames": 73
      },
      {
       "date": "2018-02-05",
       "fights": 450,
       "uNames": 64
      },
      {
       "date": "2018-02-06",
       "fights": 710,
       "uNames": 69
      },
      {
       "date": "2018-02-07",
       "fights": 428,
       "uNames": 67
      },
      {
       "date": "2018-02-08",
       "fights": 618,
       "uNames": 48
      },
      {
       "date": "2018-02-09",
       "fights": 565,
       "uNames": 63
      },
      {
       "date": "2018-02-10",
       "fights": 709,
       "uNames": 59
      },
      {
       "date": "2018-02-11",
       "fights": 717,
       "uNames": 78
      },
      {
       "date": "2018-02-12",
       "fights": 709,
       "uNames": 73
      },
      {
       "date": "2018-02-13",
       "fights": 354,
       "uNames": 55
      },
      {
       "date": "2018-02-14",
       "fights": 535,
       "uNames": 63
      },
      {
       "date": "2018-02-15",
       "fights": 576,
       "uNames": 63
      },
      {
       "date": "2018-02-16",
       "fights": 639,
       "uNames": 71
      },
      {
       "date": "2018-02-17",
       "fights": 775,
       "uNames": 94
      },
      {
       "date": "2018-02-18",
       "fights": 488,
       "uNames": 71
      },
      {
       "date": "2018-02-19",
       "fights": 475,
       "uNames": 63
      },
      {
       "date": "2018-02-20",
       "fights": 455,
       "uNames": 62
      },
      {
       "date": "2018-02-21",
       "fights": 704,
       "uNames": 97
      },
      {
       "date": "2018-02-22",
       "fights": 684,
       "uNames": 78
      },
      {
       "date": "2018-02-23",
       "fights": 915,
       "uNames": 80
      },
      {
       "date": "2018-02-24",
       "fights": 660,
       "uNames": 77
      },
      {
       "date": "2018-02-25",
       "fights": 577,
       "uNames": 72
      },
      {
       "date": "2018-02-26",
       "fights": 524,
       "uNames": 77
      },
      {
       "date": "2018-02-27",
       "fights": 389,
       "uNames": 67
      },
      {
       "date": "2018-02-28",
       "fights": 383,
       "uNames": 57
      },
      {
       "date": "2018-03-01",
       "fights": 493,
       "uNames": 65
      },
      {
       "date": "2018-03-02",
       "fights": 328,
       "uNames": 54
      },
      {
       "date": "2018-03-03",
       "fights": 409,
       "uNames": 72
      },
      {
       "date": "2018-03-04",
       "fights": 455,
       "uNames": 59
      },
      {
       "date": "2018-03-05",
       "fights": 505,
       "uNames": 62
      },
      {
       "date": "2018-03-06",
       "fights": 385,
       "uNames": 51
      },
      {
       "date": "2018-03-07",
       "fights": 455,
       "uNames": 57
      },
      {
       "date": "2018-03-08",
       "fights": 448,
       "uNames": 54
      },
      {
       "date": "2018-03-09",
       "fights": 299,
       "uNames": 51
      },
      {
       "date": "2018-03-10",
       "fights": 646,
       "uNames": 80
      },
      {
       "date": "2018-03-11",
       "fights": 559,
       "uNames": 81
      },
      {
       "date": "2018-03-12",
       "fights": 509,
       "uNames": 65
      },
      {
       "date": "2018-03-13",
       "fights": 388,
       "uNames": 52
      },
      {
       "date": "2018-03-14",
       "fights": 706,
       "uNames": 75
      },
      {
       "date": "2018-03-15",
       "fights": 539,
       "uNames": 59
      },
      {
       "date": "2018-03-16",
       "fights": 318,
       "uNames": 49
      },
      {
       "date": "2018-03-17",
       "fights": 475,
       "uNames": 60
      },
      {
       "date": "2018-03-18",
       "fights": 607,
       "uNames": 72
      },
      {
       "date": "2018-03-19",
       "fights": 411,
       "uNames": 62
      },
      {
       "date": "2018-03-20",
       "fights": 284,
       "uNames": 54
      },
      {
       "date": "2018-03-21",
       "fights": 375,
       "uNames": 62
      },
      {
       "date": "2018-03-22",
       "fights": 467,
       "uNames": 60
      },
      {
       "date": "2018-03-23",
       "fights": 522,
       "uNames": 67
      },
      {
       "date": "2018-03-24",
       "fights": 571,
       "uNames": 68
      },
      {
       "date": "2018-03-25",
       "fights": 726,
       "uNames": 73
      },
      {
       "date": "2018-03-26",
       "fights": 433,
       "uNames": 74
      },
      {
       "date": "2018-03-27",
       "fights": 673,
       "uNames": 84
      },
      {
       "date": "2018-03-28",
       "fights": 688,
       "uNames": 85
      },
      {
       "date": "2018-03-29",
       "fights": 820,
       "uNames": 85
      },
      {
       "date": "2018-03-30",
       "fights": 725,
       "uNames": 85
      },
      {
       "date": "2018-03-31",
       "fights": 801,
       "uNames": 98
      },
      {
       "date": "2018-04-01",
       "fights": 1020,
       "uNames": 103
      },
      {
       "date": "2018-04-02",
       "fights": 850,
       "uNames": 88
      },
      {
       "date": "2018-04-03",
       "fights": 919,
       "uNames": 93
      },
      {
       "date": "2018-04-04",
       "fights": 531,
       "uNames": 67
      },
      {
       "date": "2018-04-05",
       "fights": 843,
       "uNames": 86
      },
      {
       "date": "2018-04-06",
       "fights": 568,
       "uNames": 83
      },
      {
       "date": "2018-04-07",
       "fights": 853,
       "uNames": 99
      },
      {
       "date": "2018-04-08",
       "fights": 748,
       "uNames": 103
      },
      {
       "date": "2018-04-09",
       "fights": 408,
       "uNames": 67
      },
      {
       "date": "2018-04-10",
       "fights": 592,
       "uNames": 98
      },
      {
       "date": "2018-04-11",
       "fights": 581,
       "uNames": 80
      },
      {
       "date": "2018-04-12",
       "fights": 534,
       "uNames": 83
      },
      {
       "date": "2018-04-13",
       "fights": 885,
       "uNames": 91
      },
      {
       "date": "2018-04-14",
       "fights": 733,
       "uNames": 91
      },
      {
       "date": "2018-04-15",
       "fights": 1152,
       "uNames": 115
      },
      {
       "date": "2018-04-16",
       "fights": 773,
       "uNames": 101
      },
      {
       "date": "2018-04-17",
       "fights": 890,
       "uNames": 95
      },
      {
       "date": "2018-04-18",
       "fights": 708,
       "uNames": 96
      },
      {
       "date": "2018-04-19",
       "fights": 824,
       "uNames": 94
      },
      {
       "date": "2018-04-20",
       "fights": 864,
       "uNames": 83
      },
      {
       "date": "2018-04-21",
       "fights": 1011,
       "uNames": 91
      },
      {
       "date": "2018-04-22",
       "fights": 1074,
       "uNames": 104
      },
      {
       "date": "2018-04-23",
       "fights": 725,
       "uNames": 78
      },
      {
       "date": "2018-04-24",
       "fights": 780,
       "uNames": 77
      },
      {
       "date": "2018-04-25",
       "fights": 560,
       "uNames": 80
      },
      {
       "date": "2018-04-26",
       "fights": 718,
       "uNames": 84
      },
      {
       "date": "2018-04-27",
       "fights": 723,
       "uNames": 95
      },
      {
       "date": "2018-04-28",
       "fights": 1002,
       "uNames": 110
      },
      {
       "date": "2018-04-29",
       "fights": 893,
       "uNames": 84
      },
      {
       "date": "2018-04-30",
       "fights": 823,
       "uNames": 101
      },
      {
       "date": "2018-05-01",
       "fights": 819,
       "uNames": 88
      },
      {
       "date": "2018-05-02",
       "fights": 664,
       "uNames": 81
      },
      {
       "date": "2018-05-03",
       "fights": 668,
       "uNames": 69
      },
      {
       "date": "2018-05-04",
       "fights": 592,
       "uNames": 89
      },
      {
       "date": "2018-05-05",
       "fights": 802,
       "uNames": 106
      },
      {
       "date": "2018-05-06",
       "fights": 818,
       "uNames": 97
      },
      {
       "date": "2018-05-07",
       "fights": 835,
       "uNames": 104
      },
      {
       "date": "2018-05-08",
       "fights": 668,
       "uNames": 94
      },
      {
       "date": "2018-05-09",
       "fights": 629,
       "uNames": 73
      },
      {
       "date": "2018-05-10",
       "fights": 664,
       "uNames": 82
      },
      {
       "date": "2018-05-11",
       "fights": 655,
       "uNames": 107
      },
      {
       "date": "2018-05-12",
       "fights": 1036,
       "uNames": 109
      },
      {
       "date": "2018-05-13",
       "fights": 951,
       "uNames": 87
      },
      {
       "date": "2018-05-14",
       "fights": 807,
       "uNames": 95
      },
      {
       "date": "2018-05-15",
       "fights": 722,
       "uNames": 84
      },
      {
       "date": "2018-05-16",
       "fights": 949,
       "uNames": 94
      },
      {
       "date": "2018-05-17",
       "fights": 709,
       "uNames": 87
      },
      {
       "date": "2018-05-18",
       "fights": 632,
       "uNames": 78
      },
      {
       "date": "2018-05-19",
       "fights": 1097,
       "uNames": 102
      },
      {
       "date": "2018-05-20",
       "fights": 963,
       "uNames": 83
      },
      {
       "date": "2018-05-21",
       "fights": 611,
       "uNames": 94
      },
      {
       "date": "2018-05-22",
       "fights": 1038,
       "uNames": 78
      },
      {
       "date": "2018-05-23",
       "fights": 568,
       "uNames": 56
      },
      {
       "date": "2018-05-24",
       "fights": 513,
       "uNames": 67
      },
      {
       "date": "2018-05-25",
       "fights": 409,
       "uNames": 68
      },
      {
       "date": "2018-05-26",
       "fights": 548,
       "uNames": 53
      },
      {
       "date": "2018-05-27",
       "fights": 826,
       "uNames": 60
      },
      {
       "date": "2018-05-28",
       "fights": 683,
       "uNames": 69
      },
      {
       "date": "2018-05-29",
       "fights": 479,
       "uNames": 46
      },
      {
       "date": "2018-05-30",
       "fights": 818,
       "uNames": 72
      },
      {
       "date": "2018-05-31",
       "fights": 744,
       "uNames": 77
      },
      {
       "date": "2018-06-01",
       "fights": 543,
       "uNames": 81
      },
      {
       "date": "2018-06-02",
       "fights": 449,
       "uNames": 83
      },
      {
       "date": "2018-06-03",
       "fights": 487,
       "uNames": 78
      },
      {
       "date": "2018-06-04",
       "fights": 493,
       "uNames": 56
      },
      {
       "date": "2018-06-05",
       "fights": 340,
       "uNames": 44
      },
      {
       "date": "2018-06-06",
       "fights": 304,
       "uNames": 39
      },
      {
       "date": "2018-06-07",
       "fights": 387,
       "uNames": 44
      },
      {
       "date": "2018-06-08",
       "fights": 154,
       "uNames": 29
      },
      {
       "date": "2018-06-09",
       "fights": 392,
       "uNames": 46
      },
      {
       "date": "2018-06-10",
       "fights": 226,
       "uNames": 44
      },
      {
       "date": "2018-06-11",
       "fights": 340,
       "uNames": 45
      },
      {
       "date": "2018-06-12",
       "fights": 387,
       "uNames": 62
      },
      {
       "date": "2018-06-13",
       "fights": 471,
       "uNames": 54
      },
      {
       "date": "2018-06-14",
       "fights": 230,
       "uNames": 40
      },
      {
       "date": "2018-06-15",
       "fights": 344,
       "uNames": 51
      },
      {
       "date": "2018-06-16",
       "fights": 299,
       "uNames": 43
      },
      {
       "date": "2018-06-17",
       "fights": 243,
       "uNames": 38
      },
      {
       "date": "2018-06-18",
       "fights": 325,
       "uNames": 68
      },
      {
       "date": "2018-06-19",
       "fights": 263,
       "uNames": 47
      },
      {
       "date": "2018-06-20",
       "fights": 254,
       "uNames": 50
      },
      {
       "date": "2018-06-21",
       "fights": 192,
       "uNames": 37
      },
      {
       "date": "2018-06-22",
       "fights": 215,
       "uNames": 37
      },
      {
       "date": "2018-06-23",
       "fights": 397,
       "uNames": 62
      },
      {
       "date": "2018-06-24",
       "fights": 317,
       "uNames": 62
      },
      {
       "date": "2018-06-25",
       "fights": 277,
       "uNames": 55
      },
      {
       "date": "2018-06-26",
       "fights": 402,
       "uNames": 48
      },
      {
       "date": "2018-06-27",
       "fights": 226,
       "uNames": 48
      },
      {
       "date": "2018-06-28",
       "fights": 409,
       "uNames": 49
      },
      {
       "date": "2018-06-29",
       "fights": 491,
       "uNames": 44
      },
      {
       "date": "2018-06-30",
       "fights": 326,
       "uNames": 48
      },
      {
       "date": "2018-07-01",
       "fights": 215,
       "uNames": 48
      },
      {
       "date": "2018-07-02",
       "fights": 249,
       "uNames": 46
      },
      {
       "date": "2018-07-03",
       "fights": 221,
       "uNames": 46
      },
      {
       "date": "2018-07-04",
       "fights": 207,
       "uNames": 50
      },
      {
       "date": "2018-07-05",
       "fights": 278,
       "uNames": 46
      },
      {
       "date": "2018-07-06",
       "fights": 365,
       "uNames": 63
      },
      {
       "date": "2018-07-07",
       "fights": 243,
       "uNames": 57
      },
      {
       "date": "2018-07-08",
       "fights": 303,
       "uNames": 50
      },
      {
       "date": "2018-07-09",
       "fights": 225,
       "uNames": 48
      },
      {
       "date": "2018-07-10",
       "fights": 180,
       "uNames": 48
      },
      {
       "date": "2018-07-11",
       "fights": 350,
       "uNames": 62
      },
      {
       "date": "2018-07-12",
       "fights": 275,
       "uNames": 47
      },
      {
       "date": "2018-07-13",
       "fights": 246,
       "uNames": 43
      },
      {
       "date": "2018-07-14",
       "fights": 373,
       "uNames": 71
      },
      {
       "date": "2018-07-15",
       "fights": 314,
       "uNames": 68
      },
      {
       "date": "2018-07-16",
       "fights": 342,
       "uNames": 67
      },
      {
       "date": "2018-07-17",
       "fights": 278,
       "uNames": 47
      },
      {
       "date": "2018-07-18",
       "fights": 467,
       "uNames": 53
      },
      {
       "date": "2018-07-19",
       "fights": 556,
       "uNames": 65
      },
      {
       "date": "2018-07-20",
       "fights": 346,
       "uNames": 51
      },
      {
       "date": "2018-07-21",
       "fights": 559,
       "uNames": 61
      },
      {
       "date": "2018-07-22",
       "fights": 586,
       "uNames": 75
      },
      {
       "date": "2018-07-23",
       "fights": 369,
       "uNames": 66
      },
      {
       "date": "2018-07-24",
       "fights": 277,
       "uNames": 53
      },
      {
       "date": "2018-07-27",
       "fights": 126,
       "uNames": 15
      },
      {
       "date": "2018-07-28",
       "fights": 461,
       "uNames": 50
      },
      {
       "date": "2018-07-29",
       "fights": 596,
       "uNames": 66
      },
      {
       "date": "2018-07-30",
       "fights": 446,
       "uNames": 61
      },
      {
       "date": "2018-07-31",
       "fights": 379,
       "uNames": 66
      },
      {
       "date": "2018-08-01",
       "fights": 393,
       "uNames": 61
      },
      {
       "date": "2018-08-02",
       "fights": 503,
       "uNames": 61
      },
      {
       "date": "2018-08-03",
       "fights": 444,
       "uNames": 59
      },
      {
       "date": "2018-08-04",
       "fights": 393,
       "uNames": 62
      },
      {
       "date": "2018-08-05",
       "fights": 633,
       "uNames": 57
      },
      {
       "date": "2018-08-06",
       "fights": 437,
       "uNames": 67
      },
      {
       "date": "2018-08-07",
       "fights": 509,
       "uNames": 81
      },
      {
       "date": "2018-08-08",
       "fights": 434,
       "uNames": 50
      },
      {
       "date": "2018-08-09",
       "fights": 340,
       "uNames": 36
      },
      {
       "date": "2018-08-10",
       "fights": 433,
       "uNames": 60
      },
      {
       "date": "2018-08-11",
       "fights": 413,
       "uNames": 76
      },
      {
       "date": "2018-08-12",
       "fights": 844,
       "uNames": 86
      },
      {
       "date": "2018-08-13",
       "fights": 629,
       "uNames": 83
      },
      {
       "date": "2018-08-14",
       "fights": 550,
       "uNames": 53
      },
      {
       "date": "2018-08-15",
       "fights": 589,
       "uNames": 66
      },
      {
       "date": "2018-08-16",
       "fights": 339,
       "uNames": 60
      },
      {
       "date": "2018-08-17",
       "fights": 522,
       "uNames": 63
      },
      {
       "date": "2018-08-18",
       "fights": 679,
       "uNames": 83
      },
      {
       "date": "2018-08-19",
       "fights": 1043,
       "uNames": 95
      },
      {
       "date": "2018-08-20",
       "fights": 569,
       "uNames": 81
      },
      {
       "date": "2018-08-21",
       "fights": 545,
       "uNames": 73
      },
      {
       "date": "2018-08-22",
       "fights": 526,
       "uNames": 63
      },
      {
       "date": "2018-08-23",
       "fights": 392,
       "uNames": 66
      },
      {
       "date": "2018-08-24",
       "fights": 337,
       "uNames": 62
      },
      {
       "date": "2018-08-25",
       "fights": 622,
       "uNames": 66
      },
      {
       "date": "2018-08-26",
       "fights": 502,
       "uNames": 81
      },
      {
       "date": "2018-08-27",
       "fights": 683,
       "uNames": 83
      },
      {
       "date": "2018-08-28",
       "fights": 407,
       "uNames": 59
      },
      {
       "date": "2018-08-29",
       "fights": 231,
       "uNames": 50
      },
      {
       "date": "2018-08-30",
       "fights": 406,
       "uNames": 70
      },
      {
       "date": "2018-08-31",
       "fights": 405,
       "uNames": 79
      },
      {
       "date": "2018-09-01",
       "fights": 453,
       "uNames": 75
      },
      {
       "date": "2018-09-02",
       "fights": 475,
       "uNames": 77
      },
      {
       "date": "2018-09-03",
       "fights": 607,
       "uNames": 87
      },
      {
       "date": "2018-09-04",
       "fights": 301,
       "uNames": 54
      },
      {
       "date": "2018-09-05",
       "fights": 424,
       "uNames": 75
      },
      {
       "date": "2018-09-06",
       "fights": 356,
       "uNames": 65
      },
      {
       "date": "2018-09-07",
       "fights": 195,
       "uNames": 44
      },
      {
       "date": "2018-09-08",
       "fights": 382,
       "uNames": 75
      },
      {
       "date": "2018-09-09",
       "fights": 402,
       "uNames": 72
      },
      {
       "date": "2018-09-10",
       "fights": 414,
       "uNames": 72
      },
      {
       "date": "2018-09-11",
       "fights": 211,
       "uNames": 56
      },
      {
       "date": "2018-09-12",
       "fights": 213,
       "uNames": 53
      },
      {
       "date": "2018-09-13",
       "fights": 237,
       "uNames": 53
      },
      {
       "date": "2018-09-14",
       "fights": 224,
       "uNames": 63
      },
      {
       "date": "2018-09-15",
       "fights": 305,
       "uNames": 55
      },
      {
       "date": "2018-09-16",
       "fights": 379,
       "uNames": 72
      },
      {
       "date": "2018-09-17",
       "fights": 324,
       "uNames": 58
      },
      {
       "date": "2018-09-18",
       "fights": 223,
       "uNames": 51
      },
      {
       "date": "2018-09-19",
       "fights": 285,
       "uNames": 49
      },
      {
       "date": "2018-09-20",
       "fights": 350,
       "uNames": 72
      },
      {
       "date": "2018-09-21",
       "fights": 280,
       "uNames": 45
      },
      {
       "date": "2018-09-22",
       "fights": 397,
       "uNames": 63
      },
      {
       "date": "2018-09-23",
       "fights": 437,
       "uNames": 63
      },
      {
       "date": "2018-09-24",
       "fights": 341,
       "uNames": 68
      },
      {
       "date": "2018-09-25",
       "fights": 366,
       "uNames": 68
      },
      {
       "date": "2018-09-26",
       "fights": 274,
       "uNames": 55
      },
      {
       "date": "2018-09-27",
       "fights": 445,
       "uNames": 62
      },
      {
       "date": "2018-09-28",
       "fights": 307,
       "uNames": 48
      },
      {
       "date": "2018-09-29",
       "fights": 392,
       "uNames": 67
      },
      {
       "date": "2018-09-30",
       "fights": 369,
       "uNames": 55
      },
      {
       "date": "2018-10-01",
       "fights": 162,
       "uNames": 48
      },
      {
       "date": "2018-10-02",
       "fights": 282,
       "uNames": 53
      },
      {
       "date": "2018-10-03",
       "fights": 472,
       "uNames": 57
      },
      {
       "date": "2018-10-04",
       "fights": 315,
       "uNames": 44
      },
      {
       "date": "2018-10-05",
       "fights": 146,
       "uNames": 37
      },
      {
       "date": "2018-10-06",
       "fights": 228,
       "uNames": 43
      },
      {
       "date": "2018-10-07",
       "fights": 346,
       "uNames": 51
      },
      {
       "date": "2018-10-08",
       "fights": 284,
       "uNames": 49
      },
      {
       "date": "2018-10-09",
       "fights": 210,
       "uNames": 44
      },
      {
       "date": "2018-10-10",
       "fights": 202,
       "uNames": 46
      },
      {
       "date": "2018-10-11",
       "fights": 291,
       "uNames": 43
      },
      {
       "date": "2018-10-12",
       "fights": 150,
       "uNames": 36
      },
      {
       "date": "2018-10-13",
       "fights": 300,
       "uNames": 48
      },
      {
       "date": "2018-10-14",
       "fights": 289,
       "uNames": 71
      },
      {
       "date": "2018-10-15",
       "fights": 342,
       "uNames": 57
      },
      {
       "date": "2018-10-17",
       "fights": 98,
       "uNames": 18
      },
      {
       "date": "2018-10-18",
       "fights": 258,
       "uNames": 52
      },
      {
       "date": "2018-10-19",
       "fights": 228,
       "uNames": 33
      },
      {
       "date": "2018-10-20",
       "fights": 300,
       "uNames": 40
      },
      {
       "date": "2018-10-21",
       "fights": 410,
       "uNames": 46
      },
      {
       "date": "2018-10-22",
       "fights": 265,
       "uNames": 54
      },
      {
       "date": "2018-10-23",
       "fights": 165,
       "uNames": 21
      },
      {
       "date": "2018-10-24",
       "fights": 232,
       "uNames": 35
      },
      {
       "date": "2018-10-25",
       "fights": 218,
       "uNames": 37
      },
      {
       "date": "2018-10-26",
       "fights": 322,
       "uNames": 51
      },
      {
       "date": "2018-10-27",
       "fights": 513,
       "uNames": 74
      },
      {
       "date": "2018-10-28",
       "fights": 712,
       "uNames": 75
      },
      {
       "date": "2018-10-29",
       "fights": 563,
       "uNames": 84
      },
      {
       "date": "2018-10-30",
       "fights": 519,
       "uNames": 90
      },
      {
       "date": "2018-10-31",
       "fights": 456,
       "uNames": 91
      },
      {
       "date": "2018-11-01",
       "fights": 531,
       "uNames": 87
      },
      {
       "date": "2018-11-02",
       "fights": 578,
       "uNames": 78
      },
      {
       "date": "2018-11-03",
       "fights": 840,
       "uNames": 95
      },
      {
       "date": "2018-11-04",
       "fights": 936,
       "uNames": 96
      },
      {
       "date": "2018-11-05",
       "fights": 748,
       "uNames": 118
      },
      {
       "date": "2018-11-06",
       "fights": 484,
       "uNames": 82
      },
      {
       "date": "2018-11-07",
       "fights": 848,
       "uNames": 125
      },
      {
       "date": "2018-11-08",
       "fights": 1036,
       "uNames": 99
      },
      {
       "date": "2018-11-09",
       "fights": 802,
       "uNames": 114
      },
      {
       "date": "2018-11-10",
       "fights": 1172,
       "uNames": 110
      },
      {
       "date": "2018-11-11",
       "fights": 928,
       "uNames": 104
      },
      {
       "date": "2018-11-12",
       "fights": 1173,
       "uNames": 124
      },
      {
       "date": "2018-11-13",
       "fights": 974,
       "uNames": 112
      },
      {
       "date": "2018-11-14",
       "fights": 844,
       "uNames": 96
      },
      {
       "date": "2018-11-15",
       "fights": 950,
       "uNames": 120
      },
      {
       "date": "2018-11-16",
       "fights": 914,
       "uNames": 124
      },
      {
       "date": "2018-11-17",
       "fights": 1093,
       "uNames": 117
      },
      {
       "date": "2018-11-18",
       "fights": 1442,
       "uNames": 154
      },
      {
       "date": "2018-11-19",
       "fights": 1068,
       "uNames": 155
      },
      {
       "date": "2018-11-20",
       "fights": 1051,
       "uNames": 117
      },
      {
       "date": "2018-11-21",
       "fights": 1386,
       "uNames": 152
      },
      {
       "date": "2018-11-22",
       "fights": 1443,
       "uNames": 163
      },
      {
       "date": "2018-11-23",
       "fights": 1265,
       "uNames": 136
      },
      {
       "date": "2018-11-24",
       "fights": 1668,
       "uNames": 147
      },
      {
       "date": "2018-11-25",
       "fights": 1853,
       "uNames": 172
      },
      {
       "date": "2018-11-26",
       "fights": 1800,
       "uNames": 168
      },
      {
       "date": "2018-11-27",
       "fights": 1114,
       "uNames": 151
      },
      {
       "date": "2018-11-28",
       "fights": 1821,
       "uNames": 174
      },
      {
       "date": "2018-11-29",
       "fights": 1518,
       "uNames": 135
      },
      {
       "date": "2018-11-30",
       "fights": 1923,
       "uNames": 164
      },
      {
       "date": "2018-12-01",
       "fights": 1809,
       "uNames": 155
      },
      {
       "date": "2018-12-02",
       "fights": 1677,
       "uNames": 171
      },
      {
       "date": "2018-12-03",
       "fights": 1237,
       "uNames": 153
      },
      {
       "date": "2018-12-04",
       "fights": 1459,
       "uNames": 145
      },
      {
       "date": "2018-12-05",
       "fights": 1443,
       "uNames": 151
      },
      {
       "date": "2018-12-06",
       "fights": 1382,
       "uNames": 154
      },
      {
       "date": "2018-12-07",
       "fights": 1033,
       "uNames": 153
      },
      {
       "date": "2018-12-08",
       "fights": 1233,
       "uNames": 154
      },
      {
       "date": "2018-12-09",
       "fights": 1449,
       "uNames": 172
      },
      {
       "date": "2018-12-10",
       "fights": 1334,
       "uNames": 149
      },
      {
       "date": "2018-12-11",
       "fights": 1363,
       "uNames": 154
      },
      {
       "date": "2018-12-12",
       "fights": 1498,
       "uNames": 156
      },
      {
       "date": "2018-12-13",
       "fights": 1279,
       "uNames": 147
      },
      {
       "date": "2018-12-14",
       "fights": 1133,
       "uNames": 147
      },
      {
       "date": "2018-12-15",
       "fights": 1277,
       "uNames": 139
      },
      {
       "date": "2018-12-16",
       "fights": 1616,
       "uNames": 159
      },
      {
       "date": "2018-12-17",
       "fights": 1495,
       "uNames": 154
      },
      {
       "date": "2018-12-18",
       "fights": 1474,
       "uNames": 152
      },
      {
       "date": "2018-12-19",
       "fights": 1006,
       "uNames": 119
      },
      {
       "date": "2018-12-20",
       "fights": 987,
       "uNames": 131
      },
      {
       "date": "2018-12-21",
       "fights": 1043,
       "uNames": 116
      },
      {
       "date": "2018-12-22",
       "fights": 1130,
       "uNames": 148
      },
      {
       "date": "2018-12-23",
       "fights": 973,
       "uNames": 97
      },
      {
       "date": "2018-12-24",
       "fights": 645,
       "uNames": 100
      },
      {
       "date": "2018-12-25",
       "fights": 458,
       "uNames": 79
      },
      {
       "date": "2018-12-26",
       "fights": 656,
       "uNames": 80
      },
      {
       "date": "2018-12-27",
       "fights": 783,
       "uNames": 94
      },
      {
       "date": "2018-12-28",
       "fights": 884,
       "uNames": 113
      },
      {
       "date": "2018-12-29",
       "fights": 1001,
       "uNames": 124
      },
      {
       "date": "2018-12-30",
       "fights": 1057,
       "uNames": 121
      },
      {
       "date": "2018-12-31",
       "fights": 902,
       "uNames": 130
      },
      {
       "date": "2019-01-01",
       "fights": 1233,
       "uNames": 113
      },
      {
       "date": "2019-01-02",
       "fights": 1180,
       "uNames": 135
      },
      {
       "date": "2019-01-03",
       "fights": 1367,
       "uNames": 121
      },
      {
       "date": "2019-01-04",
       "fights": 985,
       "uNames": 97
      },
      {
       "date": "2019-01-05",
       "fights": 1313,
       "uNames": 111
      },
      {
       "date": "2019-01-06",
       "fights": 1216,
       "uNames": 123
      },
      {
       "date": "2019-01-07",
       "fights": 1082,
       "uNames": 118
      },
      {
       "date": "2019-01-08",
       "fights": 893,
       "uNames": 107
      },
      {
       "date": "2019-01-09",
       "fights": 1041,
       "uNames": 126
      },
      {
       "date": "2019-01-10",
       "fights": 931,
       "uNames": 136
      },
      {
       "date": "2019-01-11",
       "fights": 925,
       "uNames": 101
      },
      {
       "date": "2019-01-12",
       "fights": 950,
       "uNames": 123
      },
      {
       "date": "2019-01-13",
       "fights": 1325,
       "uNames": 163
      },
      {
       "date": "2019-01-14",
       "fights": 1433,
       "uNames": 151
      },
      {
       "date": "2019-01-15",
       "fights": 1448,
       "uNames": 127
      },
      {
       "date": "2019-01-16",
       "fights": 1404,
       "uNames": 141
      },
      {
       "date": "2019-01-17",
       "fights": 1168,
       "uNames": 133
      },
      {
       "date": "2019-01-18",
       "fights": 1327,
       "uNames": 144
      },
      {
       "date": "2019-01-19",
       "fights": 1660,
       "uNames": 151
      },
      {
       "date": "2019-01-20",
       "fights": 1848,
       "uNames": 154
      },
      {
       "date": "2019-01-21",
       "fights": 1308,
       "uNames": 152
      },
      {
       "date": "2019-01-22",
       "fights": 1280,
       "uNames": 156
      },
      {
       "date": "2019-01-23",
       "fights": 1788,
       "uNames": 151
      },
      {
       "date": "2019-01-24",
       "fights": 1287,
       "uNames": 153
      },
      {
       "date": "2019-01-25",
       "fights": 1276,
       "uNames": 133
      },
      {
       "date": "2019-01-26",
       "fights": 2071,
       "uNames": 144
      },
      {
       "date": "2019-01-27",
       "fights": 1768,
       "uNames": 155
      },
      {
       "date": "2019-01-28",
       "fights": 1368,
       "uNames": 177
      },
      {
       "date": "2019-01-29",
       "fights": 1521,
       "uNames": 148
      },
      {
       "date": "2019-01-30",
       "fights": 1487,
       "uNames": 151
      },
      {
       "date": "2019-01-31",
       "fights": 1255,
       "uNames": 152
      },
      {
       "date": "2019-02-01",
       "fights": 1229,
       "uNames": 149
      },
      {
       "date": "2019-02-02",
       "fights": 1739,
       "uNames": 151
      },
      {
       "date": "2019-02-03",
       "fights": 1643,
       "uNames": 160
      },
      {
       "date": "2019-02-04",
       "fights": 1124,
       "uNames": 138
      },
      {
       "date": "2019-02-05",
       "fights": 1419,
       "uNames": 153
      },
      {
       "date": "2019-02-06",
       "fights": 1145,
       "uNames": 116
      },
      {
       "date": "2019-02-07",
       "fights": 703,
       "uNames": 108
      },
      {
       "date": "2019-02-08",
       "fights": 973,
       "uNames": 115
      },
      {
       "date": "2019-02-09",
       "fights": 888,
       "uNames": 127
      },
      {
       "date": "2019-02-10",
       "fights": 1261,
       "uNames": 144
      },
      {
       "date": "2019-02-11",
       "fights": 706,
       "uNames": 98
      },
      {
       "date": "2019-02-12",
       "fights": 607,
       "uNames": 92
      },
      {
       "date": "2019-02-13",
       "fights": 804,
       "uNames": 111
      },
      {
       "date": "2019-02-14",
       "fights": 882,
       "uNames": 131
      },
      {
       "date": "2019-02-15",
       "fights": 624,
       "uNames": 93
      },
      {
       "date": "2019-02-16",
       "fights": 450,
       "uNames": 76
      },
      {
       "date": "2019-02-17",
       "fights": 1229,
       "uNames": 120
      },
      {
       "date": "2019-02-18",
       "fights": 1138,
       "uNames": 153
      },
      {
       "date": "2019-02-19",
       "fights": 847,
       "uNames": 131
      },
      {
       "date": "2019-02-20",
       "fights": 818,
       "uNames": 104
      },
      {
       "date": "2019-02-21",
       "fights": 776,
       "uNames": 110
      },
      {
       "date": "2019-02-22",
       "fights": 793,
       "uNames": 98
      },
      {
       "date": "2019-02-23",
       "fights": 857,
       "uNames": 119
      },
      {
       "date": "2019-02-24",
       "fights": 928,
       "uNames": 96
      },
      {
       "date": "2019-02-25",
       "fights": 640,
       "uNames": 105
      },
      {
       "date": "2019-02-26",
       "fights": 712,
       "uNames": 119
      },
      {
       "date": "2019-02-27",
       "fights": 877,
       "uNames": 111
      },
      {
       "date": "2019-02-28",
       "fights": 456,
       "uNames": 72
      },
      {
       "date": "2019-03-01",
       "fights": 710,
       "uNames": 94
      },
      {
       "date": "2019-03-02",
       "fights": 1173,
       "uNames": 135
      },
      {
       "date": "2019-03-03",
       "fights": 1410,
       "uNames": 158
      },
      {
       "date": "2019-03-04",
       "fights": 798,
       "uNames": 128
      },
      {
       "date": "2019-03-05",
       "fights": 1094,
       "uNames": 137
      },
      {
       "date": "2019-03-06",
       "fights": 903,
       "uNames": 109
      },
      {
       "date": "2019-03-07",
       "fights": 1179,
       "uNames": 114
      },
      {
       "date": "2019-03-08",
       "fights": 1038,
       "uNames": 117
      },
      {
       "date": "2019-03-09",
       "fights": 1557,
       "uNames": 155
      },
      {
       "date": "2019-03-10",
       "fights": 1454,
       "uNames": 137
      },
      {
       "date": "2019-03-11",
       "fights": 1008,
       "uNames": 109
      },
      {
       "date": "2019-03-12",
       "fights": 1340,
       "uNames": 154
      },
      {
       "date": "2019-03-13",
       "fights": 1302,
       "uNames": 172
      },
      {
       "date": "2019-03-14",
       "fights": 1307,
       "uNames": 162
      },
      {
       "date": "2019-03-15",
       "fights": 1245,
       "uNames": 139
      },
      {
       "date": "2019-03-16",
       "fights": 1708,
       "uNames": 147
      },
      {
       "date": "2019-03-17",
       "fights": 2164,
       "uNames": 164
      },
      {
       "date": "2019-03-18",
       "fights": 1293,
       "uNames": 150
      },
      {
       "date": "2019-03-19",
       "fights": 1163,
       "uNames": 139
      },
      {
       "date": "2019-03-20",
       "fights": 1009,
       "uNames": 134
      },
      {
       "date": "2019-03-21",
       "fights": 894,
       "uNames": 105
      },
      {
       "date": "2019-03-22",
       "fights": 990,
       "uNames": 120
      },
      {
       "date": "2019-03-23",
       "fights": 1652,
       "uNames": 149
      },
      {
       "date": "2019-03-24",
       "fights": 1583,
       "uNames": 161
      },
      {
       "date": "2019-03-25",
       "fights": 1436,
       "uNames": 164
      },
      {
       "date": "2019-03-26",
       "fights": 1175,
       "uNames": 154
      },
      {
       "date": "2019-03-27",
       "fights": 1247,
       "uNames": 165
      },
      {
       "date": "2019-03-28",
       "fights": 1330,
       "uNames": 162
      },
      {
       "date": "2019-03-29",
       "fights": 1267,
       "uNames": 144
      },
      {
       "date": "2019-03-30",
       "fights": 1940,
       "uNames": 194
      },
      {
       "date": "2019-03-31",
       "fights": 1938,
       "uNames": 189
      },
      {
       "date": "2019-04-01",
       "fights": 1537,
       "uNames": 183
      },
      {
       "date": "2019-04-02",
       "fights": 1624,
       "uNames": 170
      },
      {
       "date": "2019-04-03",
       "fights": 1593,
       "uNames": 168
      },
      {
       "date": "2019-04-04",
       "fights": 1344,
       "uNames": 153
      },
      {
       "date": "2019-04-05",
       "fights": 1443,
       "uNames": 163
      },
      {
       "date": "2019-04-06",
       "fights": 1687,
       "uNames": 142
      },
      {
       "date": "2019-04-07",
       "fights": 1609,
       "uNames": 181
      },
      {
       "date": "2019-04-08",
       "fights": 1590,
       "uNames": 175
      },
      {
       "date": "2019-04-09",
       "fights": 1635,
       "uNames": 154
      },
      {
       "date": "2019-04-10",
       "fights": 1541,
       "uNames": 153
      },
      {
       "date": "2019-04-11",
       "fights": 1427,
       "uNames": 146
      },
      {
       "date": "2019-04-12",
       "fights": 1601,
       "uNames": 184
      },
      {
       "date": "2019-04-13",
       "fights": 1778,
       "uNames": 170
      },
      {
       "date": "2019-04-14",
       "fights": 1288,
       "uNames": 154
      },
      {
       "date": "2019-04-15",
       "fights": 1120,
       "uNames": 143
      },
      {
       "date": "2019-04-16",
       "fights": 1720,
       "uNames": 156
      },
      {
       "date": "2019-04-17",
       "fights": 1310,
       "uNames": 150
      },
      {
       "date": "2019-04-18",
       "fights": 1156,
       "uNames": 141
      },
      {
       "date": "2019-04-19",
       "fights": 1496,
       "uNames": 164
      },
      {
       "date": "2019-04-20",
       "fights": 1161,
       "uNames": 122
      },
      {
       "date": "2019-04-21",
       "fights": 1216,
       "uNames": 143
      },
      {
       "date": "2019-04-22",
       "fights": 893,
       "uNames": 116
      },
      {
       "date": "2019-04-23",
       "fights": 1172,
       "uNames": 135
      },
      {
       "date": "2019-04-24",
       "fights": 1377,
       "uNames": 139
      },
      {
       "date": "2019-04-25",
       "fights": 1262,
       "uNames": 170
      },
      {
       "date": "2019-04-26",
       "fights": 1446,
       "uNames": 139
      },
      {
       "date": "2019-04-27",
       "fights": 1298,
       "uNames": 151
      },
      {
       "date": "2019-04-28",
       "fights": 1828,
       "uNames": 186
      },
      {
       "date": "2019-04-29",
       "fights": 1139,
       "uNames": 141
      },
      {
       "date": "2019-04-30",
       "fights": 1592,
       "uNames": 147
      },
      {
       "date": "2019-05-01",
       "fights": 1147,
       "uNames": 149
      },
      {
       "date": "2019-05-02",
       "fights": 1257,
       "uNames": 148
      },
      {
       "date": "2019-05-03",
       "fights": 1282,
       "uNames": 141
      },
      {
       "date": "2019-05-04",
       "fights": 1281,
       "uNames": 148
      },
      {
       "date": "2019-05-05",
       "fights": 1563,
       "uNames": 137
      },
      {
       "date": "2019-05-06",
       "fights": 932,
       "uNames": 135
      },
      {
       "date": "2019-05-07",
       "fights": 910,
       "uNames": 118
      },
      {
       "date": "2019-05-08",
       "fights": 1266,
       "uNames": 133
      },
      {
       "date": "2019-05-09",
       "fights": 950,
       "uNames": 123
      },
      {
       "date": "2019-05-10",
       "fights": 1073,
       "uNames": 133
      },
      {
       "date": "2019-05-11",
       "fights": 1480,
       "uNames": 157
      },
      {
       "date": "2019-05-12",
       "fights": 1486,
       "uNames": 158
      },
      {
       "date": "2019-05-13",
       "fights": 694,
       "uNames": 102
      },
      {
       "date": "2019-05-14",
       "fights": 742,
       "uNames": 98
      },
      {
       "date": "2019-05-15",
       "fights": 1118,
       "uNames": 132
      },
      {
       "date": "2019-05-16",
       "fights": 1048,
       "uNames": 129
      },
      {
       "date": "2019-05-17",
       "fights": 793,
       "uNames": 127
      },
      {
       "date": "2019-05-18",
       "fights": 1120,
       "uNames": 149
      },
      {
       "date": "2019-05-19",
       "fights": 964,
       "uNames": 138
      },
      {
       "date": "2019-05-20",
       "fights": 725,
       "uNames": 111
      },
      {
       "date": "2019-05-21",
       "fights": 948,
       "uNames": 131
      },
      {
       "date": "2019-05-22",
       "fights": 837,
       "uNames": 132
      },
      {
       "date": "2019-05-23",
       "fights": 1069,
       "uNames": 126
      },
      {
       "date": "2019-05-24",
       "fights": 787,
       "uNames": 107
      },
      {
       "date": "2019-05-25",
       "fights": 1320,
       "uNames": 155
      },
      {
       "date": "2019-05-26",
       "fights": 740,
       "uNames": 129
      },
      {
       "date": "2019-05-27",
       "fights": 977,
       "uNames": 142
      },
      {
       "date": "2019-05-28",
       "fights": 999,
       "uNames": 128
      },
      {
       "date": "2019-05-29",
       "fights": 1344,
       "uNames": 170
      },
      {
       "date": "2019-05-30",
       "fights": 557,
       "uNames": 96
      },
      {
       "date": "2019-05-31",
       "fights": 707,
       "uNames": 104
      },
      {
       "date": "2019-06-01",
       "fights": 849,
       "uNames": 122
      },
      {
       "date": "2019-06-02",
       "fights": 1127,
       "uNames": 132
      },
      {
       "date": "2019-06-03",
       "fights": 600,
       "uNames": 95
      },
      {
       "date": "2019-06-04",
       "fights": 858,
       "uNames": 116
      },
      {
       "date": "2019-06-05",
       "fights": 828,
       "uNames": 107
      },
      {
       "date": "2019-06-06",
       "fights": 700,
       "uNames": 103
      },
      {
       "date": "2019-06-07",
       "fights": 752,
       "uNames": 121
      },
      {
       "date": "2019-06-08",
       "fights": 739,
       "uNames": 113
      },
      {
       "date": "2019-06-09",
       "fights": 717,
       "uNames": 88
      },
      {
       "date": "2019-06-10",
       "fights": 924,
       "uNames": 129
      },
      {
       "date": "2019-06-11",
       "fights": 675,
       "uNames": 88
      },
      {
       "date": "2019-06-12",
       "fights": 591,
       "uNames": 73
      },
      {
       "date": "2019-06-13",
       "fights": 641,
       "uNames": 80
      },
      {
       "date": "2019-06-14",
       "fights": 1121,
       "uNames": 111
      },
      {
       "date": "2019-06-15",
       "fights": 1249,
       "uNames": 133
      },
      {
       "date": "2019-06-16",
       "fights": 1058,
       "uNames": 102
      },
      {
       "date": "2019-06-17",
       "fights": 964,
       "uNames": 120
      },
      {
       "date": "2019-06-18",
       "fights": 701,
       "uNames": 86
      },
      {
       "date": "2019-06-19",
       "fights": 665,
       "uNames": 93
      },
      {
       "date": "2019-06-20",
       "fights": 657,
       "uNames": 77
      },
      {
       "date": "2019-06-21",
       "fights": 489,
       "uNames": 62
      },
      {
       "date": "2019-06-22",
       "fights": 504,
       "uNames": 79
      },
      {
       "date": "2019-06-23",
       "fights": 825,
       "uNames": 110
      },
      {
       "date": "2019-06-24",
       "fights": 618,
       "uNames": 109
      },
      {
       "date": "2019-06-25",
       "fights": 516,
       "uNames": 89
      },
      {
       "date": "2019-06-26",
       "fights": 822,
       "uNames": 105
      },
      {
       "date": "2019-06-27",
       "fights": 644,
       "uNames": 89
      },
      {
       "date": "2019-06-28",
       "fights": 413,
       "uNames": 72
      },
      {
       "date": "2019-06-29",
       "fights": 626,
       "uNames": 74
      },
      {
       "date": "2019-06-30",
       "fights": 574,
       "uNames": 77
      },
      {
       "date": "2019-07-01",
       "fights": 283,
       "uNames": 50
      },
      {
       "date": "2019-07-02",
       "fights": 121,
       "uNames": 42
      },
      {
       "date": "2019-07-03",
       "fights": 391,
       "uNames": 62
      },
      {
       "date": "2019-07-04",
       "fights": 583,
       "uNames": 93
      },
      {
       "date": "2019-07-05",
       "fights": 390,
       "uNames": 72
      },
      {
       "date": "2019-07-06",
       "fights": 465,
       "uNames": 78
      },
      {
       "date": "2019-07-07",
       "fights": 290,
       "uNames": 48
      },
      {
       "date": "2019-07-08",
       "fights": 274,
       "uNames": 51
      },
      {
       "date": "2019-07-09",
       "fights": 302,
       "uNames": 68
      },
      {
       "date": "2019-07-10",
       "fights": 378,
       "uNames": 55
      },
      {
       "date": "2019-07-11",
       "fights": 214,
       "uNames": 53
      },
      {
       "date": "2019-07-12",
       "fights": 499,
       "uNames": 75
      },
      {
       "date": "2019-07-13",
       "fights": 464,
       "uNames": 69
      },
      {
       "date": "2019-07-14",
       "fights": 333,
       "uNames": 52
      },
      {
       "date": "2019-07-15",
       "fights": 282,
       "uNames": 59
      },
      {
       "date": "2019-07-16",
       "fights": 249,
       "uNames": 48
      },
      {
       "date": "2019-07-17",
       "fights": 203,
       "uNames": 38
      },
      {
       "date": "2019-07-18",
       "fights": 282,
       "uNames": 46
      },
      {
       "date": "2019-07-19",
       "fights": 172,
       "uNames": 52
      },
      {
       "date": "2019-07-20",
       "fights": 252,
       "uNames": 51
      },
      {
       "date": "2019-07-21",
       "fights": 198,
       "uNames": 37
      },
      {
       "date": "2019-07-22",
       "fights": 225,
       "uNames": 49
      },
      {
       "date": "2019-07-23",
       "fights": 364,
       "uNames": 57
      },
      {
       "date": "2019-07-24",
       "fights": 295,
       "uNames": 55
      },
      {
       "date": "2019-07-25",
       "fights": 453,
       "uNames": 68
      },
      {
       "date": "2019-07-26",
       "fights": 526,
       "uNames": 78
      },
      {
       "date": "2019-07-27",
       "fights": 358,
       "uNames": 65
      },
      {
       "date": "2019-07-28",
       "fights": 438,
       "uNames": 70
      },
      {
       "date": "2019-07-29",
       "fights": 439,
       "uNames": 76
      },
      {
       "date": "2019-07-30",
       "fights": 250,
       "uNames": 53
      },
      {
       "date": "2019-07-31",
       "fights": 288,
       "uNames": 46
      },
      {
       "date": "2019-08-01",
       "fights": 216,
       "uNames": 42
      },
      {
       "date": "2019-08-02",
       "fights": 337,
       "uNames": 62
      },
      {
       "date": "2019-08-03",
       "fights": 273,
       "uNames": 53
      },
      {
       "date": "2019-08-04",
       "fights": 271,
       "uNames": 52
      },
      {
       "date": "2019-08-05",
       "fights": 282,
       "uNames": 64
      },
      {
       "date": "2019-08-06",
       "fights": 571,
       "uNames": 57
      },
      {
       "date": "2019-08-07",
       "fights": 282,
       "uNames": 40
      },
      {
       "date": "2019-08-08",
       "fights": 208,
       "uNames": 54
      },
      {
       "date": "2019-08-09",
       "fights": 103,
       "uNames": 23
      },
      {
       "date": "2019-08-10",
       "fights": 208,
       "uNames": 52
      },
      {
       "date": "2019-08-11",
       "fights": 234,
       "uNames": 57
      },
      {
       "date": "2019-08-12",
       "fights": 165,
       "uNames": 35
      },
      {
       "date": "2019-08-13",
       "fights": 191,
       "uNames": 35
      },
      {
       "date": "2019-08-14",
       "fights": 51,
       "uNames": 18
      },
      {
       "date": "2019-08-15",
       "fights": 132,
       "uNames": 33
      },
      {
       "date": "2019-08-16",
       "fights": 182,
       "uNames": 38
      },
      {
       "date": "2019-08-17",
       "fights": 419,
       "uNames": 71
      },
      {
       "date": "2019-08-18",
       "fights": 332,
       "uNames": 64
      },
      {
       "date": "2019-08-19",
       "fights": 240,
       "uNames": 47
      },
      {
       "date": "2019-08-20",
       "fights": 106,
       "uNames": 32
      },
      {
       "date": "2019-08-21",
       "fights": 211,
       "uNames": 43
      },
      {
       "date": "2019-08-22",
       "fights": 172,
       "uNames": 62
      },
      {
       "date": "2019-08-23",
       "fights": 296,
       "uNames": 62
      },
      {
       "date": "2019-08-24",
       "fights": 283,
       "uNames": 35
      },
      {
       "date": "2019-08-25",
       "fights": 396,
       "uNames": 45
      },
      {
       "date": "2019-08-26",
       "fights": 130,
       "uNames": 36
      },
      {
       "date": "2019-08-27",
       "fights": 69,
       "uNames": 23
      },
      {
       "date": "2019-08-28",
       "fights": 80,
       "uNames": 21
      },
      {
       "date": "2019-08-29",
       "fights": 105,
       "uNames": 22
      },
      {
       "date": "2019-08-30",
       "fights": 83,
       "uNames": 19
      },
      {
       "date": "2019-08-31",
       "fights": 154,
       "uNames": 25
      },
      {
       "date": "2019-09-01",
       "fights": 116,
       "uNames": 22
      },
      {
       "date": "2019-09-02",
       "fights": 146,
       "uNames": 24
      },
      {
       "date": "2019-09-03",
       "fights": 69,
       "uNames": 19
      },
      {
       "date": "2019-09-04",
       "fights": 47,
       "uNames": 18
      },
      {
       "date": "2019-09-05",
       "fights": 128,
       "uNames": 30
      },
      {
       "date": "2019-09-06",
       "fights": 145,
       "uNames": 31
      },
      {
       "date": "2019-09-07",
       "fights": 67,
       "uNames": 20
      },
      {
       "date": "2019-09-08",
       "fights": 185,
       "uNames": 28
      },
      {
       "date": "2019-09-09",
       "fights": 122,
       "uNames": 24
      },
      {
       "date": "2019-09-10",
       "fights": 92,
       "uNames": 19
      },
      {
       "date": "2019-09-11",
       "fights": 69,
       "uNames": 17
      },
      {
       "date": "2019-09-12",
       "fights": 92,
       "uNames": 21
      },
      {
       "date": "2019-09-13",
       "fights": 132,
       "uNames": 22
      },
      {
       "date": "2019-09-14",
       "fights": 112,
       "uNames": 24
      },
      {
       "date": "2019-09-15",
       "fights": 177,
       "uNames": 20
      },
      {
       "date": "2019-09-16",
       "fights": 161,
       "uNames": 19
      },
      {
       "date": "2019-09-17",
       "fights": 158,
       "uNames": 30
      },
      {
       "date": "2019-09-18",
       "fights": 156,
       "uNames": 30
      },
      {
       "date": "2019-09-19",
       "fights": 240,
       "uNames": 29
      },
      {
       "date": "2019-09-20",
       "fights": 181,
       "uNames": 33
      },
      {
       "date": "2019-09-21",
       "fights": 140,
       "uNames": 42
      },
      {
       "date": "2019-09-22",
       "fights": 149,
       "uNames": 50
      },
      {
       "date": "2019-09-23",
       "fights": 101,
       "uNames": 35
      },
      {
       "date": "2019-09-24",
       "fights": 131,
       "uNames": 37
      },
      {
       "date": "2019-09-25",
       "fights": 160,
       "uNames": 28
      },
      {
       "date": "2019-09-26",
       "fights": 89,
       "uNames": 32
      },
      {
       "date": "2019-09-27",
       "fights": 149,
       "uNames": 31
      },
      {
       "date": "2019-09-28",
       "fights": 159,
       "uNames": 38
      },
      {
       "date": "2019-09-29",
       "fights": 151,
       "uNames": 26
      },
      {
       "date": "2019-09-30",
       "fights": 110,
       "uNames": 38
      },
      {
       "date": "2019-10-01",
       "fights": 77,
       "uNames": 23
      },
      {
       "date": "2019-10-02",
       "fights": 102,
       "uNames": 33
      },
      {
       "date": "2019-10-03",
       "fights": 187,
       "uNames": 38
      },
      {
       "date": "2019-10-04",
       "fights": 143,
       "uNames": 20
      },
      {
       "date": "2019-10-05",
       "fights": 58,
       "uNames": 17
      },
      {
       "date": "2019-10-06",
       "fights": 192,
       "uNames": 30
      },
      {
       "date": "2019-10-07",
       "fights": 157,
       "uNames": 38
      },
      {
       "date": "2019-10-08",
       "fights": 106,
       "uNames": 35
      },
      {
       "date": "2019-10-09",
       "fights": 95,
       "uNames": 36
      },
      {
       "date": "2019-10-10",
       "fights": 173,
       "uNames": 42
      },
      {
       "date": "2019-10-11",
       "fights": 205,
       "uNames": 39
      },
      {
       "date": "2019-10-12",
       "fights": 146,
       "uNames": 34
      },
      {
       "date": "2019-10-13",
       "fights": 159,
       "uNames": 31
      },
      {
       "date": "2019-10-14",
       "fights": 110,
       "uNames": 42
      },
      {
       "date": "2019-10-15",
       "fights": 46,
       "uNames": 20
      },
      {
       "date": "2019-10-16",
       "fights": 121,
       "uNames": 25
      },
      {
       "date": "2019-10-17",
       "fights": 148,
       "uNames": 29
      },
      {
       "date": "2019-10-18",
       "fights": 92,
       "uNames": 33
      },
      {
       "date": "2019-10-19",
       "fights": 90,
       "uNames": 30
      },
      {
       "date": "2019-10-20",
       "fights": 91,
       "uNames": 40
      },
      {
       "date": "2019-10-21",
       "fights": 118,
       "uNames": 32
      },
      {
       "date": "2019-10-22",
       "fights": 46,
       "uNames": 29
      },
      {
       "date": "2019-10-23",
       "fights": 169,
       "uNames": 33
      },
      {
       "date": "2019-10-24",
       "fights": 52,
       "uNames": 15
      },
      {
       "date": "2019-10-25",
       "fights": 149,
       "uNames": 44
      },
      {
       "date": "2019-10-26",
       "fights": 129,
       "uNames": 52
      },
      {
       "date": "2019-10-27",
       "fights": 179,
       "uNames": 32
      },
      {
       "date": "2019-10-28",
       "fights": 82,
       "uNames": 27
      },
      {
       "date": "2019-10-29",
       "fights": 127,
       "uNames": 40
      },
      {
       "date": "2019-10-30",
       "fights": 51,
       "uNames": 18
      },
      {
       "date": "2019-10-31",
       "fights": 79,
       "uNames": 31
      },
      {
       "date": "2019-11-01",
       "fights": 117,
       "uNames": 39
      },
      {
       "date": "2019-11-02",
       "fights": 275,
       "uNames": 67
      },
      {
       "date": "2019-11-03",
       "fights": 173,
       "uNames": 47
      },
      {
       "date": "2019-11-04",
       "fights": 100,
       "uNames": 26
      },
      {
       "date": "2019-11-05",
       "fights": 253,
       "uNames": 52
      },
      {
       "date": "2019-11-06",
       "fights": 286,
       "uNames": 54
      },
      {
       "date": "2019-11-07",
       "fights": 167,
       "uNames": 37
      },
      {
       "date": "2019-11-08",
       "fights": 108,
       "uNames": 39
      },
      {
       "date": "2019-11-09",
       "fights": 306,
       "uNames": 54
      },
      {
       "date": "2019-11-10",
       "fights": 408,
       "uNames": 82
      },
      {
       "date": "2019-11-11",
       "fights": 418,
       "uNames": 75
      },
      {
       "date": "2019-11-12",
       "fights": 261,
       "uNames": 33
      },
      {
       "date": "2019-11-13",
       "fights": 179,
       "uNames": 36
      },
      {
       "date": "2019-11-14",
       "fights": 189,
       "uNames": 39
      },
      {
       "date": "2019-11-15",
       "fights": 273,
       "uNames": 43
      },
      {
       "date": "2019-11-16",
       "fights": 288,
       "uNames": 36
      },
      {
       "date": "2019-11-17",
       "fights": 267,
       "uNames": 52
      },
      {
       "date": "2019-11-18",
       "fights": 260,
       "uNames": 44
      },
      {
       "date": "2019-11-19",
       "fights": 212,
       "uNames": 34
      },
      {
       "date": "2019-11-20",
       "fights": 304,
       "uNames": 38
      },
      {
       "date": "2019-11-21",
       "fights": 301,
       "uNames": 44
      },
      {
       "date": "2019-11-22",
       "fights": 260,
       "uNames": 60
      },
      {
       "date": "2019-11-23",
       "fights": 397,
       "uNames": 48
      },
      {
       "date": "2019-11-24",
       "fights": 453,
       "uNames": 73
      },
      {
       "date": "2019-11-25",
       "fights": 357,
       "uNames": 51
      },
      {
       "date": "2019-11-26",
       "fights": 165,
       "uNames": 33
      },
      {
       "date": "2019-11-27",
       "fights": 359,
       "uNames": 60
      },
      {
       "date": "2019-11-28",
       "fights": 506,
       "uNames": 60
      },
      {
       "date": "2019-11-29",
       "fights": 442,
       "uNames": 58
      },
      {
       "date": "2019-11-30",
       "fights": 809,
       "uNames": 103
      },
      {
       "date": "2019-12-01",
       "fights": 613,
       "uNames": 77
      },
      {
       "date": "2019-12-02",
       "fights": 761,
       "uNames": 115
      },
      {
       "date": "2019-12-03",
       "fights": 685,
       "uNames": 100
      },
      {
       "date": "2019-12-04",
       "fights": 298,
       "uNames": 47
      },
      {
       "date": "2019-12-05",
       "fights": 302,
       "uNames": 53
      },
      {
       "date": "2019-12-06",
       "fights": 479,
       "uNames": 96
      },
      {
       "date": "2019-12-07",
       "fights": 570,
       "uNames": 85
      },
      {
       "date": "2019-12-08",
       "fights": 582,
       "uNames": 90
      },
      {
       "date": "2019-12-09",
       "fights": 670,
       "uNames": 70
      },
      {
       "date": "2019-12-10",
       "fights": 578,
       "uNames": 90
      },
      {
       "date": "2019-12-11",
       "fights": 389,
       "uNames": 56
      },
      {
       "date": "2019-12-12",
       "fights": 285,
       "uNames": 50
      },
      {
       "date": "2019-12-13",
       "fights": 368,
       "uNames": 56
      },
      {
       "date": "2019-12-14",
       "fights": 554,
       "uNames": 87
      },
      {
       "date": "2019-12-15",
       "fights": 538,
       "uNames": 58
      },
      {
       "date": "2019-12-16",
       "fights": 216,
       "uNames": 44
      },
      {
       "date": "2019-12-17",
       "fights": 227,
       "uNames": 52
      },
      {
       "date": "2019-12-18",
       "fights": 257,
       "uNames": 62
      },
      {
       "date": "2019-12-19",
       "fights": 137,
       "uNames": 41
      },
      {
       "date": "2019-12-20",
       "fights": 153,
       "uNames": 41
      },
      {
       "date": "2019-12-21",
       "fights": 294,
       "uNames": 55
      },
      {
       "date": "2019-12-22",
       "fights": 356,
       "uNames": 83
      },
      {
       "date": "2019-12-23",
       "fights": 293,
       "uNames": 60
      },
      {
       "date": "2019-12-24",
       "fights": 274,
       "uNames": 57
      },
      {
       "date": "2019-12-25",
       "fights": 358,
       "uNames": 56
      },
      {
       "date": "2019-12-26",
       "fights": 234,
       "uNames": 45
      },
      {
       "date": "2019-12-27",
       "fights": 127,
       "uNames": 55
      },
      {
       "date": "2019-12-28",
       "fights": 139,
       "uNames": 43
      },
      {
       "date": "2019-12-29",
       "fights": 308,
       "uNames": 56
      },
      {
       "date": "2019-12-30",
       "fights": 182,
       "uNames": 55
      },
      {
       "date": "2019-12-31",
       "fights": 149,
       "uNames": 38
      },
      {
       "date": "2020-01-01",
       "fights": 300,
       "uNames": 43
      },
      {
       "date": "2020-01-02",
       "fights": 128,
       "uNames": 30
      },
      {
       "date": "2020-01-03",
       "fights": 243,
       "uNames": 54
      },
      {
       "date": "2020-01-04",
       "fights": 263,
       "uNames": 57
      },
      {
       "date": "2020-01-05",
       "fights": 307,
       "uNames": 76
      },
      {
       "date": "2020-01-06",
       "fights": 102,
       "uNames": 30
      },
      {
       "date": "2020-01-07",
       "fights": 125,
       "uNames": 31
      },
      {
       "date": "2020-01-08",
       "fights": 172,
       "uNames": 33
      },
      {
       "date": "2020-01-09",
       "fights": 171,
       "uNames": 40
      },
      {
       "date": "2020-01-10",
       "fights": 275,
       "uNames": 48
      },
      {
       "date": "2020-01-11",
       "fights": 201,
       "uNames": 55
      },
      {
       "date": "2020-01-12",
       "fights": 463,
       "uNames": 90
      },
      {
       "date": "2020-01-13",
       "fights": 198,
       "uNames": 41
      },
      {
       "date": "2020-01-14",
       "fights": 185,
       "uNames": 50
      },
      {
       "date": "2020-01-15",
       "fights": 107,
       "uNames": 39
      },
      {
       "date": "2020-01-16",
       "fights": 335,
       "uNames": 69
      },
      {
       "date": "2020-01-17",
       "fights": 141,
       "uNames": 33
      },
      {
       "date": "2020-01-18",
       "fights": 370,
       "uNames": 63
      },
      {
       "date": "2020-01-19",
       "fights": 362,
       "uNames": 74
      },
      {
       "date": "2020-01-20",
       "fights": 460,
       "uNames": 86
      },
      {
       "date": "2020-01-21",
       "fights": 400,
       "uNames": 60
      },
      {
       "date": "2020-01-22",
       "fights": 307,
       "uNames": 50
      },
      {
       "date": "2020-01-23",
       "fights": 326,
       "uNames": 72
      },
      {
       "date": "2020-01-24",
       "fights": 367,
       "uNames": 93
      },
      {
       "date": "2020-01-25",
       "fights": 366,
       "uNames": 80
      },
      {
       "date": "2020-01-26",
       "fights": 249,
       "uNames": 48
      },
      {
       "date": "2020-01-27",
       "fights": 274,
       "uNames": 46
      },
      {
       "date": "2020-01-28",
       "fights": 362,
       "uNames": 62
      },
      {
       "date": "2020-01-29",
       "fights": 191,
       "uNames": 38
      },
      {
       "date": "2020-01-30",
       "fights": 251,
       "uNames": 40
      },
      {
       "date": "2020-01-31",
       "fights": 345,
       "uNames": 72
      },
      {
       "date": "2020-02-01",
       "fights": 509,
       "uNames": 98
      },
      {
       "date": "2020-02-02",
       "fights": 336,
       "uNames": 72
      },
      {
       "date": "2020-02-03",
       "fights": 238,
       "uNames": 40
      },
      {
       "date": "2020-02-04",
       "fights": 238,
       "uNames": 37
      },
      {
       "date": "2020-02-05",
       "fights": 267,
       "uNames": 49
      },
      {
       "date": "2020-02-06",
       "fights": 291,
       "uNames": 59
      },
      {
       "date": "2020-02-07",
       "fights": 494,
       "uNames": 91
      },
      {
       "date": "2020-02-08",
       "fights": 420,
       "uNames": 95
      },
      {
       "date": "2020-02-09",
       "fights": 478,
       "uNames": 95
      },
      {
       "date": "2020-02-10",
       "fights": 315,
       "uNames": 71
      },
      {
       "date": "2020-02-11",
       "fights": 663,
       "uNames": 128
      },
      {
       "date": "2020-02-12",
       "fights": 268,
       "uNames": 59
      },
      {
       "date": "2020-02-13",
       "fights": 195,
       "uNames": 49
      },
      {
       "date": "2020-02-14",
       "fights": 255,
       "uNames": 56
      },
      {
       "date": "2020-02-15",
       "fights": 548,
       "uNames": 81
      },
      {
       "date": "2020-02-16",
       "fights": 386,
       "uNames": 78
      },
      {
       "date": "2020-02-17",
       "fights": 352,
       "uNames": 69
      },
      {
       "date": "2020-02-18",
       "fights": 295,
       "uNames": 67
      },
      {
       "date": "2020-02-19",
       "fights": 290,
       "uNames": 53
      },
      {
       "date": "2020-02-20",
       "fights": 264,
       "uNames": 60
      },
      {
       "date": "2020-02-21",
       "fights": 315,
       "uNames": 70
      },
      {
       "date": "2020-02-22",
       "fights": 603,
       "uNames": 110
      },
      {
       "date": "2020-02-23",
       "fights": 469,
       "uNames": 89
      },
      {
       "date": "2020-02-24",
       "fights": 256,
       "uNames": 50
      },
      {
       "date": "2020-02-25",
       "fights": 204,
       "uNames": 44
      },
      {
       "date": "2020-02-26",
       "fights": 312,
       "uNames": 62
      },
      {
       "date": "2020-02-27",
       "fights": 334,
       "uNames": 61
      },
      {
       "date": "2020-02-28",
       "fights": 438,
       "uNames": 69
      },
      {
       "date": "2020-02-29",
       "fights": 706,
       "uNames": 111
      },
      {
       "date": "2020-03-01",
       "fights": 536,
       "uNames": 94
      },
      {
       "date": "2020-03-02",
       "fights": 156,
       "uNames": 43
      },
      {
       "date": "2020-03-03",
       "fights": 274,
       "uNames": 71
      },
      {
       "date": "2020-03-04",
       "fights": 192,
       "uNames": 45
      },
      {
       "date": "2020-03-05",
       "fights": 343,
       "uNames": 50
      },
      {
       "date": "2020-03-06",
       "fights": 138,
       "uNames": 51
      },
      {
       "date": "2020-03-07",
       "fights": 276,
       "uNames": 62
      },
      {
       "date": "2020-03-08",
       "fights": 377,
       "uNames": 72
      },
      {
       "date": "2020-03-09",
       "fights": 393,
       "uNames": 104
      },
      {
       "date": "2020-03-10",
       "fights": 364,
       "uNames": 69
      },
      {
       "date": "2020-03-11",
       "fights": 246,
       "uNames": 57
      },
      {
       "date": "2020-03-12",
       "fights": 224,
       "uNames": 54
      },
      {
       "date": "2020-03-13",
       "fights": 217,
       "uNames": 58
      },
      {
       "date": "2020-03-14",
       "fights": 343,
       "uNames": 77
      },
      {
       "date": "2020-03-15",
       "fights": 333,
       "uNames": 53
      },
      {
       "date": "2020-03-16",
       "fights": 237,
       "uNames": 44
      },
      {
       "date": "2020-03-17",
       "fights": 277,
       "uNames": 49
      },
      {
       "date": "2020-03-18",
       "fights": 281,
       "uNames": 56
      },
      {
       "date": "2020-03-19",
       "fights": 526,
       "uNames": 105
      },
      {
       "date": "2020-03-20",
       "fights": 534,
       "uNames": 115
      },
      {
       "date": "2020-03-21",
       "fights": 768,
       "uNames": 134
      },
      {
       "date": "2020-03-22",
       "fights": 889,
       "uNames": 152
      },
      {
       "date": "2020-03-23",
       "fights": 722,
       "uNames": 142
      },
      {
       "date": "2020-03-24",
       "fights": 936,
       "uNames": 132
      },
      {
       "date": "2020-03-25",
       "fights": 1049,
       "uNames": 164
      },
      {
       "date": "2020-03-26",
       "fights": 810,
       "uNames": 143
      },
      {
       "date": "2020-03-27",
       "fights": 945,
       "uNames": 137
      },
      {
       "date": "2020-03-28",
       "fights": 960,
       "uNames": 169
      },
      {
       "date": "2020-03-29",
       "fights": 877,
       "uNames": 144
      },
      {
       "date": "2020-03-30",
       "fights": 1072,
       "uNames": 143
      },
      {
       "date": "2020-03-31",
       "fights": 709,
       "uNames": 151
      },
      {
       "date": "2020-04-01",
       "fights": 740,
       "uNames": 118
      },
      {
       "date": "2020-04-02",
       "fights": 1205,
       "uNames": 159
      },
      {
       "date": "2020-04-03",
       "fights": 1268,
       "uNames": 165
      },
      {
       "date": "2020-04-04",
       "fights": 1332,
       "uNames": 165
      },
      {
       "date": "2020-04-05",
       "fights": 1393,
       "uNames": 165
      },
      {
       "date": "2020-04-06",
       "fights": 913,
       "uNames": 119
      },
      {
       "date": "2020-04-07",
       "fights": 859,
       "uNames": 124
      },
      {
       "date": "2020-04-08",
       "fights": 717,
       "uNames": 118
      },
      {
       "date": "2020-04-09",
       "fights": 992,
       "uNames": 138
      },
      {
       "date": "2020-04-10",
       "fights": 925,
       "uNames": 149
      },
      {
       "date": "2020-04-11",
       "fights": 1121,
       "uNames": 149
      },
      {
       "date": "2020-04-12",
       "fights": 1183,
       "uNames": 146
      },
      {
       "date": "2020-04-13",
       "fights": 969,
       "uNames": 126
      },
      {
       "date": "2020-04-14",
       "fights": 1266,
       "uNames": 129
      },
      {
       "date": "2020-04-15",
       "fights": 1082,
       "uNames": 133
      },
      {
       "date": "2020-04-16",
       "fights": 995,
       "uNames": 158
      },
      {
       "date": "2020-04-17",
       "fights": 867,
       "uNames": 131
      },
      {
       "date": "2020-04-18",
       "fights": 1400,
       "uNames": 178
      },
      {
       "date": "2020-04-19",
       "fights": 1103,
       "uNames": 179
      },
      {
       "date": "2020-04-20",
       "fights": 1113,
       "uNames": 151
      },
      {
       "date": "2020-04-21",
       "fights": 1124,
       "uNames": 138
      },
      {
       "date": "2020-04-22",
       "fights": 1009,
       "uNames": 130
      },
      {
       "date": "2020-04-23",
       "fights": 1147,
       "uNames": 137
      },
      {
       "date": "2020-04-24",
       "fights": 1082,
       "uNames": 134
      },
      {
       "date": "2020-04-25",
       "fights": 901,
       "uNames": 142
      },
      {
       "date": "2020-04-26",
       "fights": 1127,
       "uNames": 132
      },
      {
       "date": "2020-04-27",
       "fights": 1390,
       "uNames": 141
      },
      {
       "date": "2020-04-28",
       "fights": 1573,
       "uNames": 157
      },
      {
       "date": "2020-04-29",
       "fights": 1255,
       "uNames": 150
      },
      {
       "date": "2020-04-30",
       "fights": 1374,
       "uNames": 163
      },
      {
       "date": "2020-05-01",
       "fights": 1109,
       "uNames": 159
      },
      {
       "date": "2020-05-02",
       "fights": 1583,
       "uNames": 157
      },
      {
       "date": "2020-05-03",
       "fights": 1231,
       "uNames": 171
      },
      {
       "date": "2020-05-04",
       "fights": 1193,
       "uNames": 151
      },
      {
       "date": "2020-05-05",
       "fights": 1175,
       "uNames": 148
      },
      {
       "date": "2020-05-06",
       "fights": 868,
       "uNames": 113
      },
      {
       "date": "2020-05-07",
       "fights": 1000,
       "uNames": 140
      },
      {
       "date": "2020-05-08",
       "fights": 1021,
       "uNames": 134
      },
      {
       "date": "2020-05-09",
       "fights": 1163,
       "uNames": 134
      },
      {
       "date": "2020-05-10",
       "fights": 1007,
       "uNames": 137
      },
      {
       "date": "2020-05-11",
       "fights": 1046,
       "uNames": 132
      },
      {
       "date": "2020-05-12",
       "fights": 1064,
       "uNames": 143
      },
      {
       "date": "2020-05-13",
       "fights": 986,
       "uNames": 132
      },
      {
       "date": "2020-05-14",
       "fights": 1036,
       "uNames": 157
      },
      {
       "date": "2020-05-15",
       "fights": 1274,
       "uNames": 157
      },
      {
       "date": "2020-05-16",
       "fights": 1163,
       "uNames": 166
      },
      {
       "date": "2020-05-17",
       "fights": 1144,
       "uNames": 152
      },
      {
       "date": "2020-05-18",
       "fights": 1164,
       "uNames": 158
      },
      {
       "date": "2020-05-19",
       "fights": 1295,
       "uNames": 150
      },
      {
       "date": "2020-05-20",
       "fights": 1604,
       "uNames": 161
      },
      {
       "date": "2020-05-21",
       "fights": 1207,
       "uNames": 163
      },
      {
       "date": "2020-05-22",
       "fights": 980,
       "uNames": 145
      },
      {
       "date": "2020-05-23",
       "fights": 988,
       "uNames": 154
      },
      {
       "date": "2020-05-24",
       "fights": 1200,
       "uNames": 176
      },
      {
       "date": "2020-05-25",
       "fights": 1297,
       "uNames": 188
      },
      {
       "date": "2020-05-26",
       "fights": 1132,
       "uNames": 160
      },
      {
       "date": "2020-05-27",
       "fights": 1103,
       "uNames": 155
      },
      {
       "date": "2020-05-28",
       "fights": 1148,
       "uNames": 145
      },
      {
       "date": "2020-05-29",
       "fights": 1406,
       "uNames": 157
      },
      {
       "date": "2020-05-30",
       "fights": 1439,
       "uNames": 158
      },
      {
       "date": "2020-05-31",
       "fights": 1057,
       "uNames": 152
      },
      {
       "date": "2020-06-01",
       "fights": 1232,
       "uNames": 167
      },
      {
       "date": "2020-06-02",
       "fights": 1196,
       "uNames": 168
      },
      {
       "date": "2020-06-03",
       "fights": 1154,
       "uNames": 162
      },
      {
       "date": "2020-06-04",
       "fights": 1507,
       "uNames": 160
      },
      {
       "date": "2020-06-05",
       "fights": 1360,
       "uNames": 168
      },
      {
       "date": "2020-06-06",
       "fights": 988,
       "uNames": 140
      },
      {
       "date": "2020-06-07",
       "fights": 1403,
       "uNames": 182
      },
      {
       "date": "2020-06-08",
       "fights": 1122,
       "uNames": 152
      },
      {
       "date": "2020-06-09",
       "fights": 1029,
       "uNames": 152
      },
      {
       "date": "2020-06-10",
       "fights": 731,
       "uNames": 119
      },
      {
       "date": "2020-06-11",
       "fights": 836,
       "uNames": 135
      },
      {
       "date": "2020-06-12",
       "fights": 791,
       "uNames": 135
      },
      {
       "date": "2020-06-13",
       "fights": 887,
       "uNames": 135
      },
      {
       "date": "2020-06-14",
       "fights": 1056,
       "uNames": 147
      },
      {
       "date": "2020-06-15",
       "fights": 1013,
       "uNames": 173
      },
      {
       "date": "2020-06-16",
       "fights": 791,
       "uNames": 123
      },
      {
       "date": "2020-06-17",
       "fights": 796,
       "uNames": 118
      },
      {
       "date": "2020-06-18",
       "fights": 726,
       "uNames": 126
      },
      {
       "date": "2020-06-19",
       "fights": 634,
       "uNames": 119
      },
      {
       "date": "2020-06-20",
       "fights": 574,
       "uNames": 100
      },
      {
       "date": "2020-06-21",
       "fights": 681,
       "uNames": 122
      },
      {
       "date": "2020-06-22",
       "fights": 889,
       "uNames": 146
      },
      {
       "date": "2020-06-23",
       "fights": 692,
       "uNames": 99
      },
      {
       "date": "2020-06-24",
       "fights": 701,
       "uNames": 96
      },
      {
       "date": "2020-06-25",
       "fights": 496,
       "uNames": 107
      },
      {
       "date": "2020-06-26",
       "fights": 714,
       "uNames": 108
      },
      {
       "date": "2020-06-27",
       "fights": 433,
       "uNames": 85
      },
      {
       "date": "2020-06-28",
       "fights": 786,
       "uNames": 137
      },
      {
       "date": "2020-06-29",
       "fights": 763,
       "uNames": 126
      },
      {
       "date": "2020-06-30",
       "fights": 440,
       "uNames": 80
      },
      {
       "date": "2020-07-01",
       "fights": 614,
       "uNames": 100
      },
      {
       "date": "2020-07-02",
       "fights": 504,
       "uNames": 105
      },
      {
       "date": "2020-07-03",
       "fights": 898,
       "uNames": 130
      },
      {
       "date": "2020-07-04",
       "fights": 493,
       "uNames": 80
      },
      {
       "date": "2020-07-05",
       "fights": 681,
       "uNames": 99
      },
      {
       "date": "2020-07-06",
       "fights": 568,
       "uNames": 108
      },
      {
       "date": "2020-07-07",
       "fights": 353,
       "uNames": 83
      },
      {
       "date": "2020-07-08",
       "fights": 821,
       "uNames": 134
      },
      {
       "date": "2020-07-09",
       "fights": 546,
       "uNames": 99
      },
      {
       "date": "2020-07-10",
       "fights": 599,
       "uNames": 88
      },
      {
       "date": "2020-07-11",
       "fights": 539,
       "uNames": 101
      },
      {
       "date": "2020-07-12",
       "fights": 548,
       "uNames": 98
      },
      {
       "date": "2020-07-13",
       "fights": 710,
       "uNames": 93
      },
      {
       "date": "2020-07-14",
       "fights": 530,
       "uNames": 104
      },
      {
       "date": "2020-07-15",
       "fights": 475,
       "uNames": 92
      },
      {
       "date": "2020-07-16",
       "fights": 431,
       "uNames": 96
      },
      {
       "date": "2020-07-17",
       "fights": 527,
       "uNames": 95
      },
      {
       "date": "2020-07-18",
       "fights": 550,
       "uNames": 93
      },
      {
       "date": "2020-07-19",
       "fights": 822,
       "uNames": 114
      },
      {
       "date": "2020-07-20",
       "fights": 504,
       "uNames": 100
      },
      {
       "date": "2020-07-21",
       "fights": 409,
       "uNames": 85
      },
      {
       "date": "2020-07-22",
       "fights": 477,
       "uNames": 112
      },
      {
       "date": "2020-07-23",
       "fights": 338,
       "uNames": 80
      },
      {
       "date": "2020-07-24",
       "fights": 631,
       "uNames": 106
      },
      {
       "date": "2020-07-25",
       "fights": 717,
       "uNames": 102
      },
      {
       "date": "2020-07-26",
       "fights": 595,
       "uNames": 103
      },
      {
       "date": "2020-07-27",
       "fights": 595,
       "uNames": 92
      },
      {
       "date": "2020-07-28",
       "fights": 340,
       "uNames": 79
      },
      {
       "date": "2020-07-29",
       "fights": 410,
       "uNames": 92
      },
      {
       "date": "2020-07-30",
       "fights": 585,
       "uNames": 114
      },
      {
       "date": "2020-07-31",
       "fights": 201,
       "uNames": 72
      },
      {
       "date": "2020-08-01",
       "fights": 458,
       "uNames": 91
      },
      {
       "date": "2020-08-02",
       "fights": 350,
       "uNames": 87
      },
      {
       "date": "2020-08-03",
       "fights": 574,
       "uNames": 73
      },
      {
       "date": "2020-08-04",
       "fights": 346,
       "uNames": 67
      },
      {
       "date": "2020-08-05",
       "fights": 432,
       "uNames": 67
      },
      {
       "date": "2020-08-06",
       "fights": 435,
       "uNames": 91
      },
      {
       "date": "2020-08-07",
       "fights": 278,
       "uNames": 61
      },
      {
       "date": "2020-08-08",
       "fights": 283,
       "uNames": 79
      },
      {
       "date": "2020-08-09",
       "fights": 372,
       "uNames": 94
      },
      {
       "date": "2020-08-10",
       "fights": 420,
       "uNames": 87
      },
      {
       "date": "2020-08-11",
       "fights": 717,
       "uNames": 100
      },
      {
       "date": "2020-08-12",
       "fights": 524,
       "uNames": 82
      },
      {
       "date": "2020-08-13",
       "fights": 586,
       "uNames": 97
      },
      {
       "date": "2020-08-14",
       "fights": 676,
       "uNames": 99
      },
      {
       "date": "2020-08-15",
       "fights": 484,
       "uNames": 95
      },
      {
       "date": "2020-08-16",
       "fights": 737,
       "uNames": 79
      },
      {
       "date": "2020-08-17",
       "fights": 326,
       "uNames": 74
      },
      {
       "date": "2020-08-18",
       "fights": 598,
       "uNames": 102
      },
      {
       "date": "2020-08-19",
       "fights": 409,
       "uNames": 88
      },
      {
       "date": "2020-08-20",
       "fights": 323,
       "uNames": 59
      },
      {
       "date": "2020-08-21",
       "fights": 583,
       "uNames": 97
      },
      {
       "date": "2020-08-22",
       "fights": 805,
       "uNames": 117
      },
      {
       "date": "2020-08-23",
       "fights": 517,
       "uNames": 98
      },
      {
       "date": "2020-08-24",
       "fights": 441,
       "uNames": 89
      },
      {
       "date": "2020-08-25",
       "fights": 342,
       "uNames": 80
      },
      {
       "date": "2020-08-26",
       "fights": 441,
       "uNames": 75
      },
      {
       "date": "2020-08-27",
       "fights": 342,
       "uNames": 87
      },
      {
       "date": "2020-08-28",
       "fights": 344,
       "uNames": 67
      },
      {
       "date": "2020-08-29",
       "fights": 293,
       "uNames": 73
      },
      {
       "date": "2020-08-30",
       "fights": 533,
       "uNames": 67
      },
      {
       "date": "2020-08-31",
       "fights": 537,
       "uNames": 85
      },
      {
       "date": "2020-09-01",
       "fights": 658,
       "uNames": 84
      },
      {
       "date": "2020-09-02",
       "fights": 490,
       "uNames": 80
      },
      {
       "date": "2020-09-03",
       "fights": 541,
       "uNames": 83
      },
      {
       "date": "2020-09-04",
       "fights": 416,
       "uNames": 68
      },
      {
       "date": "2020-09-05",
       "fights": 391,
       "uNames": 69
      },
      {
       "date": "2020-09-06",
       "fights": 437,
       "uNames": 74
      },
      {
       "date": "2020-09-07",
       "fights": 462,
       "uNames": 73
      },
      {
       "date": "2020-09-08",
       "fights": 341,
       "uNames": 66
      },
      {
       "date": "2020-09-09",
       "fights": 319,
       "uNames": 64
      },
      {
       "date": "2020-09-10",
       "fights": 431,
       "uNames": 64
      },
      {
       "date": "2020-09-11",
       "fights": 553,
       "uNames": 73
      },
      {
       "date": "2020-09-12",
       "fights": 330,
       "uNames": 61
      },
      {
       "date": "2020-09-13",
       "fights": 404,
       "uNames": 74
      },
      {
       "date": "2020-09-14",
       "fights": 395,
       "uNames": 67
      },
      {
       "date": "2020-09-15",
       "fights": 330,
       "uNames": 70
      },
      {
       "date": "2020-09-16",
       "fights": 384,
       "uNames": 69
      },
      {
       "date": "2020-09-17",
       "fights": 341,
       "uNames": 73
      },
      {
       "date": "2020-09-18",
       "fights": 495,
       "uNames": 82
      },
      {
       "date": "2020-09-19",
       "fights": 433,
       "uNames": 82
      },
      {
       "date": "2020-09-20",
       "fights": 931,
       "uNames": 107
      },
      {
       "date": "2020-09-21",
       "fights": 518,
       "uNames": 93
      },
      {
       "date": "2020-09-22",
       "fights": 254,
       "uNames": 48
      },
      {
       "date": "2020-09-23",
       "fights": 355,
       "uNames": 70
      },
      {
       "date": "2020-09-24",
       "fights": 277,
       "uNames": 70
      },
      {
       "date": "2020-09-25",
       "fights": 258,
       "uNames": 63
      },
      {
       "date": "2020-09-26",
       "fights": 285,
       "uNames": 84
      },
      {
       "date": "2020-09-27",
       "fights": 351,
       "uNames": 85
      },
      {
       "date": "2020-09-28",
       "fights": 488,
       "uNames": 95
      },
      {
       "date": "2020-09-29",
       "fights": 291,
       "uNames": 73
      },
      {
       "date": "2020-09-30",
       "fights": 389,
       "uNames": 90
      },
      {
       "date": "2020-10-01",
       "fights": 489,
       "uNames": 90
      },
      {
       "date": "2020-10-02",
       "fights": 393,
       "uNames": 73
      },
      {
       "date": "2020-10-03",
       "fights": 823,
       "uNames": 120
      },
      {
       "date": "2020-10-04",
       "fights": 484,
       "uNames": 86
      },
      {
       "date": "2020-10-05",
       "fights": 455,
       "uNames": 99
      },
      {
       "date": "2020-10-06",
       "fights": 390,
       "uNames": 91
      },
      {
       "date": "2020-10-07",
       "fights": 366,
       "uNames": 78
      },
      {
       "date": "2020-10-08",
       "fights": 400,
       "uNames": 81
      },
      {
       "date": "2020-10-09",
       "fights": 430,
       "uNames": 80
      },
      {
       "date": "2020-10-10",
       "fights": 451,
       "uNames": 95
      },
      {
       "date": "2020-10-11",
       "fights": 439,
       "uNames": 66
      },
      {
       "date": "2020-10-12",
       "fights": 350,
       "uNames": 80
      },
      {
       "date": "2020-10-13",
       "fights": 347,
       "uNames": 81
      },
      {
       "date": "2020-10-14",
       "fights": 465,
       "uNames": 91
      },
      {
       "date": "2020-10-15",
       "fights": 525,
       "uNames": 113
      },
      {
       "date": "2020-10-16",
       "fights": 437,
       "uNames": 103
      },
      {
       "date": "2020-10-17",
       "fights": 674,
       "uNames": 108
      },
      {
       "date": "2020-10-18",
       "fights": 701,
       "uNames": 116
      },
      {
       "date": "2020-10-19",
       "fights": 407,
       "uNames": 107
      },
      {
       "date": "2020-10-20",
       "fights": 351,
       "uNames": 76
      },
      {
       "date": "2020-10-21",
       "fights": 367,
       "uNames": 86
      },
      {
       "date": "2020-10-22",
       "fights": 481,
       "uNames": 106
      },
      {
       "date": "2020-10-23",
       "fights": 399,
       "uNames": 90
      },
      {
       "date": "2020-10-24",
       "fights": 381,
       "uNames": 102
      },
      {
       "date": "2020-10-25",
       "fights": 458,
       "uNames": 88
      },
      {
       "date": "2020-10-26",
       "fights": 402,
       "uNames": 93
      },
      {
       "date": "2020-10-27",
       "fights": 359,
       "uNames": 108
      },
      {
       "date": "2020-10-28",
       "fights": 317,
       "uNames": 100
      },
      {
       "date": "2020-10-29",
       "fights": 366,
       "uNames": 94
      },
      {
       "date": "2020-10-30",
       "fights": 175,
       "uNames": 79
      },
      {
       "date": "2020-10-31",
       "fights": 508,
       "uNames": 110
      },
      {
       "date": "2020-11-01",
       "fights": 503,
       "uNames": 102
      },
      {
       "date": "2020-11-02",
       "fights": 440,
       "uNames": 100
      },
      {
       "date": "2020-11-03",
       "fights": 235,
       "uNames": 78
      },
      {
       "date": "2020-11-04",
       "fights": 175,
       "uNames": 60
      },
      {
       "date": "2020-11-05",
       "fights": 325,
       "uNames": 74
      },
      {
       "date": "2020-11-06",
       "fights": 318,
       "uNames": 85
      },
      {
       "date": "2020-11-07",
       "fights": 360,
       "uNames": 105
      },
      {
       "date": "2020-11-08",
       "fights": 546,
       "uNames": 139
      },
      {
       "date": "2020-11-09",
       "fights": 264,
       "uNames": 76
      },
      {
       "date": "2020-11-10",
       "fights": 250,
       "uNames": 76
      },
      {
       "date": "2020-11-11",
       "fights": 270,
       "uNames": 75
      },
      {
       "date": "2020-11-12",
       "fights": 328,
       "uNames": 73
      },
      {
       "date": "2020-11-13",
       "fights": 419,
       "uNames": 81
      },
      {
       "date": "2020-11-14",
       "fights": 438,
       "uNames": 97
      },
      {
       "date": "2020-11-15",
       "fights": 523,
       "uNames": 117
      },
      {
       "date": "2020-11-16",
       "fights": 289,
       "uNames": 97
      },
      {
       "date": "2020-11-17",
       "fights": 448,
       "uNames": 88
      },
      {
       "date": "2020-11-18",
       "fights": 333,
       "uNames": 86
      },
      {
       "date": "2020-11-19",
       "fights": 393,
       "uNames": 93
      },
      {
       "date": "2020-11-20",
       "fights": 436,
       "uNames": 109
      },
      {
       "date": "2020-11-21",
       "fights": 722,
       "uNames": 118
      },
      {
       "date": "2020-11-22",
       "fights": 464,
       "uNames": 104
      },
      {
       "date": "2020-11-23",
       "fights": 198,
       "uNames": 63
      },
      {
       "date": "2020-11-24",
       "fights": 359,
       "uNames": 79
      },
      {
       "date": "2020-11-25",
       "fights": 283,
       "uNames": 85
      },
      {
       "date": "2020-11-26",
       "fights": 372,
       "uNames": 88
      },
      {
       "date": "2020-11-27",
       "fights": 270,
       "uNames": 69
      },
      {
       "date": "2020-11-28",
       "fights": 404,
       "uNames": 72
      },
      {
       "date": "2020-11-29",
       "fights": 412,
       "uNames": 74
      },
      {
       "date": "2020-11-30",
       "fights": 192,
       "uNames": 53
      },
      {
       "date": "2020-12-01",
       "fights": 249,
       "uNames": 45
      },
      {
       "date": "2020-12-02",
       "fights": 176,
       "uNames": 48
      },
      {
       "date": "2020-12-03",
       "fights": 322,
       "uNames": 65
      },
      {
       "date": "2020-12-04",
       "fights": 243,
       "uNames": 67
      },
      {
       "date": "2020-12-05",
       "fights": 428,
       "uNames": 76
      },
      {
       "date": "2020-12-06",
       "fights": 342,
       "uNames": 85
      },
      {
       "date": "2020-12-07",
       "fights": 232,
       "uNames": 52
      },
      {
       "date": "2020-12-08",
       "fights": 238,
       "uNames": 67
      },
      {
       "date": "2020-12-09",
       "fights": 162,
       "uNames": 59
      },
      {
       "date": "2020-12-10",
       "fights": 130,
       "uNames": 56
      },
      {
       "date": "2020-12-11",
       "fights": 303,
       "uNames": 59
      },
      {
       "date": "2020-12-12",
       "fights": 197,
       "uNames": 62
      },
      {
       "date": "2020-12-13",
       "fights": 230,
       "uNames": 80
      },
      {
       "date": "2020-12-14",
       "fights": 177,
       "uNames": 51
      },
      {
       "date": "2020-12-15",
       "fights": 244,
       "uNames": 55
      },
      {
       "date": "2020-12-16",
       "fights": 197,
       "uNames": 48
      },
      {
       "date": "2020-12-17",
       "fights": 297,
       "uNames": 67
      },
      {
       "date": "2020-12-18",
       "fights": 350,
       "uNames": 58
      },
      {
       "date": "2020-12-19",
       "fights": 374,
       "uNames": 78
      },
      {
       "date": "2020-12-20",
       "fights": 227,
       "uNames": 73
      },
      {
       "date": "2020-12-21",
       "fights": 142,
       "uNames": 52
      },
      {
       "date": "2020-12-22",
       "fights": 299,
       "uNames": 60
      },
      {
       "date": "2020-12-23",
       "fights": 252,
       "uNames": 48
      },
      {
       "date": "2020-12-24",
       "fights": 191,
       "uNames": 55
      },
      {
       "date": "2020-12-25",
       "fights": 114,
       "uNames": 37
      },
      {
       "date": "2020-12-26",
       "fights": 377,
       "uNames": 60
      },
      {
       "date": "2020-12-27",
       "fights": 287,
       "uNames": 67
      },
      {
       "date": "2020-12-28",
       "fights": 273,
       "uNames": 67
      },
      {
       "date": "2020-12-29",
       "fights": 285,
       "uNames": 60
      },
      {
       "date": "2020-12-30",
       "fights": 412,
       "uNames": 72
      },
      {
       "date": "2020-12-31",
       "fights": 373,
       "uNames": 64
      },
      {
       "date": "2021-01-01",
       "fights": 438,
       "uNames": 75
      },
      {
       "date": "2021-01-02",
       "fights": 528,
       "uNames": 83
      },
      {
       "date": "2021-01-03",
       "fights": 237,
       "uNames": 62
      },
      {
       "date": "2021-01-04",
       "fights": 346,
       "uNames": 74
      },
      {
       "date": "2021-01-05",
       "fights": 246,
       "uNames": 57
      },
      {
       "date": "2021-01-06",
       "fights": 550,
       "uNames": 61
      },
      {
       "date": "2021-01-07",
       "fights": 411,
       "uNames": 68
      },
      {
       "date": "2021-01-08",
       "fights": 418,
       "uNames": 77
      },
      {
       "date": "2021-01-09",
       "fights": 547,
       "uNames": 116
      },
      {
       "date": "2021-01-10",
       "fights": 504,
       "uNames": 103
      },
      {
       "date": "2021-01-11",
       "fights": 530,
       "uNames": 106
      },
      {
       "date": "2021-01-12",
       "fights": 647,
       "uNames": 77
      },
      {
       "date": "2021-01-13",
       "fights": 471,
       "uNames": 71
      },
      {
       "date": "2021-01-14",
       "fights": 393,
       "uNames": 96
      },
      {
       "date": "2021-01-15",
       "fights": 505,
       "uNames": 124
      },
      {
       "date": "2021-01-16",
       "fights": 392,
       "uNames": 96
      },
      {
       "date": "2021-01-17",
       "fights": 661,
       "uNames": 118
      },
      {
       "date": "2021-01-18",
       "fights": 318,
       "uNames": 89
      },
      {
       "date": "2021-01-19",
       "fights": 445,
       "uNames": 109
      },
      {
       "date": "2021-01-20",
       "fights": 494,
       "uNames": 87
      },
      {
       "date": "2021-01-21",
       "fights": 595,
       "uNames": 119
      },
      {
       "date": "2021-01-22",
       "fights": 634,
       "uNames": 112
      },
      {
       "date": "2021-01-23",
       "fights": 812,
       "uNames": 125
      },
      {
       "date": "2021-01-24",
       "fights": 698,
       "uNames": 130
      },
      {
       "date": "2021-01-25",
       "fights": 495,
       "uNames": 117
      },
      {
       "date": "2021-01-26",
       "fights": 781,
       "uNames": 119
      },
      {
       "date": "2021-01-27",
       "fights": 553,
       "uNames": 95
      },
      {
       "date": "2021-01-28",
       "fights": 611,
       "uNames": 105
      },
      {
       "date": "2021-01-29",
       "fights": 839,
       "uNames": 135
      },
      {
       "date": "2021-01-30",
       "fights": 674,
       "uNames": 111
      },
      {
       "date": "2021-01-31",
       "fights": 843,
       "uNames": 123
      },
      {
       "date": "2021-02-01",
       "fights": 638,
       "uNames": 110
      },
      {
       "date": "2021-02-02",
       "fights": 515,
       "uNames": 103
      },
      {
       "date": "2021-02-03",
       "fights": 684,
       "uNames": 122
      },
      {
       "date": "2021-02-04",
       "fights": 510,
       "uNames": 112
      },
      {
       "date": "2021-02-05",
       "fights": 661,
       "uNames": 134
      },
      {
       "date": "2021-02-06",
       "fights": 648,
       "uNames": 123
      },
      {
       "date": "2021-02-07",
       "fights": 816,
       "uNames": 170
      },
      {
       "date": "2021-02-08",
       "fights": 362,
       "uNames": 86
      },
      {
       "date": "2021-02-09",
       "fights": 593,
       "uNames": 112
      },
      {
       "date": "2021-02-10",
       "fights": 740,
       "uNames": 111
      },
      {
       "date": "2021-02-11",
       "fights": 667,
       "uNames": 129
      },
      {
       "date": "2021-02-12",
       "fights": 642,
       "uNames": 115
      },
      {
       "date": "2021-02-13",
       "fights": 586,
       "uNames": 119
      },
      {
       "date": "2021-02-14",
       "fights": 369,
       "uNames": 82
      },
      {
       "date": "2021-02-15",
       "fights": 474,
       "uNames": 115
      },
      {
       "date": "2021-02-16",
       "fights": 408,
       "uNames": 74
      },
      {
       "date": "2021-02-17",
       "fights": 634,
       "uNames": 120
      },
      {
       "date": "2021-02-18",
       "fights": 587,
       "uNames": 104
      },
      {
       "date": "2021-02-19",
       "fights": 705,
       "uNames": 144
      },
      {
       "date": "2021-02-20",
       "fights": 648,
       "uNames": 114
      },
      {
       "date": "2021-02-21",
       "fights": 1151,
       "uNames": 143
      },
      {
       "date": "2021-02-22",
       "fights": 1062,
       "uNames": 165
      },
      {
       "date": "2021-02-23",
       "fights": 819,
       "uNames": 120
      },
      {
       "date": "2021-02-24",
       "fights": 573,
       "uNames": 119
      },
      {
       "date": "2021-02-25",
       "fights": 950,
       "uNames": 144
      },
      {
       "date": "2021-02-26",
       "fights": 625,
       "uNames": 100
      },
      {
       "date": "2021-02-27",
       "fights": 1116,
       "uNames": 147
      },
      {
       "date": "2021-02-28",
       "fights": 541,
       "uNames": 105
      },
      {
       "date": "2021-03-01",
       "fights": 530,
       "uNames": 77
      },
      {
       "date": "2021-03-02",
       "fights": 570,
       "uNames": 112
      },
      {
       "date": "2021-03-03",
       "fights": 521,
       "uNames": 122
      },
      {
       "date": "2021-03-04",
       "fights": 566,
       "uNames": 93
      },
      {
       "date": "2021-03-05",
       "fights": 485,
       "uNames": 96
      },
      {
       "date": "2021-03-06",
       "fights": 498,
       "uNames": 84
      },
      {
       "date": "2021-03-07",
       "fights": 643,
       "uNames": 142
      },
      {
       "date": "2021-03-08",
       "fights": 304,
       "uNames": 66
      },
      {
       "date": "2021-03-09",
       "fights": 454,
       "uNames": 71
      },
      {
       "date": "2021-03-10",
       "fights": 457,
       "uNames": 100
      },
      {
       "date": "2021-03-11",
       "fights": 353,
       "uNames": 84
      },
      {
       "date": "2021-03-12",
       "fights": 257,
       "uNames": 68
      },
      {
       "date": "2021-03-13",
       "fights": 326,
       "uNames": 89
      },
      {
       "date": "2021-03-14",
       "fights": 238,
       "uNames": 51
      },
      {
       "date": "2021-03-15",
       "fights": 181,
       "uNames": 61
      },
      {
       "date": "2021-03-16",
       "fights": 163,
       "uNames": 57
      },
      {
       "date": "2021-03-17",
       "fights": 383,
       "uNames": 93
      },
      {
       "date": "2021-03-18",
       "fights": 385,
       "uNames": 78
      },
      {
       "date": "2021-03-19",
       "fights": 370,
       "uNames": 87
      },
      {
       "date": "2021-03-20",
       "fights": 416,
       "uNames": 89
      },
      {
       "date": "2021-03-21",
       "fights": 306,
       "uNames": 62
      },
      {
       "date": "2021-03-22",
       "fights": 245,
       "uNames": 77
      },
      {
       "date": "2021-03-23",
       "fights": 354,
       "uNames": 91
      },
      {
       "date": "2021-03-24",
       "fights": 203,
       "uNames": 61
      },
      {
       "date": "2021-03-25",
       "fights": 317,
       "uNames": 75
      },
      {
       "date": "2021-03-26",
       "fights": 375,
       "uNames": 78
      },
      {
       "date": "2021-03-27",
       "fights": 406,
       "uNames": 78
      },
      {
       "date": "2021-03-28",
       "fights": 298,
       "uNames": 78
      },
      {
       "date": "2021-03-29",
       "fights": 421,
       "uNames": 69
      },
      {
       "date": "2021-03-30",
       "fights": 286,
       "uNames": 76
      },
      {
       "date": "2021-03-31",
       "fights": 327,
       "uNames": 80
      },
      {
       "date": "2021-04-01",
       "fights": 359,
       "uNames": 80
      },
      {
       "date": "2021-04-02",
       "fights": 369,
       "uNames": 80
      },
      {
       "date": "2021-04-03",
       "fights": 329,
       "uNames": 67
      },
      {
       "date": "2021-04-04",
       "fights": 199,
       "uNames": 60
      },
      {
       "date": "2021-04-05",
       "fights": 311,
       "uNames": 59
      },
      {
       "date": "2021-04-06",
       "fights": 215,
       "uNames": 65
      },
      {
       "date": "2021-04-07",
       "fights": 195,
       "uNames": 66
      },
      {
       "date": "2021-04-08",
       "fights": 152,
       "uNames": 58
      },
      {
       "date": "2021-04-09",
       "fights": 137,
       "uNames": 44
      },
      {
       "date": "2021-04-10",
       "fights": 267,
       "uNames": 53
      },
      {
       "date": "2021-04-11",
       "fights": 369,
       "uNames": 57
      },
      {
       "date": "2021-04-12",
       "fights": 163,
       "uNames": 42
      },
      {
       "date": "2021-04-13",
       "fights": 213,
       "uNames": 41
      },
      {
       "date": "2021-04-14",
       "fights": 99,
       "uNames": 35
      },
      {
       "date": "2021-04-15",
       "fights": 147,
       "uNames": 36
      },
      {
       "date": "2021-04-16",
       "fights": 193,
       "uNames": 59
      },
      {
       "date": "2021-04-17",
       "fights": 122,
       "uNames": 33
      },
      {
       "date": "2021-04-18",
       "fights": 73,
       "uNames": 27
      },
      {
       "date": "2021-04-19",
       "fights": 158,
       "uNames": 46
      },
      {
       "date": "2021-04-20",
       "fights": 158,
       "uNames": 38
      },
      {
       "date": "2021-04-21",
       "fights": 130,
       "uNames": 20
      },
      {
       "date": "2021-04-22",
       "fights": 230,
       "uNames": 34
      },
      {
       "date": "2021-04-23",
       "fights": 161,
       "uNames": 30
      },
      {
       "date": "2021-04-24",
       "fights": 99,
       "uNames": 35
      },
      {
       "date": "2021-04-25",
       "fights": 173,
       "uNames": 36
      },
      {
       "date": "2021-04-26",
       "fights": 78,
       "uNames": 27
      },
      {
       "date": "2021-04-27",
       "fights": 155,
       "uNames": 29
      },
      {
       "date": "2021-04-28",
       "fights": 83,
       "uNames": 24
      },
      {
       "date": "2021-04-29",
       "fights": 44,
       "uNames": 21
      },
      {
       "date": "2021-04-30",
       "fights": 28,
       "uNames": 17
      },
      {
       "date": "2021-05-01",
       "fights": 78,
       "uNames": 27
      },
      {
       "date": "2021-05-02",
       "fights": 99,
       "uNames": 33
      },
      {
       "date": "2021-05-03",
       "fights": 59,
       "uNames": 27
      },
      {
       "date": "2021-05-04",
       "fights": 73,
       "uNames": 18
      },
      {
       "date": "2021-05-05",
       "fights": 102,
       "uNames": 32
      },
      {
       "date": "2021-05-06",
       "fights": 105,
       "uNames": 29
      },
      {
       "date": "2021-05-07",
       "fights": 65,
       "uNames": 39
      },
      {
       "date": "2021-05-08",
       "fights": 89,
       "uNames": 18
      },
      {
       "date": "2021-05-09",
       "fights": 55,
       "uNames": 27
      },
      {
       "date": "2021-05-10",
       "fights": 130,
       "uNames": 30
      },
      {
       "date": "2021-05-11",
       "fights": 83,
       "uNames": 35
      },
      {
       "date": "2021-05-12",
       "fights": 146,
       "uNames": 38
      },
      {
       "date": "2021-05-13",
       "fights": 132,
       "uNames": 27
      },
      {
       "date": "2021-05-14",
       "fights": 152,
       "uNames": 24
      },
      {
       "date": "2021-05-15",
       "fights": 112,
       "uNames": 30
      },
      {
       "date": "2021-05-16",
       "fights": 105,
       "uNames": 30
      },
      {
       "date": "2021-05-17",
       "fights": 259,
       "uNames": 40
      },
      {
       "date": "2021-05-18",
       "fights": 175,
       "uNames": 26
      },
      {
       "date": "2021-05-19",
       "fights": 98,
       "uNames": 30
      },
      {
       "date": "2021-05-20",
       "fights": 122,
       "uNames": 36
      },
      {
       "date": "2021-05-21",
       "fights": 78,
       "uNames": 30
      },
      {
       "date": "2021-05-22",
       "fights": 183,
       "uNames": 47
      },
      {
       "date": "2021-05-23",
       "fights": 95,
       "uNames": 15
      },
      {
       "date": "2021-05-24",
       "fights": 99,
       "uNames": 24
      },
      {
       "date": "2021-05-25",
       "fights": 151,
       "uNames": 22
      },
      {
       "date": "2021-05-26",
       "fights": 153,
       "uNames": 30
      },
      {
       "date": "2021-05-27",
       "fights": 172,
       "uNames": 29
      },
      {
       "date": "2021-05-28",
       "fights": 181,
       "uNames": 34
      },
      {
       "date": "2021-05-29",
       "fights": 77,
       "uNames": 24
      },
      {
       "date": "2021-05-30",
       "fights": 21,
       "uNames": 13
      },
      {
       "date": "2021-05-31",
       "fights": 176,
       "uNames": 41
      },
      {
       "date": "2021-06-01",
       "fights": 122,
       "uNames": 22
      },
      {
       "date": "2021-06-02",
       "fights": 32,
       "uNames": 13
      },
      {
       "date": "2021-06-03",
       "fights": 30,
       "uNames": 17
      },
      {
       "date": "2021-06-04",
       "fights": 13,
       "uNames": 11
      },
      {
       "date": "2021-06-05",
       "fights": 33,
       "uNames": 20
      },
      {
       "date": "2021-06-06",
       "fights": 59,
       "uNames": 21
      },
      {
       "date": "2021-06-07",
       "fights": 92,
       "uNames": 26
      },
      {
       "date": "2021-06-08",
       "fights": 95,
       "uNames": 27
      },
      {
       "date": "2021-06-09",
       "fights": 67,
       "uNames": 19
      },
      {
       "date": "2021-06-10",
       "fights": 56,
       "uNames": 25
      },
      {
       "date": "2021-06-11",
       "fights": 55,
       "uNames": 19
      },
      {
       "date": "2021-06-12",
       "fights": 147,
       "uNames": 35
      },
      {
       "date": "2021-06-13",
       "fights": 137,
       "uNames": 38
      },
      {
       "date": "2021-06-14",
       "fights": 147,
       "uNames": 36
      },
      {
       "date": "2021-06-15",
       "fights": 69,
       "uNames": 28
      },
      {
       "date": "2021-06-16",
       "fights": 29,
       "uNames": 20
      },
      {
       "date": "2021-06-17",
       "fights": 66,
       "uNames": 31
      },
      {
       "date": "2021-06-18",
       "fights": 93,
       "uNames": 31
      },
      {
       "date": "2021-06-19",
       "fights": 117,
       "uNames": 46
      },
      {
       "date": "2021-06-20",
       "fights": 91,
       "uNames": 34
      },
      {
       "date": "2021-06-21",
       "fights": 63,
       "uNames": 19
      },
      {
       "date": "2021-06-22",
       "fights": 111,
       "uNames": 28
      },
      {
       "date": "2021-06-23",
       "fights": 24,
       "uNames": 19
      },
      {
       "date": "2021-06-24",
       "fights": 102,
       "uNames": 28
      },
      {
       "date": "2021-06-25",
       "fights": 60,
       "uNames": 24
      },
      {
       "date": "2021-06-26",
       "fights": 8,
       "uNames": 5
      },
      {
       "date": "2021-06-27",
       "fights": 39,
       "uNames": 25
      },
      {
       "date": "2021-06-28",
       "fights": 72,
       "uNames": 28
      },
      {
       "date": "2021-06-29",
       "fights": 65,
       "uNames": 29
      },
      {
       "date": "2021-06-30",
       "fights": 38,
       "uNames": 29
      },
      {
       "date": "2021-07-01",
       "fights": 93,
       "uNames": 32
      },
      {
       "date": "2021-07-02",
       "fights": 32,
       "uNames": 22
      },
      {
       "date": "2021-07-03",
       "fights": 62,
       "uNames": 22
      },
      {
       "date": "2021-07-04",
       "fights": 36,
       "uNames": 21
      },
      {
       "date": "2021-07-05",
       "fights": 71,
       "uNames": 34
      },
      {
       "date": "2021-07-06",
       "fights": 61,
       "uNames": 34
      },
      {
       "date": "2021-07-07",
       "fights": 37,
       "uNames": 24
      },
      {
       "date": "2021-07-08",
       "fights": 44,
       "uNames": 24
      },
      {
       "date": "2021-07-09",
       "fights": 108,
       "uNames": 31
      },
      {
       "date": "2021-07-10",
       "fights": 133,
       "uNames": 34
      },
      {
       "date": "2021-07-11",
       "fights": 77,
       "uNames": 21
      },
      {
       "date": "2021-07-12",
       "fights": 61,
       "uNames": 26
      },
      {
       "date": "2021-07-13",
       "fights": 31,
       "uNames": 23
      },
      {
       "date": "2021-07-14",
       "fights": 107,
       "uNames": 38
      },
      {
       "date": "2021-07-15",
       "fights": 73,
       "uNames": 22
      },
      {
       "date": "2021-07-16",
       "fights": 28,
       "uNames": 13
      },
      {
       "date": "2021-07-17",
       "fights": 60,
       "uNames": 15
      },
      {
       "date": "2021-07-18",
       "fights": 109,
       "uNames": 30
      },
      {
       "date": "2021-07-19",
       "fights": 149,
       "uNames": 31
      },
      {
       "date": "2021-07-20",
       "fights": 51,
       "uNames": 15
      },
      {
       "date": "2021-07-21",
       "fights": 57,
       "uNames": 21
      },
      {
       "date": "2021-07-22",
       "fights": 67,
       "uNames": 25
      },
      {
       "date": "2021-07-23",
       "fights": 116,
       "uNames": 30
      },
      {
       "date": "2021-07-24",
       "fights": 70,
       "uNames": 31
      },
      {
       "date": "2021-07-25",
       "fights": 76,
       "uNames": 23
      },
      {
       "date": "2021-07-26",
       "fights": 47,
       "uNames": 21
      },
      {
       "date": "2021-07-27",
       "fights": 28,
       "uNames": 18
      },
      {
       "date": "2021-07-28",
       "fights": 12,
       "uNames": 11
      },
      {
       "date": "2021-07-29",
       "fights": 59,
       "uNames": 20
      },
      {
       "date": "2021-07-30",
       "fights": 60,
       "uNames": 26
      },
      {
       "date": "2021-07-31",
       "fights": 20,
       "uNames": 13
      },
      {
       "date": "2021-08-01",
       "fights": 105,
       "uNames": 31
      },
      {
       "date": "2021-08-02",
       "fights": 156,
       "uNames": 40
      },
      {
       "date": "2021-08-03",
       "fights": 93,
       "uNames": 29
      },
      {
       "date": "2021-08-04",
       "fights": 54,
       "uNames": 21
      },
      {
       "date": "2021-08-05",
       "fights": 25,
       "uNames": 21
      },
      {
       "date": "2021-08-06",
       "fights": 44,
       "uNames": 21
      },
      {
       "date": "2021-08-07",
       "fights": 98,
       "uNames": 40
      },
      {
       "date": "2021-08-08",
       "fights": 115,
       "uNames": 58
      },
      {
       "date": "2021-08-09",
       "fights": 46,
       "uNames": 31
      },
      {
       "date": "2021-08-10",
       "fights": 59,
       "uNames": 31
      },
      {
       "date": "2021-08-11",
       "fights": 87,
       "uNames": 32
      },
      {
       "date": "2021-08-12",
       "fights": 64,
       "uNames": 31
      },
      {
       "date": "2021-08-13",
       "fights": 190,
       "uNames": 47
      },
      {
       "date": "2021-08-14",
       "fights": 183,
       "uNames": 45
      },
      {
       "date": "2021-08-15",
       "fights": 69,
       "uNames": 30
      },
      {
       "date": "2021-08-16",
       "fights": 165,
       "uNames": 47
      },
      {
       "date": "2021-08-17",
       "fights": 184,
       "uNames": 42
      },
      {
       "date": "2021-08-18",
       "fights": 71,
       "uNames": 40
      },
      {
       "date": "2021-08-19",
       "fights": 102,
       "uNames": 42
      },
      {
       "date": "2021-08-20",
       "fights": 208,
       "uNames": 62
      },
      {
       "date": "2021-08-21",
       "fights": 258,
       "uNames": 59
      },
      {
       "date": "2021-08-22",
       "fights": 159,
       "uNames": 53
      },
      {
       "date": "2021-08-23",
       "fights": 199,
       "uNames": 62
      },
      {
       "date": "2021-08-24",
       "fights": 107,
       "uNames": 38
      },
      {
       "date": "2021-08-25",
       "fights": 102,
       "uNames": 44
      },
      {
       "date": "2021-08-26",
       "fights": 159,
       "uNames": 56
      },
      {
       "date": "2021-08-27",
       "fights": 209,
       "uNames": 52
      },
      {
       "date": "2021-08-28",
       "fights": 179,
       "uNames": 43
      },
      {
       "date": "2021-08-29",
       "fights": 84,
       "uNames": 42
      },
      {
       "date": "2021-08-30",
       "fights": 116,
       "uNames": 47
      },
      {
       "date": "2021-08-31",
       "fights": 156,
       "uNames": 45
      },
      {
       "date": "2021-09-01",
       "fights": 102,
       "uNames": 46
      },
      {
       "date": "2021-09-02",
       "fights": 122,
       "uNames": 53
      },
      {
       "date": "2021-09-03",
       "fights": 151,
       "uNames": 46
      },
      {
       "date": "2021-09-04",
       "fights": 265,
       "uNames": 55
      },
      {
       "date": "2021-09-05",
       "fights": 176,
       "uNames": 68
      },
      {
       "date": "2021-09-06",
       "fights": 200,
       "uNames": 51
      },
      {
       "date": "2021-09-07",
       "fights": 34,
       "uNames": 17
      },
      {
       "date": "2021-09-08",
       "fights": 133,
       "uNames": 34
      },
      {
       "date": "2021-09-09",
       "fights": 194,
       "uNames": 45
      },
      {
       "date": "2021-09-10",
       "fights": 60,
       "uNames": 35
      },
      {
       "date": "2021-09-11",
       "fights": 164,
       "uNames": 37
      },
      {
       "date": "2021-09-12",
       "fights": 134,
       "uNames": 48
      },
      {
       "date": "2021-09-13",
       "fights": 272,
       "uNames": 68
      },
      {
       "date": "2021-09-14",
       "fights": 158,
       "uNames": 42
      },
      {
       "date": "2021-09-15",
       "fights": 307,
       "uNames": 65
      },
      {
       "date": "2021-09-16",
       "fights": 240,
       "uNames": 65
      },
      {
       "date": "2021-09-17",
       "fights": 200,
       "uNames": 39
      },
      {
       "date": "2021-09-18",
       "fights": 305,
       "uNames": 65
      },
      {
       "date": "2021-09-19",
       "fights": 243,
       "uNames": 58
      },
      {
       "date": "2021-09-20",
       "fights": 291,
       "uNames": 67
      },
      {
       "date": "2021-09-21",
       "fights": 222,
       "uNames": 69
      },
      {
       "date": "2021-09-22",
       "fights": 382,
       "uNames": 105
      },
      {
       "date": "2021-09-23",
       "fights": 364,
       "uNames": 84
      },
      {
       "date": "2021-09-24",
       "fights": 425,
       "uNames": 97
      },
      {
       "date": "2021-09-25",
       "fights": 449,
       "uNames": 90
      },
      {
       "date": "2021-09-26",
       "fights": 303,
       "uNames": 79
      },
      {
       "date": "2021-09-27",
       "fights": 350,
       "uNames": 86
      },
      {
       "date": "2021-09-28",
       "fights": 256,
       "uNames": 61
      },
      {
       "date": "2021-09-29",
       "fights": 257,
       "uNames": 72
      },
      {
       "date": "2021-09-30",
       "fights": 229,
       "uNames": 54
      },
      {
       "date": "2021-10-01",
       "fights": 173,
       "uNames": 44
      },
      {
       "date": "2021-10-02",
       "fights": 190,
       "uNames": 56
      },
      {
       "date": "2021-10-03",
       "fights": 275,
       "uNames": 83
      },
      {
       "date": "2021-10-04",
       "fights": 177,
       "uNames": 71
      },
      {
       "date": "2021-10-05",
       "fights": 127,
       "uNames": 39
      },
      {
       "date": "2021-10-06",
       "fights": 256,
       "uNames": 54
      },
      {
       "date": "2021-10-07",
       "fights": 368,
       "uNames": 87
      },
      {
       "date": "2021-10-08",
       "fights": 351,
       "uNames": 99
      },
      {
       "date": "2021-10-09",
       "fights": 281,
       "uNames": 87
      },
      {
       "date": "2021-10-10",
       "fights": 156,
       "uNames": 44
      },
      {
       "date": "2021-10-11",
       "fights": 191,
       "uNames": 62
      },
      {
       "date": "2021-10-12",
       "fights": 213,
       "uNames": 57
      },
      {
       "date": "2021-10-13",
       "fights": 34,
       "uNames": 24
      },
      {
       "date": "2021-10-14",
       "fights": 30,
       "uNames": 15
      },
      {
       "date": "2021-10-15",
       "fights": 309,
       "uNames": 66
      },
      {
       "date": "2021-10-16",
       "fights": 195,
       "uNames": 50
      },
      {
       "date": "2021-10-17",
       "fights": 275,
       "uNames": 45
      },
      {
       "date": "2021-10-18",
       "fights": 137,
       "uNames": 39
      },
      {
       "date": "2021-10-19",
       "fights": 163,
       "uNames": 38
      },
      {
       "date": "2021-10-20",
       "fights": 174,
       "uNames": 52
      },
      {
       "date": "2021-10-21",
       "fights": 235,
       "uNames": 56
      },
      {
       "date": "2021-10-22",
       "fights": 139,
       "uNames": 44
      },
      {
       "date": "2021-10-23",
       "fights": 117,
       "uNames": 51
      },
      {
       "date": "2021-10-24",
       "fights": 302,
       "uNames": 61
      },
      {
       "date": "2021-10-25",
       "fights": 150,
       "uNames": 56
      },
      {
       "date": "2021-10-26",
       "fights": 184,
       "uNames": 46
      },
      {
       "date": "2021-10-27",
       "fights": 100,
       "uNames": 37
      },
      {
       "date": "2021-10-28",
       "fights": 95,
       "uNames": 34
      },
      {
       "date": "2021-10-29",
       "fights": 144,
       "uNames": 49
      },
      {
       "date": "2021-10-30",
       "fights": 375,
       "uNames": 70
      },
      {
       "date": "2021-10-31",
       "fights": 98,
       "uNames": 40
      },
      {
       "date": "2021-11-01",
       "fights": 206,
       "uNames": 55
      },
      {
       "date": "2021-11-02",
       "fights": 170,
       "uNames": 46
      },
      {
       "date": "2021-11-03",
       "fights": 249,
       "uNames": 47
      },
      {
       "date": "2021-11-04",
       "fights": 218,
       "uNames": 63
      },
      {
       "date": "2021-11-05",
       "fights": 135,
       "uNames": 37
      },
      {
       "date": "2021-11-06",
       "fights": 206,
       "uNames": 64
      },
      {
       "date": "2021-11-07",
       "fights": 188,
       "uNames": 53
      },
      {
       "date": "2021-11-08",
       "fights": 128,
       "uNames": 41
      },
      {
       "date": "2021-11-09",
       "fights": 153,
       "uNames": 43
      },
      {
       "date": "2021-11-10",
       "fights": 162,
       "uNames": 59
      },
      {
       "date": "2021-11-11",
       "fights": 149,
       "uNames": 39
      },
      {
       "date": "2021-11-12",
       "fights": 172,
       "uNames": 48
      },
      {
       "date": "2021-11-13",
       "fights": 95,
       "uNames": 44
      },
      {
       "date": "2021-11-14",
       "fights": 153,
       "uNames": 57
      },
      {
       "date": "2021-11-15",
       "fights": 76,
       "uNames": 37
      },
      {
       "date": "2021-11-16",
       "fights": 38,
       "uNames": 12
      },
      {
       "date": "2021-11-17",
       "fights": 48,
       "uNames": 25
      },
      {
       "date": "2021-11-18",
       "fights": 42,
       "uNames": 16
      },
      {
       "date": "2021-11-19",
       "fights": 117,
       "uNames": 44
      },
      {
       "date": "2021-11-20",
       "fights": 2,
       "uNames": 4
      },
      {
       "date": "2021-11-21",
       "fights": 99,
       "uNames": 41
      },
      {
       "date": "2021-11-22",
       "fights": 116,
       "uNames": 33
      },
      {
       "date": "2021-11-23",
       "fights": 36,
       "uNames": 23
      },
      {
       "date": "2021-11-24",
       "fights": 73,
       "uNames": 38
      },
      {
       "date": "2021-11-25",
       "fights": 50,
       "uNames": 21
      },
      {
       "date": "2021-11-26",
       "fights": 71,
       "uNames": 26
      },
      {
       "date": "2021-11-27",
       "fights": 97,
       "uNames": 42
      },
      {
       "date": "2021-11-28",
       "fights": 63,
       "uNames": 25
      },
      {
       "date": "2021-11-29",
       "fights": 18,
       "uNames": 18
      }
     ];

    // console.log(data);
// https://www.amcharts.com/docs/v5/charts/xy-chart/
let chart = root.container.children.push(am5xy.XYChart.new(root, {
  focusable: true,
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX"
}));



// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  maxDeviation: 0.1,
  min: new Date(2017, 5, 0).getTime(),
  max: new Date(2021, 12, 0).getTime(),
  groupData: false,
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(root, {

  }),
  tooltip: am5.Tooltip.new(root, {})
}));


let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.2,
  renderer: am5xy.AxisRendererY.new(root, {})
}));

// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
let series = chart.series.push(am5xy.LineSeries.new(root, {
  minBulletDistance: 5,
  name: "Series",
  connect: false,
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "fights",
  valueXField: "date",
  sequencedInterpolation: true,
  sequencedDelay: 1,
  tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "horizontal",
    labelText: "{valueY}"
  })
}));

let series1 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "uNames",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY}"
    })
  })
);

series.fills.template.setAll({
  fillOpacity: 0.2,
  visible: true
});

series.strokes.template.setAll({
  strokeWidth: 2
});

// https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
series.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy-MM-dd",
  dateFields: ["date"]
});

series.data.setAll(data);
series1.data.setAll(data);

series.bullets.push(function() {
  let circle = am5.Circle.new(root, {
    radius: 4,
    fill: root.interfaceColors.get("background"),
    stroke: series.get("fill"),
    strokeWidth: 2
  })

  return am5.Bullet.new(root, {
    sprite: circle
  })
});

// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  xAxis: xAxis,
  behavior: "none"
}));
cursor.lineY.set("visible", false);

chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));

// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
series1.appear(1000);
chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default Timeline;