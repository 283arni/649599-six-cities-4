import React, {PureComponent} from 'react';


const withSorting = (Component) => {
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        viewSort: false
      };

      this.handleSortViewClick = this.handleSortViewClick.bind(this);
    }

    handleSortViewClick() {
      this.setState({
        viewSort: !this.state.viewSort,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          viewSort={this.state.viewSort}
          onSortClick={this.handleSortViewClick}
        />
      );
    }
  }

  return WithSorting;
};

export default withSorting;
