const db = require('../');
const { Comments, ProductInfo } = require('../models');

function createProductInfo(prodId) {
  Comments.aggregate([
    {
      $match: { prodId }
    },
    {
      $group: {
        _id: null,
        prodId: { $first: "$prodId" },
        avgRating: { $avg: "$prodRating" },
        numRatings: { $sum: 1 },
        recommendCount: { 
          $sum: { 
            $cond: 
            [{ $eq: ["$recommend", "true"]}, 1, 0]
          }
        },
        num1star: { 
          $sum: { 
            $cond: 
            [{ $eq: ["$prodRating", 1]}, 1, 0]
          }
        },
        num2star: { 
          $sum: { 
            $cond: 
            [{ $eq: ["$prodRating", 2]}, 1, 0]
          }
        },
        num3star: { 
          $sum: { 
            $cond: 
            [{ $eq: ["$prodRating", 3]}, 1, 0]
          }
        },
        num4star: { 
          $sum: { 
            $cond: 
            [{ $eq: ["$prodRating", 4]}, 1, 0]
          }
        },
        num5star: { 
          $sum: { 
            $cond: 
            [{ $eq: ["$prodRating", 5]}, 1, 0]
          }
        },
        avgSize: { $avg: "$size" },
        avgWidth: { $avg: "$width" },
        avgComfort: { $avg: "$comfort" },
        avgQuality: { $avg: "$quality" }
      }
    }
  ], 
  (err, results) => {
    if (err) console.error(err);
    else {
      ProductInfo.create(results, (err, info) => {
        if (err) console.error(err);
        else (console.log(`created info for id: ${prodId}`));
      })
    };
  })
}

for (let i = 1; i <= 1000; i++) {
  createProductInfo(i);
}