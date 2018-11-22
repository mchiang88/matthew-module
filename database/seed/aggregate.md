db.comments.aggregate([
  {
    $match: {prodId: 2}
  },
  {
    $group: {
      _id: null,
      prodId: {$first: "$prodId"},
      totalCount: { $sum: 1 },
      recommendCount: {$sum: {$cond:[ {$eq: ["$recommend", "true"]}, 1, 0]}},
      avgProdRating: { $avg: "$prodRating"}
    }
  },
  {
    $project: {
      _id: 0,
      prodId: 1,
      totalCount: 1,
      avgProdRating: 1,
      recommendPercent: { $multiply: [{$divide: ["$recommendCount", "$totalCount"]},100]}
    }
  }
])

db.comments.aggregate([
  {
    $match: { prodId: 158 }
  },
  {
    $group: {
      _id: 0,
      prodId: { $first: "$prodId" },
      avgRating: { $avg: "$prodRating" },
      totalCount: { $sum: 1 },
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
])