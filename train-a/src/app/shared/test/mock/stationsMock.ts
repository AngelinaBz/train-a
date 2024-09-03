import { Station } from '../../../stations/models/station.model';

const stationsMock = [
  {
    id: 1,
    city: 'city1',
    latitude: -85.00089025471024,
    longitude: 75.71199044700472,
    connectedTo: [
      {
        id: 124,
        distance: 278,
      },
      {
        id: 60,
        distance: 296,
      },
      {
        id: 89,
        distance: 1477,
      },
      {
        id: 112,
        distance: 1478,
      },
      {
        id: 34,
        distance: 1571,
      },
      {
        id: 101,
        distance: 1606,
      },
      {
        id: 28,
        distance: 1931,
      },
      {
        id: 43,
        distance: 1967,
      },
      {
        id: 39,
        distance: 2192,
      },
      {
        id: 11,
        distance: 2252,
      },
      {
        id: 17,
        distance: 2407,
      },
      {
        id: 68,
        distance: 2573,
      },
      {
        id: 82,
        distance: 2805,
      },
      {
        id: 118,
        distance: 3195,
      },
      {
        id: 123,
        distance: 3199,
      },
      {
        id: 44,
        distance: 3321,
      },
      {
        id: 86,
        distance: 3513,
      },
      {
        id: 87,
        distance: 3791,
      },
      {
        id: 117,
        distance: 3832,
      },
      {
        id: 62,
        distance: 4311,
      },
      {
        id: 133,
        distance: 5044,
      },
      {
        id: 46,
        distance: 5122,
      },
      {
        id: 131,
        distance: 5418,
      },
    ],
  },
  {
    id: 2,
    city: 'city2',
    latitude: -11.383662771372343,
    longitude: 7.161728581294739,
    connectedTo: [
      {
        id: 31,
        distance: 1432,
      },
      {
        id: 128,
        distance: 1867,
      },
      {
        id: 16,
        distance: 2802,
      },
      {
        id: 49,
        distance: 2805,
      },
      {
        id: 65,
        distance: 3127,
      },
      {
        id: 134,
        distance: 3483,
      },
      {
        id: 131,
        distance: 3567,
      },
      {
        id: 81,
        distance: 3688,
      },
      {
        id: 9,
        distance: 3814,
      },
      {
        id: 133,
        distance: 4161,
      },
      {
        id: 120,
        distance: 4217,
      },
      {
        id: 63,
        distance: 4252,
      },
      {
        id: 79,
        distance: 4388,
      },
      {
        id: 117,
        distance: 4987,
      },
      {
        id: 18,
        distance: 5187,
      },
      {
        id: 45,
        distance: 5207,
      },
      {
        id: 13,
        distance: 5219,
      },
      {
        id: 99,
        distance: 5226,
      },
      {
        id: 44,
        distance: 5275,
      },
      {
        id: 92,
        distance: 5323,
      },
    ],
  },
  {
    id: 3,
    city: 'city3',
    latitude: 83.75393163343745,
    longitude: -164.00113931395836,
    connectedTo: [
      {
        id: 88,
        distance: 711,
      },
      {
        id: 26,
        distance: 845,
      },
      {
        id: 37,
        distance: 948,
      },
      {
        id: 113,
        distance: 1041,
      },
      {
        id: 74,
        distance: 1057,
      },
      {
        id: 48,
        distance: 1100,
      },
      {
        id: 137,
        distance: 1390,
      },
      {
        id: 132,
        distance: 1442,
      },
      {
        id: 57,
        distance: 1479,
      },
      {
        id: 70,
        distance: 1609,
      },
      {
        id: 47,
        distance: 1689,
      },
      {
        id: 114,
        distance: 1748,
      },
      {
        id: 104,
        distance: 1789,
      },
      {
        id: 59,
        distance: 1990,
      },
      {
        id: 130,
        distance: 2020,
      },
      {
        id: 61,
        distance: 2076,
      },
      {
        id: 106,
        distance: 2421,
      },
      {
        id: 25,
        distance: 2591,
      },
      {
        id: 8,
        distance: 2958,
      },
      {
        id: 111,
        distance: 2997,
      },
      {
        id: 80,
        distance: 3029,
      },
      {
        id: 129,
        distance: 3103,
      },
      {
        id: 110,
        distance: 3118,
      },
      {
        id: 91,
        distance: 3136,
      },
      {
        id: 107,
        distance: 3340,
      },
      {
        id: 136,
        distance: 3652,
      },
      {
        id: 94,
        distance: 3772,
      },
      {
        id: 21,
        distance: 3960,
      },
      {
        id: 15,
        distance: 4212,
      },
      {
        id: 93,
        distance: 4549,
      },
      {
        id: 40,
        distance: 4570,
      },
      {
        id: 12,
        distance: 4603,
      },
      {
        id: 29,
        distance: 4734,
      },
      {
        id: 50,
        distance: 5014,
      },
      {
        id: 67,
        distance: 5021,
      },
      {
        id: 95,
        distance: 5077,
      },
      {
        id: 4,
        distance: 5097,
      },
      {
        id: 108,
        distance: 5401,
      },
    ],
  },
  {
    id: 4,
    city: 'city4',
    latitude: 38.16970731909683,
    longitude: -148.5445259658639,
    connectedTo: [
      {
        id: 93,
        distance: 567,
      },
      {
        id: 29,
        distance: 739,
      },
      {
        id: 15,
        distance: 1106,
      },
      {
        id: 27,
        distance: 1756,
      },
      {
        id: 91,
        distance: 2712,
      },
      {
        id: 76,
        distance: 2804,
      },
      {
        id: 80,
        distance: 3129,
      },
      {
        id: 10,
        distance: 3250,
      },
      {
        id: 122,
        distance: 3495,
      },
      {
        id: 127,
        distance: 3622,
      },
      {
        id: 109,
        distance: 3790,
      },
      {
        id: 8,
        distance: 3793,
      },
      {
        id: 25,
        distance: 3871,
      },
      {
        id: 70,
        distance: 3937,
      },
      {
        id: 83,
        distance: 4378,
      },
      {
        id: 98,
        distance: 4580,
      },
      {
        id: 132,
        distance: 4592,
      },
      {
        id: 26,
        distance: 4782,
      },
      {
        id: 50,
        distance: 4799,
      },
      {
        id: 58,
        distance: 4849,
      },
      {
        id: 55,
        distance: 4895,
      },
      {
        id: 21,
        distance: 5359,
      },
      {
        id: 3,
        distance: 5097,
      },
    ],
  },
  {
    id: 5,
    city: 'city5',
    latitude: 15.547032117947111,
    longitude: 104.19627959267899,
    connectedTo: [
      {
        id: 85,
        distance: 750,
      },
      {
        id: 20,
        distance: 1058,
      },
      {
        id: 66,
        distance: 1870,
      },
      {
        id: 75,
        distance: 2067,
      },
      {
        id: 51,
        distance: 2160,
      },
      {
        id: 22,
        distance: 2197,
      },
      {
        id: 33,
        distance: 2242,
      },
      {
        id: 14,
        distance: 2349,
      },
      {
        id: 42,
        distance: 2403,
      },
      {
        id: 84,
        distance: 2464,
      },
      {
        id: 52,
        distance: 3376,
      },
      {
        id: 32,
        distance: 3478,
      },
      {
        id: 64,
        distance: 3483,
      },
      {
        id: 115,
        distance: 3759,
      },
      {
        id: 6,
        distance: 3991,
      },
      {
        id: 35,
        distance: 4074,
      },
      {
        id: 105,
        distance: 4391,
      },
      {
        id: 102,
        distance: 4522,
      },
      {
        id: 94,
        distance: 4561,
      },
      {
        id: 12,
        distance: 4671,
      },
      {
        id: 24,
        distance: 5102,
      },
      {
        id: 129,
        distance: 5232,
      },
      {
        id: 110,
        distance: 5346,
      },
    ],
  },
  {
    id: 6,
    city: 'city6',
    latitude: 22.32058735146488,
    longitude: 141.5600692006434,
    connectedTo: [
      {
        id: 32,
        distance: 1107,
      },
      {
        id: 51,
        distance: 1845,
      },
      {
        id: 42,
        distance: 1894,
      },
      {
        id: 83,
        distance: 2415,
      },
      {
        id: 35,
        distance: 2682,
      },
      {
        id: 66,
        distance: 2733,
      },
      {
        id: 14,
        distance: 3390,
      },
      {
        id: 75,
        distance: 3397,
      },
      {
        id: 20,
        distance: 3473,
      },
      {
        id: 84,
        distance: 3863,
      },
      {
        id: 94,
        distance: 4217,
      },
      {
        id: 105,
        distance: 4275,
      },
      {
        id: 8,
        distance: 4511,
      },
      {
        id: 64,
        distance: 4515,
      },
      {
        id: 129,
        distance: 4625,
      },
      {
        id: 85,
        distance: 4652,
      },
      {
        id: 33,
        distance: 4772,
      },
      {
        id: 36,
        distance: 4788,
      },
      {
        id: 91,
        distance: 5193,
      },
      {
        id: 102,
        distance: 5213,
      },
      {
        id: 5,
        distance: 3991,
      },
    ],
  },
  {
    id: 7,
    city: 'city7',
    latitude: -21.49331109323009,
    longitude: -53.19275917165653,
    connectedTo: [
      {
        id: 77,
        distance: 560,
      },
      {
        id: 54,
        distance: 786,
      },
      {
        id: 119,
        distance: 1778,
      },
      {
        id: 120,
        distance: 2314,
      },
      {
        id: 99,
        distance: 2359,
      },
      {
        id: 13,
        distance: 2581,
      },
      {
        id: 56,
        distance: 2806,
      },
      {
        id: 92,
        distance: 3063,
      },
      {
        id: 134,
        distance: 3090,
      },
      {
        id: 125,
        distance: 3163,
      },
      {
        id: 53,
        distance: 3188,
      },
      {
        id: 62,
        distance: 4109,
      },
      {
        id: 79,
        distance: 4117,
      },
      {
        id: 65,
        distance: 4512,
      },
      {
        id: 38,
        distance: 4682,
      },
      {
        id: 90,
        distance: 5318,
      },
    ],
  },
  {
    id: 8,
    city: 'city8',
    latitude: 58.01493458233625,
    longitude: 168.3091519599044,
    connectedTo: [
      {
        id: 91,
        distance: 1106,
      },
      {
        id: 70,
        distance: 1421,
      },
      {
        id: 129,
        distance: 2671,
      },
      {
        id: 15,
        distance: 2691,
      },
      {
        id: 83,
        distance: 2724,
      },
      {
        id: 48,
        distance: 2739,
      },
      {
        id: 57,
        distance: 2859,
      },
      {
        id: 94,
        distance: 3088,
      },
      {
        id: 29,
        distance: 3106,
      },
      {
        id: 93,
        distance: 3282,
      },
      {
        id: 26,
        distance: 3395,
      },
      {
        id: 88,
        distance: 3490,
      },
      {
        id: 110,
        distance: 3659,
      },
      {
        id: 113,
        distance: 3728,
      },
      {
        id: 37,
        distance: 3736,
      },
      {
        id: 132,
        distance: 3757,
      },
      {
        id: 74,
        distance: 4010,
      },
      {
        id: 32,
        distance: 4049,
      },
      {
        id: 80,
        distance: 4051,
      },
      {
        id: 25,
        distance: 4221,
      },
      {
        id: 137,
        distance: 4299,
      },
      {
        id: 104,
        distance: 4529,
      },
      {
        id: 107,
        distance: 4563,
      },
      {
        id: 47,
        distance: 4593,
      },
      {
        id: 114,
        distance: 4666,
      },
      {
        id: 61,
        distance: 4680,
      },
      {
        id: 59,
        distance: 4751,
      },
      {
        id: 42,
        distance: 4838,
      },
      {
        id: 14,
        distance: 4846,
      },
      {
        id: 106,
        distance: 4878,
      },
      {
        id: 130,
        distance: 4964,
      },
      {
        id: 84,
        distance: 4995,
      },
      {
        id: 76,
        distance: 5086,
      },
      {
        id: 75,
        distance: 5106,
      },
      {
        id: 66,
        distance: 5168,
      },
      {
        id: 27,
        distance: 5342,
      },
      {
        id: 12,
        distance: 5383,
      },
      {
        id: 51,
        distance: 5392,
      },
      {
        id: 3,
        distance: 2958,
      },
      {
        id: 4,
        distance: 3793,
      },
      {
        id: 6,
        distance: 4511,
      },
    ],
  },
  {
    id: 9,
    city: 'city9',
    latitude: -27.88728139037812,
    longitude: 39.284886509333745,
    connectedTo: [
      {
        id: 16,
        distance: 1316,
      },
      {
        id: 133,
        distance: 1569,
      },
      {
        id: 131,
        distance: 1605,
      },
      {
        id: 81,
        distance: 2186,
      },
      {
        id: 63,
        distance: 2402,
      },
      {
        id: 117,
        distance: 2807,
      },
      {
        id: 128,
        distance: 3045,
      },
      {
        id: 135,
        distance: 3063,
      },
      {
        id: 24,
        distance: 3393,
      },
      {
        id: 18,
        distance: 3893,
      },
      {
        id: 44,
        distance: 4312,
      },
      {
        id: 28,
        distance: 4543,
      },
      {
        id: 65,
        distance: 4634,
      },
      {
        id: 34,
        distance: 4907,
      },
      {
        id: 112,
        distance: 4991,
      },
      {
        id: 52,
        distance: 5150,
      },
      {
        id: 31,
        distance: 5244,
      },
      {
        id: 2,
        distance: 3814,
      },
    ],
  },
  {
    id: 10,
    city: 'city10',
    latitude: 21.92964137365412,
    longitude: -120.21518406907241,
    connectedTo: [
      {
        id: 127,
        distance: 1229,
      },
      {
        id: 109,
        distance: 1992,
      },
      {
        id: 55,
        distance: 2123,
      },
      {
        id: 27,
        distance: 2691,
      },
      {
        id: 19,
        distance: 2744,
      },
      {
        id: 50,
        distance: 3612,
      },
      {
        id: 93,
        distance: 3651,
      },
      {
        id: 71,
        distance: 3975,
      },
      {
        id: 29,
        distance: 3987,
      },
      {
        id: 80,
        distance: 4092,
      },
      {
        id: 122,
        distance: 4221,
      },
      {
        id: 15,
        distance: 4252,
      },
      {
        id: 38,
        distance: 4427,
      },
      {
        id: 58,
        distance: 4530,
      },
      {
        id: 76,
        distance: 4633,
      },
      {
        id: 25,
        distance: 4724,
      },
      {
        id: 21,
        distance: 4937,
      },
      {
        id: 78,
        distance: 5006,
      },
      {
        id: 98,
        distance: 5249,
      },
      {
        id: 4,
        distance: 3250,
      },
    ],
  },
  {
    id: 11,
    city: 'city11',
    latitude: -73.52118080706319,
    longitude: -57.99745193512622,
    connectedTo: [
      {
        id: 17,
        distance: 486,
      },
      {
        id: 89,
        distance: 1289,
      },
      {
        id: 118,
        distance: 1624,
      },
      {
        id: 60,
        distance: 2038,
      },
      {
        id: 101,
        distance: 2254,
      },
      {
        id: 87,
        distance: 2356,
      },
      {
        id: 124,
        distance: 2482,
      },
      {
        id: 62,
        distance: 2724,
      },
      {
        id: 43,
        distance: 2784,
      },
      {
        id: 112,
        distance: 2915,
      },
      {
        id: 44,
        distance: 3068,
      },
      {
        id: 34,
        distance: 3178,
      },
      {
        id: 82,
        distance: 3180,
      },
      {
        id: 28,
        distance: 3201,
      },
      {
        id: 123,
        distance: 3692,
      },
      {
        id: 68,
        distance: 3926,
      },
      {
        id: 30,
        distance: 3946,
      },
      {
        id: 13,
        distance: 4006,
      },
      {
        id: 119,
        distance: 4127,
      },
      {
        id: 39,
        distance: 4406,
      },
      {
        id: 117,
        distance: 4477,
      },
      {
        id: 86,
        distance: 4838,
      },
      {
        id: 65,
        distance: 5017,
      },
      {
        id: 54,
        distance: 5385,
      },
      {
        id: 1,
        distance: 2252,
      },
    ],
  },
  {
    id: 12,
    city: 'city12',
    latitude: 51.88185166234152,
    longitude: 77.70497520640367,
    connectedTo: [
      {
        id: 107,
        distance: 1286,
      },
      {
        id: 110,
        distance: 1760,
      },
      {
        id: 108,
        distance: 2270,
      },
      {
        id: 94,
        distance: 2562,
      },
      {
        id: 84,
        distance: 2658,
      },
      {
        id: 129,
        distance: 2741,
      },
      {
        id: 106,
        distance: 3088,
      },
      {
        id: 14,
        distance: 3100,
      },
      {
        id: 57,
        distance: 3232,
      },
      {
        id: 75,
        distance: 3240,
      },
      {
        id: 61,
        distance: 3431,
      },
      {
        id: 48,
        distance: 3610,
      },
      {
        id: 59,
        distance: 3811,
      },
      {
        id: 113,
        distance: 3860,
      },
      {
        id: 20,
        distance: 3951,
      },
      {
        id: 66,
        distance: 4004,
      },
      {
        id: 37,
        distance: 4039,
      },
      {
        id: 88,
        distance: 4108,
      },
      {
        id: 47,
        distance: 4304,
      },
      {
        id: 137,
        distance: 4307,
      },
      {
        id: 114,
        distance: 4385,
      },
      {
        id: 130,
        distance: 4619,
      },
      {
        id: 42,
        distance: 4665,
      },
      {
        id: 45,
        distance: 4727,
      },
      {
        id: 74,
        distance: 4783,
      },
      {
        id: 85,
        distance: 5000,
      },
      {
        id: 51,
        distance: 5170,
      },
      {
        id: 70,
        distance: 5170,
      },
      {
        id: 32,
        distance: 5191,
      },
      {
        id: 100,
        distance: 5246,
      },
      {
        id: 26,
        distance: 5371,
      },
      {
        id: 3,
        distance: 4603,
      },
      {
        id: 5,
        distance: 4671,
      },
      {
        id: 8,
        distance: 5383,
      },
    ],
  },
  {
    id: 13,
    city: 'city13',
    latitude: -39.1546680256101,
    longitude: -35.58881091602157,
    connectedTo: [
      {
        id: 119,
        distance: 1097,
      },
      {
        id: 62,
        distance: 1628,
      },
      {
        id: 120,
        distance: 1845,
      },
      {
        id: 65,
        distance: 2359,
      },
      {
        id: 54,
        distance: 2750,
      },
      {
        id: 134,
        distance: 2927,
      },
      {
        id: 77,
        distance: 3131,
      },
      {
        id: 44,
        distance: 3608,
      },
      {
        id: 17,
        distance: 3624,
      },
      {
        id: 99,
        distance: 3859,
      },
      {
        id: 89,
        distance: 4402,
      },
      {
        id: 92,
        distance: 4621,
      },
      {
        id: 118,
        distance: 4773,
      },
      {
        id: 125,
        distance: 4984,
      },
      {
        id: 79,
        distance: 5112,
      },
      {
        id: 117,
        distance: 5121,
      },
      {
        id: 31,
        distance: 5130,
      },
      {
        id: 87,
        distance: 5195,
      },
      {
        id: 56,
        distance: 5201,
      },
      {
        id: 131,
        distance: 5331,
      },
      {
        id: 7,
        distance: 2581,
      },
      {
        id: 11,
        distance: 4006,
      },
      {
        id: 2,
        distance: 5219,
      },
    ],
  },
  {
    id: 14,
    city: 'city14',
    latitude: 35.99688899177512,
    longitude: 110.11858929350848,
    connectedTo: [
      {
        id: 75,
        distance: 283,
      },
      {
        id: 84,
        distance: 476,
      },
      {
        id: 66,
        distance: 922,
      },
      {
        id: 20,
        distance: 1300,
      },
      {
        id: 42,
        distance: 1591,
      },
      {
        id: 51,
        distance: 2071,
      },
      {
        id: 94,
        distance: 2217,
      },
      {
        id: 32,
        distance: 2361,
      },
      {
        id: 129,
        distance: 2888,
      },
      {
        id: 85,
        distance: 3023,
      },
      {
        id: 110,
        distance: 3157,
      },
      {
        id: 107,
        distance: 3775,
      },
      {
        id: 22,
        distance: 4322,
      },
      {
        id: 33,
        distance: 4502,
      },
      {
        id: 57,
        distance: 4571,
      },
      {
        id: 83,
        distance: 4727,
      },
      {
        id: 48,
        distance: 4908,
      },
      {
        id: 35,
        distance: 5008,
      },
      {
        id: 52,
        distance: 5193,
      },
      {
        id: 108,
        distance: 5249,
      },
      {
        id: 64,
        distance: 5419,
      },
      {
        id: 5,
        distance: 2349,
      },
      {
        id: 12,
        distance: 3100,
      },
      {
        id: 6,
        distance: 3390,
      },
      {
        id: 8,
        distance: 4846,
      },
    ],
  },
  {
    id: 15,
    city: 'city15',
    latitude: 45.93114999740817,
    longitude: -156.9385761891536,
    connectedTo: [
      {
        id: 29,
        distance: 525,
      },
      {
        id: 93,
        distance: 603,
      },
      {
        id: 91,
        distance: 1606,
      },
      {
        id: 27,
        distance: 2776,
      },
      {
        id: 70,
        distance: 2904,
      },
      {
        id: 80,
        distance: 2915,
      },
      {
        id: 76,
        distance: 3283,
      },
      {
        id: 25,
        distance: 3548,
      },
      {
        id: 83,
        distance: 3665,
      },
      {
        id: 132,
        distance: 3980,
      },
      {
        id: 26,
        distance: 4043,
      },
      {
        id: 122,
        distance: 4259,
      },
      {
        id: 127,
        distance: 4418,
      },
      {
        id: 48,
        distance: 4684,
      },
      {
        id: 109,
        distance: 4892,
      },
      {
        id: 104,
        distance: 4898,
      },
      {
        id: 88,
        distance: 4921,
      },
      {
        id: 57,
        distance: 4970,
      },
      {
        id: 74,
        distance: 4980,
      },
      {
        id: 50,
        distance: 5084,
      },
      {
        id: 37,
        distance: 5159,
      },
      {
        id: 98,
        distance: 5241,
      },
      {
        id: 113,
        distance: 5247,
      },
      {
        id: 21,
        distance: 5311,
      },
      {
        id: 129,
        distance: 5323,
      },
      {
        id: 4,
        distance: 1106,
      },
      {
        id: 8,
        distance: 2691,
      },
      {
        id: 3,
        distance: 4212,
      },
      {
        id: 10,
        distance: 4252,
      },
    ],
  },
  {
    id: 16,
    city: 'city16',
    latitude: -17.93117417387944,
    longitude: 32.33494714136086,
    connectedTo: [
      {
        id: 81,
        distance: 1403,
      },
      {
        id: 128,
        distance: 1733,
      },
      {
        id: 63,
        distance: 1879,
      },
      {
        id: 131,
        distance: 2299,
      },
      {
        id: 133,
        distance: 2573,
      },
      {
        id: 18,
        distance: 3290,
      },
      {
        id: 117,
        distance: 3815,
      },
      {
        id: 24,
        distance: 3821,
      },
      {
        id: 31,
        distance: 4183,
      },
      {
        id: 135,
        distance: 4193,
      },
      {
        id: 65,
        distance: 4526,
      },
      {
        id: 49,
        distance: 4573,
      },
      {
        id: 44,
        distance: 5048,
      },
      {
        id: 52,
        distance: 5347,
      },
      {
        id: 9,
        distance: 1316,
      },
      {
        id: 2,
        distance: 2802,
      },
    ],
  },
  {
    id: 17,
    city: 'city17',
    latitude: -71.35167544550458,
    longitude: -45.38633134539117,
    connectedTo: [
      {
        id: 89,
        distance: 1163,
      },
      {
        id: 118,
        distance: 2045,
      },
      {
        id: 60,
        distance: 2155,
      },
      {
        id: 62,
        distance: 2267,
      },
      {
        id: 44,
        distance: 2639,
      },
      {
        id: 124,
        distance: 2662,
      },
      {
        id: 101,
        distance: 2669,
      },
      {
        id: 87,
        distance: 2768,
      },
      {
        id: 112,
        distance: 2805,
      },
      {
        id: 28,
        distance: 3030,
      },
      {
        id: 34,
        distance: 3084,
      },
      {
        id: 43,
        distance: 3208,
      },
      {
        id: 82,
        distance: 3649,
      },
      {
        id: 119,
        distance: 3850,
      },
      {
        id: 117,
        distance: 4127,
      },
      {
        id: 123,
        distance: 4161,
      },
      {
        id: 30,
        distance: 4285,
      },
      {
        id: 68,
        distance: 4321,
      },
      {
        id: 65,
        distance: 4535,
      },
      {
        id: 39,
        distance: 4597,
      },
      {
        id: 54,
        distance: 5223,
      },
      {
        id: 86,
        distance: 5251,
      },
      {
        id: 133,
        distance: 5328,
      },
      {
        id: 131,
        distance: 5413,
      },
      {
        id: 11,
        distance: 486,
      },
      {
        id: 1,
        distance: 2407,
      },
      {
        id: 13,
        distance: 3624,
      },
    ],
  },
  {
    id: 18,
    city: 'city18',
    latitude: 5.252918791157867,
    longitude: 50.961777658413695,
    connectedTo: [
      {
        id: 63,
        distance: 1500,
      },
      {
        id: 81,
        distance: 1888,
      },
      {
        id: 24,
        distance: 2702,
      },
      {
        id: 52,
        distance: 3002,
      },
      {
        id: 128,
        distance: 3322,
      },
      {
        id: 45,
        distance: 4003,
      },
      {
        id: 22,
        distance: 4286,
      },
      {
        id: 108,
        distance: 4643,
      },
      {
        id: 135,
        distance: 4797,
      },
      {
        id: 49,
        distance: 5033,
      },
      {
        id: 100,
        distance: 5344,
      },
      {
        id: 85,
        distance: 5377,
      },
      {
        id: 131,
        distance: 5414,
      },
      {
        id: 16,
        distance: 3290,
      },
      {
        id: 9,
        distance: 3893,
      },
      {
        id: 2,
        distance: 5187,
      },
    ],
  },
  {
    id: 19,
    city: 'city19',
    latitude: 16.44903739138475,
    longitude: -94.70708102076856,
    connectedTo: [
      {
        id: 55,
        distance: 926,
      },
      {
        id: 38,
        distance: 1683,
      },
      {
        id: 127,
        distance: 2150,
      },
      {
        id: 50,
        distance: 3022,
      },
      {
        id: 71,
        distance: 3044,
      },
      {
        id: 53,
        distance: 3139,
      },
      {
        id: 109,
        distance: 4115,
      },
      {
        id: 125,
        distance: 4335,
      },
      {
        id: 90,
        distance: 4384,
      },
      {
        id: 78,
        distance: 4385,
      },
      {
        id: 21,
        distance: 4401,
      },
      {
        id: 56,
        distance: 4438,
      },
      {
        id: 80,
        distance: 5090,
      },
      {
        id: 25,
        distance: 5360,
      },
      {
        id: 136,
        distance: 5409,
      },
      {
        id: 27,
        distance: 5433,
      },
      {
        id: 10,
        distance: 2744,
      },
    ],
  },
  {
    id: 20,
    city: 'city20',
    latitude: 24.527557661570654,
    longitude: 107.52217716932608,
    connectedTo: [
      {
        id: 66,
        distance: 909,
      },
      {
        id: 75,
        distance: 1019,
      },
      {
        id: 84,
        distance: 1480,
      },
      {
        id: 42,
        distance: 1643,
      },
      {
        id: 51,
        distance: 1684,
      },
      {
        id: 85,
        distance: 1767,
      },
      {
        id: 32,
        distance: 2725,
      },
      {
        id: 22,
        distance: 3154,
      },
      {
        id: 33,
        distance: 3216,
      },
      {
        id: 94,
        distance: 3516,
      },
      {
        id: 129,
        distance: 4187,
      },
      {
        id: 52,
        distance: 4195,
      },
      {
        id: 64,
        distance: 4255,
      },
      {
        id: 35,
        distance: 4296,
      },
      {
        id: 110,
        distance: 4381,
      },
      {
        id: 115,
        distance: 4740,
      },
      {
        id: 107,
        distance: 4862,
      },
      {
        id: 105,
        distance: 4983,
      },
      {
        id: 102,
        distance: 5304,
      },
      {
        id: 83,
        distance: 5377,
      },
      {
        id: 5,
        distance: 1058,
      },
      {
        id: 14,
        distance: 1300,
      },
      {
        id: 6,
        distance: 3473,
      },
      {
        id: 12,
        distance: 3951,
      },
    ],
  },
  {
    id: 21,
    city: 'city21',
    latitude: 54.25318421535832,
    longitude: -79.61134209887591,
    connectedTo: [
      {
        id: 136,
        distance: 1171,
      },
      {
        id: 111,
        distance: 1382,
      },
      {
        id: 50,
        distance: 1453,
      },
      {
        id: 25,
        distance: 1939,
      },
      {
        id: 104,
        distance: 2323,
      },
      {
        id: 80,
        distance: 2407,
      },
      {
        id: 132,
        distance: 2572,
      },
      {
        id: 95,
        distance: 2888,
      },
      {
        id: 67,
        distance: 2916,
      },
      {
        id: 41,
        distance: 3044,
      },
      {
        id: 26,
        distance: 3137,
      },
      {
        id: 74,
        distance: 3329,
      },
      {
        id: 130,
        distance: 3446,
      },
      {
        id: 114,
        distance: 3648,
      },
      {
        id: 47,
        distance: 3726,
      },
      {
        id: 137,
        distance: 3731,
      },
      {
        id: 127,
        distance: 3766,
      },
      {
        id: 90,
        distance: 3768,
      },
      {
        id: 55,
        distance: 3812,
      },
      {
        id: 37,
        distance: 4102,
      },
      {
        id: 88,
        distance: 4124,
      },
      {
        id: 40,
        distance: 4238,
      },
      {
        id: 59,
        distance: 4239,
      },
      {
        id: 113,
        distance: 4278,
      },
      {
        id: 97,
        distance: 4481,
      },
      {
        id: 69,
        distance: 4591,
      },
      {
        id: 61,
        distance: 4613,
      },
      {
        id: 38,
        distance: 4772,
      },
      {
        id: 70,
        distance: 4824,
      },
      {
        id: 106,
        distance: 4986,
      },
      {
        id: 48,
        distance: 5029,
      },
      {
        id: 93,
        distance: 5124,
      },
      {
        id: 116,
        distance: 5361,
      },
      {
        id: 57,
        distance: 5376,
      },
      {
        id: 3,
        distance: 3960,
      },
      {
        id: 19,
        distance: 4401,
      },
      {
        id: 10,
        distance: 4937,
      },
      {
        id: 15,
        distance: 5311,
      },
      {
        id: 4,
        distance: 5359,
      },
    ],
  },
  {
    id: 22,
    city: 'city22',
    latitude: 2.1592219560628507,
    longitude: 89.46237734359158,
    connectedTo: [
      {
        id: 52,
        distance: 1339,
      },
      {
        id: 85,
        distance: 1453,
      },
      {
        id: 33,
        distance: 2103,
      },
      {
        id: 24,
        distance: 2921,
      },
      {
        id: 115,
        distance: 2998,
      },
      {
        id: 64,
        distance: 3657,
      },
      {
        id: 66,
        distance: 4038,
      },
      {
        id: 75,
        distance: 4052,
      },
      {
        id: 84,
        distance: 4265,
      },
      {
        id: 51,
        distance: 4286,
      },
      {
        id: 135,
        distance: 4433,
      },
      {
        id: 102,
        distance: 4434,
      },
      {
        id: 42,
        distance: 4595,
      },
      {
        id: 105,
        distance: 4848,
      },
      {
        id: 63,
        distance: 4966,
      },
      {
        id: 35,
        distance: 5307,
      },
      {
        id: 5,
        distance: 2197,
      },
      {
        id: 20,
        distance: 3154,
      },
      {
        id: 18,
        distance: 4286,
      },
      {
        id: 14,
        distance: 4322,
      },
    ],
  },
  {
    id: 23,
    city: 'city23',
    latitude: -30.343497322492887,
    longitude: 172.86563901187606,
    connectedTo: [
      {
        id: 103,
        distance: 1402,
      },
      {
        id: 46,
        distance: 1602,
      },
      {
        id: 73,
        distance: 2139,
      },
      {
        id: 36,
        distance: 2971,
      },
      {
        id: 96,
        distance: 3207,
      },
      {
        id: 86,
        distance: 3209,
      },
      {
        id: 121,
        distance: 3578,
      },
      {
        id: 68,
        distance: 4166,
      },
      {
        id: 98,
        distance: 4174,
      },
      {
        id: 123,
        distance: 4199,
      },
      {
        id: 126,
        distance: 4369,
      },
      {
        id: 58,
        distance: 4682,
      },
      {
        id: 105,
        distance: 4699,
      },
      {
        id: 82,
        distance: 4704,
      },
      {
        id: 35,
        distance: 4960,
      },
      {
        id: 102,
        distance: 5097,
      },
      {
        id: 43,
        distance: 5138,
      },
      {
        id: 72,
        distance: 5195,
      },
      {
        id: 122,
        distance: 5324,
      },
      {
        id: 39,
        distance: 5436,
      },
    ],
  },
  {
    id: 24,
    city: 'city24',
    latitude: -12.57932959639433,
    longitude: 67.56789827534391,
    connectedTo: [
      {
        id: 52,
        distance: 1815,
      },
      {
        id: 135,
        distance: 2360,
      },
      {
        id: 63,
        distance: 2470,
      },
      {
        id: 81,
        distance: 2977,
      },
      {
        id: 115,
        distance: 4321,
      },
      {
        id: 85,
        distance: 4369,
      },
      {
        id: 33,
        distance: 4449,
      },
      {
        id: 133,
        distance: 4605,
      },
      {
        id: 131,
        distance: 4901,
      },
      {
        id: 128,
        distance: 4957,
      },
      {
        id: 18,
        distance: 2702,
      },
      {
        id: 22,
        distance: 2921,
      },
      {
        id: 9,
        distance: 3393,
      },
      {
        id: 16,
        distance: 3821,
      },
      {
        id: 5,
        distance: 5102,
      },
    ],
  },
  {
    id: 25,
    city: 'city25',
    latitude: 63.69192876574229,
    longitude: -108.5818142660799,
    connectedTo: [
      {
        id: 80,
        distance: 769,
      },
      {
        id: 132,
        distance: 1227,
      },
      {
        id: 104,
        distance: 1783,
      },
      {
        id: 26,
        distance: 1784,
      },
      {
        id: 111,
        distance: 2034,
      },
      {
        id: 136,
        distance: 2464,
      },
      {
        id: 74,
        distance: 2492,
      },
      {
        id: 50,
        distance: 2523,
      },
      {
        id: 70,
        distance: 2995,
      },
      {
        id: 88,
        distance: 3050,
      },
      {
        id: 137,
        distance: 3077,
      },
      {
        id: 37,
        distance: 3150,
      },
      {
        id: 130,
        distance: 3192,
      },
      {
        id: 114,
        distance: 3204,
      },
      {
        id: 47,
        distance: 3236,
      },
      {
        id: 113,
        distance: 3323,
      },
      {
        id: 93,
        distance: 3500,
      },
      {
        id: 91,
        distance: 3603,
      },
      {
        id: 48,
        distance: 3677,
      },
      {
        id: 59,
        distance: 3778,
      },
      {
        id: 127,
        distance: 3867,
      },
      {
        id: 29,
        distance: 3932,
      },
      {
        id: 57,
        distance: 4062,
      },
      {
        id: 61,
        distance: 4073,
      },
      {
        id: 67,
        distance: 4408,
      },
      {
        id: 95,
        distance: 4413,
      },
      {
        id: 106,
        distance: 4483,
      },
      {
        id: 55,
        distance: 4530,
      },
      {
        id: 41,
        distance: 4814,
      },
      {
        id: 40,
        distance: 5086,
      },
      {
        id: 27,
        distance: 5360,
      },
      {
        id: 21,
        distance: 1939,
      },
      {
        id: 3,
        distance: 2591,
      },
      {
        id: 15,
        distance: 3548,
      },
      {
        id: 4,
        distance: 3871,
      },
      {
        id: 8,
        distance: 4221,
      },
      {
        id: 10,
        distance: 4724,
      },
      {
        id: 19,
        distance: 5360,
      },
    ],
  },
  {
    id: 26,
    city: 'city26',
    latitude: 79.4940469031738,
    longitude: -118.20740144811089,
    connectedTo: [
      {
        id: 132,
        distance: 598,
      },
      {
        id: 74,
        distance: 954,
      },
      {
        id: 104,
        distance: 1136,
      },
      {
        id: 88,
        distance: 1280,
      },
      {
        id: 37,
        distance: 1416,
      },
      {
        id: 137,
        distance: 1535,
      },
      {
        id: 113,
        distance: 1577,
      },
      {
        id: 47,
        distance: 1786,
      },
      {
        id: 114,
        distance: 1800,
      },
      {
        id: 48,
        distance: 1944,
      },
      {
        id: 130,
        distance: 1953,
      },
      {
        id: 70,
        distance: 1974,
      },
      {
        id: 59,
        distance: 2254,
      },
      {
        id: 111,
        distance: 2292,
      },
      {
        id: 80,
        distance: 2312,
      },
      {
        id: 57,
        distance: 2318,
      },
      {
        id: 61,
        distance: 2467,
      },
      {
        id: 106,
        distance: 2863,
      },
      {
        id: 136,
        distance: 2945,
      },
      {
        id: 91,
        distance: 3288,
      },
      {
        id: 129,
        distance: 3935,
      },
      {
        id: 110,
        distance: 3950,
      },
      {
        id: 107,
        distance: 4091,
      },
      {
        id: 50,
        distance: 4170,
      },
      {
        id: 93,
        distance: 4270,
      },
      {
        id: 40,
        distance: 4406,
      },
      {
        id: 67,
        distance: 4514,
      },
      {
        id: 29,
        distance: 4544,
      },
      {
        id: 95,
        distance: 4558,
      },
      {
        id: 94,
        distance: 4605,
      },
      {
        id: 41,
        distance: 5243,
      },
      {
        id: 3,
        distance: 845,
      },
      {
        id: 25,
        distance: 1784,
      },
      {
        id: 21,
        distance: 3137,
      },
      {
        id: 8,
        distance: 3395,
      },
      {
        id: 15,
        distance: 4043,
      },
      {
        id: 4,
        distance: 4782,
      },
      {
        id: 12,
        distance: 5371,
      },
    ],
  },
  {
    id: 27,
    city: 'city27',
    latitude: 22.490070882005114,
    longitude: -146.3738691233931,
    connectedTo: [
      {
        id: 76,
        distance: 1965,
      },
      {
        id: 122,
        distance: 1990,
      },
      {
        id: 29,
        distance: 2280,
      },
      {
        id: 109,
        distance: 2281,
      },
      {
        id: 93,
        distance: 2318,
      },
      {
        id: 58,
        distance: 3141,
      },
      {
        id: 98,
        distance: 3141,
      },
      {
        id: 127,
        distance: 3627,
      },
      {
        id: 96,
        distance: 4105,
      },
      {
        id: 91,
        distance: 4331,
      },
      {
        id: 80,
        distance: 4592,
      },
      {
        id: 55,
        distance: 4772,
      },
      {
        id: 121,
        distance: 4867,
      },
      {
        id: 83,
        distance: 5113,
      },
      {
        id: 73,
        distance: 5194,
      },
      {
        id: 4,
        distance: 1756,
      },
      {
        id: 10,
        distance: 2691,
      },
      {
        id: 15,
        distance: 2776,
      },
      {
        id: 8,
        distance: 5342,
      },
      {
        id: 25,
        distance: 5360,
      },
      {
        id: 19,
        distance: 5433,
      },
    ],
  },
  {
    id: 28,
    city: 'city28',
    latitude: -68.72041395811206,
    longitude: 41.569801369910266,
    connectedTo: [
      {
        id: 112,
        distance: 454,
      },
      {
        id: 34,
        distance: 497,
      },
      {
        id: 60,
        distance: 1798,
      },
      {
        id: 89,
        distance: 1913,
      },
      {
        id: 117,
        distance: 1934,
      },
      {
        id: 44,
        distance: 2053,
      },
      {
        id: 124,
        distance: 2065,
      },
      {
        id: 39,
        distance: 2999,
      },
      {
        id: 133,
        distance: 3117,
      },
      {
        id: 131,
        distance: 3520,
      },
      {
        id: 101,
        distance: 3524,
      },
      {
        id: 62,
        distance: 3883,
      },
      {
        id: 43,
        distance: 3895,
      },
      {
        id: 135,
        distance: 4313,
      },
      {
        id: 68,
        distance: 4341,
      },
      {
        id: 118,
        distance: 4655,
      },
      {
        id: 82,
        distance: 4735,
      },
      {
        id: 65,
        distance: 4851,
      },
      {
        id: 123,
        distance: 5123,
      },
      {
        id: 86,
        distance: 5206,
      },
      {
        id: 87,
        distance: 5352,
      },
      {
        id: 1,
        distance: 1931,
      },
      {
        id: 17,
        distance: 3030,
      },
      {
        id: 11,
        distance: 3201,
      },
      {
        id: 9,
        distance: 4543,
      },
    ],
  },
  {
    id: 29,
    city: 'city29',
    latitude: 41.24484781678535,
    longitude: -156.20755213916686,
    connectedTo: [
      {
        id: 93,
        distance: 511,
      },
      {
        id: 91,
        distance: 2058,
      },
      {
        id: 76,
        distance: 2800,
      },
      {
        id: 80,
        distance: 3251,
      },
      {
        id: 70,
        distance: 3421,
      },
      {
        id: 83,
        distance: 3695,
      },
      {
        id: 122,
        distance: 3739,
      },
      {
        id: 127,
        distance: 4302,
      },
      {
        id: 109,
        distance: 4449,
      },
      {
        id: 132,
        distance: 4453,
      },
      {
        id: 98,
        distance: 4735,
      },
      {
        id: 48,
        distance: 5204,
      },
      {
        id: 58,
        distance: 5210,
      },
      {
        id: 50,
        distance: 5241,
      },
      {
        id: 104,
        distance: 5364,
      },
      {
        id: 88,
        distance: 5444,
      },
      {
        id: 15,
        distance: 525,
      },
      {
        id: 4,
        distance: 739,
      },
      {
        id: 27,
        distance: 2280,
      },
      {
        id: 8,
        distance: 3106,
      },
      {
        id: 25,
        distance: 3932,
      },
      {
        id: 10,
        distance: 3987,
      },
      {
        id: 26,
        distance: 4544,
      },
      {
        id: 3,
        distance: 4734,
      },
    ],
  },
  {
    id: 30,
    city: 'city30',
    latitude: -45.49160423203083,
    longitude: -106.98859217187317,
    connectedTo: [
      {
        id: 87,
        distance: 1721,
      },
      {
        id: 118,
        distance: 2398,
      },
      {
        id: 78,
        distance: 2707,
      },
      {
        id: 72,
        distance: 3038,
      },
      {
        id: 126,
        distance: 3266,
      },
      {
        id: 125,
        distance: 3448,
      },
      {
        id: 82,
        distance: 3693,
      },
      {
        id: 123,
        distance: 3856,
      },
      {
        id: 71,
        distance: 4005,
      },
      {
        id: 101,
        distance: 4194,
      },
      {
        id: 43,
        distance: 4273,
      },
      {
        id: 54,
        distance: 4757,
      },
      {
        id: 119,
        distance: 4944,
      },
      {
        id: 121,
        distance: 4985,
      },
      {
        id: 53,
        distance: 5070,
      },
      {
        id: 68,
        distance: 5127,
      },
      {
        id: 89,
        distance: 5193,
      },
      {
        id: 11,
        distance: 3946,
      },
      {
        id: 17,
        distance: 4285,
      },
    ],
  },
  {
    id: 31,
    city: 'city31',
    latitude: -3.592648129460855,
    longitude: -3.1873566973623895,
    connectedTo: [
      {
        id: 49,
        distance: 2175,
      },
      {
        id: 134,
        distance: 2670,
      },
      {
        id: 128,
        distance: 2908,
      },
      {
        id: 79,
        distance: 2997,
      },
      {
        id: 65,
        distance: 3570,
      },
      {
        id: 120,
        distance: 3672,
      },
      {
        id: 92,
        distance: 4031,
      },
      {
        id: 99,
        distance: 4069,
      },
      {
        id: 116,
        distance: 4109,
      },
      {
        id: 100,
        distance: 4832,
      },
      {
        id: 81,
        distance: 4878,
      },
      {
        id: 131,
        distance: 4912,
      },
      {
        id: 45,
        distance: 4981,
      },
      {
        id: 97,
        distance: 5178,
      },
      {
        id: 69,
        distance: 5217,
      },
      {
        id: 63,
        distance: 5424,
      },
      {
        id: 2,
        distance: 1432,
      },
      {
        id: 16,
        distance: 4183,
      },
      {
        id: 13,
        distance: 5130,
      },
      {
        id: 9,
        distance: 5244,
      },
    ],
  },
  {
    id: 32,
    city: 'city32',
    latitude: 29.96764924368246,
    longitude: 134.4637742374054,
    connectedTo: [
      {
        id: 42,
        distance: 1092,
      },
      {
        id: 51,
        distance: 1424,
      },
      {
        id: 66,
        distance: 1864,
      },
      {
        id: 75,
        distance: 2414,
      },
      {
        id: 83,
        distance: 2676,
      },
      {
        id: 84,
        distance: 2823,
      },
      {
        id: 94,
        distance: 3162,
      },
      {
        id: 35,
        distance: 3498,
      },
      {
        id: 129,
        distance: 3627,
      },
      {
        id: 85,
        distance: 4207,
      },
      {
        id: 110,
        distance: 4514,
      },
      {
        id: 33,
        distance: 4798,
      },
      {
        id: 91,
        distance: 4922,
      },
      {
        id: 64,
        distance: 4934,
      },
      {
        id: 105,
        distance: 4962,
      },
      {
        id: 70,
        distance: 5274,
      },
      {
        id: 57,
        distance: 5306,
      },
      {
        id: 6,
        distance: 1107,
      },
      {
        id: 14,
        distance: 2361,
      },
      {
        id: 20,
        distance: 2725,
      },
      {
        id: 5,
        distance: 3478,
      },
      {
        id: 8,
        distance: 4049,
      },
      {
        id: 12,
        distance: 5191,
      },
    ],
  },
  {
    id: 33,
    city: 'city33',
    latitude: -4.389830950768086,
    longitude: 107.2106587415002,
    connectedTo: [
      {
        id: 115,
        distance: 1525,
      },
      {
        id: 64,
        distance: 1578,
      },
      {
        id: 85,
        distance: 1869,
      },
      {
        id: 102,
        distance: 2481,
      },
      {
        id: 105,
        distance: 2752,
      },
      {
        id: 35,
        distance: 3332,
      },
      {
        id: 52,
        distance: 3338,
      },
      {
        id: 51,
        distance: 3402,
      },
      {
        id: 66,
        distance: 3803,
      },
      {
        id: 42,
        distance: 3956,
      },
      {
        id: 75,
        distance: 4226,
      },
      {
        id: 36,
        distance: 4484,
      },
      {
        id: 84,
        distance: 4684,
      },
      {
        id: 135,
        distance: 4974,
      },
      {
        id: 22,
        distance: 2103,
      },
      {
        id: 5,
        distance: 2242,
      },
      {
        id: 20,
        distance: 3216,
      },
      {
        id: 24,
        distance: 4449,
      },
      {
        id: 14,
        distance: 4502,
      },
      {
        id: 6,
        distance: 4772,
      },
      {
        id: 32,
        distance: 4798,
      },
    ],
  },
  {
    id: 34,
    city: 'city34',
    latitude: -71.4406009353368,
    longitude: 52.00573458793775,
    connectedTo: [
      {
        id: 112,
        distance: 291,
      },
      {
        id: 60,
        distance: 1500,
      },
      {
        id: 124,
        distance: 1659,
      },
      {
        id: 89,
        distance: 1925,
      },
      {
        id: 117,
        distance: 2396,
      },
      {
        id: 44,
        distance: 2502,
      },
      {
        id: 39,
        distance: 2510,
      },
      {
        id: 101,
        distance: 3176,
      },
      {
        id: 43,
        distance: 3505,
      },
      {
        id: 133,
        distance: 3538,
      },
      {
        id: 68,
        distance: 3876,
      },
      {
        id: 131,
        distance: 3973,
      },
      {
        id: 62,
        distance: 4213,
      },
      {
        id: 135,
        distance: 4353,
      },
      {
        id: 82,
        distance: 4357,
      },
      {
        id: 118,
        distance: 4520,
      },
      {
        id: 123,
        distance: 4720,
      },
      {
        id: 86,
        distance: 4726,
      },
      {
        id: 87,
        distance: 5190,
      },
      {
        id: 65,
        distance: 5323,
      },
      {
        id: 28,
        distance: 497,
      },
      {
        id: 1,
        distance: 1571,
      },
      {
        id: 17,
        distance: 3084,
      },
      {
        id: 11,
        distance: 3178,
      },
      {
        id: 9,
        distance: 4907,
      },
    ],
  },
  {
    id: 35,
    city: 'city35',
    latitude: -1.3897543647072865,
    longitude: 137.0645813622383,
    connectedTo: [
      {
        id: 105,
        distance: 1640,
      },
      {
        id: 64,
        distance: 2279,
      },
      {
        id: 36,
        distance: 2311,
      },
      {
        id: 102,
        distance: 2661,
      },
      {
        id: 51,
        distance: 2942,
      },
      {
        id: 42,
        distance: 3515,
      },
      {
        id: 115,
        distance: 3721,
      },
      {
        id: 66,
        distance: 4094,
      },
      {
        id: 85,
        distance: 4360,
      },
      {
        id: 83,
        distance: 4736,
      },
      {
        id: 75,
        distance: 4858,
      },
      {
        id: 73,
        distance: 5329,
      },
      {
        id: 84,
        distance: 5440,
      },
      {
        id: 6,
        distance: 2682,
      },
      {
        id: 33,
        distance: 3332,
      },
      {
        id: 32,
        distance: 3498,
      },
      {
        id: 5,
        distance: 4074,
      },
      {
        id: 20,
        distance: 4296,
      },
      {
        id: 23,
        distance: 4960,
      },
      {
        id: 14,
        distance: 5008,
      },
      {
        id: 22,
        distance: 5307,
      },
    ],
  },
  {
    id: 36,
    city: 'city36',
    latitude: -20.582542604248914,
    longitude: 145.21588580682828,
    connectedTo: [
      {
        id: 105,
        distance: 1735,
      },
      {
        id: 102,
        distance: 2336,
      },
      {
        id: 64,
        distance: 2919,
      },
      {
        id: 46,
        distance: 3460,
      },
      {
        id: 115,
        distance: 3956,
      },
      {
        id: 73,
        distance: 4157,
      },
      {
        id: 103,
        distance: 4369,
      },
      {
        id: 86,
        distance: 4716,
      },
      {
        id: 96,
        distance: 5192,
      },
      {
        id: 51,
        distance: 5242,
      },
      {
        id: 35,
        distance: 2311,
      },
      {
        id: 23,
        distance: 2971,
      },
      {
        id: 33,
        distance: 4484,
      },
      {
        id: 6,
        distance: 4788,
      },
    ],
  },
  {
    id: 37,
    city: 'city37',
    latitude: 87.60524813499885,
    longitude: 37.45413089708171,
    connectedTo: [
      {
        id: 113,
        distance: 180,
      },
      {
        id: 88,
        distance: 253,
      },
      {
        id: 137,
        distance: 610,
      },
      {
        id: 74,
        distance: 774,
      },
      {
        id: 47,
        distance: 879,
      },
      {
        id: 114,
        distance: 965,
      },
      {
        id: 59,
        distance: 1056,
      },
      {
        id: 61,
        distance: 1133,
      },
      {
        id: 48,
        distance: 1209,
      },
      {
        id: 130,
        distance: 1296,
      },
      {
        id: 57,
        distance: 1424,
      },
      {
        id: 106,
        distance: 1494,
      },
      {
        id: 104,
        distance: 1780,
      },
      {
        id: 132,
        distance: 1923,
      },
      {
        id: 70,
        distance: 2489,
      },
      {
        id: 107,
        distance: 2754,
      },
      {
        id: 110,
        distance: 2832,
      },
      {
        id: 111,
        distance: 2897,
      },
      {
        id: 129,
        distance: 3182,
      },
      {
        id: 136,
        distance: 3509,
      },
      {
        id: 80,
        distance: 3725,
      },
      {
        id: 40,
        distance: 3773,
      },
      {
        id: 94,
        distance: 3803,
      },
      {
        id: 91,
        distance: 4048,
      },
      {
        id: 67,
        distance: 4523,
      },
      {
        id: 108,
        distance: 4534,
      },
      {
        id: 95,
        distance: 4592,
      },
      {
        id: 69,
        distance: 5321,
      },
      {
        id: 50,
        distance: 5348,
      },
      {
        id: 41,
        distance: 5423,
      },
      {
        id: 3,
        distance: 948,
      },
      {
        id: 26,
        distance: 1416,
      },
      {
        id: 25,
        distance: 3150,
      },
      {
        id: 8,
        distance: 3736,
      },
      {
        id: 12,
        distance: 4039,
      },
      {
        id: 21,
        distance: 4102,
      },
      {
        id: 15,
        distance: 5159,
      },
    ],
  },
  {
    id: 38,
    city: 'city38',
    latitude: 11.34548581083466,
    longitude: -80.02066741973933,
    connectedTo: [
      {
        id: 53,
        distance: 2042,
      },
      {
        id: 55,
        distance: 2466,
      },
      {
        id: 56,
        distance: 2759,
      },
      {
        id: 90,
        distance: 3237,
      },
      {
        id: 71,
        distance: 3458,
      },
      {
        id: 125,
        distance: 3623,
      },
      {
        id: 50,
        distance: 3715,
      },
      {
        id: 127,
        distance: 3739,
      },
      {
        id: 77,
        distance: 4148,
      },
      {
        id: 97,
        distance: 4474,
      },
      {
        id: 54,
        distance: 4608,
      },
      {
        id: 92,
        distance: 4637,
      },
      {
        id: 78,
        distance: 4651,
      },
      {
        id: 99,
        distance: 4787,
      },
      {
        id: 41,
        distance: 4849,
      },
      {
        id: 19,
        distance: 1683,
      },
      {
        id: 10,
        distance: 4427,
      },
      {
        id: 7,
        distance: 4682,
      },
      {
        id: 21,
        distance: 4772,
      },
    ],
  },
  {
    id: 39,
    city: 'city39',
    latitude: -66.83140108286301,
    longitude: 117.53820584081404,
    connectedTo: [
      {
        id: 124,
        distance: 1936,
      },
      {
        id: 68,
        distance: 2195,
      },
      {
        id: 60,
        distance: 2460,
      },
      {
        id: 86,
        distance: 2686,
      },
      {
        id: 112,
        distance: 2695,
      },
      {
        id: 43,
        distance: 2704,
      },
      {
        id: 101,
        distance: 2816,
      },
      {
        id: 82,
        distance: 3413,
      },
      {
        id: 123,
        distance: 3501,
      },
      {
        id: 89,
        distance: 3622,
      },
      {
        id: 46,
        distance: 3907,
      },
      {
        id: 117,
        distance: 4724,
      },
      {
        id: 135,
        distance: 4765,
      },
      {
        id: 44,
        distance: 4986,
      },
      {
        id: 118,
        distance: 4986,
      },
      {
        id: 102,
        distance: 5131,
      },
      {
        id: 87,
        distance: 5399,
      },
      {
        id: 1,
        distance: 2192,
      },
      {
        id: 34,
        distance: 2510,
      },
      {
        id: 28,
        distance: 2999,
      },
      {
        id: 11,
        distance: 4406,
      },
      {
        id: 17,
        distance: 4597,
      },
      {
        id: 23,
        distance: 5436,
      },
    ],
  },
  {
    id: 40,
    city: 'city40',
    latitude: 54.53864863773322,
    longitude: -11.39379156979362,
    connectedTo: [
      {
        id: 69,
        distance: 1634,
      },
      {
        id: 67,
        distance: 1914,
      },
      {
        id: 95,
        distance: 2005,
      },
      {
        id: 130,
        distance: 2550,
      },
      {
        id: 100,
        distance: 2582,
      },
      {
        id: 41,
        distance: 2802,
      },
      {
        id: 59,
        distance: 2826,
      },
      {
        id: 114,
        distance: 2835,
      },
      {
        id: 47,
        distance: 2907,
      },
      {
        id: 61,
        distance: 3026,
      },
      {
        id: 106,
        distance: 3039,
      },
      {
        id: 136,
        distance: 3071,
      },
      {
        id: 111,
        distance: 3150,
      },
      {
        id: 137,
        distance: 3202,
      },
      {
        id: 104,
        distance: 3488,
      },
      {
        id: 116,
        distance: 3557,
      },
      {
        id: 74,
        distance: 3560,
      },
      {
        id: 113,
        distance: 3805,
      },
      {
        id: 45,
        distance: 3806,
      },
      {
        id: 97,
        distance: 3944,
      },
      {
        id: 88,
        distance: 4014,
      },
      {
        id: 108,
        distance: 4079,
      },
      {
        id: 132,
        distance: 4402,
      },
      {
        id: 90,
        distance: 4635,
      },
      {
        id: 107,
        distance: 4751,
      },
      {
        id: 49,
        distance: 4771,
      },
      {
        id: 48,
        distance: 4898,
      },
      {
        id: 57,
        distance: 4957,
      },
      {
        id: 37,
        distance: 3773,
      },
      {
        id: 21,
        distance: 4238,
      },
      {
        id: 26,
        distance: 4406,
      },
      {
        id: 3,
        distance: 4570,
      },
      {
        id: 25,
        distance: 5086,
      },
    ],
  },
  {
    id: 41,
    city: 'city41',
    latitude: 40.90128424887976,
    longitude: -43.47574674121768,
    connectedTo: [
      {
        id: 95,
        distance: 896,
      },
      {
        id: 67,
        distance: 985,
      },
      {
        id: 97,
        distance: 1673,
      },
      {
        id: 90,
        distance: 1866,
      },
      {
        id: 69,
        distance: 2008,
      },
      {
        id: 116,
        distance: 2320,
      },
      {
        id: 136,
        distance: 2402,
      },
      {
        id: 111,
        distance: 3001,
      },
      {
        id: 50,
        distance: 3858,
      },
      {
        id: 104,
        distance: 4110,
      },
      {
        id: 79,
        distance: 4132,
      },
      {
        id: 130,
        distance: 4185,
      },
      {
        id: 92,
        distance: 4318,
      },
      {
        id: 56,
        distance: 4345,
      },
      {
        id: 114,
        distance: 4523,
      },
      {
        id: 47,
        distance: 4622,
      },
      {
        id: 100,
        distance: 4702,
      },
      {
        id: 74,
        distance: 4826,
      },
      {
        id: 137,
        distance: 4829,
      },
      {
        id: 59,
        distance: 4863,
      },
      {
        id: 132,
        distance: 4884,
      },
      {
        id: 99,
        distance: 5081,
      },
      {
        id: 61,
        distance: 5198,
      },
      {
        id: 106,
        distance: 5386,
      },
      {
        id: 80,
        distance: 5411,
      },
      {
        id: 40,
        distance: 2802,
      },
      {
        id: 21,
        distance: 3044,
      },
      {
        id: 25,
        distance: 4814,
      },
      {
        id: 38,
        distance: 4849,
      },
      {
        id: 26,
        distance: 5243,
      },
      {
        id: 37,
        distance: 5423,
      },
    ],
  },
  {
    id: 42,
    city: 'city42',
    latitude: 27.454329411303192,
    longitude: 123.63795104668714,
    connectedTo: [
      {
        id: 51,
        distance: 651,
      },
      {
        id: 66,
        distance: 840,
      },
      {
        id: 75,
        distance: 1538,
      },
      {
        id: 84,
        distance: 2062,
      },
      {
        id: 85,
        distance: 3143,
      },
      {
        id: 94,
        distance: 3161,
      },
      {
        id: 129,
        distance: 3759,
      },
      {
        id: 83,
        distance: 3765,
      },
      {
        id: 110,
        distance: 4400,
      },
      {
        id: 64,
        distance: 4406,
      },
      {
        id: 105,
        distance: 4714,
      },
      {
        id: 107,
        distance: 5191,
      },
      {
        id: 115,
        distance: 5355,
      },
      {
        id: 102,
        distance: 5368,
      },
      {
        id: 32,
        distance: 1092,
      },
      {
        id: 14,
        distance: 1591,
      },
      {
        id: 20,
        distance: 1643,
      },
      {
        id: 6,
        distance: 1894,
      },
      {
        id: 5,
        distance: 2403,
      },
      {
        id: 35,
        distance: 3515,
      },
      {
        id: 33,
        distance: 3956,
      },
      {
        id: 22,
        distance: 4595,
      },
      {
        id: 12,
        distance: 4665,
      },
      {
        id: 8,
        distance: 4838,
      },
    ],
  },
  {
    id: 43,
    city: 'city43',
    latitude: -75.27618761558773,
    longitude: -165.24888953938944,
    connectedTo: [
      {
        id: 101,
        distance: 545,
      },
      {
        id: 82,
        distance: 860,
      },
      {
        id: 68,
        distance: 1186,
      },
      {
        id: 123,
        distance: 1234,
      },
      {
        id: 124,
        distance: 1846,
      },
      {
        id: 86,
        distance: 2056,
      },
      {
        id: 60,
        distance: 2148,
      },
      {
        id: 118,
        distance: 2544,
      },
      {
        id: 87,
        distance: 2784,
      },
      {
        id: 89,
        distance: 2931,
      },
      {
        id: 112,
        distance: 3442,
      },
      {
        id: 46,
        distance: 3639,
      },
      {
        id: 103,
        distance: 4845,
      },
      {
        id: 126,
        distance: 4985,
      },
      {
        id: 44,
        distance: 5091,
      },
      {
        id: 1,
        distance: 1967,
      },
      {
        id: 39,
        distance: 2704,
      },
      {
        id: 11,
        distance: 2784,
      },
      {
        id: 17,
        distance: 3208,
      },
      {
        id: 34,
        distance: 3505,
      },
      {
        id: 28,
        distance: 3895,
      },
      {
        id: 30,
        distance: 4273,
      },
      {
        id: 23,
        distance: 5138,
      },
    ],
  },
  {
    id: 44,
    city: 'city44',
    latitude: -58.79697849656819,
    longitude: 5.275267749911876,
    connectedTo: [
      {
        id: 117,
        distance: 1719,
      },
      {
        id: 62,
        distance: 2127,
      },
      {
        id: 89,
        distance: 2196,
      },
      {
        id: 112,
        distance: 2292,
      },
      {
        id: 133,
        distance: 2767,
      },
      {
        id: 131,
        distance: 2782,
      },
      {
        id: 65,
        distance: 2837,
      },
      {
        id: 60,
        distance: 3053,
      },
      {
        id: 124,
        distance: 3567,
      },
      {
        id: 119,
        distance: 4492,
      },
      {
        id: 101,
        distance: 4586,
      },
      {
        id: 118,
        distance: 4682,
      },
      {
        id: 120,
        distance: 4879,
      },
      {
        id: 87,
        distance: 5407,
      },
      {
        id: 28,
        distance: 2053,
      },
      {
        id: 34,
        distance: 2502,
      },
      {
        id: 17,
        distance: 2639,
      },
      {
        id: 11,
        distance: 3068,
      },
      {
        id: 1,
        distance: 3321,
      },
      {
        id: 13,
        distance: 3608,
      },
      {
        id: 9,
        distance: 4312,
      },
      {
        id: 39,
        distance: 4986,
      },
      {
        id: 16,
        distance: 5048,
      },
      {
        id: 43,
        distance: 5091,
      },
      {
        id: 2,
        distance: 5275,
      },
    ],
  },
  {
    id: 45,
    city: 'city45',
    latitude: 32.10097806763906,
    longitude: 25.315149419825048,
    connectedTo: [
      {
        id: 100,
        distance: 1368,
      },
      {
        id: 108,
        distance: 2470,
      },
      {
        id: 49,
        distance: 2841,
      },
      {
        id: 69,
        distance: 4079,
      },
      {
        id: 128,
        distance: 4168,
      },
      {
        id: 106,
        distance: 4725,
      },
      {
        id: 81,
        distance: 4778,
      },
      {
        id: 63,
        distance: 4872,
      },
      {
        id: 107,
        distance: 4989,
      },
      {
        id: 61,
        distance: 5049,
      },
      {
        id: 59,
        distance: 5171,
      },
      {
        id: 116,
        distance: 5172,
      },
      {
        id: 40,
        distance: 3806,
      },
      {
        id: 18,
        distance: 4003,
      },
      {
        id: 12,
        distance: 4727,
      },
      {
        id: 31,
        distance: 4981,
      },
      {
        id: 2,
        distance: 5207,
      },
    ],
  },
  {
    id: 46,
    city: 'city46',
    latitude: -44.469190886136694,
    longitude: 169.30125474561453,
    connectedTo: [
      {
        id: 86,
        distance: 1631,
      },
      {
        id: 103,
        distance: 2112,
      },
      {
        id: 68,
        distance: 2592,
      },
      {
        id: 123,
        distance: 2883,
      },
      {
        id: 82,
        distance: 3349,
      },
      {
        id: 73,
        distance: 3659,
      },
      {
        id: 101,
        distance: 4180,
      },
      {
        id: 121,
        distance: 4349,
      },
      {
        id: 126,
        distance: 4488,
      },
      {
        id: 96,
        distance: 4647,
      },
      {
        id: 124,
        distance: 4873,
      },
      {
        id: 105,
        distance: 4971,
      },
      {
        id: 102,
        distance: 4999,
      },
      {
        id: 72,
        distance: 5362,
      },
      {
        id: 60,
        distance: 5398,
      },
      {
        id: 23,
        distance: 1602,
      },
      {
        id: 36,
        distance: 3460,
      },
      {
        id: 43,
        distance: 3639,
      },
      {
        id: 39,
        distance: 3907,
      },
      {
        id: 1,
        distance: 5122,
      },
    ],
  },
  {
    id: 47,
    city: 'city47',
    latitude: 80.67619706359847,
    longitude: -9.966726234053766,
    connectedTo: [
      {
        id: 114,
        distance: 100,
      },
      {
        id: 137,
        distance: 300,
      },
      {
        id: 130,
        distance: 439,
      },
      {
        id: 59,
        distance: 550,
      },
      {
        id: 74,
        distance: 833,
      },
      {
        id: 61,
        distance: 897,
      },
      {
        id: 113,
        distance: 949,
      },
      {
        id: 88,
        distance: 1110,
      },
      {
        id: 106,
        distance: 1294,
      },
      {
        id: 104,
        distance: 1534,
      },
      {
        id: 48,
        distance: 2069,
      },
      {
        id: 132,
        distance: 2092,
      },
      {
        id: 57,
        distance: 2229,
      },
      {
        id: 111,
        distance: 2392,
      },
      {
        id: 136,
        distance: 2928,
      },
      {
        id: 107,
        distance: 3070,
      },
      {
        id: 70,
        distance: 3294,
      },
      {
        id: 110,
        distance: 3412,
      },
      {
        id: 67,
        distance: 3694,
      },
      {
        id: 95,
        distance: 3768,
      },
      {
        id: 80,
        distance: 3923,
      },
      {
        id: 129,
        distance: 3947,
      },
      {
        id: 108,
        distance: 4304,
      },
      {
        id: 69,
        distance: 4442,
      },
      {
        id: 94,
        distance: 4531,
      },
      {
        id: 91,
        distance: 4822,
      },
      {
        id: 100,
        distance: 4881,
      },
      {
        id: 50,
        distance: 5095,
      },
      {
        id: 37,
        distance: 879,
      },
      {
        id: 3,
        distance: 1689,
      },
      {
        id: 26,
        distance: 1786,
      },
      {
        id: 40,
        distance: 2907,
      },
      {
        id: 25,
        distance: 3236,
      },
      {
        id: 21,
        distance: 3726,
      },
      {
        id: 12,
        distance: 4304,
      },
      {
        id: 8,
        distance: 4593,
      },
      {
        id: 41,
        distance: 4622,
      },
    ],
  },
  {
    id: 48,
    city: 'city48',
    latitude: 79.4639714627765,
    longitude: 129.18022103459526,
    connectedTo: [
      {
        id: 57,
        distance: 389,
      },
      {
        id: 88,
        distance: 1037,
      },
      {
        id: 113,
        distance: 1121,
      },
      {
        id: 70,
        distance: 1786,
      },
      {
        id: 137,
        distance: 1817,
      },
      {
        id: 74,
        distance: 1840,
      },
      {
        id: 61,
        distance: 1952,
      },
      {
        id: 110,
        distance: 2033,
      },
      {
        id: 129,
        distance: 2056,
      },
      {
        id: 59,
        distance: 2076,
      },
      {
        id: 106,
        distance: 2141,
      },
      {
        id: 114,
        distance: 2162,
      },
      {
        id: 107,
        distance: 2402,
      },
      {
        id: 130,
        distance: 2498,
      },
      {
        id: 132,
        distance: 2541,
      },
      {
        id: 94,
        distance: 2712,
      },
      {
        id: 104,
        distance: 2772,
      },
      {
        id: 91,
        distance: 3308,
      },
      {
        id: 111,
        distance: 3967,
      },
      {
        id: 80,
        distance: 4056,
      },
      {
        id: 136,
        distance: 4608,
      },
      {
        id: 108,
        distance: 4752,
      },
      {
        id: 84,
        distance: 4764,
      },
      {
        id: 93,
        distance: 5125,
      },
      {
        id: 75,
        distance: 5185,
      },
      {
        id: 83,
        distance: 5294,
      },
      {
        id: 3,
        distance: 1100,
      },
      {
        id: 37,
        distance: 1209,
      },
      {
        id: 26,
        distance: 1944,
      },
      {
        id: 47,
        distance: 2069,
      },
      {
        id: 8,
        distance: 2739,
      },
      {
        id: 12,
        distance: 3610,
      },
      {
        id: 25,
        distance: 3677,
      },
      {
        id: 15,
        distance: 4684,
      },
      {
        id: 40,
        distance: 4898,
      },
      {
        id: 14,
        distance: 4908,
      },
      {
        id: 21,
        distance: 5029,
      },
      {
        id: 29,
        distance: 5204,
      },
    ],
  },
  {
    id: 49,
    city: 'city49',
    latitude: 13.803585818588175,
    longitude: 5.818110393576262,
    connectedTo: [
      {
        id: 100,
        distance: 2708,
      },
      {
        id: 128,
        distance: 2848,
      },
      {
        id: 116,
        distance: 3691,
      },
      {
        id: 79,
        distance: 3821,
      },
      {
        id: 69,
        distance: 3886,
      },
      {
        id: 81,
        distance: 4566,
      },
      {
        id: 134,
        distance: 4621,
      },
      {
        id: 97,
        distance: 4980,
      },
      {
        id: 63,
        distance: 4981,
      },
      {
        id: 92,
        distance: 5085,
      },
      {
        id: 108,
        distance: 5301,
      },
      {
        id: 99,
        distance: 5443,
      },
      {
        id: 31,
        distance: 2175,
      },
      {
        id: 2,
        distance: 2805,
      },
      {
        id: 45,
        distance: 2841,
      },
      {
        id: 16,
        distance: 4573,
      },
      {
        id: 40,
        distance: 4771,
      },
      {
        id: 18,
        distance: 5033,
      },
    ],
  },
  {
    id: 50,
    city: 'city50',
    latitude: 43.41888424332254,
    longitude: -90.79479107762869,
    connectedTo: [
      {
        id: 55,
        distance: 2367,
      },
      {
        id: 127,
        distance: 2396,
      },
      {
        id: 80,
        distance: 2547,
      },
      {
        id: 136,
        distance: 2591,
      },
      {
        id: 111,
        distance: 2823,
      },
      {
        id: 132,
        distance: 3573,
      },
      {
        id: 104,
        distance: 3606,
      },
      {
        id: 90,
        distance: 3851,
      },
      {
        id: 95,
        distance: 3998,
      },
      {
        id: 67,
        distance: 4050,
      },
      {
        id: 74,
        distance: 4586,
      },
      {
        id: 93,
        distance: 4730,
      },
      {
        id: 130,
        distance: 4853,
      },
      {
        id: 97,
        distance: 4915,
      },
      {
        id: 114,
        distance: 5024,
      },
      {
        id: 137,
        distance: 5059,
      },
      {
        id: 88,
        distance: 5323,
      },
      {
        id: 21,
        distance: 1453,
      },
      {
        id: 25,
        distance: 2523,
      },
      {
        id: 19,
        distance: 3022,
      },
      {
        id: 10,
        distance: 3612,
      },
      {
        id: 38,
        distance: 3715,
      },
      {
        id: 41,
        distance: 3858,
      },
      {
        id: 26,
        distance: 4170,
      },
      {
        id: 4,
        distance: 4799,
      },
      {
        id: 3,
        distance: 5014,
      },
      {
        id: 15,
        distance: 5084,
      },
      {
        id: 47,
        distance: 5095,
      },
      {
        id: 29,
        distance: 5241,
      },
      {
        id: 37,
        distance: 5348,
      },
    ],
  },
  {
    id: 51,
    city: 'city51',
    latitude: 21.60343644025602,
    longitude: 123.68251396912586,
    connectedTo: [
      {
        id: 66,
        distance: 1176,
      },
      {
        id: 75,
        distance: 1946,
      },
      {
        id: 84,
        distance: 2518,
      },
      {
        id: 85,
        distance: 2852,
      },
      {
        id: 64,
        distance: 3761,
      },
      {
        id: 94,
        distance: 3806,
      },
      {
        id: 83,
        distance: 4030,
      },
      {
        id: 105,
        distance: 4072,
      },
      {
        id: 129,
        distance: 4409,
      },
      {
        id: 102,
        distance: 4718,
      },
      {
        id: 115,
        distance: 4752,
      },
      {
        id: 110,
        distance: 5025,
      },
      {
        id: 42,
        distance: 651,
      },
      {
        id: 32,
        distance: 1424,
      },
      {
        id: 20,
        distance: 1684,
      },
      {
        id: 6,
        distance: 1845,
      },
      {
        id: 14,
        distance: 2071,
      },
      {
        id: 5,
        distance: 2160,
      },
      {
        id: 35,
        distance: 2942,
      },
      {
        id: 33,
        distance: 3402,
      },
      {
        id: 22,
        distance: 4286,
      },
      {
        id: 12,
        distance: 5170,
      },
      {
        id: 36,
        distance: 5242,
      },
      {
        id: 8,
        distance: 5392,
      },
    ],
  },
  {
    id: 52,
    city: 'city52',
    latitude: 0.39230607375490933,
    longitude: 77.55308574457905,
    connectedTo: [
      {
        id: 85,
        distance: 2680,
      },
      {
        id: 63,
        distance: 3632,
      },
      {
        id: 135,
        distance: 3846,
      },
      {
        id: 115,
        distance: 3869,
      },
      {
        id: 81,
        distance: 4198,
      },
      {
        id: 64,
        distance: 4814,
      },
      {
        id: 75,
        distance: 4951,
      },
      {
        id: 84,
        distance: 5022,
      },
      {
        id: 66,
        distance: 5104,
      },
      {
        id: 22,
        distance: 1339,
      },
      {
        id: 24,
        distance: 1815,
      },
      {
        id: 18,
        distance: 3002,
      },
      {
        id: 33,
        distance: 3338,
      },
      {
        id: 5,
        distance: 3376,
      },
      {
        id: 20,
        distance: 4195,
      },
      {
        id: 9,
        distance: 5150,
      },
      {
        id: 14,
        distance: 5193,
      },
      {
        id: 16,
        distance: 5347,
      },
    ],
  },
  {
    id: 53,
    city: 'city53',
    latitude: -6.969510766642713,
    longitude: -78.78426676442557,
    connectedTo: [
      {
        id: 125,
        distance: 1652,
      },
      {
        id: 71,
        distance: 2693,
      },
      {
        id: 56,
        distance: 2763,
      },
      {
        id: 77,
        distance: 2770,
      },
      {
        id: 54,
        distance: 2853,
      },
      {
        id: 78,
        distance: 3402,
      },
      {
        id: 55,
        distance: 4064,
      },
      {
        id: 99,
        distance: 4312,
      },
      {
        id: 92,
        distance: 4537,
      },
      {
        id: 119,
        distance: 4568,
      },
      {
        id: 90,
        distance: 4598,
      },
      {
        id: 127,
        distance: 5260,
      },
      {
        id: 120,
        distance: 5432,
      },
      {
        id: 38,
        distance: 2042,
      },
      {
        id: 19,
        distance: 3139,
      },
      {
        id: 7,
        distance: 3188,
      },
      {
        id: 30,
        distance: 5070,
      },
    ],
  },
  {
    id: 54,
    city: 'city54',
    latitude: -25.105316985453044,
    longitude: -59.80118861157436,
    connectedTo: [
      {
        id: 77,
        distance: 1019,
      },
      {
        id: 119,
        distance: 1731,
      },
      {
        id: 125,
        distance: 2489,
      },
      {
        id: 120,
        distance: 2952,
      },
      {
        id: 99,
        distance: 3113,
      },
      {
        id: 56,
        distance: 3211,
      },
      {
        id: 92,
        distance: 3784,
      },
      {
        id: 134,
        distance: 3826,
      },
      {
        id: 62,
        distance: 4094,
      },
      {
        id: 78,
        distance: 4806,
      },
      {
        id: 71,
        distance: 4882,
      },
      {
        id: 79,
        distance: 4882,
      },
      {
        id: 65,
        distance: 4927,
      },
      {
        id: 118,
        distance: 5218,
      },
      {
        id: 87,
        distance: 5225,
      },
      {
        id: 7,
        distance: 786,
      },
      {
        id: 13,
        distance: 2750,
      },
      {
        id: 53,
        distance: 2853,
      },
      {
        id: 38,
        distance: 4608,
      },
      {
        id: 30,
        distance: 4757,
      },
      {
        id: 17,
        distance: 5223,
      },
      {
        id: 11,
        distance: 5385,
      },
    ],
  },
  {
    id: 55,
    city: 'city55',
    latitude: 23.403533897360006,
    longitude: -99.57820531908389,
    connectedTo: [
      {
        id: 127,
        distance: 1273,
      },
      {
        id: 71,
        distance: 3694,
      },
      {
        id: 109,
        distance: 3828,
      },
      {
        id: 80,
        distance: 4203,
      },
      {
        id: 90,
        distance: 4634,
      },
      {
        id: 136,
        distance: 4910,
      },
      {
        id: 78,
        distance: 5016,
      },
      {
        id: 93,
        distance: 5123,
      },
      {
        id: 56,
        distance: 5149,
      },
      {
        id: 111,
        distance: 5189,
      },
      {
        id: 125,
        distance: 5229,
      },
      {
        id: 19,
        distance: 926,
      },
      {
        id: 10,
        distance: 2123,
      },
      {
        id: 50,
        distance: 2367,
      },
      {
        id: 38,
        distance: 2466,
      },
      {
        id: 21,
        distance: 3812,
      },
      {
        id: 53,
        distance: 4064,
      },
      {
        id: 25,
        distance: 4530,
      },
      {
        id: 27,
        distance: 4772,
      },
      {
        id: 4,
        distance: 4895,
      },
    ],
  },
  {
    id: 56,
    city: 'city56',
    latitude: 3.5597229812975684,
    longitude: -56.24438276215457,
    connectedTo: [
      {
        id: 92,
        distance: 1924,
      },
      {
        id: 99,
        distance: 2038,
      },
      {
        id: 77,
        distance: 2279,
      },
      {
        id: 90,
        distance: 2549,
      },
      {
        id: 97,
        distance: 3030,
      },
      {
        id: 79,
        distance: 3113,
      },
      {
        id: 116,
        distance: 3884,
      },
      {
        id: 134,
        distance: 4006,
      },
      {
        id: 120,
        distance: 4054,
      },
      {
        id: 125,
        distance: 4057,
      },
      {
        id: 119,
        distance: 4570,
      },
      {
        id: 95,
        distance: 5239,
      },
      {
        id: 67,
        distance: 5326,
      },
      {
        id: 71,
        distance: 5396,
      },
      {
        id: 38,
        distance: 2759,
      },
      {
        id: 53,
        distance: 2763,
      },
      {
        id: 7,
        distance: 2806,
      },
      {
        id: 54,
        distance: 3211,
      },
      {
        id: 41,
        distance: 4345,
      },
      {
        id: 19,
        distance: 4438,
      },
      {
        id: 55,
        distance: 5149,
      },
      {
        id: 13,
        distance: 5201,
      },
    ],
  },
  {
    id: 57,
    city: 'city57',
    latitude: 76.98118377242099,
    longitude: 117.030761695195,
    connectedTo: [
      {
        id: 113,
        distance: 1297,
      },
      {
        id: 88,
        distance: 1302,
      },
      {
        id: 110,
        distance: 1645,
      },
      {
        id: 129,
        distance: 1762,
      },
      {
        id: 61,
        distance: 1947,
      },
      {
        id: 137,
        distance: 2009,
      },
      {
        id: 107,
        distance: 2046,
      },
      {
        id: 106,
        distance: 2061,
      },
      {
        id: 70,
        distance: 2068,
      },
      {
        id: 74,
        distance: 2127,
      },
      {
        id: 59,
        distance: 2138,
      },
      {
        id: 114,
        distance: 2326,
      },
      {
        id: 94,
        distance: 2398,
      },
      {
        id: 130,
        distance: 2666,
      },
      {
        id: 132,
        distance: 2916,
      },
      {
        id: 104,
        distance: 3093,
      },
      {
        id: 91,
        distance: 3535,
      },
      {
        id: 111,
        distance: 4271,
      },
      {
        id: 84,
        distance: 4408,
      },
      {
        id: 80,
        distance: 4444,
      },
      {
        id: 108,
        distance: 4471,
      },
      {
        id: 75,
        distance: 4844,
      },
      {
        id: 136,
        distance: 4902,
      },
      {
        id: 83,
        distance: 5299,
      },
      {
        id: 66,
        distance: 5345,
      },
      {
        id: 93,
        distance: 5433,
      },
      {
        id: 48,
        distance: 389,
      },
      {
        id: 37,
        distance: 1424,
      },
      {
        id: 3,
        distance: 1479,
      },
      {
        id: 47,
        distance: 2229,
      },
      {
        id: 26,
        distance: 2318,
      },
      {
        id: 8,
        distance: 2859,
      },
      {
        id: 12,
        distance: 3232,
      },
      {
        id: 25,
        distance: 4062,
      },
      {
        id: 14,
        distance: 4571,
      },
      {
        id: 40,
        distance: 4957,
      },
      {
        id: 15,
        distance: 4970,
      },
      {
        id: 32,
        distance: 5306,
      },
      {
        id: 21,
        distance: 5376,
      },
    ],
  },
  {
    id: 58,
    city: 'city58',
    latitude: -5.373896445588187,
    longitude: -151.08227849810217,
    connectedTo: [
      {
        id: 98,
        distance: 1367,
      },
      {
        id: 122,
        distance: 1577,
      },
      {
        id: 121,
        distance: 1728,
      },
      {
        id: 96,
        distance: 1928,
      },
      {
        id: 109,
        distance: 2612,
      },
      {
        id: 76,
        distance: 2882,
      },
      {
        id: 73,
        distance: 2907,
      },
      {
        id: 72,
        distance: 3123,
      },
      {
        id: 126,
        distance: 3149,
      },
      {
        id: 103,
        distance: 3693,
      },
      {
        id: 78,
        distance: 5078,
      },
      {
        id: 71,
        distance: 5306,
      },
      {
        id: 93,
        distance: 5385,
      },
      {
        id: 27,
        distance: 3141,
      },
      {
        id: 10,
        distance: 4530,
      },
      {
        id: 23,
        distance: 4682,
      },
      {
        id: 4,
        distance: 4849,
      },
      {
        id: 29,
        distance: 5210,
      },
    ],
  },
  {
    id: 59,
    city: 'city59',
    latitude: 78.35177809715944,
    longitude: 14.338936809835474,
    connectedTo: [
      {
        id: 61,
        distance: 382,
      },
      {
        id: 114,
        distance: 606,
      },
      {
        id: 137,
        distance: 725,
      },
      {
        id: 106,
        distance: 753,
      },
      {
        id: 130,
        distance: 810,
      },
      {
        id: 113,
        distance: 1028,
      },
      {
        id: 88,
        distance: 1308,
      },
      {
        id: 74,
        distance: 1326,
      },
      {
        id: 104,
        distance: 2083,
      },
      {
        id: 107,
        distance: 2612,
      },
      {
        id: 132,
        distance: 2614,
      },
      {
        id: 111,
        distance: 2882,
      },
      {
        id: 110,
        distance: 3078,
      },
      {
        id: 136,
        distance: 3377,
      },
      {
        id: 70,
        distance: 3542,
      },
      {
        id: 129,
        distance: 3753,
      },
      {
        id: 108,
        distance: 3760,
      },
      {
        id: 67,
        distance: 3901,
      },
      {
        id: 95,
        distance: 3982,
      },
      {
        id: 94,
        distance: 4288,
      },
      {
        id: 69,
        distance: 4431,
      },
      {
        id: 80,
        distance: 4454,
      },
      {
        id: 100,
        distance: 4539,
      },
      {
        id: 91,
        distance: 5103,
      },
      {
        id: 47,
        distance: 550,
      },
      {
        id: 37,
        distance: 1056,
      },
      {
        id: 3,
        distance: 1990,
      },
      {
        id: 48,
        distance: 2076,
      },
      {
        id: 57,
        distance: 2138,
      },
      {
        id: 26,
        distance: 2254,
      },
      {
        id: 40,
        distance: 2826,
      },
      {
        id: 25,
        distance: 3778,
      },
      {
        id: 12,
        distance: 3811,
      },
      {
        id: 21,
        distance: 4239,
      },
      {
        id: 8,
        distance: 4751,
      },
      {
        id: 41,
        distance: 4863,
      },
      {
        id: 45,
        distance: 5171,
      },
    ],
  },
  {
    id: 60,
    city: 'city60',
    latitude: -84.87617862657957,
    longitude: 45.27058883812708,
    connectedTo: [
      {
        id: 124,
        distance: 573,
      },
      {
        id: 89,
        distance: 1185,
      },
      {
        id: 112,
        distance: 1357,
      },
      {
        id: 101,
        distance: 1734,
      },
      {
        id: 68,
        distance: 2836,
      },
      {
        id: 82,
        distance: 2961,
      },
      {
        id: 118,
        distance: 3108,
      },
      {
        id: 123,
        distance: 3381,
      },
      {
        id: 117,
        distance: 3657,
      },
      {
        id: 87,
        distance: 3738,
      },
      {
        id: 86,
        distance: 3783,
      },
      {
        id: 62,
        distance: 4017,
      },
      {
        id: 133,
        distance: 4887,
      },
      {
        id: 131,
        distance: 5235,
      },
      {
        id: 1,
        distance: 296,
      },
      {
        id: 34,
        distance: 1500,
      },
      {
        id: 28,
        distance: 1798,
      },
      {
        id: 11,
        distance: 2038,
      },
      {
        id: 43,
        distance: 2148,
      },
      {
        id: 17,
        distance: 2155,
      },
      {
        id: 39,
        distance: 2460,
      },
      {
        id: 44,
        distance: 3053,
      },
      {
        id: 46,
        distance: 5398,
      },
    ],
  },
  {
    id: 61,
    city: 'city61',
    latitude: 77.44821209764672,
    longitude: 30.184200823947123,
    connectedTo: [
      {
        id: 106,
        distance: 411,
      },
      {
        id: 114,
        distance: 967,
      },
      {
        id: 137,
        distance: 997,
      },
      {
        id: 113,
        distance: 1044,
      },
      {
        id: 130,
        distance: 1191,
      },
      {
        id: 88,
        distance: 1367,
      },
      {
        id: 74,
        distance: 1587,
      },
      {
        id: 107,
        distance: 2233,
      },
      {
        id: 104,
        distance: 2423,
      },
      {
        id: 110,
        distance: 2734,
      },
      {
        id: 132,
        distance: 2881,
      },
      {
        id: 111,
        distance: 3261,
      },
      {
        id: 129,
        distance: 3472,
      },
      {
        id: 108,
        distance: 3480,
      },
      {
        id: 70,
        distance: 3550,
      },
      {
        id: 136,
        distance: 3758,
      },
      {
        id: 94,
        distance: 3979,
      },
      {
        id: 67,
        distance: 4227,
      },
      {
        id: 95,
        distance: 4310,
      },
      {
        id: 100,
        distance: 4523,
      },
      {
        id: 69,
        distance: 4652,
      },
      {
        id: 80,
        distance: 4723,
      },
      {
        id: 91,
        distance: 5120,
      },
      {
        id: 59,
        distance: 382,
      },
      {
        id: 47,
        distance: 897,
      },
      {
        id: 37,
        distance: 1133,
      },
      {
        id: 57,
        distance: 1947,
      },
      {
        id: 48,
        distance: 1952,
      },
      {
        id: 3,
        distance: 2076,
      },
      {
        id: 26,
        distance: 2467,
      },
      {
        id: 40,
        distance: 3026,
      },
      {
        id: 12,
        distance: 3431,
      },
      {
        id: 25,
        distance: 4073,
      },
      {
        id: 21,
        distance: 4613,
      },
      {
        id: 8,
        distance: 4680,
      },
      {
        id: 45,
        distance: 5049,
      },
      {
        id: 41,
        distance: 5198,
      },
    ],
  },
  {
    id: 62,
    city: 'city62',
    latitude: -52.61980591093338,
    longitude: -27.260478980229237,
    connectedTo: [
      {
        id: 119,
        distance: 2377,
      },
      {
        id: 65,
        distance: 2399,
      },
      {
        id: 89,
        distance: 2835,
      },
      {
        id: 120,
        distance: 3297,
      },
      {
        id: 117,
        distance: 3791,
      },
      {
        id: 118,
        distance: 3927,
      },
      {
        id: 112,
        distance: 3937,
      },
      {
        id: 134,
        distance: 4235,
      },
      {
        id: 131,
        distance: 4421,
      },
      {
        id: 87,
        distance: 4526,
      },
      {
        id: 124,
        distance: 4589,
      },
      {
        id: 133,
        distance: 4623,
      },
      {
        id: 77,
        distance: 4668,
      },
      {
        id: 101,
        distance: 4925,
      },
      {
        id: 13,
        distance: 1628,
      },
      {
        id: 44,
        distance: 2127,
      },
      {
        id: 17,
        distance: 2267,
      },
      {
        id: 11,
        distance: 2724,
      },
      {
        id: 28,
        distance: 3883,
      },
      {
        id: 60,
        distance: 4017,
      },
      {
        id: 54,
        distance: 4094,
      },
      {
        id: 7,
        distance: 4109,
      },
      {
        id: 34,
        distance: 4213,
      },
      {
        id: 1,
        distance: 4311,
      },
    ],
  },
  {
    id: 63,
    city: 'city63',
    latitude: -7.164777365091155,
    longitude: 45.69620375654324,
    connectedTo: [
      {
        id: 81,
        distance: 566,
      },
      {
        id: 128,
        distance: 2519,
      },
      {
        id: 135,
        distance: 3909,
      },
      {
        id: 131,
        distance: 3916,
      },
      {
        id: 133,
        distance: 3969,
      },
      {
        id: 117,
        distance: 5204,
      },
      {
        id: 18,
        distance: 1500,
      },
      {
        id: 16,
        distance: 1879,
      },
      {
        id: 9,
        distance: 2402,
      },
      {
        id: 24,
        distance: 2470,
      },
      {
        id: 52,
        distance: 3632,
      },
      {
        id: 2,
        distance: 4252,
      },
      {
        id: 45,
        distance: 4872,
      },
      {
        id: 22,
        distance: 4966,
      },
      {
        id: 49,
        distance: 4981,
      },
      {
        id: 31,
        distance: 5424,
      },
    ],
  },
  {
    id: 64,
    city: 'city64',
    latitude: -11.94832429113832,
    longitude: 119.3527697149068,
    connectedTo: [
      {
        id: 102,
        distance: 1050,
      },
      {
        id: 105,
        distance: 1203,
      },
      {
        id: 115,
        distance: 1442,
      },
      {
        id: 85,
        distance: 3327,
      },
      {
        id: 66,
        distance: 4566,
      },
      {
        id: 75,
        distance: 5174,
      },
      {
        id: 33,
        distance: 1578,
      },
      {
        id: 35,
        distance: 2279,
      },
      {
        id: 36,
        distance: 2919,
      },
      {
        id: 5,
        distance: 3483,
      },
      {
        id: 22,
        distance: 3657,
      },
      {
        id: 51,
        distance: 3761,
      },
      {
        id: 20,
        distance: 4255,
      },
      {
        id: 42,
        distance: 4406,
      },
      {
        id: 6,
        distance: 4515,
      },
      {
        id: 52,
        distance: 4814,
      },
      {
        id: 32,
        distance: 4934,
      },
      {
        id: 14,
        distance: 5419,
      },
    ],
  },
  {
    id: 65,
    city: 'city65',
    latitude: -35.18066965547988,
    longitude: -9.345293566171534,
    connectedTo: [
      {
        id: 120,
        distance: 2467,
      },
      {
        id: 134,
        distance: 2764,
      },
      {
        id: 131,
        distance: 3244,
      },
      {
        id: 119,
        distance: 3436,
      },
      {
        id: 117,
        distance: 3634,
      },
      {
        id: 133,
        distance: 3736,
      },
      {
        id: 99,
        distance: 4618,
      },
      {
        id: 128,
        distance: 4691,
      },
      {
        id: 89,
        distance: 4717,
      },
      {
        id: 77,
        distance: 4975,
      },
      {
        id: 79,
        distance: 5023,
      },
      {
        id: 112,
        distance: 5125,
      },
      {
        id: 92,
        distance: 5183,
      },
      {
        id: 13,
        distance: 2359,
      },
      {
        id: 62,
        distance: 2399,
      },
      {
        id: 44,
        distance: 2837,
      },
      {
        id: 2,
        distance: 3127,
      },
      {
        id: 31,
        distance: 3570,
      },
      {
        id: 7,
        distance: 4512,
      },
      {
        id: 16,
        distance: 4526,
      },
      {
        id: 17,
        distance: 4535,
      },
      {
        id: 9,
        distance: 4634,
      },
      {
        id: 28,
        distance: 4851,
      },
      {
        id: 54,
        distance: 4927,
      },
      {
        id: 11,
        distance: 5017,
      },
      {
        id: 34,
        distance: 5323,
      },
    ],
  },
  {
    id: 66,
    city: 'city66',
    latitude: 28.92117867185449,
    longitude: 115.2370979978179,
    connectedTo: [
      {
        id: 75,
        distance: 771,
      },
      {
        id: 84,
        distance: 1347,
      },
      {
        id: 85,
        distance: 2614,
      },
      {
        id: 94,
        distance: 2949,
      },
      {
        id: 129,
        distance: 3605,
      },
      {
        id: 110,
        distance: 4027,
      },
      {
        id: 83,
        distance: 4484,
      },
      {
        id: 107,
        distance: 4690,
      },
      {
        id: 105,
        distance: 5084,
      },
      {
        id: 115,
        distance: 5294,
      },
      {
        id: 42,
        distance: 840,
      },
      {
        id: 20,
        distance: 909,
      },
      {
        id: 14,
        distance: 922,
      },
      {
        id: 51,
        distance: 1176,
      },
      {
        id: 32,
        distance: 1864,
      },
      {
        id: 5,
        distance: 1870,
      },
      {
        id: 6,
        distance: 2733,
      },
      {
        id: 33,
        distance: 3803,
      },
      {
        id: 12,
        distance: 4004,
      },
      {
        id: 22,
        distance: 4038,
      },
      {
        id: 35,
        distance: 4094,
      },
      {
        id: 64,
        distance: 4566,
      },
      {
        id: 52,
        distance: 5104,
      },
      {
        id: 8,
        distance: 5168,
      },
      {
        id: 57,
        distance: 5345,
      },
    ],
  },
  {
    id: 67,
    city: 'city67',
    latitude: 48.77351919197946,
    longitude: -37.74424080247863,
    connectedTo: [
      {
        id: 95,
        distance: 94,
      },
      {
        id: 69,
        distance: 1678,
      },
      {
        id: 136,
        distance: 1955,
      },
      {
        id: 111,
        distance: 2422,
      },
      {
        id: 97,
        distance: 2532,
      },
      {
        id: 116,
        distance: 2807,
      },
      {
        id: 90,
        distance: 2845,
      },
      {
        id: 130,
        distance: 3256,
      },
      {
        id: 104,
        distance: 3384,
      },
      {
        id: 114,
        distance: 3596,
      },
      {
        id: 137,
        distance: 3919,
      },
      {
        id: 74,
        distance: 3981,
      },
      {
        id: 100,
        distance: 4132,
      },
      {
        id: 132,
        distance: 4237,
      },
      {
        id: 106,
        distance: 4405,
      },
      {
        id: 113,
        distance: 4628,
      },
      {
        id: 88,
        distance: 4706,
      },
      {
        id: 79,
        distance: 4805,
      },
      {
        id: 80,
        distance: 5092,
      },
      {
        id: 92,
        distance: 5171,
      },
      {
        id: 41,
        distance: 985,
      },
      {
        id: 40,
        distance: 1914,
      },
      {
        id: 21,
        distance: 2916,
      },
      {
        id: 47,
        distance: 3694,
      },
      {
        id: 59,
        distance: 3901,
      },
      {
        id: 50,
        distance: 4050,
      },
      {
        id: 61,
        distance: 4227,
      },
      {
        id: 25,
        distance: 4408,
      },
      {
        id: 26,
        distance: 4514,
      },
      {
        id: 37,
        distance: 4523,
      },
      {
        id: 3,
        distance: 5021,
      },
      {
        id: 56,
        distance: 5326,
      },
    ],
  },
  {
    id: 68,
    city: 'city68',
    latitude: -67.76891291813132,
    longitude: 170.21695438174214,
    connectedTo: [
      {
        id: 86,
        distance: 962,
      },
      {
        id: 123,
        distance: 1355,
      },
      {
        id: 82,
        distance: 1437,
      },
      {
        id: 101,
        distance: 1678,
      },
      {
        id: 124,
        distance: 2348,
      },
      {
        id: 118,
        distance: 3690,
      },
      {
        id: 87,
        distance: 3827,
      },
      {
        id: 89,
        distance: 3853,
      },
      {
        id: 112,
        distance: 3906,
      },
      {
        id: 103,
        distance: 4149,
      },
      {
        id: 126,
        distance: 5051,
      },
      {
        id: 43,
        distance: 1186,
      },
      {
        id: 39,
        distance: 2195,
      },
      {
        id: 1,
        distance: 2573,
      },
      {
        id: 46,
        distance: 2592,
      },
      {
        id: 60,
        distance: 2836,
      },
      {
        id: 34,
        distance: 3876,
      },
      {
        id: 11,
        distance: 3926,
      },
      {
        id: 23,
        distance: 4166,
      },
      {
        id: 17,
        distance: 4321,
      },
      {
        id: 28,
        distance: 4341,
      },
      {
        id: 30,
        distance: 5127,
      },
    ],
  },
  {
    id: 69,
    city: 'city69',
    latitude: 40.88028492626637,
    longitude: -19.522782661237727,
    connectedTo: [
      {
        id: 95,
        distance: 1714,
      },
      {
        id: 116,
        distance: 1929,
      },
      {
        id: 97,
        distance: 2519,
      },
      {
        id: 100,
        distance: 2715,
      },
      {
        id: 90,
        distance: 3510,
      },
      {
        id: 136,
        distance: 3577,
      },
      {
        id: 111,
        distance: 3938,
      },
      {
        id: 79,
        distance: 3941,
      },
      {
        id: 130,
        distance: 4044,
      },
      {
        id: 114,
        distance: 4360,
      },
      {
        id: 104,
        distance: 4669,
      },
      {
        id: 106,
        distance: 4673,
      },
      {
        id: 92,
        distance: 4715,
      },
      {
        id: 137,
        distance: 4725,
      },
      {
        id: 74,
        distance: 4989,
      },
      {
        id: 108,
        distance: 5217,
      },
      {
        id: 113,
        distance: 5373,
      },
      {
        id: 40,
        distance: 1634,
      },
      {
        id: 67,
        distance: 1678,
      },
      {
        id: 41,
        distance: 2008,
      },
      {
        id: 49,
        distance: 3886,
      },
      {
        id: 45,
        distance: 4079,
      },
      {
        id: 59,
        distance: 4431,
      },
      {
        id: 47,
        distance: 4442,
      },
      {
        id: 21,
        distance: 4591,
      },
      {
        id: 61,
        distance: 4652,
      },
      {
        id: 31,
        distance: 5217,
      },
      {
        id: 37,
        distance: 5321,
      },
    ],
  },
  {
    id: 70,
    city: 'city70',
    latitude: 69.58987355977865,
    longitude: -179.1609378824546,
    connectedTo: [
      {
        id: 91,
        distance: 1570,
      },
      {
        id: 88,
        distance: 2236,
      },
      {
        id: 132,
        distance: 2359,
      },
      {
        id: 113,
        distance: 2524,
      },
      {
        id: 74,
        distance: 2634,
      },
      {
        id: 129,
        distance: 2824,
      },
      {
        id: 137,
        distance: 2994,
      },
      {
        id: 80,
        distance: 3020,
      },
      {
        id: 104,
        distance: 3109,
      },
      {
        id: 114,
        distance: 3356,
      },
      {
        id: 93,
        distance: 3370,
      },
      {
        id: 110,
        distance: 3431,
      },
      {
        id: 94,
        distance: 3439,
      },
      {
        id: 130,
        distance: 3628,
      },
      {
        id: 106,
        distance: 3826,
      },
      {
        id: 107,
        distance: 4083,
      },
      {
        id: 83,
        distance: 4134,
      },
      {
        id: 111,
        distance: 4231,
      },
      {
        id: 136,
        distance: 4871,
      },
      {
        id: 8,
        distance: 1421,
      },
      {
        id: 3,
        distance: 1609,
      },
      {
        id: 48,
        distance: 1786,
      },
      {
        id: 26,
        distance: 1974,
      },
      {
        id: 57,
        distance: 2068,
      },
      {
        id: 37,
        distance: 2489,
      },
      {
        id: 15,
        distance: 2904,
      },
      {
        id: 25,
        distance: 2995,
      },
      {
        id: 47,
        distance: 3294,
      },
      {
        id: 29,
        distance: 3421,
      },
      {
        id: 59,
        distance: 3542,
      },
      {
        id: 61,
        distance: 3550,
      },
      {
        id: 4,
        distance: 3937,
      },
      {
        id: 21,
        distance: 4824,
      },
      {
        id: 12,
        distance: 5170,
      },
      {
        id: 32,
        distance: 5274,
      },
    ],
  },
  {
    id: 71,
    city: 'city71',
    latitude: -9.629654720312374,
    longitude: -103.11285778368821,
    connectedTo: [
      {
        id: 78,
        distance: 1341,
      },
      {
        id: 125,
        distance: 2428,
      },
      {
        id: 109,
        distance: 3696,
      },
      {
        id: 72,
        distance: 3744,
      },
      {
        id: 127,
        distance: 4368,
      },
      {
        id: 126,
        distance: 4612,
      },
      {
        id: 77,
        distance: 5215,
      },
      {
        id: 53,
        distance: 2693,
      },
      {
        id: 19,
        distance: 3044,
      },
      {
        id: 38,
        distance: 3458,
      },
      {
        id: 55,
        distance: 3694,
      },
      {
        id: 10,
        distance: 3975,
      },
      {
        id: 30,
        distance: 4005,
      },
      {
        id: 54,
        distance: 4882,
      },
      {
        id: 58,
        distance: 5306,
      },
      {
        id: 56,
        distance: 5396,
      },
    ],
  },
  {
    id: 72,
    city: 'city72',
    latitude: -27.775259003332287,
    longitude: -133.2618722424906,
    connectedTo: [
      {
        id: 126,
        distance: 875,
      },
      {
        id: 121,
        distance: 2133,
      },
      {
        id: 78,
        distance: 2770,
      },
      {
        id: 103,
        distance: 3794,
      },
      {
        id: 109,
        distance: 3954,
      },
      {
        id: 87,
        distance: 4254,
      },
      {
        id: 98,
        distance: 4317,
      },
      {
        id: 96,
        distance: 4329,
      },
      {
        id: 123,
        distance: 4503,
      },
      {
        id: 122,
        distance: 4677,
      },
      {
        id: 73,
        distance: 4685,
      },
      {
        id: 82,
        distance: 4721,
      },
      {
        id: 118,
        distance: 4976,
      },
      {
        id: 125,
        distance: 5037,
      },
      {
        id: 30,
        distance: 3038,
      },
      {
        id: 58,
        distance: 3123,
      },
      {
        id: 71,
        distance: 3744,
      },
      {
        id: 23,
        distance: 5195,
      },
      {
        id: 46,
        distance: 5362,
      },
    ],
  },
  {
    id: 73,
    city: 'city73',
    latitude: -13.985572454145782,
    longitude: -176.15254021268936,
    connectedTo: [
      {
        id: 96,
        distance: 1115,
      },
      {
        id: 103,
        distance: 2021,
      },
      {
        id: 98,
        distance: 2084,
      },
      {
        id: 121,
        distance: 2578,
      },
      {
        id: 122,
        distance: 3220,
      },
      {
        id: 76,
        distance: 3690,
      },
      {
        id: 126,
        distance: 4101,
      },
      {
        id: 86,
        distance: 5151,
      },
      {
        id: 23,
        distance: 2139,
      },
      {
        id: 58,
        distance: 2907,
      },
      {
        id: 46,
        distance: 3659,
      },
      {
        id: 36,
        distance: 4157,
      },
      {
        id: 72,
        distance: 4685,
      },
      {
        id: 27,
        distance: 5194,
      },
      {
        id: 35,
        distance: 5329,
      },
    ],
  },
  {
    id: 74,
    city: 'city74',
    latitude: 83.89654973049224,
    longitude: -63.32224905956326,
    connectedTo: [
      {
        id: 137,
        distance: 602,
      },
      {
        id: 88,
        distance: 826,
      },
      {
        id: 114,
        distance: 846,
      },
      {
        id: 113,
        distance: 950,
      },
      {
        id: 104,
        distance: 1006,
      },
      {
        id: 130,
        distance: 1031,
      },
      {
        id: 132,
        distance: 1296,
      },
      {
        id: 106,
        distance: 1996,
      },
      {
        id: 111,
        distance: 2147,
      },
      {
        id: 136,
        distance: 2776,
      },
      {
        id: 80,
        distance: 3138,
      },
      {
        id: 107,
        distance: 3503,
      },
      {
        id: 110,
        distance: 3603,
      },
      {
        id: 129,
        distance: 3883,
      },
      {
        id: 95,
        distance: 4041,
      },
      {
        id: 91,
        distance: 4101,
      },
      {
        id: 94,
        distance: 4524,
      },
      {
        id: 108,
        distance: 5065,
      },
      {
        id: 93,
        distance: 5222,
      },
      {
        id: 37,
        distance: 774,
      },
      {
        id: 47,
        distance: 833,
      },
      {
        id: 26,
        distance: 954,
      },
      {
        id: 3,
        distance: 1057,
      },
      {
        id: 59,
        distance: 1326,
      },
      {
        id: 61,
        distance: 1587,
      },
      {
        id: 48,
        distance: 1840,
      },
      {
        id: 57,
        distance: 2127,
      },
      {
        id: 25,
        distance: 2492,
      },
      {
        id: 70,
        distance: 2634,
      },
      {
        id: 21,
        distance: 3329,
      },
      {
        id: 40,
        distance: 3560,
      },
      {
        id: 67,
        distance: 3981,
      },
      {
        id: 8,
        distance: 4010,
      },
      {
        id: 50,
        distance: 4586,
      },
      {
        id: 12,
        distance: 4783,
      },
      {
        id: 41,
        distance: 4826,
      },
      {
        id: 15,
        distance: 4980,
      },
      {
        id: 69,
        distance: 4989,
      },
    ],
  },
  {
    id: 75,
    city: 'city75',
    latitude: 33.56510008465163,
    longitude: 109.2196880353041,
    connectedTo: [
      {
        id: 84,
        distance: 585,
      },
      {
        id: 94,
        distance: 2498,
      },
      {
        id: 85,
        distance: 2742,
      },
      {
        id: 129,
        distance: 3169,
      },
      {
        id: 110,
        distance: 3409,
      },
      {
        id: 107,
        distance: 3986,
      },
      {
        id: 83,
        distance: 4874,
      },
      {
        id: 108,
        distance: 5335,
      },
      {
        id: 14,
        distance: 283,
      },
      {
        id: 66,
        distance: 771,
      },
      {
        id: 20,
        distance: 1019,
      },
      {
        id: 42,
        distance: 1538,
      },
      {
        id: 51,
        distance: 1946,
      },
      {
        id: 5,
        distance: 2067,
      },
      {
        id: 32,
        distance: 2414,
      },
      {
        id: 12,
        distance: 3240,
      },
      {
        id: 6,
        distance: 3397,
      },
      {
        id: 22,
        distance: 4052,
      },
      {
        id: 33,
        distance: 4226,
      },
      {
        id: 57,
        distance: 4844,
      },
      {
        id: 35,
        distance: 4858,
      },
      {
        id: 52,
        distance: 4951,
      },
      {
        id: 8,
        distance: 5106,
      },
      {
        id: 64,
        distance: 5174,
      },
      {
        id: 48,
        distance: 5185,
      },
    ],
  },
  {
    id: 76,
    city: 'city76',
    latitude: 17.04108189311974,
    longitude: -164.24606167126063,
    connectedTo: [
      {
        id: 122,
        distance: 1327,
      },
      {
        id: 98,
        distance: 2008,
      },
      {
        id: 96,
        distance: 2763,
      },
      {
        id: 93,
        distance: 3170,
      },
      {
        id: 109,
        distance: 3692,
      },
      {
        id: 83,
        distance: 3799,
      },
      {
        id: 91,
        distance: 4374,
      },
      {
        id: 121,
        distance: 4387,
      },
      {
        id: 27,
        distance: 1965,
      },
      {
        id: 29,
        distance: 2800,
      },
      {
        id: 4,
        distance: 2804,
      },
      {
        id: 58,
        distance: 2882,
      },
      {
        id: 15,
        distance: 3283,
      },
      {
        id: 73,
        distance: 3690,
      },
      {
        id: 10,
        distance: 4633,
      },
      {
        id: 8,
        distance: 5086,
      },
    ],
  },
  {
    id: 77,
    city: 'city77',
    latitude: -16.9147619889972,
    longitude: -55.3995378480689,
    connectedTo: [
      {
        id: 99,
        distance: 2173,
      },
      {
        id: 119,
        distance: 2332,
      },
      {
        id: 120,
        distance: 2662,
      },
      {
        id: 92,
        distance: 2794,
      },
      {
        id: 125,
        distance: 3013,
      },
      {
        id: 134,
        distance: 3278,
      },
      {
        id: 79,
        distance: 3945,
      },
      {
        id: 90,
        distance: 4813,
      },
      {
        id: 97,
        distance: 5055,
      },
      {
        id: 78,
        distance: 5404,
      },
      {
        id: 7,
        distance: 560,
      },
      {
        id: 54,
        distance: 1019,
      },
      {
        id: 56,
        distance: 2279,
      },
      {
        id: 53,
        distance: 2770,
      },
      {
        id: 13,
        distance: 3131,
      },
      {
        id: 38,
        distance: 4148,
      },
      {
        id: 62,
        distance: 4668,
      },
      {
        id: 65,
        distance: 4975,
      },
      {
        id: 71,
        distance: 5215,
      },
    ],
  },
  {
    id: 78,
    city: 'city78',
    latitude: -21.14798707191578,
    longitude: -106.82504427646289,
    connectedTo: [
      {
        id: 125,
        distance: 2392,
      },
      {
        id: 126,
        distance: 3580,
      },
      {
        id: 109,
        distance: 4197,
      },
      {
        id: 87,
        distance: 4425,
      },
      {
        id: 121,
        distance: 4767,
      },
      {
        id: 118,
        distance: 5073,
      },
      {
        id: 71,
        distance: 1341,
      },
      {
        id: 30,
        distance: 2707,
      },
      {
        id: 72,
        distance: 2770,
      },
      {
        id: 53,
        distance: 3402,
      },
      {
        id: 19,
        distance: 4385,
      },
      {
        id: 38,
        distance: 4651,
      },
      {
        id: 54,
        distance: 4806,
      },
      {
        id: 10,
        distance: 5006,
      },
      {
        id: 55,
        distance: 5016,
      },
      {
        id: 58,
        distance: 5078,
      },
      {
        id: 77,
        distance: 5404,
      },
    ],
  },
  {
    id: 79,
    city: 'city79',
    latitude: 6.316728052480997,
    longitude: -28.282077021305327,
    connectedTo: [
      {
        id: 92,
        distance: 1268,
      },
      {
        id: 99,
        distance: 1774,
      },
      {
        id: 116,
        distance: 2063,
      },
      {
        id: 134,
        distance: 2356,
      },
      {
        id: 97,
        distance: 2541,
      },
      {
        id: 120,
        distance: 3281,
      },
      {
        id: 90,
        distance: 3480,
      },
      {
        id: 95,
        distance: 4759,
      },
      {
        id: 119,
        distance: 5200,
      },
      {
        id: 100,
        distance: 5335,
      },
      {
        id: 31,
        distance: 2997,
      },
      {
        id: 56,
        distance: 3113,
      },
      {
        id: 49,
        distance: 3821,
      },
      {
        id: 69,
        distance: 3941,
      },
      {
        id: 77,
        distance: 3945,
      },
      {
        id: 7,
        distance: 4117,
      },
      {
        id: 41,
        distance: 4132,
      },
      {
        id: 2,
        distance: 4388,
      },
      {
        id: 67,
        distance: 4805,
      },
      {
        id: 54,
        distance: 4882,
      },
      {
        id: 65,
        distance: 5023,
      },
      {
        id: 13,
        distance: 5112,
      },
    ],
  },
  {
    id: 80,
    city: 'city80',
    latitude: 58.70562005431094,
    longitude: -118.56644547029275,
    connectedTo: [
      {
        id: 132,
        distance: 1843,
      },
      {
        id: 104,
        distance: 2527,
      },
      {
        id: 111,
        distance: 2770,
      },
      {
        id: 93,
        distance: 2794,
      },
      {
        id: 136,
        distance: 3138,
      },
      {
        id: 91,
        distance: 3259,
      },
      {
        id: 127,
        distance: 3363,
      },
      {
        id: 88,
        distance: 3589,
      },
      {
        id: 137,
        distance: 3737,
      },
      {
        id: 113,
        distance: 3888,
      },
      {
        id: 114,
        distance: 3901,
      },
      {
        id: 130,
        distance: 3919,
      },
      {
        id: 95,
        distance: 5090,
      },
      {
        id: 106,
        distance: 5130,
      },
      {
        id: 25,
        distance: 769,
      },
      {
        id: 26,
        distance: 2312,
      },
      {
        id: 21,
        distance: 2407,
      },
      {
        id: 50,
        distance: 2547,
      },
      {
        id: 15,
        distance: 2915,
      },
      {
        id: 70,
        distance: 3020,
      },
      {
        id: 3,
        distance: 3029,
      },
      {
        id: 4,
        distance: 3129,
      },
      {
        id: 74,
        distance: 3138,
      },
      {
        id: 29,
        distance: 3251,
      },
      {
        id: 37,
        distance: 3725,
      },
      {
        id: 47,
        distance: 3923,
      },
      {
        id: 8,
        distance: 4051,
      },
      {
        id: 48,
        distance: 4056,
      },
      {
        id: 10,
        distance: 4092,
      },
      {
        id: 55,
        distance: 4203,
      },
      {
        id: 57,
        distance: 4444,
      },
      {
        id: 59,
        distance: 4454,
      },
      {
        id: 27,
        distance: 4592,
      },
      {
        id: 61,
        distance: 4723,
      },
      {
        id: 19,
        distance: 5090,
      },
      {
        id: 67,
        distance: 5092,
      },
      {
        id: 41,
        distance: 5411,
      },
    ],
  },
  {
    id: 81,
    city: 'city81',
    latitude: -8.278486838917729,
    longitude: 40.68952976276924,
    connectedTo: [
      {
        id: 128,
        distance: 1983,
      },
      {
        id: 131,
        distance: 3585,
      },
      {
        id: 133,
        distance: 3721,
      },
      {
        id: 135,
        distance: 4174,
      },
      {
        id: 117,
        distance: 4977,
      },
      {
        id: 63,
        distance: 566,
      },
      {
        id: 16,
        distance: 1403,
      },
      {
        id: 18,
        distance: 1888,
      },
      {
        id: 9,
        distance: 2186,
      },
      {
        id: 24,
        distance: 2977,
      },
      {
        id: 2,
        distance: 3688,
      },
      {
        id: 52,
        distance: 4198,
      },
      {
        id: 49,
        distance: 4566,
      },
      {
        id: 45,
        distance: 4778,
      },
      {
        id: 31,
        distance: 4878,
      },
    ],
  },
  {
    id: 82,
    city: 'city82',
    latitude: -68.2407196677677,
    longitude: -154.84737776242804,
    connectedTo: [
      {
        id: 123,
        distance: 513,
      },
      {
        id: 101,
        distance: 1239,
      },
      {
        id: 86,
        distance: 1974,
      },
      {
        id: 87,
        distance: 2445,
      },
      {
        id: 118,
        distance: 2447,
      },
      {
        id: 124,
        distance: 2700,
      },
      {
        id: 89,
        distance: 3605,
      },
      {
        id: 126,
        distance: 4126,
      },
      {
        id: 103,
        distance: 4204,
      },
      {
        id: 112,
        distance: 4283,
      },
      {
        id: 121,
        distance: 5276,
      },
      {
        id: 43,
        distance: 860,
      },
      {
        id: 68,
        distance: 1437,
      },
      {
        id: 1,
        distance: 2805,
      },
      {
        id: 60,
        distance: 2961,
      },
      {
        id: 11,
        distance: 3180,
      },
      {
        id: 46,
        distance: 3349,
      },
      {
        id: 39,
        distance: 3413,
      },
      {
        id: 17,
        distance: 3649,
      },
      {
        id: 30,
        distance: 3693,
      },
      {
        id: 34,
        distance: 4357,
      },
      {
        id: 23,
        distance: 4704,
      },
      {
        id: 72,
        distance: 4721,
      },
      {
        id: 28,
        distance: 4735,
      },
    ],
  },
  {
    id: 83,
    city: 'city83',
    latitude: 33.834001342765134,
    longitude: 162.52381276136458,
    connectedTo: [
      {
        id: 91,
        distance: 3025,
      },
      {
        id: 93,
        distance: 4161,
      },
      {
        id: 94,
        distance: 4240,
      },
      {
        id: 129,
        distance: 4271,
      },
      {
        id: 122,
        distance: 5088,
      },
      {
        id: 84,
        distance: 5109,
      },
      {
        id: 98,
        distance: 5314,
      },
      {
        id: 110,
        distance: 5421,
      },
      {
        id: 6,
        distance: 2415,
      },
      {
        id: 32,
        distance: 2676,
      },
      {
        id: 8,
        distance: 2724,
      },
      {
        id: 15,
        distance: 3665,
      },
      {
        id: 29,
        distance: 3695,
      },
      {
        id: 42,
        distance: 3765,
      },
      {
        id: 76,
        distance: 3799,
      },
      {
        id: 51,
        distance: 4030,
      },
      {
        id: 70,
        distance: 4134,
      },
      {
        id: 4,
        distance: 4378,
      },
      {
        id: 66,
        distance: 4484,
      },
      {
        id: 14,
        distance: 4727,
      },
      {
        id: 35,
        distance: 4736,
      },
      {
        id: 75,
        distance: 4874,
      },
      {
        id: 27,
        distance: 5113,
      },
      {
        id: 48,
        distance: 5294,
      },
      {
        id: 57,
        distance: 5299,
      },
      {
        id: 20,
        distance: 5377,
      },
    ],
  },
  {
    id: 84,
    city: 'city84',
    latitude: 37.685057285454775,
    longitude: 105.20763374267835,
    connectedTo: [
      {
        id: 94,
        distance: 2151,
      },
      {
        id: 129,
        distance: 2812,
      },
      {
        id: 110,
        distance: 2903,
      },
      {
        id: 85,
        distance: 3069,
      },
      {
        id: 107,
        distance: 3420,
      },
      {
        id: 108,
        distance: 4779,
      },
      {
        id: 106,
        distance: 5341,
      },
      {
        id: 14,
        distance: 476,
      },
      {
        id: 75,
        distance: 585,
      },
      {
        id: 66,
        distance: 1347,
      },
      {
        id: 20,
        distance: 1480,
      },
      {
        id: 42,
        distance: 2062,
      },
      {
        id: 5,
        distance: 2464,
      },
      {
        id: 51,
        distance: 2518,
      },
      {
        id: 12,
        distance: 2658,
      },
      {
        id: 32,
        distance: 2823,
      },
      {
        id: 6,
        distance: 3863,
      },
      {
        id: 22,
        distance: 4265,
      },
      {
        id: 57,
        distance: 4408,
      },
      {
        id: 33,
        distance: 4684,
      },
      {
        id: 48,
        distance: 4764,
      },
      {
        id: 8,
        distance: 4995,
      },
      {
        id: 52,
        distance: 5022,
      },
      {
        id: 83,
        distance: 5109,
      },
      {
        id: 35,
        distance: 5440,
      },
    ],
  },
  {
    id: 85,
    city: 'city85',
    latitude: 10.568975082448233,
    longitude: 99.5308762062628,
    connectedTo: [
      {
        id: 115,
        distance: 3306,
      },
      {
        id: 102,
        distance: 4315,
      },
      {
        id: 105,
        distance: 4376,
      },
      {
        id: 94,
        distance: 5207,
      },
      {
        id: 5,
        distance: 750,
      },
      {
        id: 22,
        distance: 1453,
      },
      {
        id: 20,
        distance: 1767,
      },
      {
        id: 33,
        distance: 1869,
      },
      {
        id: 66,
        distance: 2614,
      },
      {
        id: 52,
        distance: 2680,
      },
      {
        id: 75,
        distance: 2742,
      },
      {
        id: 51,
        distance: 2852,
      },
      {
        id: 14,
        distance: 3023,
      },
      {
        id: 84,
        distance: 3069,
      },
      {
        id: 42,
        distance: 3143,
      },
      {
        id: 64,
        distance: 3327,
      },
      {
        id: 32,
        distance: 4207,
      },
      {
        id: 35,
        distance: 4360,
      },
      {
        id: 24,
        distance: 4369,
      },
      {
        id: 6,
        distance: 4652,
      },
      {
        id: 12,
        distance: 5000,
      },
      {
        id: 18,
        distance: 5377,
      },
    ],
  },
  {
    id: 86,
    city: 'city86',
    latitude: -59.125212548878146,
    longitude: 169.86232647712,
    connectedTo: [
      {
        id: 123,
        distance: 1635,
      },
      {
        id: 101,
        distance: 2585,
      },
      {
        id: 124,
        distance: 3275,
      },
      {
        id: 103,
        distance: 3307,
      },
      {
        id: 118,
        distance: 4405,
      },
      {
        id: 87,
        distance: 4406,
      },
      {
        id: 126,
        distance: 4708,
      },
      {
        id: 112,
        distance: 4785,
      },
      {
        id: 89,
        distance: 4815,
      },
      {
        id: 121,
        distance: 5184,
      },
      {
        id: 68,
        distance: 962,
      },
      {
        id: 46,
        distance: 1631,
      },
      {
        id: 82,
        distance: 1974,
      },
      {
        id: 43,
        distance: 2056,
      },
      {
        id: 39,
        distance: 2686,
      },
      {
        id: 23,
        distance: 3209,
      },
      {
        id: 1,
        distance: 3513,
      },
      {
        id: 60,
        distance: 3783,
      },
      {
        id: 36,
        distance: 4716,
      },
      {
        id: 34,
        distance: 4726,
      },
      {
        id: 11,
        distance: 4838,
      },
      {
        id: 73,
        distance: 5151,
      },
      {
        id: 28,
        distance: 5206,
      },
      {
        id: 17,
        distance: 5251,
      },
    ],
  },
  {
    id: 87,
    city: 'city87',
    latitude: -60.912627583247655,
    longitude: -104.78631074444208,
    connectedTo: [
      {
        id: 118,
        distance: 733,
      },
      {
        id: 101,
        distance: 2584,
      },
      {
        id: 123,
        distance: 2793,
      },
      {
        id: 89,
        distance: 3534,
      },
      {
        id: 124,
        distance: 3881,
      },
      {
        id: 126,
        distance: 4138,
      },
      {
        id: 125,
        distance: 4728,
      },
      {
        id: 119,
        distance: 4750,
      },
      {
        id: 112,
        distance: 4980,
      },
      {
        id: 30,
        distance: 1721,
      },
      {
        id: 11,
        distance: 2356,
      },
      {
        id: 82,
        distance: 2445,
      },
      {
        id: 17,
        distance: 2768,
      },
      {
        id: 43,
        distance: 2784,
      },
      {
        id: 60,
        distance: 3738,
      },
      {
        id: 1,
        distance: 3791,
      },
      {
        id: 68,
        distance: 3827,
      },
      {
        id: 72,
        distance: 4254,
      },
      {
        id: 86,
        distance: 4406,
      },
      {
        id: 78,
        distance: 4425,
      },
      {
        id: 62,
        distance: 4526,
      },
      {
        id: 34,
        distance: 5190,
      },
      {
        id: 13,
        distance: 5195,
      },
      {
        id: 54,
        distance: 5225,
      },
      {
        id: 28,
        distance: 5352,
      },
      {
        id: 39,
        distance: 5399,
      },
      {
        id: 44,
        distance: 5407,
      },
    ],
  },
  {
    id: 88,
    city: 'city88',
    latitude: 88.65595329423988,
    longitude: 105.78550821038311,
    connectedTo: [
      {
        id: 113,
        distance: 333,
      },
      {
        id: 137,
        distance: 825,
      },
      {
        id: 114,
        distance: 1191,
      },
      {
        id: 130,
        distance: 1511,
      },
      {
        id: 106,
        distance: 1712,
      },
      {
        id: 104,
        distance: 1811,
      },
      {
        id: 132,
        distance: 1828,
      },
      {
        id: 110,
        distance: 2805,
      },
      {
        id: 107,
        distance: 2824,
      },
      {
        id: 111,
        distance: 2973,
      },
      {
        id: 129,
        distance: 3061,
      },
      {
        id: 136,
        distance: 3601,
      },
      {
        id: 94,
        distance: 3699,
      },
      {
        id: 91,
        distance: 3796,
      },
      {
        id: 108,
        distance: 4721,
      },
      {
        id: 95,
        distance: 4772,
      },
      {
        id: 93,
        distance: 5259,
      },
      {
        id: 37,
        distance: 253,
      },
      {
        id: 3,
        distance: 711,
      },
      {
        id: 74,
        distance: 826,
      },
      {
        id: 48,
        distance: 1037,
      },
      {
        id: 47,
        distance: 1110,
      },
      {
        id: 26,
        distance: 1280,
      },
      {
        id: 57,
        distance: 1302,
      },
      {
        id: 59,
        distance: 1308,
      },
      {
        id: 61,
        distance: 1367,
      },
      {
        id: 70,
        distance: 2236,
      },
      {
        id: 25,
        distance: 3050,
      },
      {
        id: 8,
        distance: 3490,
      },
      {
        id: 80,
        distance: 3589,
      },
      {
        id: 40,
        distance: 4014,
      },
      {
        id: 12,
        distance: 4108,
      },
      {
        id: 21,
        distance: 4124,
      },
      {
        id: 67,
        distance: 4706,
      },
      {
        id: 15,
        distance: 4921,
      },
      {
        id: 50,
        distance: 5323,
      },
      {
        id: 29,
        distance: 5444,
      },
    ],
  },
  {
    id: 89,
    city: 'city89',
    latitude: -77.56868771708349,
    longitude: -12.980317791680392,
    connectedTo: [
      {
        id: 112,
        distance: 1649,
      },
      {
        id: 124,
        distance: 1755,
      },
      {
        id: 101,
        distance: 2408,
      },
      {
        id: 118,
        distance: 2811,
      },
      {
        id: 117,
        distance: 3313,
      },
      {
        id: 123,
        distance: 4092,
      },
      {
        id: 133,
        distance: 4567,
      },
      {
        id: 131,
        distance: 4776,
      },
      {
        id: 119,
        distance: 4831,
      },
      {
        id: 17,
        distance: 1163,
      },
      {
        id: 60,
        distance: 1185,
      },
      {
        id: 11,
        distance: 1289,
      },
      {
        id: 1,
        distance: 1477,
      },
      {
        id: 28,
        distance: 1913,
      },
      {
        id: 34,
        distance: 1925,
      },
      {
        id: 44,
        distance: 2196,
      },
      {
        id: 62,
        distance: 2835,
      },
      {
        id: 43,
        distance: 2931,
      },
      {
        id: 87,
        distance: 3534,
      },
      {
        id: 82,
        distance: 3605,
      },
      {
        id: 39,
        distance: 3622,
      },
      {
        id: 68,
        distance: 3853,
      },
      {
        id: 13,
        distance: 4402,
      },
      {
        id: 65,
        distance: 4717,
      },
      {
        id: 86,
        distance: 4815,
      },
      {
        id: 30,
        distance: 5193,
      },
    ],
  },
  {
    id: 90,
    city: 'city90',
    latitude: 26.32793622962808,
    longitude: -53.5233075094135,
    connectedTo: [
      {
        id: 97,
        distance: 1323,
      },
      {
        id: 116,
        distance: 2614,
      },
      {
        id: 95,
        distance: 2753,
      },
      {
        id: 92,
        distance: 3093,
      },
      {
        id: 136,
        distance: 3691,
      },
      {
        id: 99,
        distance: 3748,
      },
      {
        id: 111,
        distance: 4347,
      },
      {
        id: 41,
        distance: 1866,
      },
      {
        id: 56,
        distance: 2549,
      },
      {
        id: 67,
        distance: 2845,
      },
      {
        id: 38,
        distance: 3237,
      },
      {
        id: 79,
        distance: 3480,
      },
      {
        id: 69,
        distance: 3510,
      },
      {
        id: 21,
        distance: 3768,
      },
      {
        id: 50,
        distance: 3851,
      },
      {
        id: 19,
        distance: 4384,
      },
      {
        id: 53,
        distance: 4598,
      },
      {
        id: 55,
        distance: 4634,
      },
      {
        id: 40,
        distance: 4635,
      },
      {
        id: 77,
        distance: 4813,
      },
      {
        id: 7,
        distance: 5318,
      },
    ],
  },
  {
    id: 91,
    city: 'city91',
    latitude: 55.66487506986073,
    longitude: -173.96212981769244,
    connectedTo: [
      {
        id: 93,
        distance: 2185,
      },
      {
        id: 132,
        distance: 3477,
      },
      {
        id: 129,
        distance: 3718,
      },
      {
        id: 113,
        distance: 4091,
      },
      {
        id: 94,
        distance: 4179,
      },
      {
        id: 104,
        distance: 4361,
      },
      {
        id: 137,
        distance: 4524,
      },
      {
        id: 110,
        distance: 4620,
      },
      {
        id: 114,
        distance: 4876,
      },
      {
        id: 130,
        distance: 5124,
      },
      {
        id: 111,
        distance: 5323,
      },
      {
        id: 106,
        distance: 5392,
      },
      {
        id: 107,
        distance: 5438,
      },
      {
        id: 8,
        distance: 1106,
      },
      {
        id: 70,
        distance: 1570,
      },
      {
        id: 15,
        distance: 1606,
      },
      {
        id: 29,
        distance: 2058,
      },
      {
        id: 4,
        distance: 2712,
      },
      {
        id: 83,
        distance: 3025,
      },
      {
        id: 3,
        distance: 3136,
      },
      {
        id: 80,
        distance: 3259,
      },
      {
        id: 26,
        distance: 3288,
      },
      {
        id: 48,
        distance: 3308,
      },
      {
        id: 57,
        distance: 3535,
      },
      {
        id: 25,
        distance: 3603,
      },
      {
        id: 88,
        distance: 3796,
      },
      {
        id: 37,
        distance: 4048,
      },
      {
        id: 74,
        distance: 4101,
      },
      {
        id: 27,
        distance: 4331,
      },
      {
        id: 76,
        distance: 4374,
      },
      {
        id: 47,
        distance: 4822,
      },
      {
        id: 32,
        distance: 4922,
      },
      {
        id: 59,
        distance: 5103,
      },
      {
        id: 61,
        distance: 5120,
      },
      {
        id: 6,
        distance: 5193,
      },
    ],
  },
  {
    id: 92,
    city: 'city92',
    latitude: 2.28320966789218,
    longitude: -38.97383218351729,
    connectedTo: [
      {
        id: 99,
        distance: 780,
      },
      {
        id: 134,
        distance: 2438,
      },
      {
        id: 97,
        distance: 2652,
      },
      {
        id: 116,
        distance: 2797,
      },
      {
        id: 120,
        distance: 2959,
      },
      {
        id: 119,
        distance: 4435,
      },
      {
        id: 95,
        distance: 5105,
      },
      {
        id: 79,
        distance: 1268,
      },
      {
        id: 56,
        distance: 1924,
      },
      {
        id: 77,
        distance: 2794,
      },
      {
        id: 7,
        distance: 3063,
      },
      {
        id: 90,
        distance: 3093,
      },
      {
        id: 54,
        distance: 3784,
      },
      {
        id: 31,
        distance: 4031,
      },
      {
        id: 41,
        distance: 4318,
      },
      {
        id: 53,
        distance: 4537,
      },
      {
        id: 13,
        distance: 4621,
      },
      {
        id: 38,
        distance: 4637,
      },
      {
        id: 69,
        distance: 4715,
      },
      {
        id: 49,
        distance: 5085,
      },
      {
        id: 67,
        distance: 5171,
      },
      {
        id: 65,
        distance: 5183,
      },
      {
        id: 2,
        distance: 5323,
      },
    ],
  },
  {
    id: 93,
    city: 'city93',
    latitude: 43.044999062489666,
    longitude: -150.50553691044848,
    connectedTo: [
      {
        id: 127,
        distance: 3861,
      },
      {
        id: 122,
        distance: 3985,
      },
      {
        id: 132,
        distance: 4119,
      },
      {
        id: 109,
        distance: 4340,
      },
      {
        id: 104,
        distance: 5013,
      },
      {
        id: 98,
        distance: 5037,
      },
      {
        id: 29,
        distance: 511,
      },
      {
        id: 4,
        distance: 567,
      },
      {
        id: 15,
        distance: 603,
      },
      {
        id: 91,
        distance: 2185,
      },
      {
        id: 27,
        distance: 2318,
      },
      {
        id: 80,
        distance: 2794,
      },
      {
        id: 76,
        distance: 3170,
      },
      {
        id: 8,
        distance: 3282,
      },
      {
        id: 70,
        distance: 3370,
      },
      {
        id: 25,
        distance: 3500,
      },
      {
        id: 10,
        distance: 3651,
      },
      {
        id: 83,
        distance: 4161,
      },
      {
        id: 26,
        distance: 4270,
      },
      {
        id: 3,
        distance: 4549,
      },
      {
        id: 50,
        distance: 4730,
      },
      {
        id: 55,
        distance: 5123,
      },
      {
        id: 21,
        distance: 5124,
      },
      {
        id: 48,
        distance: 5125,
      },
      {
        id: 74,
        distance: 5222,
      },
      {
        id: 88,
        distance: 5259,
      },
      {
        id: 58,
        distance: 5385,
      },
      {
        id: 57,
        distance: 5433,
      },
    ],
  },
  {
    id: 94,
    city: 'city94',
    latitude: 55.42103439260629,
    longitude: 116.64746909579077,
    connectedTo: [
      {
        id: 129,
        distance: 672,
      },
      {
        id: 110,
        distance: 1361,
      },
      {
        id: 107,
        distance: 2353,
      },
      {
        id: 113,
        distance: 3658,
      },
      {
        id: 106,
        distance: 3879,
      },
      {
        id: 137,
        distance: 4355,
      },
      {
        id: 114,
        distance: 4631,
      },
      {
        id: 108,
        distance: 4737,
      },
      {
        id: 130,
        distance: 4964,
      },
      {
        id: 132,
        distance: 5192,
      },
      {
        id: 84,
        distance: 2151,
      },
      {
        id: 14,
        distance: 2217,
      },
      {
        id: 57,
        distance: 2398,
      },
      {
        id: 75,
        distance: 2498,
      },
      {
        id: 12,
        distance: 2562,
      },
      {
        id: 48,
        distance: 2712,
      },
      {
        id: 66,
        distance: 2949,
      },
      {
        id: 8,
        distance: 3088,
      },
      {
        id: 42,
        distance: 3161,
      },
      {
        id: 32,
        distance: 3162,
      },
      {
        id: 70,
        distance: 3439,
      },
      {
        id: 20,
        distance: 3516,
      },
      {
        id: 88,
        distance: 3699,
      },
      {
        id: 3,
        distance: 3772,
      },
      {
        id: 37,
        distance: 3803,
      },
      {
        id: 51,
        distance: 3806,
      },
      {
        id: 61,
        distance: 3979,
      },
      {
        id: 91,
        distance: 4179,
      },
      {
        id: 6,
        distance: 4217,
      },
      {
        id: 83,
        distance: 4240,
      },
      {
        id: 59,
        distance: 4288,
      },
      {
        id: 74,
        distance: 4524,
      },
      {
        id: 47,
        distance: 4531,
      },
      {
        id: 5,
        distance: 4561,
      },
      {
        id: 26,
        distance: 4605,
      },
      {
        id: 85,
        distance: 5207,
      },
    ],
  },
  {
    id: 95,
    city: 'city95',
    latitude: 48.186589758324715,
    longitude: -38.65782240818973,
    connectedTo: [
      {
        id: 136,
        distance: 1954,
      },
      {
        id: 111,
        distance: 2441,
      },
      {
        id: 97,
        distance: 2461,
      },
      {
        id: 116,
        distance: 2774,
      },
      {
        id: 130,
        distance: 3329,
      },
      {
        id: 104,
        distance: 3426,
      },
      {
        id: 114,
        distance: 3669,
      },
      {
        id: 137,
        distance: 3990,
      },
      {
        id: 100,
        distance: 4202,
      },
      {
        id: 132,
        distance: 4270,
      },
      {
        id: 106,
        distance: 4492,
      },
      {
        id: 113,
        distance: 4700,
      },
      {
        id: 67,
        distance: 94,
      },
      {
        id: 41,
        distance: 896,
      },
      {
        id: 69,
        distance: 1714,
      },
      {
        id: 40,
        distance: 2005,
      },
      {
        id: 90,
        distance: 2753,
      },
      {
        id: 21,
        distance: 2888,
      },
      {
        id: 47,
        distance: 3768,
      },
      {
        id: 59,
        distance: 3982,
      },
      {
        id: 50,
        distance: 3998,
      },
      {
        id: 74,
        distance: 4041,
      },
      {
        id: 61,
        distance: 4310,
      },
      {
        id: 25,
        distance: 4413,
      },
      {
        id: 26,
        distance: 4558,
      },
      {
        id: 37,
        distance: 4592,
      },
      {
        id: 79,
        distance: 4759,
      },
      {
        id: 88,
        distance: 4772,
      },
      {
        id: 3,
        distance: 5077,
      },
      {
        id: 80,
        distance: 5090,
      },
      {
        id: 92,
        distance: 5105,
      },
      {
        id: 56,
        distance: 5239,
      },
    ],
  },
  {
    id: 96,
    city: 'city96',
    latitude: -7.459591618749371,
    longitude: -168.40148015573615,
    connectedTo: [
      {
        id: 98,
        distance: 973,
      },
      {
        id: 122,
        distance: 2119,
      },
      {
        id: 121,
        distance: 2232,
      },
      {
        id: 103,
        distance: 2746,
      },
      {
        id: 126,
        distance: 3945,
      },
      {
        id: 109,
        distance: 4421,
      },
      {
        id: 73,
        distance: 1115,
      },
      {
        id: 58,
        distance: 1928,
      },
      {
        id: 76,
        distance: 2763,
      },
      {
        id: 23,
        distance: 3207,
      },
      {
        id: 27,
        distance: 4105,
      },
      {
        id: 72,
        distance: 4329,
      },
      {
        id: 46,
        distance: 4647,
      },
      {
        id: 36,
        distance: 5192,
      },
    ],
  },
  {
    id: 97,
    city: 'city97',
    latitude: 26.0925045076349,
    longitude: -40.268033700460364,
    connectedTo: [
      {
        id: 116,
        distance: 1292,
      },
      {
        id: 99,
        distance: 3422,
      },
      {
        id: 136,
        distance: 4036,
      },
      {
        id: 111,
        distance: 4657,
      },
      {
        id: 134,
        distance: 4822,
      },
      {
        id: 100,
        distance: 5022,
      },
      {
        id: 90,
        distance: 1323,
      },
      {
        id: 41,
        distance: 1673,
      },
      {
        id: 95,
        distance: 2461,
      },
      {
        id: 69,
        distance: 2519,
      },
      {
        id: 67,
        distance: 2532,
      },
      {
        id: 79,
        distance: 2541,
      },
      {
        id: 92,
        distance: 2652,
      },
      {
        id: 56,
        distance: 3030,
      },
      {
        id: 40,
        distance: 3944,
      },
      {
        id: 38,
        distance: 4474,
      },
      {
        id: 21,
        distance: 4481,
      },
      {
        id: 50,
        distance: 4915,
      },
      {
        id: 49,
        distance: 4980,
      },
      {
        id: 77,
        distance: 5055,
      },
      {
        id: 31,
        distance: 5178,
      },
    ],
  },
  {
    id: 98,
    city: 'city98',
    latitude: -0.9384143322731973,
    longitude: -162.55963030964853,
    connectedTo: [
      {
        id: 122,
        distance: 1152,
      },
      {
        id: 121,
        distance: 2446,
      },
      {
        id: 109,
        distance: 3571,
      },
      {
        id: 103,
        distance: 3593,
      },
      {
        id: 126,
        distance: 4138,
      },
      {
        id: 96,
        distance: 973,
      },
      {
        id: 58,
        distance: 1367,
      },
      {
        id: 76,
        distance: 2008,
      },
      {
        id: 73,
        distance: 2084,
      },
      {
        id: 27,
        distance: 3141,
      },
      {
        id: 23,
        distance: 4174,
      },
      {
        id: 72,
        distance: 4317,
      },
      {
        id: 4,
        distance: 4580,
      },
      {
        id: 29,
        distance: 4735,
      },
      {
        id: 93,
        distance: 5037,
      },
      {
        id: 15,
        distance: 5241,
      },
      {
        id: 10,
        distance: 5249,
      },
      {
        id: 83,
        distance: 5314,
      },
    ],
  },
  {
    id: 99,
    city: 'city99',
    latitude: -4.672149640617093,
    longitude: -39.86397364286083,
    connectedTo: [
      {
        id: 134,
        distance: 1981,
      },
      {
        id: 120,
        distance: 2270,
      },
      {
        id: 116,
        distance: 3546,
      },
      {
        id: 119,
        distance: 3657,
      },
      {
        id: 125,
        distance: 5071,
      },
      {
        id: 92,
        distance: 780,
      },
      {
        id: 79,
        distance: 1774,
      },
      {
        id: 56,
        distance: 2038,
      },
      {
        id: 77,
        distance: 2173,
      },
      {
        id: 7,
        distance: 2359,
      },
      {
        id: 54,
        distance: 3113,
      },
      {
        id: 97,
        distance: 3422,
      },
      {
        id: 90,
        distance: 3748,
      },
      {
        id: 13,
        distance: 3859,
      },
      {
        id: 31,
        distance: 4069,
      },
      {
        id: 53,
        distance: 4312,
      },
      {
        id: 65,
        distance: 4618,
      },
      {
        id: 38,
        distance: 4787,
      },
      {
        id: 41,
        distance: 5081,
      },
      {
        id: 2,
        distance: 5226,
      },
      {
        id: 49,
        distance: 5443,
      },
    ],
  },
  {
    id: 100,
    city: 'city100',
    latitude: 37.55057614735762,
    longitude: 11.859499592010394,
    connectedTo: [
      {
        id: 108,
        distance: 3048,
      },
      {
        id: 116,
        distance: 3964,
      },
      {
        id: 106,
        distance: 4289,
      },
      {
        id: 130,
        distance: 4675,
      },
      {
        id: 114,
        distance: 4848,
      },
      {
        id: 128,
        distance: 4904,
      },
      {
        id: 107,
        distance: 5132,
      },
      {
        id: 137,
        distance: 5168,
      },
      {
        id: 45,
        distance: 1368,
      },
      {
        id: 40,
        distance: 2582,
      },
      {
        id: 49,
        distance: 2708,
      },
      {
        id: 69,
        distance: 2715,
      },
      {
        id: 67,
        distance: 4132,
      },
      {
        id: 95,
        distance: 4202,
      },
      {
        id: 61,
        distance: 4523,
      },
      {
        id: 59,
        distance: 4539,
      },
      {
        id: 41,
        distance: 4702,
      },
      {
        id: 31,
        distance: 4832,
      },
      {
        id: 47,
        distance: 4881,
      },
      {
        id: 97,
        distance: 5022,
      },
      {
        id: 12,
        distance: 5246,
      },
      {
        id: 79,
        distance: 5335,
      },
      {
        id: 18,
        distance: 5344,
      },
    ],
  },
  {
    id: 101,
    city: 'city101',
    latitude: -79.36278399577616,
    longitude: -152.77868649466632,
    connectedTo: [
      {
        id: 124,
        distance: 1552,
      },
      {
        id: 123,
        distance: 1696,
      },
      {
        id: 118,
        distance: 2216,
      },
      {
        id: 112,
        distance: 3075,
      },
      {
        id: 126,
        distance: 5292,
      },
      {
        id: 103,
        distance: 5363,
      },
      {
        id: 117,
        distance: 5386,
      },
      {
        id: 43,
        distance: 545,
      },
      {
        id: 82,
        distance: 1239,
      },
      {
        id: 1,
        distance: 1606,
      },
      {
        id: 68,
        distance: 1678,
      },
      {
        id: 60,
        distance: 1734,
      },
      {
        id: 11,
        distance: 2254,
      },
      {
        id: 89,
        distance: 2408,
      },
      {
        id: 87,
        distance: 2584,
      },
      {
        id: 86,
        distance: 2585,
      },
      {
        id: 17,
        distance: 2669,
      },
      {
        id: 39,
        distance: 2816,
      },
      {
        id: 34,
        distance: 3176,
      },
      {
        id: 28,
        distance: 3524,
      },
      {
        id: 46,
        distance: 4180,
      },
      {
        id: 30,
        distance: 4194,
      },
      {
        id: 44,
        distance: 4586,
      },
      {
        id: 62,
        distance: 4925,
      },
    ],
  },
  {
    id: 102,
    city: 'city102',
    latitude: -20.811592498554063,
    longitude: 122.75022912916052,
    connectedTo: [
      {
        id: 105,
        distance: 1056,
      },
      {
        id: 115,
        distance: 1624,
      },
      {
        id: 135,
        distance: 5278,
      },
      {
        id: 64,
        distance: 1050,
      },
      {
        id: 36,
        distance: 2336,
      },
      {
        id: 33,
        distance: 2481,
      },
      {
        id: 35,
        distance: 2661,
      },
      {
        id: 85,
        distance: 4315,
      },
      {
        id: 22,
        distance: 4434,
      },
      {
        id: 5,
        distance: 4522,
      },
      {
        id: 51,
        distance: 4718,
      },
      {
        id: 46,
        distance: 4999,
      },
      {
        id: 23,
        distance: 5097,
      },
      {
        id: 39,
        distance: 5131,
      },
      {
        id: 6,
        distance: 5213,
      },
      {
        id: 20,
        distance: 5304,
      },
      {
        id: 42,
        distance: 5368,
      },
    ],
  },
  {
    id: 103,
    city: 'city103',
    latitude: -31.849946635646006,
    longitude: -172.51279581417273,
    connectedTo: [
      {
        id: 121,
        distance: 2302,
      },
      {
        id: 126,
        distance: 2973,
      },
      {
        id: 123,
        distance: 3698,
      },
      {
        id: 122,
        distance: 4699,
      },
      {
        id: 23,
        distance: 1402,
      },
      {
        id: 73,
        distance: 2021,
      },
      {
        id: 46,
        distance: 2112,
      },
      {
        id: 96,
        distance: 2746,
      },
      {
        id: 86,
        distance: 3307,
      },
      {
        id: 98,
        distance: 3593,
      },
      {
        id: 58,
        distance: 3693,
      },
      {
        id: 72,
        distance: 3794,
      },
      {
        id: 68,
        distance: 4149,
      },
      {
        id: 82,
        distance: 4204,
      },
      {
        id: 36,
        distance: 4369,
      },
      {
        id: 43,
        distance: 4845,
      },
      {
        id: 101,
        distance: 5363,
      },
    ],
  },
  {
    id: 104,
    city: 'city104',
    latitude: 75.05910312899434,
    longitude: -74.82772439453903,
    connectedTo: [
      {
        id: 132,
        distance: 923,
      },
      {
        id: 111,
        distance: 1209,
      },
      {
        id: 130,
        distance: 1419,
      },
      {
        id: 137,
        distance: 1458,
      },
      {
        id: 114,
        distance: 1482,
      },
      {
        id: 136,
        distance: 1864,
      },
      {
        id: 113,
        distance: 1955,
      },
      {
        id: 106,
        distance: 2826,
      },
      {
        id: 107,
        distance: 4485,
      },
      {
        id: 110,
        distance: 4607,
      },
      {
        id: 129,
        distance: 4828,
      },
      {
        id: 74,
        distance: 1006,
      },
      {
        id: 26,
        distance: 1136,
      },
      {
        id: 47,
        distance: 1534,
      },
      {
        id: 37,
        distance: 1780,
      },
      {
        id: 25,
        distance: 1783,
      },
      {
        id: 3,
        distance: 1789,
      },
      {
        id: 88,
        distance: 1811,
      },
      {
        id: 59,
        distance: 2083,
      },
      {
        id: 21,
        distance: 2323,
      },
      {
        id: 61,
        distance: 2423,
      },
      {
        id: 80,
        distance: 2527,
      },
      {
        id: 48,
        distance: 2772,
      },
      {
        id: 57,
        distance: 3093,
      },
      {
        id: 70,
        distance: 3109,
      },
      {
        id: 67,
        distance: 3384,
      },
      {
        id: 95,
        distance: 3426,
      },
      {
        id: 40,
        distance: 3488,
      },
      {
        id: 50,
        distance: 3606,
      },
      {
        id: 41,
        distance: 4110,
      },
      {
        id: 91,
        distance: 4361,
      },
      {
        id: 8,
        distance: 4529,
      },
      {
        id: 69,
        distance: 4669,
      },
      {
        id: 15,
        distance: 4898,
      },
      {
        id: 93,
        distance: 5013,
      },
      {
        id: 29,
        distance: 5364,
      },
    ],
  },
  {
    id: 105,
    city: 'city105',
    latitude: -14.457625976748261,
    longitude: 130.15889120934128,
    connectedTo: [
      {
        id: 115,
        distance: 2448,
      },
      {
        id: 102,
        distance: 1056,
      },
      {
        id: 64,
        distance: 1203,
      },
      {
        id: 35,
        distance: 1640,
      },
      {
        id: 36,
        distance: 1735,
      },
      {
        id: 33,
        distance: 2752,
      },
      {
        id: 51,
        distance: 4072,
      },
      {
        id: 6,
        distance: 4275,
      },
      {
        id: 85,
        distance: 4376,
      },
      {
        id: 5,
        distance: 4391,
      },
      {
        id: 23,
        distance: 4699,
      },
      {
        id: 42,
        distance: 4714,
      },
      {
        id: 22,
        distance: 4848,
      },
      {
        id: 32,
        distance: 4962,
      },
      {
        id: 46,
        distance: 4971,
      },
      {
        id: 20,
        distance: 4983,
      },
      {
        id: 66,
        distance: 5084,
      },
    ],
  },
  {
    id: 106,
    city: 'city106',
    latitude: 74.17257147494578,
    longitude: 37.1539028800679,
    connectedTo: [
      {
        id: 114,
        distance: 1357,
      },
      {
        id: 113,
        distance: 1380,
      },
      {
        id: 137,
        distance: 1407,
      },
      {
        id: 130,
        distance: 1544,
      },
      {
        id: 107,
        distance: 1944,
      },
      {
        id: 110,
        distance: 2575,
      },
      {
        id: 108,
        distance: 3075,
      },
      {
        id: 132,
        distance: 3289,
      },
      {
        id: 129,
        distance: 3426,
      },
      {
        id: 111,
        distance: 3623,
      },
      {
        id: 136,
        distance: 4092,
      },
      {
        id: 61,
        distance: 411,
      },
      {
        id: 59,
        distance: 753,
      },
      {
        id: 47,
        distance: 1294,
      },
      {
        id: 37,
        distance: 1494,
      },
      {
        id: 88,
        distance: 1712,
      },
      {
        id: 74,
        distance: 1996,
      },
      {
        id: 57,
        distance: 2061,
      },
      {
        id: 48,
        distance: 2141,
      },
      {
        id: 3,
        distance: 2421,
      },
      {
        id: 104,
        distance: 2826,
      },
      {
        id: 26,
        distance: 2863,
      },
      {
        id: 40,
        distance: 3039,
      },
      {
        id: 12,
        distance: 3088,
      },
      {
        id: 70,
        distance: 3826,
      },
      {
        id: 94,
        distance: 3879,
      },
      {
        id: 100,
        distance: 4289,
      },
      {
        id: 67,
        distance: 4405,
      },
      {
        id: 25,
        distance: 4483,
      },
      {
        id: 95,
        distance: 4492,
      },
      {
        id: 69,
        distance: 4673,
      },
      {
        id: 45,
        distance: 4725,
      },
      {
        id: 8,
        distance: 4878,
      },
      {
        id: 21,
        distance: 4986,
      },
      {
        id: 80,
        distance: 5130,
      },
      {
        id: 84,
        distance: 5341,
      },
      {
        id: 41,
        distance: 5386,
      },
      {
        id: 91,
        distance: 5392,
      },
    ],
  },
  {
    id: 107,
    city: 'city107',
    latitude: 63.43734728752989,
    longitude: 77.25602946696989,
    connectedTo: [
      {
        id: 110,
        distance: 1041,
      },
      {
        id: 129,
        distance: 2189,
      },
      {
        id: 113,
        distance: 2576,
      },
      {
        id: 108,
        distance: 2615,
      },
      {
        id: 137,
        distance: 3047,
      },
      {
        id: 114,
        distance: 3157,
      },
      {
        id: 130,
        distance: 3418,
      },
      {
        id: 132,
        distance: 4651,
      },
      {
        id: 12,
        distance: 1286,
      },
      {
        id: 106,
        distance: 1944,
      },
      {
        id: 57,
        distance: 2046,
      },
      {
        id: 61,
        distance: 2233,
      },
      {
        id: 94,
        distance: 2353,
      },
      {
        id: 48,
        distance: 2402,
      },
      {
        id: 59,
        distance: 2612,
      },
      {
        id: 37,
        distance: 2754,
      },
      {
        id: 88,
        distance: 2824,
      },
      {
        id: 47,
        distance: 3070,
      },
      {
        id: 3,
        distance: 3340,
      },
      {
        id: 84,
        distance: 3420,
      },
      {
        id: 74,
        distance: 3503,
      },
      {
        id: 14,
        distance: 3775,
      },
      {
        id: 75,
        distance: 3986,
      },
      {
        id: 70,
        distance: 4083,
      },
      {
        id: 26,
        distance: 4091,
      },
      {
        id: 104,
        distance: 4485,
      },
      {
        id: 8,
        distance: 4563,
      },
      {
        id: 66,
        distance: 4690,
      },
      {
        id: 40,
        distance: 4751,
      },
      {
        id: 20,
        distance: 4862,
      },
      {
        id: 45,
        distance: 4989,
      },
      {
        id: 100,
        distance: 5132,
      },
      {
        id: 42,
        distance: 5191,
      },
      {
        id: 91,
        distance: 5438,
      },
    ],
  },
  {
    id: 108,
    city: 'city108',
    latitude: 46.86681063764482,
    longitude: 47.05370661255273,
    connectedTo: [
      {
        id: 110,
        distance: 3605,
      },
      {
        id: 114,
        distance: 4341,
      },
      {
        id: 113,
        distance: 4393,
      },
      {
        id: 130,
        distance: 4408,
      },
      {
        id: 137,
        distance: 4468,
      },
      {
        id: 129,
        distance: 4746,
      },
      {
        id: 12,
        distance: 2270,
      },
      {
        id: 45,
        distance: 2470,
      },
      {
        id: 107,
        distance: 2615,
      },
      {
        id: 100,
        distance: 3048,
      },
      {
        id: 106,
        distance: 3075,
      },
      {
        id: 61,
        distance: 3480,
      },
      {
        id: 59,
        distance: 3760,
      },
      {
        id: 40,
        distance: 4079,
      },
      {
        id: 47,
        distance: 4304,
      },
      {
        id: 57,
        distance: 4471,
      },
      {
        id: 37,
        distance: 4534,
      },
      {
        id: 18,
        distance: 4643,
      },
      {
        id: 88,
        distance: 4721,
      },
      {
        id: 94,
        distance: 4737,
      },
      {
        id: 48,
        distance: 4752,
      },
      {
        id: 84,
        distance: 4779,
      },
      {
        id: 74,
        distance: 5065,
      },
      {
        id: 69,
        distance: 5217,
      },
      {
        id: 14,
        distance: 5249,
      },
      {
        id: 49,
        distance: 5301,
      },
      {
        id: 75,
        distance: 5335,
      },
      {
        id: 3,
        distance: 5401,
      },
    ],
  },
  {
    id: 109,
    city: 'city109',
    latitude: 7.742462599063899,
    longitude: -131.55711516346202,
    connectedTo: [
      {
        id: 122,
        distance: 2775,
      },
      {
        id: 127,
        distance: 3210,
      },
      {
        id: 121,
        distance: 3940,
      },
      {
        id: 126,
        distance: 4533,
      },
      {
        id: 10,
        distance: 1992,
      },
      {
        id: 27,
        distance: 2281,
      },
      {
        id: 58,
        distance: 2612,
      },
      {
        id: 98,
        distance: 3571,
      },
      {
        id: 76,
        distance: 3692,
      },
      {
        id: 71,
        distance: 3696,
      },
      {
        id: 4,
        distance: 3790,
      },
      {
        id: 55,
        distance: 3828,
      },
      {
        id: 72,
        distance: 3954,
      },
      {
        id: 19,
        distance: 4115,
      },
      {
        id: 78,
        distance: 4197,
      },
      {
        id: 93,
        distance: 4340,
      },
      {
        id: 96,
        distance: 4421,
      },
      {
        id: 29,
        distance: 4449,
      },
      {
        id: 15,
        distance: 4892,
      },
    ],
  },
  {
    id: 110,
    city: 'city110',
    latitude: 63.44513190598178,
    longitude: 98.2764490514499,
    connectedTo: [
      {
        id: 129,
        distance: 1152,
      },
      {
        id: 113,
        distance: 2662,
      },
      {
        id: 137,
        distance: 3294,
      },
      {
        id: 114,
        distance: 3510,
      },
      {
        id: 130,
        distance: 3823,
      },
      {
        id: 132,
        distance: 4544,
      },
      {
        id: 107,
        distance: 1041,
      },
      {
        id: 94,
        distance: 1361,
      },
      {
        id: 57,
        distance: 1645,
      },
      {
        id: 12,
        distance: 1760,
      },
      {
        id: 48,
        distance: 2033,
      },
      {
        id: 106,
        distance: 2575,
      },
      {
        id: 61,
        distance: 2734,
      },
      {
        id: 88,
        distance: 2805,
      },
      {
        id: 37,
        distance: 2832,
      },
      {
        id: 84,
        distance: 2903,
      },
      {
        id: 59,
        distance: 3078,
      },
      {
        id: 3,
        distance: 3118,
      },
      {
        id: 14,
        distance: 3157,
      },
      {
        id: 75,
        distance: 3409,
      },
      {
        id: 47,
        distance: 3412,
      },
      {
        id: 70,
        distance: 3431,
      },
      {
        id: 74,
        distance: 3603,
      },
      {
        id: 108,
        distance: 3605,
      },
      {
        id: 8,
        distance: 3659,
      },
      {
        id: 26,
        distance: 3950,
      },
      {
        id: 66,
        distance: 4027,
      },
      {
        id: 20,
        distance: 4381,
      },
      {
        id: 42,
        distance: 4400,
      },
      {
        id: 32,
        distance: 4514,
      },
      {
        id: 104,
        distance: 4607,
      },
      {
        id: 91,
        distance: 4620,
      },
      {
        id: 51,
        distance: 5025,
      },
      {
        id: 5,
        distance: 5346,
      },
      {
        id: 83,
        distance: 5421,
      },
    ],
  },
  {
    id: 111,
    city: 'city111',
    latitude: 64.60228657384633,
    longitude: -65.89327915867412,
    connectedTo: [
      {
        id: 136,
        distance: 657,
      },
      {
        id: 132,
        distance: 1885,
      },
      {
        id: 130,
        distance: 2079,
      },
      {
        id: 114,
        distance: 2307,
      },
      {
        id: 137,
        distance: 2441,
      },
      {
        id: 113,
        distance: 3061,
      },
      {
        id: 127,
        distance: 5039,
      },
      {
        id: 116,
        distance: 5204,
      },
      {
        id: 104,
        distance: 1209,
      },
      {
        id: 21,
        distance: 1382,
      },
      {
        id: 25,
        distance: 2034,
      },
      {
        id: 74,
        distance: 2147,
      },
      {
        id: 26,
        distance: 2292,
      },
      {
        id: 47,
        distance: 2392,
      },
      {
        id: 67,
        distance: 2422,
      },
      {
        id: 95,
        distance: 2441,
      },
      {
        id: 80,
        distance: 2770,
      },
      {
        id: 50,
        distance: 2823,
      },
      {
        id: 59,
        distance: 2882,
      },
      {
        id: 37,
        distance: 2897,
      },
      {
        id: 88,
        distance: 2973,
      },
      {
        id: 3,
        distance: 2997,
      },
      {
        id: 41,
        distance: 3001,
      },
      {
        id: 40,
        distance: 3150,
      },
      {
        id: 61,
        distance: 3261,
      },
      {
        id: 106,
        distance: 3623,
      },
      {
        id: 69,
        distance: 3938,
      },
      {
        id: 48,
        distance: 3967,
      },
      {
        id: 70,
        distance: 4231,
      },
      {
        id: 57,
        distance: 4271,
      },
      {
        id: 90,
        distance: 4347,
      },
      {
        id: 97,
        distance: 4657,
      },
      {
        id: 55,
        distance: 5189,
      },
      {
        id: 91,
        distance: 5323,
      },
    ],
  },
  {
    id: 112,
    city: 'city112',
    latitude: -72.67935479428655,
    longitude: 44.51337589278674,
    connectedTo: [
      {
        id: 124,
        distance: 1613,
      },
      {
        id: 117,
        distance: 2380,
      },
      {
        id: 133,
        distance: 3570,
      },
      {
        id: 131,
        distance: 3967,
      },
      {
        id: 118,
        distance: 4297,
      },
      {
        id: 135,
        distance: 4599,
      },
      {
        id: 123,
        distance: 4670,
      },
      {
        id: 34,
        distance: 291,
      },
      {
        id: 28,
        distance: 454,
      },
      {
        id: 60,
        distance: 1357,
      },
      {
        id: 1,
        distance: 1478,
      },
      {
        id: 89,
        distance: 1649,
      },
      {
        id: 44,
        distance: 2292,
      },
      {
        id: 39,
        distance: 2695,
      },
      {
        id: 17,
        distance: 2805,
      },
      {
        id: 11,
        distance: 2915,
      },
      {
        id: 101,
        distance: 3075,
      },
      {
        id: 43,
        distance: 3442,
      },
      {
        id: 68,
        distance: 3906,
      },
      {
        id: 62,
        distance: 3937,
      },
      {
        id: 82,
        distance: 4283,
      },
      {
        id: 86,
        distance: 4785,
      },
      {
        id: 87,
        distance: 4980,
      },
      {
        id: 9,
        distance: 4991,
      },
      {
        id: 65,
        distance: 5125,
      },
    ],
  },
  {
    id: 113,
    city: 'city113',
    latitude: 86.31817441400335,
    longitude: 56.302777395730516,
    connectedTo: [
      {
        id: 137,
        distance: 712,
      },
      {
        id: 114,
        distance: 1043,
      },
      {
        id: 130,
        distance: 1381,
      },
      {
        id: 132,
        distance: 2096,
      },
      {
        id: 129,
        distance: 3046,
      },
      {
        id: 136,
        distance: 3667,
      },
      {
        id: 37,
        distance: 180,
      },
      {
        id: 88,
        distance: 333,
      },
      {
        id: 47,
        distance: 949,
      },
      {
        id: 74,
        distance: 950,
      },
      {
        id: 59,
        distance: 1028,
      },
      {
        id: 3,
        distance: 1041,
      },
      {
        id: 61,
        distance: 1044,
      },
      {
        id: 48,
        distance: 1121,
      },
      {
        id: 57,
        distance: 1297,
      },
      {
        id: 106,
        distance: 1380,
      },
      {
        id: 26,
        distance: 1577,
      },
      {
        id: 104,
        distance: 1955,
      },
      {
        id: 70,
        distance: 2524,
      },
      {
        id: 107,
        distance: 2576,
      },
      {
        id: 110,
        distance: 2662,
      },
      {
        id: 111,
        distance: 3061,
      },
      {
        id: 25,
        distance: 3323,
      },
      {
        id: 94,
        distance: 3658,
      },
      {
        id: 8,
        distance: 3728,
      },
      {
        id: 40,
        distance: 3805,
      },
      {
        id: 12,
        distance: 3860,
      },
      {
        id: 80,
        distance: 3888,
      },
      {
        id: 91,
        distance: 4091,
      },
      {
        id: 21,
        distance: 4278,
      },
      {
        id: 108,
        distance: 4393,
      },
      {
        id: 67,
        distance: 4628,
      },
      {
        id: 95,
        distance: 4700,
      },
      {
        id: 15,
        distance: 5247,
      },
      {
        id: 69,
        distance: 5373,
      },
    ],
  },
  {
    id: 114,
    city: 'city114',
    latitude: 80.01923496992939,
    longitude: -13.620163568953359,
    connectedTo: [
      {
        id: 130,
        distance: 341,
      },
      {
        id: 137,
        distance: 369,
      },
      {
        id: 132,
        distance: 2078,
      },
      {
        id: 136,
        distance: 2836,
      },
      {
        id: 129,
        distance: 4046,
      },
      {
        id: 47,
        distance: 100,
      },
      {
        id: 59,
        distance: 606,
      },
      {
        id: 74,
        distance: 846,
      },
      {
        id: 37,
        distance: 965,
      },
      {
        id: 61,
        distance: 967,
      },
      {
        id: 113,
        distance: 1043,
      },
      {
        id: 88,
        distance: 1191,
      },
      {
        id: 106,
        distance: 1357,
      },
      {
        id: 104,
        distance: 1482,
      },
      {
        id: 3,
        distance: 1748,
      },
      {
        id: 26,
        distance: 1800,
      },
      {
        id: 48,
        distance: 2162,
      },
      {
        id: 111,
        distance: 2307,
      },
      {
        id: 57,
        distance: 2326,
      },
      {
        id: 40,
        distance: 2835,
      },
      {
        id: 107,
        distance: 3157,
      },
      {
        id: 25,
        distance: 3204,
      },
      {
        id: 70,
        distance: 3356,
      },
      {
        id: 110,
        distance: 3510,
      },
      {
        id: 67,
        distance: 3596,
      },
      {
        id: 21,
        distance: 3648,
      },
      {
        id: 95,
        distance: 3669,
      },
      {
        id: 80,
        distance: 3901,
      },
      {
        id: 108,
        distance: 4341,
      },
      {
        id: 69,
        distance: 4360,
      },
      {
        id: 12,
        distance: 4385,
      },
      {
        id: 41,
        distance: 4523,
      },
      {
        id: 94,
        distance: 4631,
      },
      {
        id: 8,
        distance: 4666,
      },
      {
        id: 100,
        distance: 4848,
      },
      {
        id: 91,
        distance: 4876,
      },
      {
        id: 50,
        distance: 5024,
      },
    ],
  },
  {
    id: 115,
    city: 'city115',
    latitude: -18.093733930162827,
    longitude: 107.52632020893873,
    connectedTo: [
      {
        id: 135,
        distance: 4034,
      },
      {
        id: 64,
        distance: 1442,
      },
      {
        id: 33,
        distance: 1525,
      },
      {
        id: 102,
        distance: 1624,
      },
      {
        id: 105,
        distance: 2448,
      },
      {
        id: 22,
        distance: 2998,
      },
      {
        id: 85,
        distance: 3306,
      },
      {
        id: 35,
        distance: 3721,
      },
      {
        id: 5,
        distance: 3759,
      },
      {
        id: 52,
        distance: 3869,
      },
      {
        id: 36,
        distance: 3956,
      },
      {
        id: 24,
        distance: 4321,
      },
      {
        id: 20,
        distance: 4740,
      },
      {
        id: 51,
        distance: 4752,
      },
      {
        id: 66,
        distance: 5294,
      },
      {
        id: 42,
        distance: 5355,
      },
    ],
  },
  {
    id: 116,
    city: 'city116',
    latitude: 24.851075007992904,
    longitude: -27.468737994145556,
    connectedTo: [
      {
        id: 134,
        distance: 4395,
      },
      {
        id: 136,
        distance: 4664,
      },
      {
        id: 120,
        distance: 5343,
      },
      {
        id: 97,
        distance: 1292,
      },
      {
        id: 69,
        distance: 1929,
      },
      {
        id: 79,
        distance: 2063,
      },
      {
        id: 41,
        distance: 2320,
      },
      {
        id: 90,
        distance: 2614,
      },
      {
        id: 95,
        distance: 2774,
      },
      {
        id: 92,
        distance: 2797,
      },
      {
        id: 67,
        distance: 2807,
      },
      {
        id: 99,
        distance: 3546,
      },
      {
        id: 40,
        distance: 3557,
      },
      {
        id: 49,
        distance: 3691,
      },
      {
        id: 56,
        distance: 3884,
      },
      {
        id: 100,
        distance: 3964,
      },
      {
        id: 31,
        distance: 4109,
      },
      {
        id: 45,
        distance: 5172,
      },
      {
        id: 111,
        distance: 5204,
      },
      {
        id: 21,
        distance: 5361,
      },
    ],
  },
  {
    id: 117,
    city: 'city117',
    latitude: -52.19456476827735,
    longitude: 30.175615306586252,
    connectedTo: [
      {
        id: 133,
        distance: 1259,
      },
      {
        id: 131,
        distance: 1588,
      },
      {
        id: 135,
        distance: 3828,
      },
      {
        id: 124,
        distance: 3990,
      },
      {
        id: 128,
        distance: 5255,
      },
      {
        id: 44,
        distance: 1719,
      },
      {
        id: 28,
        distance: 1934,
      },
      {
        id: 112,
        distance: 2380,
      },
      {
        id: 34,
        distance: 2396,
      },
      {
        id: 9,
        distance: 2807,
      },
      {
        id: 89,
        distance: 3313,
      },
      {
        id: 65,
        distance: 3634,
      },
      {
        id: 60,
        distance: 3657,
      },
      {
        id: 62,
        distance: 3791,
      },
      {
        id: 16,
        distance: 3815,
      },
      {
        id: 1,
        distance: 3832,
      },
      {
        id: 17,
        distance: 4127,
      },
      {
        id: 11,
        distance: 4477,
      },
      {
        id: 39,
        distance: 4724,
      },
      {
        id: 81,
        distance: 4977,
      },
      {
        id: 2,
        distance: 4987,
      },
      {
        id: 13,
        distance: 5121,
      },
      {
        id: 63,
        distance: 5204,
      },
      {
        id: 101,
        distance: 5386,
      },
    ],
  },
  {
    id: 118,
    city: 'city118',
    latitude: -66.22559654112541,
    longitude: -95.97589471706945,
    connectedTo: [
      {
        id: 123,
        distance: 2887,
      },
      {
        id: 124,
        distance: 3320,
      },
      {
        id: 119,
        distance: 4481,
      },
      {
        id: 126,
        distance: 4819,
      },
      {
        id: 125,
        distance: 5103,
      },
      {
        id: 87,
        distance: 733,
      },
      {
        id: 11,
        distance: 1624,
      },
      {
        id: 17,
        distance: 2045,
      },
      {
        id: 101,
        distance: 2216,
      },
      {
        id: 30,
        distance: 2398,
      },
      {
        id: 82,
        distance: 2447,
      },
      {
        id: 43,
        distance: 2544,
      },
      {
        id: 89,
        distance: 2811,
      },
      {
        id: 60,
        distance: 3108,
      },
      {
        id: 1,
        distance: 3195,
      },
      {
        id: 68,
        distance: 3690,
      },
      {
        id: 62,
        distance: 3927,
      },
      {
        id: 112,
        distance: 4297,
      },
      {
        id: 86,
        distance: 4405,
      },
      {
        id: 34,
        distance: 4520,
      },
      {
        id: 28,
        distance: 4655,
      },
      {
        id: 44,
        distance: 4682,
      },
      {
        id: 13,
        distance: 4773,
      },
      {
        id: 72,
        distance: 4976,
      },
      {
        id: 39,
        distance: 4986,
      },
      {
        id: 78,
        distance: 5073,
      },
      {
        id: 54,
        distance: 5218,
      },
    ],
  },
  {
    id: 119,
    city: 'city119',
    latitude: -36.75577288391121,
    longitude: -47.725516006654004,
    connectedTo: [
      {
        id: 120,
        distance: 2227,
      },
      {
        id: 134,
        distance: 3349,
      },
      {
        id: 125,
        distance: 3889,
      },
      {
        id: 13,
        distance: 1097,
      },
      {
        id: 54,
        distance: 1731,
      },
      {
        id: 7,
        distance: 1778,
      },
      {
        id: 77,
        distance: 2332,
      },
      {
        id: 62,
        distance: 2377,
      },
      {
        id: 65,
        distance: 3436,
      },
      {
        id: 99,
        distance: 3657,
      },
      {
        id: 17,
        distance: 3850,
      },
      {
        id: 11,
        distance: 4127,
      },
      {
        id: 92,
        distance: 4435,
      },
      {
        id: 118,
        distance: 4481,
      },
      {
        id: 44,
        distance: 4492,
      },
      {
        id: 53,
        distance: 4568,
      },
      {
        id: 56,
        distance: 4570,
      },
      {
        id: 87,
        distance: 4750,
      },
      {
        id: 89,
        distance: 4831,
      },
      {
        id: 30,
        distance: 4944,
      },
      {
        id: 79,
        distance: 5200,
      },
    ],
  },
  {
    id: 120,
    city: 'city120',
    latitude: -23.089865151802584,
    longitude: -30.747238338906527,
    connectedTo: [
      {
        id: 134,
        distance: 1131,
      },
      {
        id: 125,
        distance: 5438,
      },
      {
        id: 13,
        distance: 1845,
      },
      {
        id: 119,
        distance: 2227,
      },
      {
        id: 99,
        distance: 2270,
      },
      {
        id: 7,
        distance: 2314,
      },
      {
        id: 65,
        distance: 2467,
      },
      {
        id: 77,
        distance: 2662,
      },
      {
        id: 54,
        distance: 2952,
      },
      {
        id: 92,
        distance: 2959,
      },
      {
        id: 79,
        distance: 3281,
      },
      {
        id: 62,
        distance: 3297,
      },
      {
        id: 31,
        distance: 3672,
      },
      {
        id: 56,
        distance: 4054,
      },
      {
        id: 2,
        distance: 4217,
      },
      {
        id: 44,
        distance: 4879,
      },
      {
        id: 116,
        distance: 5343,
      },
      {
        id: 53,
        distance: 5432,
      },
    ],
  },
  {
    id: 121,
    city: 'city121',
    latitude: -20.80966455089795,
    longitude: -152.90453458115738,
    connectedTo: [
      {
        id: 126,
        distance: 1727,
      },
      {
        id: 122,
        distance: 3190,
      },
      {
        id: 123,
        distance: 4869,
      },
      {
        id: 58,
        distance: 1728,
      },
      {
        id: 72,
        distance: 2133,
      },
      {
        id: 96,
        distance: 2232,
      },
      {
        id: 103,
        distance: 2302,
      },
      {
        id: 98,
        distance: 2446,
      },
      {
        id: 73,
        distance: 2578,
      },
      {
        id: 23,
        distance: 3578,
      },
      {
        id: 109,
        distance: 3940,
      },
      {
        id: 46,
        distance: 4349,
      },
      {
        id: 76,
        distance: 4387,
      },
      {
        id: 78,
        distance: 4767,
      },
      {
        id: 27,
        distance: 4867,
      },
      {
        id: 30,
        distance: 4985,
      },
      {
        id: 86,
        distance: 5184,
      },
      {
        id: 82,
        distance: 5276,
      },
    ],
  },
  {
    id: 122,
    city: 'city122',
    latitude: 7.63041224131139,
    longitude: -156.7362555531446,
    connectedTo: [
      {
        id: 126,
        distance: 4721,
      },
      {
        id: 127,
        distance: 5357,
      },
      {
        id: 98,
        distance: 1152,
      },
      {
        id: 76,
        distance: 1327,
      },
      {
        id: 58,
        distance: 1577,
      },
      {
        id: 27,
        distance: 1990,
      },
      {
        id: 96,
        distance: 2119,
      },
      {
        id: 109,
        distance: 2775,
      },
      {
        id: 121,
        distance: 3190,
      },
      {
        id: 73,
        distance: 3220,
      },
      {
        id: 4,
        distance: 3495,
      },
      {
        id: 29,
        distance: 3739,
      },
      {
        id: 93,
        distance: 3985,
      },
      {
        id: 10,
        distance: 4221,
      },
      {
        id: 15,
        distance: 4259,
      },
      {
        id: 72,
        distance: 4677,
      },
      {
        id: 103,
        distance: 4699,
      },
      {
        id: 83,
        distance: 5088,
      },
      {
        id: 23,
        distance: 5324,
      },
    ],
  },
  {
    id: 123,
    city: 'city123',
    latitude: -64.28133319282918,
    longitude: -160.73340402856877,
    connectedTo: [
      {
        id: 124,
        distance: 3064,
      },
      {
        id: 126,
        distance: 3839,
      },
      {
        id: 82,
        distance: 513,
      },
      {
        id: 43,
        distance: 1234,
      },
      {
        id: 68,
        distance: 1355,
      },
      {
        id: 86,
        distance: 1635,
      },
      {
        id: 101,
        distance: 1696,
      },
      {
        id: 87,
        distance: 2793,
      },
      {
        id: 46,
        distance: 2883,
      },
      {
        id: 118,
        distance: 2887,
      },
      {
        id: 1,
        distance: 3199,
      },
      {
        id: 60,
        distance: 3381,
      },
      {
        id: 39,
        distance: 3501,
      },
      {
        id: 11,
        distance: 3692,
      },
      {
        id: 103,
        distance: 3698,
      },
      {
        id: 30,
        distance: 3856,
      },
      {
        id: 89,
        distance: 4092,
      },
      {
        id: 17,
        distance: 4161,
      },
      {
        id: 23,
        distance: 4199,
      },
      {
        id: 72,
        distance: 4503,
      },
      {
        id: 112,
        distance: 4670,
      },
      {
        id: 34,
        distance: 4720,
      },
      {
        id: 121,
        distance: 4869,
      },
      {
        id: 28,
        distance: 5123,
      },
    ],
  },
  {
    id: 124,
    city: 'city124',
    latitude: -83.77062035835812,
    longitude: 98.22613132057171,
    connectedTo: [
      {
        id: 133,
        distance: 5179,
      },
      {
        id: 1,
        distance: 278,
      },
      {
        id: 60,
        distance: 573,
      },
      {
        id: 101,
        distance: 1552,
      },
      {
        id: 112,
        distance: 1613,
      },
      {
        id: 34,
        distance: 1659,
      },
      {
        id: 89,
        distance: 1755,
      },
      {
        id: 43,
        distance: 1846,
      },
      {
        id: 39,
        distance: 1936,
      },
      {
        id: 28,
        distance: 2065,
      },
      {
        id: 68,
        distance: 2348,
      },
      {
        id: 11,
        distance: 2482,
      },
      {
        id: 17,
        distance: 2662,
      },
      {
        id: 82,
        distance: 2700,
      },
      {
        id: 123,
        distance: 3064,
      },
      {
        id: 86,
        distance: 3275,
      },
      {
        id: 118,
        distance: 3320,
      },
      {
        id: 44,
        distance: 3567,
      },
      {
        id: 87,
        distance: 3881,
      },
      {
        id: 117,
        distance: 3990,
      },
      {
        id: 62,
        distance: 4589,
      },
      {
        id: 46,
        distance: 4873,
      },
    ],
  },
  {
    id: 125,
    city: 'city125',
    latitude: -21.023869141879544,
    longitude: -83.75449178369936,
    connectedTo: [
      {
        id: 53,
        distance: 1652,
      },
      {
        id: 78,
        distance: 2392,
      },
      {
        id: 71,
        distance: 2428,
      },
      {
        id: 54,
        distance: 2489,
      },
      {
        id: 77,
        distance: 3013,
      },
      {
        id: 7,
        distance: 3163,
      },
      {
        id: 30,
        distance: 3448,
      },
      {
        id: 38,
        distance: 3623,
      },
      {
        id: 119,
        distance: 3889,
      },
      {
        id: 56,
        distance: 4057,
      },
      {
        id: 19,
        distance: 4335,
      },
      {
        id: 87,
        distance: 4728,
      },
      {
        id: 13,
        distance: 4984,
      },
      {
        id: 72,
        distance: 5037,
      },
      {
        id: 99,
        distance: 5071,
      },
      {
        id: 118,
        distance: 5103,
      },
      {
        id: 55,
        distance: 5229,
      },
      {
        id: 120,
        distance: 5438,
      },
    ],
  },
  {
    id: 126,
    city: 'city126',
    latitude: -32.03292588824641,
    longitude: -140.89244611076393,
    connectedTo: [
      {
        id: 72,
        distance: 875,
      },
      {
        id: 121,
        distance: 1727,
      },
      {
        id: 103,
        distance: 2973,
      },
      {
        id: 58,
        distance: 3149,
      },
      {
        id: 30,
        distance: 3266,
      },
      {
        id: 78,
        distance: 3580,
      },
      {
        id: 123,
        distance: 3839,
      },
      {
        id: 96,
        distance: 3945,
      },
      {
        id: 73,
        distance: 4101,
      },
      {
        id: 82,
        distance: 4126,
      },
      {
        id: 87,
        distance: 4138,
      },
      {
        id: 98,
        distance: 4138,
      },
      {
        id: 23,
        distance: 4369,
      },
      {
        id: 46,
        distance: 4488,
      },
      {
        id: 109,
        distance: 4533,
      },
      {
        id: 71,
        distance: 4612,
      },
      {
        id: 86,
        distance: 4708,
      },
      {
        id: 122,
        distance: 4721,
      },
      {
        id: 118,
        distance: 4819,
      },
      {
        id: 43,
        distance: 4985,
      },
      {
        id: 68,
        distance: 5051,
      },
      {
        id: 101,
        distance: 5292,
      },
    ],
  },
  {
    id: 127,
    city: 'city127',
    latitude: 28.94699787014946,
    longitude: -110.74847395188002,
    connectedTo: [
      {
        id: 136,
        distance: 4936,
      },
      {
        id: 132,
        distance: 5094,
      },
      {
        id: 10,
        distance: 1229,
      },
      {
        id: 55,
        distance: 1273,
      },
      {
        id: 19,
        distance: 2150,
      },
      {
        id: 50,
        distance: 2396,
      },
      {
        id: 109,
        distance: 3210,
      },
      {
        id: 80,
        distance: 3363,
      },
      {
        id: 4,
        distance: 3622,
      },
      {
        id: 27,
        distance: 3627,
      },
      {
        id: 38,
        distance: 3739,
      },
      {
        id: 21,
        distance: 3766,
      },
      {
        id: 93,
        distance: 3861,
      },
      {
        id: 25,
        distance: 3867,
      },
      {
        id: 29,
        distance: 4302,
      },
      {
        id: 71,
        distance: 4368,
      },
      {
        id: 15,
        distance: 4418,
      },
      {
        id: 111,
        distance: 5039,
      },
      {
        id: 53,
        distance: 5260,
      },
      {
        id: 122,
        distance: 5357,
      },
    ],
  },
  {
    id: 128,
    city: 'city128',
    latitude: -5.31266477396926,
    longitude: 22.983821068353905,
    connectedTo: [
      {
        id: 131,
        distance: 3667,
      },
      {
        id: 133,
        distance: 4102,
      },
      {
        id: 134,
        distance: 5328,
      },
      {
        id: 16,
        distance: 1733,
      },
      {
        id: 2,
        distance: 1867,
      },
      {
        id: 81,
        distance: 1983,
      },
      {
        id: 63,
        distance: 2519,
      },
      {
        id: 49,
        distance: 2848,
      },
      {
        id: 31,
        distance: 2908,
      },
      {
        id: 9,
        distance: 3045,
      },
      {
        id: 18,
        distance: 3322,
      },
      {
        id: 45,
        distance: 4168,
      },
      {
        id: 65,
        distance: 4691,
      },
      {
        id: 100,
        distance: 4904,
      },
      {
        id: 24,
        distance: 4957,
      },
      {
        id: 117,
        distance: 5255,
      },
    ],
  },
  {
    id: 129,
    city: 'city129',
    latitude: 61.175292063867346,
    longitude: 120.14942712076021,
    connectedTo: [
      {
        id: 137,
        distance: 3752,
      },
      {
        id: 130,
        distance: 4384,
      },
      {
        id: 132,
        distance: 4521,
      },
      {
        id: 94,
        distance: 672,
      },
      {
        id: 110,
        distance: 1152,
      },
      {
        id: 57,
        distance: 1762,
      },
      {
        id: 48,
        distance: 2056,
      },
      {
        id: 107,
        distance: 2189,
      },
      {
        id: 8,
        distance: 2671,
      },
      {
        id: 12,
        distance: 2741,
      },
      {
        id: 84,
        distance: 2812,
      },
      {
        id: 70,
        distance: 2824,
      },
      {
        id: 14,
        distance: 2888,
      },
      {
        id: 113,
        distance: 3046,
      },
      {
        id: 88,
        distance: 3061,
      },
      {
        id: 3,
        distance: 3103,
      },
      {
        id: 75,
        distance: 3169,
      },
      {
        id: 37,
        distance: 3182,
      },
      {
        id: 106,
        distance: 3426,
      },
      {
        id: 61,
        distance: 3472,
      },
      {
        id: 66,
        distance: 3605,
      },
      {
        id: 32,
        distance: 3627,
      },
      {
        id: 91,
        distance: 3718,
      },
      {
        id: 59,
        distance: 3753,
      },
      {
        id: 42,
        distance: 3759,
      },
      {
        id: 74,
        distance: 3883,
      },
      {
        id: 26,
        distance: 3935,
      },
      {
        id: 47,
        distance: 3947,
      },
      {
        id: 114,
        distance: 4046,
      },
      {
        id: 20,
        distance: 4187,
      },
      {
        id: 83,
        distance: 4271,
      },
      {
        id: 51,
        distance: 4409,
      },
      {
        id: 6,
        distance: 4625,
      },
      {
        id: 108,
        distance: 4746,
      },
      {
        id: 104,
        distance: 4828,
      },
      {
        id: 5,
        distance: 5232,
      },
      {
        id: 15,
        distance: 5323,
      },
    ],
  },
  {
    id: 130,
    city: 'city130',
    latitude: 77.24585873181607,
    longitude: -20.222856648878178,
    connectedTo: [
      {
        id: 137,
        distance: 688,
      },
      {
        id: 132,
        distance: 2142,
      },
      {
        id: 136,
        distance: 2568,
      },
      {
        id: 114,
        distance: 341,
      },
      {
        id: 47,
        distance: 439,
      },
      {
        id: 59,
        distance: 810,
      },
      {
        id: 74,
        distance: 1031,
      },
      {
        id: 61,
        distance: 1191,
      },
      {
        id: 37,
        distance: 1296,
      },
      {
        id: 113,
        distance: 1381,
      },
      {
        id: 104,
        distance: 1419,
      },
      {
        id: 88,
        distance: 1511,
      },
      {
        id: 106,
        distance: 1544,
      },
      {
        id: 26,
        distance: 1953,
      },
      {
        id: 3,
        distance: 2020,
      },
      {
        id: 111,
        distance: 2079,
      },
      {
        id: 48,
        distance: 2498,
      },
      {
        id: 40,
        distance: 2550,
      },
      {
        id: 57,
        distance: 2666,
      },
      {
        id: 25,
        distance: 3192,
      },
      {
        id: 67,
        distance: 3256,
      },
      {
        id: 95,
        distance: 3329,
      },
      {
        id: 107,
        distance: 3418,
      },
      {
        id: 21,
        distance: 3446,
      },
      {
        id: 70,
        distance: 3628,
      },
      {
        id: 110,
        distance: 3823,
      },
      {
        id: 80,
        distance: 3919,
      },
      {
        id: 69,
        distance: 4044,
      },
      {
        id: 41,
        distance: 4185,
      },
      {
        id: 129,
        distance: 4384,
      },
      {
        id: 108,
        distance: 4408,
      },
      {
        id: 12,
        distance: 4619,
      },
      {
        id: 100,
        distance: 4675,
      },
      {
        id: 50,
        distance: 4853,
      },
      {
        id: 8,
        distance: 4964,
      },
      {
        id: 94,
        distance: 4964,
      },
      {
        id: 91,
        distance: 5124,
      },
    ],
  },
  {
    id: 131,
    city: 'city131',
    latitude: -38.080033042750244,
    longitude: 27.06004156193987,
    connectedTo: [
      {
        id: 133,
        distance: 617,
      },
      {
        id: 135,
        distance: 3935,
      },
      {
        id: 117,
        distance: 1588,
      },
      {
        id: 9,
        distance: 1605,
      },
      {
        id: 16,
        distance: 2299,
      },
      {
        id: 44,
        distance: 2782,
      },
      {
        id: 65,
        distance: 3244,
      },
      {
        id: 28,
        distance: 3520,
      },
      {
        id: 2,
        distance: 3567,
      },
      {
        id: 81,
        distance: 3585,
      },
      {
        id: 128,
        distance: 3667,
      },
      {
        id: 63,
        distance: 3916,
      },
      {
        id: 112,
        distance: 3967,
      },
      {
        id: 34,
        distance: 3973,
      },
      {
        id: 62,
        distance: 4421,
      },
      {
        id: 89,
        distance: 4776,
      },
      {
        id: 24,
        distance: 4901,
      },
      {
        id: 31,
        distance: 4912,
      },
      {
        id: 60,
        distance: 5235,
      },
      {
        id: 13,
        distance: 5331,
      },
      {
        id: 17,
        distance: 5413,
      },
      {
        id: 18,
        distance: 5414,
      },
      {
        id: 1,
        distance: 5418,
      },
    ],
  },
  {
    id: 132,
    city: 'city132',
    latitude: 74.71167018567115,
    longitude: -107.03025520803916,
    connectedTo: [
      {
        id: 137,
        distance: 1895,
      },
      {
        id: 136,
        distance: 2516,
      },
      {
        id: 26,
        distance: 598,
      },
      {
        id: 104,
        distance: 923,
      },
      {
        id: 25,
        distance: 1227,
      },
      {
        id: 74,
        distance: 1296,
      },
      {
        id: 3,
        distance: 1442,
      },
      {
        id: 88,
        distance: 1828,
      },
      {
        id: 80,
        distance: 1843,
      },
      {
        id: 111,
        distance: 1885,
      },
      {
        id: 37,
        distance: 1923,
      },
      {
        id: 114,
        distance: 2078,
      },
      {
        id: 47,
        distance: 2092,
      },
      {
        id: 113,
        distance: 2096,
      },
      {
        id: 130,
        distance: 2142,
      },
      {
        id: 70,
        distance: 2359,
      },
      {
        id: 48,
        distance: 2541,
      },
      {
        id: 21,
        distance: 2572,
      },
      {
        id: 59,
        distance: 2614,
      },
      {
        id: 61,
        distance: 2881,
      },
      {
        id: 57,
        distance: 2916,
      },
      {
        id: 106,
        distance: 3289,
      },
      {
        id: 91,
        distance: 3477,
      },
      {
        id: 50,
        distance: 3573,
      },
      {
        id: 8,
        distance: 3757,
      },
      {
        id: 15,
        distance: 3980,
      },
      {
        id: 93,
        distance: 4119,
      },
      {
        id: 67,
        distance: 4237,
      },
      {
        id: 95,
        distance: 4270,
      },
      {
        id: 40,
        distance: 4402,
      },
      {
        id: 29,
        distance: 4453,
      },
      {
        id: 129,
        distance: 4521,
      },
      {
        id: 110,
        distance: 4544,
      },
      {
        id: 4,
        distance: 4592,
      },
      {
        id: 107,
        distance: 4651,
      },
      {
        id: 41,
        distance: 4884,
      },
      {
        id: 127,
        distance: 5094,
      },
      {
        id: 94,
        distance: 5192,
      },
    ],
  },
  {
    id: 133,
    city: 'city133',
    latitude: -41.05784775680099,
    longitude: 33.133387299243736,
    connectedTo: [
      {
        id: 135,
        distance: 3402,
      },
      {
        id: 131,
        distance: 617,
      },
      {
        id: 117,
        distance: 1259,
      },
      {
        id: 9,
        distance: 1569,
      },
      {
        id: 16,
        distance: 2573,
      },
      {
        id: 44,
        distance: 2767,
      },
      {
        id: 28,
        distance: 3117,
      },
      {
        id: 34,
        distance: 3538,
      },
      {
        id: 112,
        distance: 3570,
      },
      {
        id: 81,
        distance: 3721,
      },
      {
        id: 65,
        distance: 3736,
      },
      {
        id: 63,
        distance: 3969,
      },
      {
        id: 128,
        distance: 4102,
      },
      {
        id: 2,
        distance: 4161,
      },
      {
        id: 89,
        distance: 4567,
      },
      {
        id: 24,
        distance: 4605,
      },
      {
        id: 62,
        distance: 4623,
      },
      {
        id: 60,
        distance: 4887,
      },
      {
        id: 1,
        distance: 5044,
      },
      {
        id: 124,
        distance: 5179,
      },
      {
        id: 17,
        distance: 5328,
      },
    ],
  },
  {
    id: 134,
    city: 'city134',
    latitude: -14.590450501775706,
    longitude: -24.840535333688564,
    connectedTo: [
      {
        id: 120,
        distance: 1131,
      },
      {
        id: 99,
        distance: 1981,
      },
      {
        id: 79,
        distance: 2356,
      },
      {
        id: 92,
        distance: 2438,
      },
      {
        id: 31,
        distance: 2670,
      },
      {
        id: 65,
        distance: 2764,
      },
      {
        id: 13,
        distance: 2927,
      },
      {
        id: 7,
        distance: 3090,
      },
      {
        id: 77,
        distance: 3278,
      },
      {
        id: 119,
        distance: 3349,
      },
      {
        id: 2,
        distance: 3483,
      },
      {
        id: 54,
        distance: 3826,
      },
      {
        id: 56,
        distance: 4006,
      },
      {
        id: 62,
        distance: 4235,
      },
      {
        id: 116,
        distance: 4395,
      },
      {
        id: 49,
        distance: 4621,
      },
      {
        id: 97,
        distance: 4822,
      },
      {
        id: 128,
        distance: 5328,
      },
    ],
  },
  {
    id: 135,
    city: 'city135',
    latitude: -33.59590530497957,
    longitude: 70.7663532761942,
    connectedTo: [
      {
        id: 24,
        distance: 2360,
      },
      {
        id: 9,
        distance: 3063,
      },
      {
        id: 133,
        distance: 3402,
      },
      {
        id: 117,
        distance: 3828,
      },
      {
        id: 52,
        distance: 3846,
      },
      {
        id: 63,
        distance: 3909,
      },
      {
        id: 131,
        distance: 3935,
      },
      {
        id: 115,
        distance: 4034,
      },
      {
        id: 81,
        distance: 4174,
      },
      {
        id: 16,
        distance: 4193,
      },
      {
        id: 28,
        distance: 4313,
      },
      {
        id: 34,
        distance: 4353,
      },
      {
        id: 22,
        distance: 4433,
      },
      {
        id: 112,
        distance: 4599,
      },
      {
        id: 39,
        distance: 4765,
      },
      {
        id: 18,
        distance: 4797,
      },
      {
        id: 33,
        distance: 4974,
      },
      {
        id: 102,
        distance: 5278,
      },
    ],
  },
  {
    id: 136,
    city: 'city136',
    latitude: 58.93487393475468,
    longitude: -62.39564055204961,
    connectedTo: [
      {
        id: 137,
        distance: 3016,
      },
      {
        id: 111,
        distance: 657,
      },
      {
        id: 21,
        distance: 1171,
      },
      {
        id: 104,
        distance: 1864,
      },
      {
        id: 95,
        distance: 1954,
      },
      {
        id: 67,
        distance: 1955,
      },
      {
        id: 41,
        distance: 2402,
      },
      {
        id: 25,
        distance: 2464,
      },
      {
        id: 132,
        distance: 2516,
      },
      {
        id: 130,
        distance: 2568,
      },
      {
        id: 50,
        distance: 2591,
      },
      {
        id: 74,
        distance: 2776,
      },
      {
        id: 114,
        distance: 2836,
      },
      {
        id: 47,
        distance: 2928,
      },
      {
        id: 26,
        distance: 2945,
      },
      {
        id: 40,
        distance: 3071,
      },
      {
        id: 80,
        distance: 3138,
      },
      {
        id: 59,
        distance: 3377,
      },
      {
        id: 37,
        distance: 3509,
      },
      {
        id: 69,
        distance: 3577,
      },
      {
        id: 88,
        distance: 3601,
      },
      {
        id: 3,
        distance: 3652,
      },
      {
        id: 113,
        distance: 3667,
      },
      {
        id: 90,
        distance: 3691,
      },
      {
        id: 61,
        distance: 3758,
      },
      {
        id: 97,
        distance: 4036,
      },
      {
        id: 106,
        distance: 4092,
      },
      {
        id: 48,
        distance: 4608,
      },
      {
        id: 116,
        distance: 4664,
      },
      {
        id: 70,
        distance: 4871,
      },
      {
        id: 57,
        distance: 4902,
      },
      {
        id: 55,
        distance: 4910,
      },
      {
        id: 127,
        distance: 4936,
      },
      {
        id: 19,
        distance: 5409,
      },
    ],
  },
  {
    id: 137,
    city: 'city137',
    latitude: 83.32854075832142,
    longitude: -13.360326620858274,
    connectedTo: [
      {
        id: 47,
        distance: 300,
      },
      {
        id: 114,
        distance: 369,
      },
      {
        id: 74,
        distance: 602,
      },
      {
        id: 37,
        distance: 610,
      },
      {
        id: 130,
        distance: 688,
      },
      {
        id: 113,
        distance: 712,
      },
      {
        id: 59,
        distance: 725,
      },
      {
        id: 88,
        distance: 825,
      },
      {
        id: 61,
        distance: 997,
      },
      {
        id: 3,
        distance: 1390,
      },
      {
        id: 106,
        distance: 1407,
      },
      {
        id: 104,
        distance: 1458,
      },
      {
        id: 26,
        distance: 1535,
      },
      {
        id: 48,
        distance: 1817,
      },
      {
        id: 132,
        distance: 1895,
      },
      {
        id: 57,
        distance: 2009,
      },
      {
        id: 111,
        distance: 2441,
      },
      {
        id: 70,
        distance: 2994,
      },
      {
        id: 136,
        distance: 3016,
      },
      {
        id: 107,
        distance: 3047,
      },
      {
        id: 25,
        distance: 3077,
      },
      {
        id: 40,
        distance: 3202,
      },
      {
        id: 110,
        distance: 3294,
      },
      {
        id: 21,
        distance: 3731,
      },
      {
        id: 80,
        distance: 3737,
      },
      {
        id: 129,
        distance: 3752,
      },
      {
        id: 67,
        distance: 3919,
      },
      {
        id: 95,
        distance: 3990,
      },
      {
        id: 8,
        distance: 4299,
      },
      {
        id: 12,
        distance: 4307,
      },
      {
        id: 94,
        distance: 4355,
      },
      {
        id: 108,
        distance: 4468,
      },
      {
        id: 91,
        distance: 4524,
      },
      {
        id: 69,
        distance: 4725,
      },
      {
        id: 41,
        distance: 4829,
      },
      {
        id: 50,
        distance: 5059,
      },
      {
        id: 100,
        distance: 5168,
      },
    ],
  },
] as Station[];

export default stationsMock;
