import React from 'react';
import './styles.scss';

class Overview extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='overviewContainer'>
        <div className='headerContainer'>
          HEADER CONTAINER
        </div>
        <div className='siteAnnouncementContainer'>
            SITE ANNOUNCEMENT CONTAINER
        </div>
        <div className='imageGalleryContainer'>
          <div className='differentViewContainer'>
            Views
          </div>
          <div className='leftArrowContainer'>
            Left Arrow
          </div>
          <div className='mainImageContainer'>
            Main Image
          </div>
          <div className='rightArrowContainer'>
            Right Arrow
          </div>
        </div>
        <div className='productDetailsContainer'>
          PRODUCT DETAILS CONTAINER
        </div>
        <div className='ratingCategoryProductNamePriceContainer'>
          rating<br />category<br/>Product Name<br/>Price
        </div>
        <div className='styleContainer'>
          Styles
        </div>
        <div className='sizeQuantityAddContainer'>
          Size Quantity<br />Add To Cart
        </div>
        <div className='otherStuffContainer'>
          Other Stuff
        </div>
  
      </div>
    );
  }
}

export default Overview;