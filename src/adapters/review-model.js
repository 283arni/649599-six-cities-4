export default class ReviewModel {
  constructor(data) {
    this.id = data.id;
    this.user = {
      avatar: data.user.avatar_url,
      id: data.user.id,
      super: data.user.is_pro,
      name: data.user.name
    };
    this.rating = data.rating;
    this.date = data.date;
    this.text = data.comment;
  }

  static parseReview(data) {
    return new ReviewModel(data);
  }

  static parseReviews(data) {
    return data.map(ReviewModel.parseReview);
  }
}
