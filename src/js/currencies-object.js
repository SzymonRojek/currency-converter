
const currenciesObject = {  
  PL  : { GBP : 0.18816, 
          EUR : 0.21758, 
          US  : 0.26389, 
          RUB : 19.7077, 
          ESP : 36.3210, 
          ITL : 422.675, 
          DEM : 0.42695,
          CZK : 5.65865,
          SKK : 6.57631,
          HUF : 79.0143,
          ALL : 26.6228,
          DKK : 1.62299,
        },
  GBP : { PL  : 5.21899, 
          EUR : 1.14832, 
          US  : 1.38992, 
          RUB : 103.800, 
          ESP : 191.300, 
          ITL : 2226.20, 
          DEM : 2.24869,
          CZK : 29.8041,
          SKK : 34.6369,
          HUF : 416.168,
          ALL : 140.222,
          DKK : 1.62299,
        },
  EUR : { PL  : 4.56386, 
          GBP : 0.86851, 
          us  : 1.20878, 
          RUB : 90.2726, 
          ESP : 166.386, 
          ITL : 1936.27, 
          DEM : 1.95583,
          CZK : 25.9207,
          SKK : 30.1260,
          HUF : 361.979,
          ALL : 121.948,
          DKK : 7.43527,
        },
  US  : { PL  : 3.78578, 
          GBP : 0.71937, 
          EUR : 0.82718, 
          RUB : 74.6808, 
          ESP : 137.632, 
          ITL : 1601.65, 
          DEM : 1.61783,
          CZK : 21.4431,
          SKK : 24.9197,
          HUF : 299.419,
          ALL : 100.885,
          DKK : 6.15019,
        },
  RUB : { PL  : 0.05066, 
          GBP : 0.00963, 
          EUR : 0.01107, 
          US  : 0.01338, 
          ESP : 1.84161, 
          ITL : 21.4312, 
          DEM : 0.02165,
          CZK : 0.28692,
          SKK : 0.33344,
          HUF : 4.00644,
          ALL : 1.34992,
          DKK : 0.08229,
        },
  ESP : { PL  : 0.02750, 
          GBP : 0.00523, 
          EUR : 0.00601, 
          US  : 0.00726, 
          RUB : 0.54255, 
          ITL : 11.6372, 
          DEM : 0.01175,
          CZK : 0.15579,
          SKK : 0.18106,
          HUF : 2.17554,
          ALL : 0.73292,
          DKK : 0.04469,
        },
  ITL : { PL  : 0.00236, 
          GBP : 0.00045, 
          EUR : 0.00052, 
          US  : 0.00062, 
          RUB : 0.04662, 
          ESP : 0.08593, 
          DEM : 0.00101,
          CZK : 0.01339,
          SKK : 0.01556,
          HUF : 0.18695,
          ALL : 0.06298,
          DKK : 0.00384,
        },
  DEM : { PL  : 2.33983, 
          GBP : 0.44461, 
          EUR : 0.51129, 
          US  : 0.61804, 
          RUB : 46.1556, 
          ESP : 85.0718, 
          ITL : 989.999,
          CZK : 13.2530,
          SKK : 15.4032,
          HUF :	185.077,
          ALL : 0.04988,
          DKK : 3.80159,
        },
  CZK : { PL  : 0.17644,
          GBP : 0.03353,
          EUR : 0.03855,
          US  : 0.04660,
          RUB : 3.48047,
          ESP : 6.41456,
          ITL : 74.6476,
          DEM : 0.07540,
          SKK : 1.16143,
          HUF : 13.9543,
          ALL : 4.70172,
          DKK : 0.28663,
        },
  SKK : { PL  : 0.15191,
          GBP : 0.02886,
          EUR : 0.03319,
          US  : 0.04012,
          RUB : 2.99650,
          ESP : 5.52300,
          ITL : 64.2724,
          DEM : 0.06492,
          CZK : 0.86041,
          HUF : 12.0155,
          ALL : 4.04793,
          DKK : 0.24681,
        },
  HUF : { PL  : 0.01263,
          GBP : 0.00240,
          EUR : 0.00276,
          US  : 0.00334,
          RUB : 0.00598,
          ESP : 0.45923,
          ITL : 5.34412,
          DEM : 0.00540,
          CZK : 0.07154,
          SKK : 0.08315,
          ALL : 0.33657,
          DKK : 0.02052,
        },
  ALL:  { PL  : 0.03678,
          GBP : 0.00699,
          EUR : 0.00804,
          US  : 0.00972,
          RUB : 0.72561,
          ESP : 0.72561,
          itl : 15.5618,
          DEM : 19.1667,
          CZK : 0.20834,
          SKK : 0.24212,
          HUF : 2.90919,
          DKK : 0.05976,
        },
  DKK : {
          PL  : 0.61541,
          GBP : 0.11694,
          EUR : 0.13447,
          US  : 0.16256,
          RUB : 12.1400,
          ESP : 22.3741,
          ITL : 260.373,
          DEM : 0.26300,
          CZK : 3.48575,
          SKK : 4.05108,
          HUF : 48.6731,
          ALL : 16.3997,
         },                         
}

export default currenciesObject;