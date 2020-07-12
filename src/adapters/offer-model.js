export default class OfferModel {
  constructor(data) {
    this.amountBedrooms = data.bedrooms;
    this.city = {
      name: data.city.name,
      coords: [data.city.location.latitude, data.city.location.longitude],
      zoom: data.city.location.zoom
    };
    this.description = data.description;
    this.id = data.id;
    this.things = data.goods;
    this.owner = {
      avatar: data.host.avatar_url,
      name: data.host.name,
      super: data.host.is_pro,
      id: data.host.id
    };
    this.photos = data.images;
    this.favorite = data.is_favorite;
    this.premium = data.is_premium;
    this.coords = {
      target: [data.location.latitude, data.location.longitude],
      zoom: data.location.zoom
    };
    this.maxGustes = data.max_adults;
    this.photo = data.preview_image;
    this.price = data.price;
    this.rating = data.rating;
    this.title = data.title;
    this.type = data.type;
  }

  static parseOffer(data) {
    return new OfferModel(data);
  }

  static parseOffers(data) {
    return data.map(OfferModel.parseOffer);
  }
}
