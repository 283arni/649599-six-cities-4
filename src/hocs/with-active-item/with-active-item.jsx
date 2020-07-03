import React, {PureComponent} from 'react';


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
      };

      this.handleActiveChange = this.handleActiveChange.bind(this);
    }

    handleActiveChange(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveChange={this.handleActiveChange}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
