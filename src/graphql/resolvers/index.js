import {
  getAllUsersService,
  reviewsOfUsers,
  getResourceDetails as userDetails,
} from '../../services/users';
import { getAllSellersService, getProductsOfSeller } from '../../services/sellers';
import {
  getAllProductsService,
  getResourceDetails as productDetails,
  getSellerOfProduct,
} from '../../services/products';
import { getAllReviewsService } from '../../services/reviews';

export default {
  User: {
    async reviews(user) {
      const reviews = await reviewsOfUsers({ userId: user.id });
      return reviews;
    },
  },
  Seller: {
    async products(seller, { limit, offset }) {
      const products = await getProductsOfSeller({ sellerId: seller.id, limit, offset });
      return products;
    },
  },
  Product: {
    async seller(product) {
      const seller = await getSellerOfProduct({ productId: product.id });
      return seller;
    },
  },
  Review: {
    async user(review) {
      const user = await userDetails({ userId: review.userId });
      return user;
    },
    async product(review) {
      const user = await productDetails({ productId: review.productId });
      return user;
    },
  },
  Query: {
    async users(root, { limit, offset, name }) {
      const listOfUsers = await getAllUsersService({ limit, offset, search: name });
      return listOfUsers;
    },
    async sellers(root, { limit, offset }) {
      const listOfSellers = await getAllSellersService({ limit, offset });
      return listOfSellers;
    },
    async products(root, { limit, offset }) {
      const listOfProducts = await getAllProductsService({ limit, offset });
      return listOfProducts;
    },
    async reviews(root, { limit, offset }) {
      const listOfReviews = await getAllReviewsService({ limit, offset });
      return listOfReviews;
    },
  },
};
