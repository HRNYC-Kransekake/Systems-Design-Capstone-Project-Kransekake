const router = require('express').Router();
const QuestionsController = require('../controllers/Questions/questions-controller.js');
const ReviewsController = require('../controllers/Reviews/reviews-controller.js');

// routing for Questions & Answers
router.get('/qa/:product_id', QuestionsController.getQuestions);
router.get('/qa/:question_id/answers', QuestionsController.getAnswers);
router.post('/qa/:product_id', QuestionsController.postQuestion);
router.post('/qa/:question_id/answers', QuestionsController.postAnswer);
router.put('/qa/question/:question_id/helpful', QuestionsController.helpfulQuestion);
router.put('/qa/question/:question_id/report', QuestionsController.reportQuestion);
router.put('/qa/answer/:answer_id/helpful', QuestionsController.helpfulAnswer);
router.put('/qa/answer/:answer_id/report', QuestionsController.reportAnswer);

router.get('/loaderio-6be18468164873050a640656d167a97f/', QuestionsController.loader);

// routing for Reviews
// postman params acting weird, for testing purpse, I had to use ? instead of :.
router.get('/reviews/?', ReviewsController.getAll);
router.get('/reviews/meta/?', ReviewsController.getMeta);
router.post('/reviews/?', ReviewsController.createRe);
router.put('/reviews/:review_id/helpful', ReviewsController.postHelpful);
router.put('/reviews/:review_id/report', ReviewsController.postReport);

module.exports = router;
