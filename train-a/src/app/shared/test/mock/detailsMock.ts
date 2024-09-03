const detailsMock = {
  routeId: 1,
  rideId: 1,
  path: [
    93, 21, 4, 98, 103, 123, 89, 118, 39, 28, 135, 102, 51, 32, 5, 94, 59, 95, 69, 49, 18, 63, 81, 31, 100, 108, 74, 113, 8, 83,
  ],
  carriages: [
    'carriage5',
    'carriage1',
    'carriage5',
    'carriage1',
    'carriage1',
    'carriage1',
    'carriage1',
    'carriage5',
    'carriage4',
    'carriage1',
    'carriage3',
    'carriage2',
    'carriage2',
    'carriage3',
    'carriage2',
  ],
  schedule: {
    segments: [
      {
        time: ['2024-09-01T16:11:53.894Z', '2024-09-05T05:35:53.894Z'],
        price: {
          carriage5: 1269,
          carriage1: 938,
          carriage4: 420,
          carriage3: 1229,
          carriage2: 1056,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-09-05T06:08:53.894Z', '2024-09-08T23:27:53.894Z'],
        price: {
          carriage5: 1401,
          carriage1: 2457,
          carriage4: 577,
          carriage3: 1030,
          carriage2: 1541,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-08T23:49:53.894Z', '2024-09-12T04:09:53.894Z'],
        price: {
          carriage5: 817,
          carriage1: 1122,
          carriage4: 2218,
          carriage3: 1281,
          carriage2: 1062,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-12T05:04:53.894Z', '2024-09-14T16:57:53.894Z'],
        price: {
          carriage5: 2474,
          carriage1: 2367,
          carriage4: 2114,
          carriage3: 704,
          carriage2: 225,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-14T17:35:53.894Z', '2024-09-17T07:13:53.894Z'],
        price: {
          carriage5: 1729,
          carriage1: 1974,
          carriage4: 381,
          carriage3: 1759,
          carriage2: 321,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-17T07:42:53.894Z', '2024-09-20T03:54:53.894Z'],
        price: {
          carriage5: 1472,
          carriage1: 1300,
          carriage4: 1921,
          carriage3: 2274,
          carriage2: 913,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-20T04:07:53.894Z', '2024-09-22T02:58:53.894Z'],
        price: {
          carriage5: 951,
          carriage1: 1432,
          carriage4: 695,
          carriage3: 708,
          carriage2: 1445,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-22T03:33:53.894Z', '2024-09-25T14:39:53.894Z'],
        price: {
          carriage5: 1013,
          carriage1: 898,
          carriage4: 1169,
          carriage3: 1707,
          carriage2: 462,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-25T14:55:53.894Z', '2024-09-27T16:54:53.894Z'],
        price: {
          carriage5: 1220,
          carriage1: 1747,
          carriage4: 335,
          carriage3: 1552,
          carriage2: 911,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-27T17:00:53.894Z', '2024-09-30T16:53:53.894Z'],
        price: {
          carriage5: 1174,
          carriage1: 1879,
          carriage4: 534,
          carriage3: 123,
          carriage2: 2138,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-09-30T17:32:53.894Z', '2024-10-04T09:30:53.894Z'],
        price: {
          carriage5: 1889,
          carriage1: 1675,
          carriage4: 2258,
          carriage3: 150,
          carriage2: 1503,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-04T09:40:53.894Z', '2024-10-07T16:18:53.894Z'],
        price: {
          carriage5: 946,
          carriage1: 2168,
          carriage4: 1539,
          carriage3: 632,
          carriage2: 1588,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-07T17:00:53.894Z', '2024-10-08T16:44:53.894Z'],
        price: {
          carriage5: 1018,
          carriage1: 1592,
          carriage4: 1368,
          carriage3: 884,
          carriage2: 1737,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-08T16:57:53.894Z', '2024-10-11T02:55:53.894Z'],
        price: {
          carriage5: 2214,
          carriage1: 2103,
          carriage4: 444,
          carriage3: 1264,
          carriage2: 695,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-11T03:10:53.894Z', '2024-10-14T07:11:53.894Z'],
        price: {
          carriage5: 2107,
          carriage1: 517,
          carriage4: 864,
          carriage3: 2318,
          carriage2: 916,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-14T07:51:53.894Z', '2024-10-17T07:19:53.894Z'],
        price: {
          carriage5: 2369,
          carriage1: 726,
          carriage4: 107,
          carriage3: 561,
          carriage2: 874,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-17T08:00:53.894Z', '2024-10-20T02:22:53.893Z'],
        price: {
          carriage5: 127,
          carriage1: 253,
          carriage4: 251,
          carriage3: 2398,
          carriage2: 394,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-20T03:15:53.893Z', '2024-10-21T07:49:53.893Z'],
        price: {
          carriage5: 2432,
          carriage1: 2344,
          carriage4: 953,
          carriage3: 2415,
          carriage2: 1482,
        },
        occupiedSeats: [160, 160],
      },
      {
        time: ['2024-10-21T08:42:53.893Z', '2024-10-24T01:28:53.893Z'],
        price: {
          carriage5: 114,
          carriage1: 1952,
          carriage4: 347,
          carriage3: 307,
          carriage2: 2109,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-10-24T01:44:53.893Z', '2024-10-27T13:37:53.893Z'],
        price: {
          carriage5: 144,
          carriage1: 272,
          carriage4: 124,
          carriage3: 215,
          carriage2: 952,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-10-27T14:03:53.893Z', '2024-10-28T15:03:53.893Z'],
        price: {
          carriage5: 2074,
          carriage1: 476,
          carriage4: 2095,
          carriage3: 2017,
          carriage2: 2028,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-10-28T15:35:53.893Z', '2024-10-29T01:01:53.893Z'],
        price: {
          carriage5: 182,
          carriage1: 1177,
          carriage4: 1219,
          carriage3: 1194,
          carriage2: 1169,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-10-29T01:24:53.893Z', '2024-11-01T10:42:53.893Z'],
        price: {
          carriage5: 1784,
          carriage1: 1269,
          carriage4: 2262,
          carriage3: 508,
          carriage2: 899,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-11-01T11:31:53.893Z', '2024-11-04T20:03:53.893Z'],
        price: {
          carriage5: 2333,
          carriage1: 2421,
          carriage4: 1458,
          carriage3: 858,
          carriage2: 2214,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-11-04T21:02:53.893Z', '2024-11-06T23:50:53.893Z'],
        price: {
          carriage5: 1235,
          carriage1: 1142,
          carriage4: 1474,
          carriage3: 594,
          carriage2: 1542,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-11-07T00:14:53.893Z', '2024-11-10T12:39:53.893Z'],
        price: {
          carriage5: 769,
          carriage1: 1432,
          carriage4: 210,
          carriage3: 1130,
          carriage2: 323,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-11-10T12:46:53.893Z', '2024-11-11T04:36:53.893Z'],
        price: {
          carriage5: 1928,
          carriage1: 2154,
          carriage4: 767,
          carriage3: 1253,
          carriage2: 877,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-11-11T05:29:53.893Z', '2024-11-13T19:37:53.893Z'],
        price: {
          carriage5: 2023,
          carriage1: 258,
          carriage4: 2184,
          carriage3: 1528,
          carriage2: 621,
        },
        occupiedSeats: [],
      },
      {
        time: ['2024-11-13T20:01:53.893Z', '2024-11-15T17:25:53.893Z'],
        price: {
          carriage5: 562,
          carriage1: 1495,
          carriage4: 700,
          carriage3: 553,
          carriage2: 190,
        },
        occupiedSeats: [],
      },
    ],
  },
};
const from = 21;
const to = 69;
const rideId = 1;

export { from, rideId, to };

export default detailsMock;
