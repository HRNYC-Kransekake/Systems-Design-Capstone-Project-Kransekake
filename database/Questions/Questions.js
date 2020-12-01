const Questions_Answers = new Schema({

  // product will contain products id and it's associated questions
  product: {
    product_id: Number,
    question_id: Number,
  },

  // each question will contain it's individual question ids, it's parts, and id of answers associated with it
  questions: {
    question_id: Number,
    question_body: String,
    question_date: String,
    asker_name: String,
    helpfulness: Number,
    reported: Number,
    answer_id: Number,
  },

  // each answer will contain it's individual answer ids, it's parts, and id of photos associated with it
  answers: {
    answer_id: Number,
    answer_body: String,
    answer_date: String,
    answer_name: String,
    helpfulness: Number,
    reported: Number,
    photo_id: Number,
  },
  
  // each photo will contain it's individual photo id, and strings of it's urls
  photos: {
    photo_id: Number,
    thumbnail_url: String,
    url: String,
  }
});