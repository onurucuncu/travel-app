const cardData = [
  {
    ratingValue: 4,
    oldPriceText: "$465.00",
    tourNameText: "Cultural tours",
    currentPriceText: "$634.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Istanbul, Turkey",
    itemText: "5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
    featuredText: null,
    discountText: null,
    card_type: "tour",
  },
  {
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$350.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Stonehenge, Windsor Castle, and Bath from London",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg",
    featuredText: "Featured",
    discountText: "%25",
    card_type: "tour",
  },
  {
    ratingValue: 4.5,
    oldPriceText: "$1,200.00",
    tourNameText: "Multi-Day Tours",
    currentPriceText: "$899.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Amsterdam , Netherlands",
    itemText: "Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/12/Bridge7-300x225.jpg",
    featuredText: null,
    discountText: "%25",
    card_type: "tour",
  },
  {
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$590.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Amsterdam, Netherlands",
    itemText: "NYC One World Observatory Skip-the-Line Ticket",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/city6-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "tour",
  },
  {
    pointNumber: 3,
    ratingValue: 4.4,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Park Avenue Baker Street London",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Africa6-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 4,
    ratingValue: 4.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "New York, United States",
    itemText: "New Road Hotel",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/9.2-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 5,
    ratingValue: 4.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Park Avenue Baker Street London",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Africa6-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 3,
    ratingValue: 4.4,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "New York, United States",
    itemText: "New Road Hotel",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/9.2-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 3,
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$712.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: " Istanbul, Turkey",
    itemText: "Water Activities at Cenang Beach in Langkawi",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/parachut1-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "activity",
  },
  {
    pointNumber: 3,
    ratingValue: 3.4,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$350.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Half-Day Outdoor Rock Climbing Session",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Climbing-1-300x225.jpg",
    featuredText: null,
    discountText: "25",
    card_type: "activity",
  },
  {
    pointNumber: 5,
    ratingValue: 3.4,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$712.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: " Istanbul, Turkey",
    itemText: "Water Activities at Cenang Beach in Langkawi",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/parachut1-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "activity",
  },
  {
    pointNumber: 4,
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$350.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Half-Day Outdoor Rock Climbing Session",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Climbing-1-300x225.jpg",
    featuredText: null,
    discountText: "25",
    card_type: "activity",
  },
  {
    pointNumber: 3,
    currentPriceText: "$845.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Comfortable Office Space",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
    featuredText: "Featured",
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 4,
    currentPriceText: "$1,050.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Sunny, Modern room in Village!",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/villa3-300x225.jpg",
    featuredText: null,
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 3,
    currentPriceText: "$845.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Comfortable Office Space",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
    featuredText: "Featured",
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 5,
    currentPriceText: "$1,050.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Sunny, Modern room in Village!",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/villa3-300x225.jpg",
    featuredText: null,
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 4,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Mercedes-Benz A 200 CDI",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/3ACLASS-02_i_820x550-300x225.webp",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 4,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Audi A3 1.6 TDI S line",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/e1477677e7684fc5b4b0ba31eef62537_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 5,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Mercedes-Benz A 200 CDI",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/3ACLASS-02_i_820x550-300x225.webp",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 3,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Audi A3 1.6 TDI S line",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/e1477677e7684fc5b4b0ba31eef62537_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 4.6,
    ratingValue: 5,
    currentPriceText: "$350.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Sunseeker Flybridge",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img6-3-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },
  {
    pointNumber: 4,
    ratingValue: 5,
    currentPriceText: "$599.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Aquavita",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/06/Mengi_yay_NB_100_4_1500x705px_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },
  {
    pointNumber: 5,
    ratingValue: 4,
    currentPriceText: "$350.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Sunseeker Flybridge",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img6-3-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },
  {
    pointNumber: 3,
    ratingValue: 5,
    currentPriceText: "$599.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Aquavita",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/06/Mengi_yay_NB_100_4_1500x705px_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },
  
  {
    ratingValue: 4,
    oldPriceText: "$465.00",
    tourNameText: "Cultural tours",
    currentPriceText: "$634.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Istanbul, Turkey",
    itemText: "5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
    featuredText: null,
    discountText: null,
    card_type: "tour",
  },
  {
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$350.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Stonehenge, Windsor Castle, and Bath from London",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg",
    featuredText: "Featured",
    discountText: "%25",
    card_type: "tour",
  },
  {
    ratingValue: 4.5,
    oldPriceText: "$1,200.00",
    tourNameText: "Multi-Day Tours",
    currentPriceText: "$899.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Amsterdam , Netherlands",
    itemText: "Bosphorus Strait and Black Sea Half-Day Cruise from Istanbul",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/12/Bridge7-300x225.jpg",
    featuredText: null,
    discountText: "%25",
    card_type: "tour",
  },
  {
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$590.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Amsterdam, Netherlands",
    itemText: "NYC One World Observatory Skip-the-Line Ticket",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/city6-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "tour",
  },
  {
    pointNumber: 3,
    ratingValue: 4.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Park Avenue Baker Street London",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Africa6-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 4,
    ratingValue: 4.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "New York, United States",
    itemText: "New Road Hotel",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/9.2-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 5,
    ratingValue: 4.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Park Avenue Baker Street London",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Africa6-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 3,
    ratingValue: 4.5,
    oldPriceText: "$465.00",
    tourNameText: "Cultural Tours",
    currentPriceText: "$480.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "New York, United States",
    itemText: "New Road Hotel",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/9.2-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "hotel",
  },
  {
    pointNumber: 3,
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$712.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: " Istanbul, Turkey",
    itemText: "Water Activities at Cenang Beach in Langkawi",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/parachut1-300x225.jpg",
    featuredText: null,
    discountText: "25",
    card_type: "activity",
  },
  {
    pointNumber: 3,
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$350.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Half-Day Outdoor Rock Climbing Session",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Climbing-1-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "activity",
  },
  {
    pointNumber: 5,
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$712.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: " Istanbul, Turkey",
    itemText: "Water Activities at Cenang Beach in Langkawi",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/parachut1-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "activity",
  },
  {
    pointNumber: 5,
    ratingValue: 3.5,
    oldPriceText: "$465.00",
    tourNameText: "Atraction Tickets",
    currentPriceText: "$350.00",
    reviewText: "1",
    timeText: "3 hours 45 minutes",
    locationText: "Greater London, United Kingdom",
    itemText: "Half-Day Outdoor Rock Climbing Session",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Climbing-1-300x225.jpg",
    featuredText: null,
    discountText: null,
    card_type: "activity",
  },
  {
    pointNumber: 3,
    currentPriceText: "$845.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Comfortable Office Space",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
    featuredText: "Featured",
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 4,
    currentPriceText: "$1,050.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Sunny, Modern room in Village!",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/villa3-300x225.jpg",
    featuredText: null,
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 3,
    currentPriceText: "$845.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Comfortable Office Space",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
    featuredText: "Featured",
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 5,
    currentPriceText: "$1,050.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Sunny, Modern room in Village!",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/villa3-300x225.jpg",
    featuredText: null,
    discountText: null,
    area: 4800,
    room: 4,
    shower: 2,
    bed: 6,
    card_type: "rental",
  },
  {
    pointNumber: 4,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Mercedes-Benz A 200 CDI",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/3ACLASS-02_i_820x550-300x225.webp",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 4,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Audi A3 1.6 TDI S line",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/e1477677e7684fc5b4b0ba31eef62537_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 5,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Mercedes-Benz A 200 CDI",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/3ACLASS-02_i_820x550-300x225.webp",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 3,
    currentPriceText: "$899.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Audi A3 1.6 TDI S line",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/e1477677e7684fc5b4b0ba31eef62537_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    range: 49993,
    fuel: "Diesel",
    gear: "Automatic",
    model: 2022,
    card_type: "car",
  },
  {
    pointNumber: 5,
    ratingValue: 5,
    currentPriceText: "$350.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Sunseeker Flybridge",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img6-3-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },
  {
    pointNumber: 4,
    ratingValue: 5,
    currentPriceText: "$599.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Aquavita",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/06/Mengi_yay_NB_100_4_1500x705px_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },
  {
    pointNumber: 4,
    ratingValue: 4,
    currentPriceText: "$350.00",
    reviewText: "1",
    locationText: "Greater London, United Kingdom",
    itemText: "Sunseeker Flybridge",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img6-3-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },
  {
    pointNumber: 5,
    ratingValue: 5,
    currentPriceText: "$599.00",
    reviewText: "1",
    locationText: "Istanbul, Turkey",
    itemText: "Aquavita",
    imageUrl:
      "https://mytravel.madrasthemes.com/wp-content/uploads/2022/06/Mengi_yay_NB_100_4_1500x705px_820x550-300x225.jpeg",
    featuredText: null,
    discountText: null,
    longiutude: 30.53,
    speed: 16,
    person: 3,
    bed: 5,
    card_type: "yatch",
  },

];

export default cardData;
