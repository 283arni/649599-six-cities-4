import * as React from 'react';
import {offerType} from '../../types/offers';
import {messageType} from '../../types/message';
import {Validation, ResponseStatus} from '../../const';


type Review = {
  comment: string;
  rating: number;
}

interface State {
  review: string;
  rating: number;
  isActive: boolean;
}

interface Props {
  offer: offerType;
  onReviewSubmit: (id: number, review: Review) => void;
  messageServer: messageType;
  isBlocked: boolean;
}

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        review: ``,
        rating: 0,
        isActive: false
      };

      this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
      this.handleReviewFormChange = this.handleReviewFormChange.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.messageServer !== this.props.messageServer && this.props.messageServer.status === ResponseStatus.SUCCESS) {
        this.reset();
      }
    }

    handleReviewSubmit(evt) {
      const {offer, onReviewSubmit} = this.props;

      evt.preventDefault();

      onReviewSubmit(offer.id, {
        comment: this.state.review,
        rating: +this.state.rating
      });

    }

    handleReviewFormChange(evt) {
      const {name, value} = evt.target;

      this.setState({
        [name]: value
      } as Pick<State, keyof State>, this.validateForm);
    }

    validateForm() {
      const {rating, review} = this.state;

      const reviewIsValid = review.length >= Validation.MIN_LENGTH_REVIEW && review.length <= Validation.MAX_LENGTH_REVIEW;
      const isActive = reviewIsValid && rating > Validation.NO_STAR;

      this.setState({isActive});
    }

    reset() {
      this.setState({
        review: ``,
        rating: 0
      }, this.validateForm);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onReviewFormChange={this.handleReviewFormChange}
          onSubmit={this.handleReviewSubmit}
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
